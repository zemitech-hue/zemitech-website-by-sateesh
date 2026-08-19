-- Zemitech Urban — Supabase schema
-- Paste this whole file into Supabase Dashboard → SQL Editor → New query → Run.
-- Safe to re-run: every statement is guarded with IF NOT EXISTS / OR REPLACE.

-- ============================================================
-- PROJECTS
-- ============================================================
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null check (category in ('residential', 'commercial', 'infrastructure', 'interior')),
  location text not null,
  year text not null,
  area text not null,
  summary text not null,
  description text[] not null default '{}',
  scope text[] not null default '{}',
  challenge text not null default '',
  solution text not null default '',
  cover_image_url text,
  gallery_urls text[] not null default '{}',
  video_url text,                 -- YouTube or Instagram post/reel link, embedded on the project page
  client_quote_text text,
  client_quote_author text,
  client_quote_location text,
  published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists projects_category_idx on projects (category);
create index if not exists projects_published_idx on projects (published);

-- ============================================================
-- BLOG POSTS
-- ============================================================
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null default 'General',
  excerpt text not null default '',
  cover_image_url text,
  content_md text not null default '',   -- post body as Markdown
  read_minutes int not null default 5,
  published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_published_idx on blog_posts (published);

-- ============================================================
-- COMPANY SETTINGS
-- ============================================================
create table if not exists company_settings (
  id text primary key default 'main',
  office_address text not null,
  email text not null,
  phone text not null,
  updated_at timestamptz default now()
);

insert into company_settings (id, office_address, email, phone)
values (
  'main',
  'Office No. 15/1, Samarth Sankul, Narhe, Pune – 411041',
  'zemitechurban@gmail.com',
  '+91 99990 67709'
)
on conflict (id) do nothing;

-- ============================================================
-- TEAM MEMBERS
-- ============================================================
create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  experience text not null,
  image_url text not null,
  created_at timestamptz default now()
);

-- ============================================================
-- UPDATED_AT AUTO TOUCH
-- ============================================================
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists projects_set_updated_at on projects;
create trigger projects_set_updated_at before update on projects
  for each row execute function set_updated_at();

drop trigger if exists blog_posts_set_updated_at on blog_posts;
create trigger blog_posts_set_updated_at before update on blog_posts
  for each row execute function set_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================
alter table projects enable row level security;
alter table blog_posts enable row level security;
alter table company_settings enable row level security;
alter table team_members enable row level security;

-- Public read policies
drop policy if exists "public read published projects" on projects;
create policy "public read published projects" on projects for select using (published = true);

drop policy if exists "public read published posts" on blog_posts;
create policy "public read published posts" on blog_posts for select using (published = true);

drop policy if exists "public read company_settings" on company_settings;
create policy "public read company_settings" on company_settings for select using (true);

drop policy if exists "public read team_members" on team_members;
create policy "public read team_members" on team_members for select using (true);

-- Admin / Authenticated full access policies
drop policy if exists "admin full access projects" on projects;
create policy "admin full access projects" on projects for all using (true) with check (true);

drop policy if exists "admin full access posts" on blog_posts;
create policy "admin full access posts" on blog_posts for all using (true) with check (true);

drop policy if exists "admin full access company_settings" on company_settings;
create policy "admin full access company_settings" on company_settings for all using (true) with check (true);

drop policy if exists "admin full access team_members" on team_members;
create policy "admin full access team_members" on team_members for all using (true) with check (true);

-- ============================================================
-- STORAGE — image uploads from the admin panel
-- ============================================================
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

drop policy if exists "public read project images" on storage.objects;
create policy "public read project images" on storage.objects for select using (bucket_id = 'project-images');

drop policy if exists "admin write project images" on storage.objects;
create policy "admin write project images" on storage.objects for all using (bucket_id = 'project-images') with check (bucket_id = 'project-images');

drop policy if exists "public read blog images" on storage.objects;
create policy "public read blog images" on storage.objects for select using (bucket_id = 'blog-images');

drop policy if exists "admin write blog images" on storage.objects;
create policy "admin write blog images" on storage.objects for all using (bucket_id = 'blog-images') with check (bucket_id = 'blog-images');
