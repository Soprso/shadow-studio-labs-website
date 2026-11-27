import { useEffect, useMemo, useState } from 'react'
import { Seo } from '../../components/Seo'

type Status = 'NEW' | 'REVIEWING' | 'RESOLVED' | 'DISMISSED'

interface Report {
  id: string
  report_reference: string
  category: string
  reported_content: string
  additional_details: string
  model_name: string
  app_version: string
  conversation_reference: string
  status: Status
  developer_notes: string
  created_at: string
  client_submitted_at: string | null
}

const statuses: Status[] = ['NEW', 'REVIEWING', 'RESOLVED', 'DISMISSED']

async function api(path: string, init: RequestInit = {}) {
  const res = await fetch(path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
    ...init,
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

function fmtDate(value?: string | null) {
  if (!value) return '—'
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? value : d.toLocaleString()
}

export function ReportDashboard() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [reports, setReports] = useState<Report[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [filters, setFilters] = useState({ q: '', status: '', category: '', model: '', from: '', to: '' })
  const [draftStatus, setDraftStatus] = useState<Status>('NEW')
  const [draftNotes, setDraftNotes] = useState('')

  const selected = useMemo(() => reports.find((r) => r.id === selectedId) || null, [reports, selectedId])

  useEffect(() => {
    if (selected) {
      setDraftStatus(selected.status)
      setDraftNotes(selected.developer_notes || '')
    }
  }, [selected])

  async function checkSession() {
    setLoading(true)
    const { data } = await api('/api/dashboard/auth?action=session', { method: 'GET' })
    setAuthenticated(!!data?.authenticated)
    setLoading(false)
  }

  async function loadReports() {
    setError('')
    const params = new URLSearchParams()
    if (filters.q) params.set('q', filters.q)
    if (filters.status) params.set('status', filters.status)
    if (filters.category) params.set('category', filters.category)
    if (filters.model) params.set('model', filters.model)
    if (filters.from) params.set('from', filters.from)
    if (filters.to) params.set('to', filters.to)
    const { ok, status, data } = await api(`/api/dashboard/reports?${params.toString()}`, { method: 'GET' })
    if (status === 401) {
      setAuthenticated(false)
      return
    }
    if (!ok) {
      setError(data?.error || 'Could not load reports.')
      return
    }
    setReports(Array.isArray(data?.reports) ? data.reports : [])
  }

  useEffect(() => {
    void checkSession()
  }, [])

  useEffect(() => {
    if (authenticated) void loadReports()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setAuthError('')
    setBusy(true)
    const { ok, data } = await api('/api/dashboard/auth?action=login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    setBusy(false)
    if (!ok) {
      setAuthError(data?.error || 'Sign-in failed.')
      return
    }
    setPassword('')
    setAuthenticated(true)
  }

  async function logout() {
    await api('/api/dashboard/auth?action=logout', { method: 'POST' })
    setAuthenticated(false)
    setReports([])
    setSelectedId(null)
  }

  async function saveReport() {
    if (!selected) return
    setBusy(true)
    setError('')
    const { ok, status, data } = await api(`/api/dashboard/reports?id=${encodeURIComponent(selected.id)}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: draftStatus, developerNotes: draftNotes }),
    })
    setBusy(false)
    if (status === 401) return setAuthenticated(false)
    if (!ok) return setError(data?.error || 'Could not update report.')
    const updated = data?.report as Report
    setReports((prev) => prev.map((r) => (r.id === updated.id ? { ...r, ...updated } : r)))
  }

  async function deleteReport() {
    if (!selected) return
    if (!window.confirm(`Delete report ${selected.report_reference}? This cannot be undone.`)) return
    setBusy(true)
    setError('')
    const { ok, status, data } = await api(`/api/dashboard/reports?id=${encodeURIComponent(selected.id)}`, { method: 'DELETE' })
    setBusy(false)
    if (status === 401) return setAuthenticated(false)
    if (!ok) return setError(data?.error || 'Could not delete report.')
    setReports((prev) => prev.filter((r) => r.id !== selected.id))
    setSelectedId(null)
  }

  return (
    <>
      <Seo title="Developer Reports — Shadow Studio Labs" description="Private developer dashboard for Offline AI content reports." canonicalPath="/studio/reports" noindex />
      <main className="min-h-[70vh] bg-[#0b0f14] text-[#d7dde5] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-emerald-300/80">SHADOW STUDIO LABS · PRIVATE</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">Offline AI Reports</h1>
              <p className="mt-1 text-sm text-white/60">Authenticated developer review dashboard. No public access.</p>
            </div>
            {authenticated && (
              <button onClick={logout} className="rounded border border-white/20 px-3 py-2 text-sm hover:bg-white/5">Sign out</button>
            )}
          </div>

          {loading ? (
            <p className="mt-8 text-sm text-white/60">Checking session…</p>
          ) : !authenticated ? (
            <form onSubmit={login} className="mt-8 max-w-md rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="text-lg font-medium">Developer sign in</h2>
              <p className="mt-1 text-sm text-white/60">Access is restricted to authorised developers.</p>
              <label className="mt-4 block text-sm text-white/70">Username
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 w-full rounded border border-white/15 bg-black/30 px-3 py-2 outline-none focus:border-emerald-400/60" autoComplete="username" />
              </label>
              <label className="mt-3 block text-sm text-white/70">Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded border border-white/15 bg-black/30 px-3 py-2 outline-none focus:border-emerald-400/60" autoComplete="current-password" />
              </label>
              {authError && <p className="mt-3 text-sm text-rose-300">{authError}</p>}
              <button disabled={busy} className="mt-4 rounded bg-emerald-400/90 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-300 disabled:opacity-60">{busy ? 'Signing in…' : 'Sign in'}</button>
              <p className="mt-3 text-xs text-white/45">If sign-in is unavailable, configure dashboard env vars on Netlify (`DASHBOARD_USERNAME`, `DASHBOARD_PASSWORD`, `DASHBOARD_SESSION_SECRET`).</p>
            </form>
          ) : (
            <div className="mt-6 grid gap-4 lg:grid-cols-[420px_minmax(0,1fr)]">
              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-medium tracking-wide text-white/80">REPORTS</h2>
                  <button onClick={() => void loadReports()} className="rounded border border-white/15 px-2 py-1 text-xs hover:bg-white/5">Refresh</button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <input placeholder="Reference" value={filters.q} onChange={(e) => setFilters({ ...filters, q: e.target.value })} className="col-span-2 rounded border border-white/15 bg-black/30 px-2 py-1.5" />
                  <select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })} className="rounded border border-white/15 bg-black/30 px-2 py-1.5">
                    <option value="">All statuses</option>
                    {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input placeholder="Category" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })} className="rounded border border-white/15 bg-black/30 px-2 py-1.5" />
                  <input placeholder="Model" value={filters.model} onChange={(e) => setFilters({ ...filters, model: e.target.value })} className="col-span-2 rounded border border-white/15 bg-black/30 px-2 py-1.5" />
                  <input type="date" value={filters.from} onChange={(e) => setFilters({ ...filters, from: e.target.value })} className="rounded border border-white/15 bg-black/30 px-2 py-1.5" />
                  <input type="date" value={filters.to} onChange={(e) => setFilters({ ...filters, to: e.target.value })} className="rounded border border-white/15 bg-black/30 px-2 py-1.5" />
                </div>
                <button onClick={() => void loadReports()} className="mt-2 w-full rounded border border-white/15 px-2 py-1.5 text-sm hover:bg-white/5">Apply filters</button>
                {error && <p className="mt-2 text-sm text-rose-300">{error}</p>}
                <div className="mt-3 max-h-[65vh] space-y-2 overflow-auto pr-1">
                  {reports.length === 0 ? (
                    <p className="text-sm text-white/50">No reports found.</p>
                  ) : reports.map((r) => (
                    <button key={r.id} onClick={() => setSelectedId(r.id)} className={`w-full rounded border p-3 text-left ${selectedId === r.id ? 'border-emerald-400/50 bg-emerald-400/10' : 'border-white/10 bg-black/20 hover:border-white/20'}`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-emerald-200">{r.report_reference}</span>
                        <span className="text-[11px] text-white/60">{r.status}</span>
                      </div>
                      <div className="mt-1 text-sm text-white/85">{r.category}</div>
                      <div className="mt-1 text-xs text-white/50">{fmtDate(r.created_at)} · {r.model_name || 'unknown model'}</div>
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                {!selected ? (
                  <p className="text-sm text-white/55">Select a report to inspect details, update status, add private notes, or delete.</p>
                ) : (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-mono text-lg text-emerald-200">{selected.report_reference}</h2>
                        <p className="text-sm text-white/60">Created: {fmtDate(selected.created_at)}{selected.client_submitted_at ? ` · Client: ${fmtDate(selected.client_submitted_at)}` : ''}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => void saveReport()} disabled={busy} className="rounded bg-emerald-400/90 px-3 py-1.5 text-sm font-medium text-black hover:bg-emerald-300 disabled:opacity-60">Save</button>
                        <button onClick={() => void deleteReport()} disabled={busy} className="rounded border border-rose-400/40 px-3 py-1.5 text-sm text-rose-200 hover:bg-rose-400/10 disabled:opacity-60">Delete</button>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="text-sm text-white/70">Status
                        <select value={draftStatus} onChange={(e) => setDraftStatus(e.target.value as Status)} className="mt-1 w-full rounded border border-white/15 bg-black/30 px-2 py-2">
                          {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </label>
                      <div className="text-sm text-white/70">Category<div className="mt-1 rounded border border-white/10 bg-black/20 px-2 py-2 text-white/90">{selected.category}</div></div>
                      <div className="text-sm text-white/70">Model<div className="mt-1 rounded border border-white/10 bg-black/20 px-2 py-2 text-white/90">{selected.model_name || '—'}</div></div>
                      <div className="text-sm text-white/70">App version<div className="mt-1 rounded border border-white/10 bg-black/20 px-2 py-2 text-white/90">{selected.app_version || '—'}</div></div>
                      <div className="text-sm text-white/70 sm:col-span-2">Conversation reference<div className="mt-1 rounded border border-white/10 bg-black/20 px-2 py-2 font-mono text-xs text-white/80 break-all">{selected.conversation_reference || '—'}</div></div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Reported content</h3>
                      <pre className="mt-1 max-h-64 overflow-auto whitespace-pre-wrap rounded border border-white/10 bg-black/30 p-3 text-sm text-white/90">{selected.reported_content}</pre>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Additional details (user)</h3>
                      <pre className="mt-1 max-h-40 overflow-auto whitespace-pre-wrap rounded border border-white/10 bg-black/30 p-3 text-sm text-white/85">{selected.additional_details || '—'}</pre>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/80">Developer notes (private)</h3>
                      <textarea value={draftNotes} onChange={(e) => setDraftNotes(e.target.value)} rows={6} className="mt-1 w-full rounded border border-white/15 bg-black/30 p-3 text-sm outline-none focus:border-emerald-400/60" />
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
