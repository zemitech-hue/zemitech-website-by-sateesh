# Zemitech Urban — Website

A custom-coded Next.js website for Zemitech Urban Private Limited (Construction &
Interior Design), built for Dorabeen.

Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Supabase**
Deploy target: **Vercel**.

---

## 1. Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

The site **runs without any setup** — pages render fine with empty Projects/Blog
sections until Supabase is connected. To make Projects and Blog live (and to use
the `/admin` panel), see §2 below.

---

## 2. Supabase setup (Projects + Blog + admin panel)

Projects and blog posts are **not** static files — they live in Supabase and are
managed through `/admin`, so the client can add/edit/remove them without a
developer or a redeploy. Team, testimonials, company info and all service-page
copy remain plain files in `lib/data/` (see §4).

1. Create a free project at [supabase.com](https://supabase.com).
2. **SQL Editor → New query** → paste the entire contents of
   [`supabase/schema.sql`](supabase/schema.sql) → Run. This creates the
   `projects` and `blog_posts` tables, row-level-security policies, and two
   Storage buckets (`project-images`, `blog-images`) for admin-uploaded photos.
3. **Authentication → Users → Add user** — create yourself an email/password.
   This is your `/admin` login; there's no separate signup flow by design.
4. **Project Settings → API** — copy the **Project URL** and **anon public
   key**. Copy `.env.local.example` to `.env.local` and paste them in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxx
   ```
5. Restart `npm run dev`, go to `/admin`, sign in, and add your first project
   or post. It appears on the live site within a minute (pages revalidate
   every 60s) — no rebuild needed.

**Video embeds:** the project editor has a "Video URL" field — paste a
YouTube or Instagram (post/reel) link and it's embedded on that project's
page automatically. No video files are ever uploaded; only the link is
stored.

**Photos:** the admin editors upload directly to Supabase Storage (not
`public/images/`) — that's what the two buckets from the schema are for.

---

## 3. Folder structure

```
app/                          Routes (Next.js App Router — one folder = one URL)
├─ page.tsx                   Home
├─ layout.tsx                 Root layout: fonts, metadata, JSON-LD, chrome
├─ globals.css                Design tokens (colors, type, blueprint-grid signature)
├─ sitemap.ts                 Auto-generated sitemap.xml (static + Supabase-sourced routes)
├─ robots.ts                  robots.txt (disallows /admin, /api)
├─ not-found.tsx               Custom 404
│
├─ about/                     About Us
├─ construction/               Construction division
│  ├─ page.tsx                 Overview
│  └─ residential/, industrial/, renovation/, structural-civil-engineering/
│                              4 sub-service pages — all rendered by
│                              components/sections/ServiceSubPage.tsx from
│                              lib/data/services.ts, ~15 lines each
├─ interior-design/            Interior Design division
│  ├─ page.tsx                 Overview
│  ├─ kitchen/, living-room/, bedroom/, office/
│  │                           4 sub-service pages, same ServiceSubPage template
│  └─ turnkey-home-interiors/  Bespoke (room-by-room interactive), still
│                               data-driven from lib/data/services.ts
├─ projects/
│  ├─ page.tsx                 Portfolio grid with category filter (Supabase)
│  └─ [slug]/                  Project detail — description, challenge/solution,
│                               video embed, gallery (Supabase)
├─ gallery/                    Photo grid (pulled from Supabase project photos)
├─ team/                       Leadership + departments
├─ certifications/             Registrations & compliance
├─ blog/
│  ├─ page.tsx                 Blog listing (Supabase)
│  └─ [slug]/                  Post detail, Markdown content (Supabase)
├─ contact/                    Contact details + enquiry form + "Get directions" link
├─ inquiry/                    Dedicated "Get a Free Quote" landing page
├─ api/inquiry/route.ts        Form submission endpoint (currently logs server-side)
│
└─ admin/                      Real Supabase Auth-gated admin (proxy.ts protects
   ├─ page.tsx                  /admin/dashboard/**) — sign in, then manage:
   └─ dashboard/
      ├─ projects/               Create/edit/delete projects, upload photos,
      │                          set the video URL, publish/unpublish
      └─ blog/                   Create/edit/delete posts, upload cover photo,
                                 write body as Markdown, publish/unpublish

components/
├─ Header.tsx, Footer.tsx, SiteChrome.tsx   Global chrome (hides header/footer
│                                            on /admin routes)
├─ JsonLd.tsx                  Structured data helpers (FAQPage, BreadcrumbList)
├─ admin/                      ProjectForm, BlogForm, ImageUploadField,
│                              GalleryUploadField, DeleteButton
├─ ui/                         Button, Container, SectionHeading, Breadcrumbs,
│                              WhatsAppButton, InitialsAvatar (Team/Testimonials
│                              avatars — no stock photos of unnamed people
│                              standing in for real staff)
└─ sections/                   HeroCarousel, PageHero, ServiceSubPage (the
                               shared 12-sub-service-page template), CTASection,
                               ProjectCard, BlogCard, VideoEmbed, TestimonialsSection,
                               FaqAccordion, InquiryForm, ProjectsGrid

lib/
├─ data/                       Plain-file content that isn't admin-managed —
│  ├─ company.ts                edit these to change copy anywhere on the site.
│  ├─ nav.ts
│  ├─ services.ts               All 12 construction/interior sub-service pages +
│  │                             2 division overviews.
│  └─ team.ts, testimonials.ts, certifications.ts, home.ts
├─ supabase/
│  ├─ client.ts                 Browser Supabase client
│  ├─ server.ts                 Server Component/Action Supabase client + cookies
│  ├─ queries.ts                Typed reads: getProjects, getBlogPosts, etc.
│  └─ actions.ts                Server Actions: signIn/signOut, project/post CRUD
└─ types/                       Project, BlogPost types (mirror supabase/schema.sql)

supabase/schema.sql             Paste into the Supabase SQL editor — see §2.
proxy.ts                        Next.js 16's replacement for middleware.ts —
                                 refreshes the auth session, gates /admin/dashboard.

public/images/                  Local, code-owned images only (logo, service/page
                                 photography you add yourself — see
                                 public/images/IMAGES_NEEDED.md). Project and blog
                                 photos live in Supabase Storage instead.
```

**Page count:** 20 public pages (Home, About, 4 Construction sub-services + 1
overview, 5 Interior Design sub-services + 1 overview, Projects, Gallery, Team,
Certifications, Blog, Contact, Inquiry) + 2 dynamic templates (project detail,
blog post) + a Supabase-backed admin panel.

---

## 4. Design system

Defined in `app/globals.css` as CSS variables, mapped into Tailwind via `@theme inline`:

- **Primary blue** `#1B4B91` (from your logo), deep blue `#0F2E5C` for dark
  sections (hero, footer, CTA bands)
- **Accent green** `#7CB93D` (from your logo)
- **Background** `#FBFCFE` — white with a faint blue tint, not stark white
- **Type:** Space Grotesk (headings/display), Inter (body), IBM Plex Mono
  (eyebrow labels, stats, data) — self-hosted via `@fontsource` npm packages,
  not `next/font/google`, so builds never depend on reaching Google's font CDN
- **Signature motif:** a "blueprint grid" background + green corner registration
  marks (`.blueprint-grid`, `.reg-corners` in globals.css) — used on hero
  sections to nod at architectural drafting without being a generic gradient hero

---

## 5. About the content and images

- **Every construction/interior sub-service page is data-driven.** All 12
  sub-service pages (plus the 2 division overviews) read from one typed data
  file (`lib/data/services.ts`) through `ServiceSubPage.tsx`, so editing copy,
  adding a page, or re-ordering sections means editing data, not JSX.
- **Projects and blog posts live in Supabase**, managed through `/admin` —
  see §2. There is no seed/demo data; both tables start empty and the site
  renders correctly either way (empty-state messaging, not broken layout).
- **There are no photos in `public/images/`** except the real logo in
  `brand/`. Every image slot the (non-Supabase) code references is listed in
  `public/images/IMAGES_NEEDED.md` — drop a real photo at that exact path and
  it appears automatically. Until then, `GracefulImage`-backed slots show a
  clean "Image Coming Soon" placeholder rather than a broken image.
- **Team and testimonial "photos" are initials avatars**
  (`components/ui/InitialsAvatar.tsx`), not stock photos of unrelated people
  standing in for named staff or named clients. Swap in real headshots via
  `lib/data/team.ts` once available.
- **Testimonials are placeholder text**, clearly flagged as such in
  `lib/data/testimonials.ts`. Replace with real client quotes before launch.
- **Contact details** (phone, email, GSTIN, address) are the real ones from
  the brochure/previous site — check `lib/data/company.ts` and update if
  anything has changed.

---

## 6. Before this goes live — a checklist

1. **Supabase project.** Follow §2 if you haven't yet — nothing in Projects,
   Blog, or `/admin` works without it.

2. **Real project photography.** Add your first projects through `/admin` —
   see §2. For the remaining static image slots, see
   `public/images/IMAGES_NEEDED.md`.

3. **Enquiry form.** `app/api/inquiry/route.ts` currently validates and logs
   submissions server-side but doesn't forward them anywhere. Before launch,
   add an email notification (e.g. Resend) and/or save to a Supabase
   `inquiries` table so leads aren't lost.

4. **Domain & metadata.** `lib/data/company.ts` sets `domain: "zemitechurban.com"`
   — this feeds the sitemap, robots.txt, canonical URLs and JSON-LD. Confirm
   it matches wherever this actually deploys.

5. **OG image & real testimonials.** `public/images/og/zemitech-urban-og.jpg`
   and `lib/data/testimonials.ts` are still stand-ins — swap for a real social
   preview image and real client quotes before launch.

---

## 7. SEO already in place

- Per-page `<title>` / meta description on all 18 pages, following the
  `%s | Zemitech Urban` template
- `sitemap.xml` and `robots.txt` generated automatically from route + content
  data (`app/sitemap.ts`, `app/robots.ts`)
- JSON-LD structured data: `Organization`/`GeneralContractor` sitewide,
  `FAQPage` + `Service` + `BreadcrumbList` on every service page
- Semantic breadcrumbs on every inner page (visible + schema)
- next/image throughout, with explicit `sizes` for responsive loading
- Canonical URLs on every route
