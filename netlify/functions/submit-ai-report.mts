import {
  cleanText,
  corsHeaders,
  getClientIp,
  isValidCategory,
  isValidIdempotencyKey,
  json,
  makeReportReference,
  optionsResponse,
  rateLimit,
  safeJson,
  supabaseRequest,
} from './_shared.mts'

type SubmitBody = {
  idempotencyKey?: unknown
  category?: unknown
  reportedContent?: unknown
  additionalDetails?: unknown
  modelName?: unknown
  appVersion?: unknown
  conversationReference?: unknown
  clientSubmittedAt?: unknown
}

export default async (req: Request) => {
  if (req.method === 'OPTIONS') return optionsResponse()
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed.' })

  const ip = getClientIp(req)
  const rl = rateLimit(`submit:${ip}`, 12, 10 * 60 * 1000)
  if (!rl.ok) {
    return new Response(JSON.stringify({ error: 'Too many submissions. Please try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders, 'Retry-After': String(rl.retryAfterSec) },
    })
  }

  const body = await safeJson<SubmitBody>(req)
  if (!body || typeof body !== 'object') return json(400, { error: 'Invalid request body.' })

  const idempotencyKey = cleanText(body.idempotencyKey, 120)
  const category = cleanText(body.category, 80)
  const reportedContent = cleanText(body.reportedContent, 4000)
  const additionalDetails = cleanText(body.additionalDetails, 2000)
  const modelName = cleanText(body.modelName, 120)
  const appVersion = cleanText(body.appVersion, 40)
  const conversationReference = cleanText(body.conversationReference, 120)
  const clientSubmittedAtRaw = cleanText(body.clientSubmittedAt, 40)
  const clientSubmittedAt = /^\d{4}-\d{2}-\d{2}T/.test(clientSubmittedAtRaw) ? clientSubmittedAtRaw : null

  if (!isValidIdempotencyKey(idempotencyKey)) return json(400, { error: 'Invalid submission key.' })
  if (!isValidCategory(category)) return json(400, { error: 'Invalid report category.' })
  if (!reportedContent) return json(400, { error: 'Reported content is required.' })

  // Duplicate prevention: return existing reference for the same idempotency key.
  try {
    const existingRes = await supabaseRequest(
      `ai_content_reports?select=report_reference,status&idempotency_key=eq.${encodeURIComponent(idempotencyKey)}&limit=1`,
      { method: 'GET', headers: { Accept: 'application/json' } },
    )
    if (existingRes.ok) {
      const rows = (await existingRes.json()) as Array<{ report_reference?: string; status?: string }>
      const existing = rows?.[0]
      if (existing?.report_reference) {
        return json(200, { ok: true, reportReference: existing.report_reference, status: existing.status || 'NEW', duplicate: true })
      }
    } else if (existingRes.status !== 404) {
      // fall through to insert attempt; schema/config errors will surface there
    }
  } catch (err) {
    return json(503, { error: 'Reporting service is temporarily unavailable.' })
  }

  const reportReference = makeReportReference()
  const payload = {
    report_reference: reportReference,
    category,
    reported_content: reportedContent,
    additional_details: additionalDetails,
    model_name: modelName,
    app_version: appVersion,
    conversation_reference: conversationReference,
    idempotency_key: idempotencyKey,
    status: 'NEW',
    client_submitted_at: clientSubmittedAt,
  }

  try {
    const insertRes = await supabaseRequest('ai_content_reports', {
      method: 'POST',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify(payload),
    })

    if (insertRes.ok) {
      const rows = (await insertRes.json()) as Array<{ report_reference?: string; status?: string }>
      const created = rows?.[0]
      return json(201, { ok: true, reportReference: created?.report_reference || reportReference, status: created?.status || 'NEW' })
    }

    // Handle unique conflict on idempotency_key as an idempotent success.
    if (insertRes.status === 409) {
      const existingRes = await supabaseRequest(
        `ai_content_reports?select=report_reference,status&idempotency_key=eq.${encodeURIComponent(idempotencyKey)}&limit=1`,
        { method: 'GET', headers: { Accept: 'application/json' } },
      )
      if (existingRes.ok) {
        const rows = (await existingRes.json()) as Array<{ report_reference?: string; status?: string }>
        const existing = rows?.[0]
        if (existing?.report_reference) {
          return json(200, { ok: true, reportReference: existing.report_reference, status: existing.status || 'NEW', duplicate: true })
        }
      }
    }

    // Avoid leaking backend/schema details.
    if (insertRes.status === 401 || insertRes.status === 403) {
      return json(503, { error: 'Reporting service is not configured correctly.' })
    }
    return json(502, { error: 'Could not submit the report. Please try again.' })
  } catch {
    return json(503, { error: 'Reporting service is temporarily unavailable.' })
  }
}

export const config = {
  path: '/api/ai-reports/submit',
}
