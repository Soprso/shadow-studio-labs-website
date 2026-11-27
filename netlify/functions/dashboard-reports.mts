import {
  cleanText,
  isValidStatus,
  json,
  optionsResponse,
  rateLimit,
  requireDashboardSession,
  safeJson,
  supabaseRequest,
  getClientIp,
} from './_shared.mts'

function safeOrder(value: string | null): string {
  return value === 'asc' ? 'created_at.asc' : 'created_at.desc'
}

export default async (req: Request) => {
  if (req.method === 'OPTIONS') return optionsResponse()
  const auth = requireDashboardSession(req)
  if (!auth.ok) return auth.response

  const ip = getClientIp(req)
  const rl = rateLimit(`dash-api:${ip}`, 120, 10 * 60 * 1000)
  if (!rl.ok) return json(429, { error: 'Too many requests. Please try again later.' })

  const url = new URL(req.url)
  const id = url.searchParams.get('id')

  try {
    if (req.method === 'GET' && !id) {
      const params = new URLSearchParams()
      params.set('select', 'id,report_reference,category,reported_content,additional_details,model_name,app_version,conversation_reference,status,developer_notes,created_at,client_submitted_at')
      params.set('order', safeOrder(url.searchParams.get('order')))
      params.set('limit', String(Math.min(200, Math.max(1, Number(url.searchParams.get('limit') || 100) || 100))))

      const status = cleanText(url.searchParams.get('status'), 20).toUpperCase()
      if (isValidStatus(status)) params.set('status', `eq.${status}`)
      const category = cleanText(url.searchParams.get('category'), 80)
      if (category) params.set('category', `eq.${category}`)
      const model = cleanText(url.searchParams.get('model'), 120)
      if (model) params.set('model_name', `ilike.*${model.replace(/[%*,()]/g, '')}*`)
      const q = cleanText(url.searchParams.get('q'), 80)
      if (q) params.set('report_reference', `ilike.*${q.replace(/[%*,()]/g, '')}*`)
      const from = cleanText(url.searchParams.get('from'), 30)
      if (/^\d{4}-\d{2}-\d{2}/.test(from)) params.set('created_at', `gte.${from}T00:00:00Z`)
      const to = cleanText(url.searchParams.get('to'), 30)
      if (/^\d{4}-\d{2}-\d{2}/.test(to)) {
        const existing = params.get('created_at')
        // PostgREST allows multiple filters via separate params; easier to add second key by suffix hack not supported,
        // so use `and` expression when both provided.
        if (existing) {
          params.delete('created_at')
          params.set('and', `(created_at.gte.${from}T00:00:00Z,created_at.lte.${to}T23:59:59Z)`)
        } else {
          params.set('created_at', `lte.${to}T23:59:59Z`)
        }
      }

      const res = await supabaseRequest(`ai_content_reports?${params.toString()}`, { method: 'GET', headers: { Accept: 'application/json' } })
      if (!res.ok) return json(502, { error: 'Could not load reports.' })
      const data = await res.json()
      return json(200, { ok: true, reports: data })
    }

    if (req.method === 'GET' && id) {
      const safeId = cleanText(id, 80)
      const res = await supabaseRequest(
        `ai_content_reports?select=id,report_reference,category,reported_content,additional_details,model_name,app_version,conversation_reference,status,developer_notes,created_at,client_submitted_at&id=eq.${encodeURIComponent(safeId)}&limit=1`,
        { method: 'GET', headers: { Accept: 'application/json' } },
      )
      if (!res.ok) return json(502, { error: 'Could not load report.' })
      const rows = await res.json()
      if (!rows?.[0]) return json(404, { error: 'Report not found.' })
      return json(200, { ok: true, report: rows[0] })
    }

    if (req.method === 'PATCH' && id) {
      const safeId = cleanText(id, 80)
      const body = await safeJson<{ status?: unknown; developerNotes?: unknown }>(req)
      if (!body) return json(400, { error: 'Invalid request body.' })
      const patch: Record<string, string> = {}
      if (body.status !== undefined) {
        const status = cleanText(body.status, 20).toUpperCase()
        if (!isValidStatus(status)) return json(400, { error: 'Invalid status.' })
        patch.status = status
      }
      if (body.developerNotes !== undefined) {
        patch.developer_notes = cleanText(body.developerNotes, 4000)
      }
      if (Object.keys(patch).length === 0) return json(400, { error: 'No valid fields to update.' })

      const res = await supabaseRequest(`ai_content_reports?id=eq.${encodeURIComponent(safeId)}`, {
        method: 'PATCH',
        headers: { Prefer: 'return=representation' },
        body: JSON.stringify(patch),
      })
      if (!res.ok) return json(502, { error: 'Could not update report.' })
      const rows = await res.json()
      if (!rows?.[0]) return json(404, { error: 'Report not found.' })
      return json(200, { ok: true, report: rows[0] })
    }

    if (req.method === 'DELETE' && id) {
      const safeId = cleanText(id, 80)
      const res = await supabaseRequest(`ai_content_reports?id=eq.${encodeURIComponent(safeId)}`, {
        method: 'DELETE',
        headers: { Prefer: 'return=minimal' },
      })
      if (!res.ok) return json(502, { error: 'Could not delete report.' })
      return json(200, { ok: true })
    }

    return json(405, { error: 'Method not allowed.' })
  } catch {
    return json(503, { error: 'Dashboard service is temporarily unavailable.' })
  }
}

export const config = {
  path: '/api/dashboard/reports',
}
