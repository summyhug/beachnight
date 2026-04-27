-- Run this in Supabase → SQL Editor for a new project.

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  location text not null,
  beach text not null,
  created_at timestamptz not null default now()
);

create index if not exists registrations_created_at_idx
  on public.registrations (created_at desc);

create index if not exists registrations_email_idx
  on public.registrations (email);

comment on table public.registrations is 'Beachnight join form submissions';

alter table public.registrations enable row level security;

-- No policies for anon/authenticated: only the service role (API route) can access.
