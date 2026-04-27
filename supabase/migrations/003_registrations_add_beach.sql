-- Adds `beach` for the "Your Beach" join form section. Run in Supabase SQL Editor
-- if `registrations` exists without this column (e.g. after 001 without beach, or 002).

alter table public.registrations add column if not exists beach text;

update public.registrations
set beach = ''
where beach is null;

alter table public.registrations alter column beach set not null;
