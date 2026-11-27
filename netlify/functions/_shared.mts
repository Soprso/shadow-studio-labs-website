import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto'

export type ReportStatus = 'NEW' | 'REVIEWING' | 'RESOLVED' | 'DISMISSED'

export const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
  'Cache-Control': 'no-store',
}

export function json(status: number, body: unknown, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders, ...extraHeaders },
  })
}

export function optionsResponse() {
  return new Response(null, { status: 204, headers: corsHeaders })
}

export function getEnv(name: string): string {
  return (process.env[name] || '').trim()
}

export function requireSupabaseEnv() {
  const url = getEnv('SUPABASE_URL').replace(/\/$/, '')
  const serviceRole = getEnv('SUPABASE_SERVICE_ROLE_KEY')
  if (!url || !serviceRole) {
    throw new Error('Server reporting backend is not configured.')
  }
  return { url, serviceRole }
}

export async function supabaseRequest(path: string, init: RequestInit = {}) {
  const { url, serviceRole } = requireSupabaseEnv()
  const headers = new Headers(init.headers || {})
  headers.set('apikey', serviceRole)
  headers.set('Authorization', `Bearer ${serviceRole}`)
  if (!headers.has('Content-Type') && init.body) headers.set('Content-Type', 'application/json')
  return fetch(`${url}/rest/v1/${path}`, { ...init, headers })
}

export function cleanText(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  // Strip control chars except newlines/tabs, trim, and bound length.
  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim()
  return cleaned.length > max ? cleaned.slice(0, max) : cleaned
}

export function isValidIdempotencyKey(value: string): boolean {
  return /^[A-Za-z0-9._:-]{8,120}$/.test(value)
}

export function isValidCategory(value: string): boolean {
  return /^[A-Za-z0-9 /_-]{1,80}$/.test(value)
}

export function isValidStatus(value: string): value is ReportStatus {
  return value === 'NEW' || value === 'REVIEWING' || value === 'RESOLVED' || value === 'DISMISSED'
}

export function makeReportReference(): string {
  const d = new Date()
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  const rand = randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase()
  return `OAI-${y}${m}${day}-${rand}`
}

export function getClientIp(req: Request): string {
  const h = req.headers
  return (
    h.get('x-nf-client-connection-ip') ||
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    h.get('client-ip') ||
    'unknown'
  )
}

// Best-effort in-memory rate limiting (per function instance). Complements any
// platform/network protections; limits abuse without requiring extra services.
const buckets = new Map<string, { count: number; resetAt: number }>()
export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean; retryAfterSec: number } {
  const now = Date.now()
  const cur = buckets.get(key)
  if (!cur || now > cur.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfterSec: 0 }
  }
  if (cur.count >= limit) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((cur.resetAt - now) / 1000)) }
  }
  cur.count += 1
  return { ok: true, retryAfterSec: 0 }
}

function b64url(input: Buffer | string): string {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input)
  return buf.toString('base64url')
}

function safeEqual(a: string, b: string): boolean {
  const aa = Buffer.from(a)
  const bb = Buffer.from(b)
  if (aa.length !== bb.length) return false
  return timingSafeEqual(aa, bb)
}

export function signSession(payload: Record<string, string | number>, secret: string): string {
  const body = b64url(JSON.stringify(payload))
  const sig = b64url(createHmac('sha256', secret).update(body).digest())
  return `${body}.${sig}`
}

export function verifySession(token: string, secret: string): Record<string, unknown> | null {
  const [body, sig] = token.split('.')
  if (!body || !sig) return null
  const expected = b64url(createHmac('sha256', secret).update(body).digest())
  if (!safeEqual(sig, expected)) return null
  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as Record<string, unknown>
    const exp = typeof payload.exp === 'number' ? payload.exp : 0
    if (Date.now() > exp) return null
    return payload
  } catch {
    return null
  }
}

export function getCookie(req: Request, name: string): string | null {
  const cookie = req.headers.get('cookie') || ''
  for (const part of cookie.split(';')) {
    const [k, ...rest] = part.trim().split('=')
    if (k === name) return decodeURIComponent(rest.join('=') || '')
  }
  return null
}

export function sessionCookie(token: string, maxAgeSec: number): string {
  return `ssl_dash=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAgeSec}`
}

export function clearSessionCookie(): string {
  return 'ssl_dash=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0'
}

export function requireDashboardSession(req: Request): { ok: true } | { ok: false; response: Response } {
  const secret = getEnv('DASHBOARD_SESSION_SECRET')
  if (!secret) {
    return { ok: false, response: json(503, { error: 'Dashboard is not configured.' }) }
  }
  const token = getCookie(req, 'ssl_dash')
  const payload = token ? verifySession(token, secret) : null
  if (!payload || payload.role !== 'developer') {
    return { ok: false, response: json(401, { error: 'Authentication required.' }) }
  }
  return { ok: true }
}

export async function safeJson<T = any>(req: Request): Promise<T | null> {
  try {
    return (await req.json()) as T
  } catch {
    return null
  }
}
