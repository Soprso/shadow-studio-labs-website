import {
  clearSessionCookie,
  getEnv,
  json,
  optionsResponse,
  rateLimit,
  requireDashboardSession,
  safeJson,
  sessionCookie,
  signSession,
  getClientIp,
} from './_shared.mts'
import { timingSafeEqual } from 'node:crypto'

function safeEqualStr(a: string, b: string): boolean {
  const aa = Buffer.from(a)
  const bb = Buffer.from(b)
  if (aa.length !== bb.length || aa.length === 0) return false
  return timingSafeEqual(aa, bb)
}

export default async (req: Request) => {
  if (req.method === 'OPTIONS') return optionsResponse()

  const url = new URL(req.url)
  const action = url.searchParams.get('action') || ''

  if (req.method === 'GET' && action === 'session') {
    const auth = requireDashboardSession(req)
    if (!auth.ok) return json(200, { authenticated: false })
    return json(200, { authenticated: true })
  }

  if (req.method === 'POST' && action === 'logout') {
    return json(200, { ok: true }, { 'Set-Cookie': clearSessionCookie() })
  }

  if (req.method !== 'POST' || action !== 'login') {
    return json(405, { error: 'Method not allowed.' })
  }

  const ip = getClientIp(req)
  const rl = rateLimit(`dash-login:${ip}`, 10, 15 * 60 * 1000)
  if (!rl.ok) {
    return json(429, { error: 'Too many attempts. Please try again later.' })
  }

  const secret = getEnv('DASHBOARD_SESSION_SECRET')
  const user = getEnv('DASHBOARD_USERNAME')
  const pass = getEnv('DASHBOARD_PASSWORD')
  if (!secret || !user || !pass) {
    return json(503, { error: 'Dashboard is not configured.' })
  }

  const body = await safeJson<{ username?: unknown; password?: unknown }>(req)
  const username = typeof body?.username === 'string' ? body.username : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!safeEqualStr(username, user) || !safeEqualStr(password, pass)) {
    return json(401, { error: 'Invalid credentials.' })
  }

  const maxAge = 8 * 60 * 60
  const token = signSession({ role: 'developer', exp: Date.now() + maxAge * 1000 }, secret)
  return json(200, { ok: true, authenticated: true }, { 'Set-Cookie': sessionCookie(token, maxAge) })
}

export const config = {
  path: '/api/dashboard/auth',
}
