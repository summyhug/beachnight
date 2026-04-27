-- Run in Supabase SQL Editor if you already created `registrations` with the OLD columns
-- (org_name, country, beach, commit_filming). Skip if you only ever ran the updated 001.

alter table public.registrations add column if not exists full_name text;
alter table public.registrations add column if not exists location text;

update public.registrations
set
  full_name = coalesce(nullif(trim(full_name), ''), org_name, '—'),
  location = coalesce(
    nullif(trim(location), ''),
    nullif(trim(concat_ws(', ', nullif(beach, ''), nullif(country, ''))), '')
  )
where true;

alter table public.registrations alter column full_name set not null;
alter table public.registrations alter column location set not null;

alter table public.registrations drop column if exists org_name;
alter table public.registrations drop column if exists country;
alter table public.registrations drop column if exists beach;
alter table public.registrations drop column if exists commit_filming;
