-- Offline AI developer reporting (dedicated Shadow Studio Labs reporting project)
-- Apply manually in the dedicated Supabase project's SQL editor / migrations.
-- Do NOT apply to unrelated application databases.

create extension if not exists pgcrypto;

create table if not exists public.ai_content_reports (
  id uuid primary key default gen_random_uuid(),
  report_reference text not null unique,
  category text not null check (char_length(category) between 1 and 80),
  reported_content text not null check (char_length(reported_content) between 1 and 4000),
  additional_details text not null default '' check (char_length(additional_details) <= 2000),
  model_name text not null default '' check (char_length(model_name) <= 120),
  app_version text not null default '' check (char_length(app_version) <= 40),
  conversation_reference text not null default '' check (char_length(conversation_reference) <= 120),
  idempotency_key text not null unique check (char_length(idempotency_key) between 8 and 120),
  status text not null default 'NEW' check (status in ('NEW', 'REVIEWING', 'RESOLVED', 'DISMISSED')),
  developer_notes text not null default '' check (char_length(developer_notes) <= 4000),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  client_submitted_at timestamptz null
);

create index if not exists ai_content_reports_created_at_idx on public.ai_content_reports (created_at desc);
create index if not exists ai_content_reports_status_idx on public.ai_content_reports (status);
create index if not exists ai_content_reports_category_idx on public.ai_content_reports (category);
create index if not exists ai_content_reports_model_name_idx on public.ai_content_reports (model_name);
create index if not exists ai_content_reports_reference_idx on public.ai_content_reports (report_reference);

create or replace function public.set_ai_content_reports_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists trg_ai_content_reports_updated_at on public.ai_content_reports;
create trigger trg_ai_content_reports_updated_at
before update on public.ai_content_reports
for each row execute function public.set_ai_content_reports_updated_at();

-- Strict RLS: deny all access to anon/authenticated client roles by default.
-- Reports are accessed only by trusted server-side code (Netlify Functions using
-- the Supabase service-role key in server environment variables). Service role
-- bypasses RLS; do not expose it to clients. Authorised dashboard users access
-- reports only through authenticated server-side functions.
alter table public.ai_content_reports enable row level security;

-- No permissive policies are created intentionally.
