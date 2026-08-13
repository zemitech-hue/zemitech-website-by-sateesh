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
├─ robots.ts                  robots.txt (disallows /admin, /api)
├─ not-found.tsx               Custom 404
│
├─ about/                     About Us
├─ construction/               Construction division
│  ├─ page.tsx                 Overview
│  ├─ residential/
│  ├─ commercial/
│  └─ infrastructure/
├─ interior-design/            Interior Design division
│  ├─ page.tsx                 Overview
│  ├─ kitchen/
│  │  ├─ page.tsx               Kitchen overview (links to both types below)
│  │  ├─ modular-kitchen/
│  │  └─ l-shape-kitchen/
│  ├─ living-room/
│  └─ bedroom/
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
├─ api/inquiry/route.ts        Form submission endpoint (currently logs server-side)
│
└─ admin/                      Admin panel (excluded from public nav + robots.txt)
   ├─ page.tsx                  Login (DEMO AUTH — see §5)
   └─ dashboard/
      ├─ page.tsx                Overview
      ├─ projects/               Add/view projects (image upload + details)
      ├─ media/                  Single-image gallery upload
      ├─ videos/                 YouTube / Instagram link manager
      └─ settings/               Site contact details

components/
├─ Header.tsx, Footer.tsx, SiteChrome.tsx   Global chrome (SiteChrome hides
│                                            header/footer/WhatsApp on /admin)
├─ JsonLd.tsx                  Structured data helpers (FAQPage, BreadcrumbList)
├─ ui/                         Button, Container, SectionHeading, Breadcrumbs, WhatsAppButton
├─ sections/                   HeroCarousel, PageHero, ServicePageTemplate,
│                              KitchenTypeTemplate, ProcessSteps, CTASection,
│                              ProjectCard, BlogCard, TestimonialsSection,
│                              FaqAccordion, InquiryForm, ProjectsGrid
└─ admin/                      AdminSidebar, RequireAdminAuth

lib/data/                      ALL page content lives here — this is effectively
├─ company.ts                  the "CMS" today. Edit these files (or wire the
├─ nav.ts                      admin panel to Supabase and read from there instead)
├─ services.ts                 to change copy anywhere on the site.
├─ kitchens.ts
├─ projects.ts
├─ team.ts
├─ testimonials.ts
├─ certifications.ts
├─ blog.ts
└─ home.ts                     Homepage hero slides + USPs + FAQs

public/images/                 All images, organized to match the sections above.
                                Currently populated with GENERATED PLACEHOLDERS —
                                see §4.
```

**Page count:** 18 public pages (Home, About, 4 Construction, 4 Interior Design
incl. 2 kitchen types, Projects, Gallery, Team, Certifications, Blog, Contact,
Inquiry) + 2 dynamic templates (project detail, blog post) + a 5-screen admin panel.

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

## 4. About the placeholder content

You told us the client has no real photos yet, so:

- **All project/gallery/team photos are generated placeholders** — soft
  blue/green branded panels with a text label, so every page looks finished
  and on-brand rather than showing broken images. Swap these via
  `public/images/...` (same filenames) or by wiring Admin → Projects/Gallery
  to real storage.
- **Testimonials are placeholder text**, clearly flagged as such in
  `lib/data/testimonials.ts`. Replace with real client quotes before launch.
- **All copy (service descriptions, FAQs, blog posts, process steps) is
  original content written for this brief** — grounded in the proposal scope,
  not placeholder lorem ipsum — so the site reads as complete even before real
  photos exist.
- **Contact details (phone, email, GSTIN, address) are the real ones** from
  the brochure/previous site — check `lib/data/company.ts` and update if
  anything has changed.

---

## 5. Before this goes live — a checklist

1. **Real photos.** Replace files under `public/images/` (same paths/filenames
   used throughout `lib/data/`, so a straight swap is enough) or connect the
   admin upload flow to real storage (Supabase Storage is a natural fit given
   the proposal's tech stack).

2. **Admin authentication is a demo only.** `app/admin/page.tsx` currently
   accepts any email/password and sets a plain cookie — this is **not secure**.
   Before launch, replace it with real authentication (Supabase Auth
   email/password or magic link is the natural fit given the proposed stack)
   and verify the session server-side, e.g. in `middleware.ts`, rather than
   trusting a client-set cookie.

3. **Admin forms don't persist yet.** Projects/Media/Videos/Settings pages
   show new entries instantly but only for the current browser session (React
   state, not a database) — reflecting that no backend is connected yet.
   Wire them to Supabase tables, roughly:
   - `projects` (title, category, location, year, area, summary, description,
     scope, cover_image_url, gallery_urls)
   - `gallery_images` (url, caption, project_id)
   - `videos` (platform, url, title)
   - `site_settings` (phone, email, address, social links)
   Then swap the static imports in `lib/data/` for Supabase queries.

4. **Enquiry form.** `app/api/inquiry/route.ts` currently validates and logs
   submissions server-side but doesn't forward them anywhere. Before launch,
   add an email notification (e.g. Resend) and/or save to a Supabase
   `inquiries` table so leads aren't lost.

5. **Domain & metadata.** `lib/data/company.ts` sets `domain: "zemitechurban.com"`
   — this feeds the sitemap, robots.txt, canonical URLs and JSON-LD. Confirm
   it matches wherever this actually deploys.

6. **OG image.** `public/images/og/zemitech-urban-og.jpg` is currently a
   placeholder — swap for a real 1200×630 social preview image before launch.

---

## 6. SEO already in place

- Per-page `<title>` / meta description on all 18 pages, following the
  `%s | Zemitech Urban` template
- `sitemap.xml` and `robots.txt` generated automatically from route + content
  data (`app/sitemap.ts`, `app/robots.ts`)
- JSON-LD structured data: `Organization`/`GeneralContractor` sitewide,
  `FAQPage` on every page with an FAQ section, `BreadcrumbList` on every
  inner page
- Semantic breadcrumbs on every inner page (visible + schema)
- next/image throughout, with explicit `sizes` for responsive loading
- Canonical URLs on every route
