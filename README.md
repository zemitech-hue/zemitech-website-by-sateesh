# Zemitech Urban — Website

A custom-coded Next.js website for Zemitech Urban Private Limited (Construction &
Interior Design), built for Dorabeen.

Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**
Deploy target: **Vercel**. Backend target (not yet wired): **Supabase**.

---

## 1. Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

No environment variables are required to run the site as-is — everything currently
reads from static files in `lib/data/`. See §5 for what to wire up before launch.

---

## 2. Folder structure

```
app/                          Routes (Next.js App Router — one folder = one URL)
├─ page.tsx                   Home
├─ layout.tsx                 Root layout: fonts, metadata, JSON-LD, chrome
├─ globals.css                Design tokens (colors, type, blueprint-grid signature)
├─ sitemap.ts                 Auto-generated sitemap.xml (static + dynamic routes)
├─ robots.ts                  robots.txt (disallows /api)
├─ not-found.tsx               Custom 404
│
├─ about/                     About Us
├─ construction/               Construction division
│  ├─ page.tsx                 Overview
│  ├─ residential/, commercial/, infrastructure/, industrial/,
│  │  renovation/, structural-civil-engineering/
│  │                           6 sub-service pages — all rendered by
│  │                           components/sections/ServiceSubPage.tsx from
│  │                           lib/data/services.ts, ~15 lines each
├─ interior-design/            Interior Design division
│  ├─ page.tsx                 Overview
│  ├─ kitchen/, living-room/, bedroom/, office/, custom-joinery/
│  │                           5 sub-service pages, same ServiceSubPage template
│  └─ turnkey-home-interiors/  Bespoke (room-by-room interactive), still
│                               data-driven from lib/data/services.ts
├─ projects/
│  ├─ page.tsx                 Portfolio grid with category filter
│  └─ [slug]/                  Dynamic project detail (generateStaticParams)
├─ gallery/                    Photo grid (pulled from project data)
├─ team/                       Leadership + departments
├─ certifications/             Registrations & compliance
├─ blog/
│  ├─ page.tsx                 Blog listing
│  └─ [slug]/                  Dynamic post detail
├─ contact/                    Contact details + enquiry form + map
├─ inquiry/                    Dedicated "Get a Free Quote" landing page
└─ api/inquiry/route.ts        Form submission endpoint (currently logs server-side)

components/
├─ Header.tsx, Footer.tsx, SiteChrome.tsx   Global chrome
├─ JsonLd.tsx                  Structured data helpers (FAQPage, BreadcrumbList)
├─ ui/                         Button, Container, SectionHeading, Breadcrumbs,
│                              WhatsAppButton, InitialsAvatar (Team/Testimonials
│                              avatars — no stock photos of unnamed people
│                              standing in for real staff)
└─ sections/                   HeroCarousel, PageHero, ServiceSubPage (the
                               shared 12-sub-service-page template), CTASection,
                               ProjectCard, BlogCard, TestimonialsSection,
                               FaqAccordion, InquiryForm, ProjectsGrid

lib/data/                      ALL page content lives here — this is effectively
├─ company.ts                  the "CMS" today. Edit these files to change copy
├─ nav.ts                      anywhere on the site.
├─ services.ts                 All 12 construction/interior sub-service pages +
│                               2 division overviews — hero copy, offering cards,
│                               scope checklist, materials, FAQs, per page.
├─ projects.ts                 9 portfolio projects (see §4 on why 9, not more)
├─ team.ts, testimonials.ts, certifications.ts, blog.ts, home.ts

public/images/                 Images, organized to match lib/data/ — one folder
                                per sub-service (e.g. images/construction/kitchen/)
                                holding hero.jpg, card-1..4.jpg, material-1..4.jpg.
                                See §4 for sourcing/licensing.
```

**Page count:** 18 public pages (Home, About, 6 Construction sub-services + 1
overview, 6 Interior Design sub-services + 1 overview, Projects, Gallery, Team,
Certifications, Blog, Contact, Inquiry) + 2 dynamic templates (project detail,
blog post).

There is no admin panel — an earlier demo login/dashboard (insecure, non-
persistent, unlinked from nav) was removed. Wire a real CMS (Supabase Studio,
or a proper authenticated admin) directly against `lib/data/` when a backend
is connected, rather than resurrecting the demo.

---

## 3. Design system

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

## 4. About the content and images

- **Every construction/interior sub-service page is data-driven.** Previously
  each page hand-rolled its own JSX with headline/card copy disconnected from
  `lib/data/services.ts` — now all 12 pages (plus the 2 division overviews)
  read from one typed data file through `ServiceSubPage.tsx`, so editing copy,
  adding a page, or re-ordering sections means editing data, not JSX.
- **There are no photos in `public/images/` yet** except the real logo in
  `brand/`. Every image slot the code references is listed in
  `public/images/IMAGES_NEEDED.md` with the exact path, folder-by-folder —
  drop a real photo of the actual project/space at that path (same filename)
  and it appears on the site automatically, no code changes required. Until
  then, `GracefulImage`-backed slots (all service pages, most sections) show
  a clean "Image Coming Soon" placeholder rather than a broken image.
- **Team and testimonial "photos" are initials avatars**
  (`components/ui/InitialsAvatar.tsx`), not stock photos of unrelated people
  standing in for named staff or named clients — a previous version had all
  three leadership headshots rendering the same unrelated construction-site
  photo. Swap in real headshots via `lib/data/team.ts` once available.
- **Testimonials are placeholder text**, clearly flagged as such in
  `lib/data/testimonials.ts`. Replace with real client quotes before launch.
- **Projects portfolio has 9 representative entries** (not padded to a round
  number) in `lib/data/projects.ts`, each with its own dedicated photo set —
  no image is reused across two different projects.
- **All copy** (service descriptions, FAQs, blog posts) is original content
  written for this brief, not placeholder lorem ipsum.
- **Contact details** (phone, email, GSTIN, address) are the real ones from
  the brochure/previous site — check `lib/data/company.ts` and update if
  anything has changed.

---

## 5. Before this goes live — a checklist

1. **Real project photography.** See `public/images/IMAGES_NEEDED.md` for
   the full list of paths — add photos there as they become available.

2. **A real CMS/admin.** There's no admin panel today (removed — see §2).
   Before non-developers need to edit content, wire a real authenticated
   admin (or Supabase Studio directly) against `lib/data/`, with server-side
   session verification, not a demo login.

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

## 6. SEO already in place

- Per-page `<title>` / meta description on all 18 pages, following the
  `%s | Zemitech Urban` template
- `sitemap.xml` and `robots.txt` generated automatically from route + content
  data (`app/sitemap.ts`, `app/robots.ts`)
- JSON-LD structured data: `Organization`/`GeneralContractor` sitewide,
  `FAQPage` + `Service` + `BreadcrumbList` on every service page
- Semantic breadcrumbs on every inner page (visible + schema)
- next/image throughout, with explicit `sizes` for responsive loading
- Canonical URLs on every route
