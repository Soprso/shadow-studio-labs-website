# Offline AI developer reporting — manual setup (required)

This backend/dashboard integration is implemented, but **live reporting requires a dedicated Supabase project and server-side Netlify environment variables**. No secrets are stored in this repo, and no unrelated Supabase project/database is reused.

## Step 1 status (credential discovery)

Checked locations (relevant dev config only): this repo, Offline AI workspace, PromptHub, Dhurandhar-mobile, and user config paths `~/.supabase`, `~/.config/supabase`.

- **No verified dedicated Shadow Studio Labs reporting Supabase project or usable credentials were found.**
- Unrelated/unverified candidates by **key type only** (values not inspected, copied, or used): `/home/madhumita/Dhurandhar-mobile/.env` contains `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` for a different app/project context; `/home/madhumita/PromptHub/.env.example` contains example `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` placeholders only.
- No `.env` files in this site repo or Offline AI repo, no `supabase/config.toml`, and no local Supabase CLI project refs found.

**Do not** point reporting at Dhurandhar-mobile, PromptHub, or any other app database.

## Manual configuration required

1. **Create a dedicated Supabase project** for Shadow Studio Labs developer reporting (separate from unrelated app data).
2. **Apply schema/RLS** from `supabase/offline_ai_reports.sql` in that dedicated project (SQL editor/migrations). This creates `public.ai_content_reports` with validation constraints, indexes, `updated_at` trigger, and strict RLS (no permissive client policies; service-role/server access only).
3. **Configure Netlify environment variables** (server-side only, never in Android/public JS/git):
   - `SUPABASE_URL` — dedicated reporting project URL
   - `SUPABASE_SERVICE_ROLE_KEY` — service-role key for trusted server functions only (never exposed to clients)
   - `DASHBOARD_USERNAME` — developer dashboard username
   - `DASHBOARD_PASSWORD` — strong developer dashboard password
   - `DASHBOARD_SESSION_SECRET` — long random secret for signed dashboard session cookies
4. **Deploy** the site/functions after env vars are set (manual). Endpoints:
   - `POST /api/ai-reports/submit` — app submission (idempotent, validated, rate-limited)
   - `GET/POST /api/dashboard/auth?action=session|login|logout` — dashboard auth
   - `GET/PATCH/DELETE /api/dashboard/reports` — authenticated report management
5. **Verify**: valid/invalid submission, duplicate/idempotency behavior, rate limiting, unauthorized dashboard rejection, status/notes/delete, and that no secrets appear in APK/frontend bundles/git.

## Security notes

- Android app must call only the backend endpoint (never Supabase directly, never service-role key).
- Dashboard operations are authenticated and executed server-side through Netlify Functions.
- RLS is enabled with no permissive policies; anon/authenticated clients must not be able to read/write reports directly.
- Rate limiting in functions is best-effort per instance; combine with platform/network protections as needed.
