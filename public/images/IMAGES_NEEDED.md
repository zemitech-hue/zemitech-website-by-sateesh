# Images needed

The site currently has **no photos** except the real logo in `brand/`. Every
path below is read by the code — drop a file at that exact path (same name,
same folder) and it appears on the site automatically, no code changes
needed. Until a file exists, that slot shows a clean "Image Coming Soon"
placeholder instead of a broken image.

**Not covered here: Projects and Blog.** Those are managed entirely through
`/admin` (Supabase Storage uploads), not files in this folder — see the
main `README.md` §2.

**Save every file as `.png`** (that's the extension the code looks for)
— ideally under ~500KB each after export. (Two components —
`ServiceCarousel.tsx` and `AreasServedSection.tsx` — previously pointed at
`.jpg`; that's been fixed in code to match `.png` so every path below is
now consistent.)

Company context for the generator: **Zemitech Urban** ("Building &
Renovation"), a construction + interior design company based in
**Narhe, Pune, Maharashtra, India**, founded 2019. Brand colors run deep
navy blue with a green accent. Use real photos of actual completed
projects wherever you have them; where you don't, generate an on-brand
photo matching the prompt below.

---

## How to read each entry

Every image below is listed as:

`filename.png` — **[TAG]** WxH px — *generation prompt*

The **[TAG]** refers to one of the composition rules here — read the rule
once, then it applies to every image carrying that tag:

- **[HERO]** — full-bleed background behind a bold white heading and a CTA
  button. The text block sits **bottom-left** (home hero carousel, and
  every simple page hero: about/team/contact/inquiry/certifications/
  gallery/projects/blog), over a gradient that's **darkest on the left,
  fading to transparent on the right**. Put the main subject / focal point
  in the **right half** of the frame; keep the **left half calm and
  uncluttered** — no faces, signage, or busy detail there. Open sky, a
  plain wall, soft blur, or negative space on the left all work well.
  Landscape, **1920×1080**.
- **[SERVICE HERO]** — the full-bleed background used on every
  construction/interior sub-service page. Heading text sits in the
  **left third, near the top**, over a flat uniform dark scrim (not a
  gradient). Keep that **left third visually simple** so the overlaid
  text stays readable; the main subject can sit center or right.
  Landscape, **1920×1080**.
- **[CARD]** — no text is ever overlaid on these; the caption sits below
  the image, outside it. Subject **centered**, fills the frame, well lit.
  Landscape 16:10, **1200×750**.
- **[MATERIAL]** — extreme macro close-up of a material/finish texture,
  **centered**, fills the entire frame. No people, no text, no logos.
  Square, **1000×1000**.
- **[ROOM]** — a full interior room photo, no text overlay, room
  **centered** in frame. Landscape 16:9, **1600×900**.
- **[DOC PHOTO]** — documentary/candid style (timeline photos, "where we
  work" grid, certification quality-check photos, contact/inquiry inline
  photos). No text overlay, subject **centered**. Landscape 4:3,
  **1200×900**.
- **[PORTRAIT BLOCK]** — a taller photo for a narrow split-screen slot. No
  text overlay, subject **centered**, fills frame. Portrait 4:5,
  **1000×1250**.
- **[MAP GRAPHIC]** — **not a photo.** A clean, illustrated vector-style
  map graphic (the page uses `object-contain`, so it doesn't need to
  bleed to the edges — a plain/transparent background is fine). Square,
  **1200×1200**.
- **[SERVICE TILE]** — home page division/service carousel image. A small
  tag pill overlays the top-left corner **in code**, not part of the
  image — otherwise no text overlay, subject **centered**. Landscape
  16:9, **1600×900**.
- **[OG]** — social share preview card, shown on WhatsApp/social before
  someone clicks through. Unlike everything else, this one **should**
  bake in real text: the Zemitech Urban logo/name and the tagline
  "Building & Renovation," placed clear of a representative project
  photo, in the brand's navy/green palette. Exactly **1200×630**.

---

## Construction — 4 sub-services

Each of these needs: 1 hero + 4 capability cards + 4 material photos.

### `construction/residential/`
- `hero.png` — **[HERO]** 1920×1080 — *A modern G+1/G+2 independent villa mid-construction in Pune: RCC frame complete, brick masonry in progress on the right side of the building, scaffolding, blue daytime sky on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A completed modern independent villa exterior — contemporary facade, driveway, landscaping.*
- `card-2.png` — **[CARD]** 1200×750 — *A completed duplex home exterior with two visible entrances, clean modern facade.*
- `card-3.png` — **[CARD]** 1200×750 — *A completed multi-floor (G+2/G+3) residential building exterior in an urban Pune setting.*
- `card-4.png` — **[CARD]** 1200×750 — *A fully finished turnkey home exterior at handover stage — landscaping and driveway complete, no scaffolding or equipment visible.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of wet concrete being poured / a cured RCC surface texture.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of tied steel reinforcement bars (rebar) in a structural grid.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of stacked concrete/AAC masonry blocks.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of vitrified floor tile texture.*

### `construction/industrial/`
- `hero.png` — **[HERO]** 1920×1080 — *A large pre-engineered steel (PEB) warehouse under construction, steel trusses and structure on the right of frame, open sky and simple ground on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A completed large pre-engineered steel warehouse exterior.*
- `card-2.png` — **[CARD]** 1200×750 — *A PEB shed structure mid-erection, steel trusses and columns clearly visible.*
- `card-3.png` — **[CARD]** 1200×750 — *Interior of a large storage/logistics facility — high ceiling, open floor, empty racking.*
- `card-4.png` — **[CARD]** 1200×750 — *Interior of a generic industrial manufacturing floor / factory shed with equipment, no branding visible.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of an industrial loading dock / dock leveler.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of industrial trimix/epoxy flooring texture.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a steel roof truss connection.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of an industrial drainage channel/grating.*

### `construction/renovation/`
- `hero.png` — **[HERO]** 1920×1080 — *An existing home mid-renovation: scaffolding and fresh facade work on the right side of the building, calm sky/plain wall on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A renovated home exterior — fresh paint and updated facade finishes.*
- `card-2.png` — **[CARD]** 1200×750 — *A renovated modern kitchen interior, fully finished.*
- `card-3.png` — **[CARD]** 1200×750 — *A renovated living room interior, fully finished and styled.*
- `card-4.png` — **[CARD]** 1200×750 — *A structural renovation in progress indoors — wall demolition or RCC reinforcement work visible.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of floor/wall tile texture.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a wall paint swatch/texture.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a bathroom sanitary fitting (faucet or fixture).*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of wood joinery detail — a door frame or cabinet joint.*

### `construction/structural-civil-engineering/`
- `hero.png` — **[HERO]** 1920×1080 — *An RCC structural frame under construction — columns, beams, and formwork on the right of frame, open sky on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *RCC column-and-beam frame construction with formwork/shuttering visible.*
- `card-2.png` — **[CARD]** 1200×750 — *Foundation excavation and footing casting in progress.*
- `card-3.png` — **[CARD]** 1200×750 — *Brick masonry wall construction in progress.*
- `card-4.png` — **[CARD]** 1200×750 — *An organized construction site — temporary site office, scaffolding, and material yard.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *A site engineer inspecting structural work with measuring tools, medium-close shot.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a tied steel reinforcement cage.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a concrete cube/slump quality test.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of water-curing on a concrete column/surface.*

## Construction — division overview page (`/construction`)

- `construction/overview/hero.png` — **[HERO]** 1920×1080 — *A wide establishing shot of an active Pune construction site — crane or scaffolding and RCC structure on the right, workers at a safe distance, open sky on the left.*
- `construction/overview/material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of a structural steel quality check.*
- `construction/overview/material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of concrete strength/quality testing.*
- `construction/overview/material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of quality bricks/blocks stacked.*
- `construction/overview/material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of precision-laid flooring.*

## Interior Design — 4 sub-services (same pattern as construction)

### `interior/kitchen/`
- `hero.png` — **[HERO]** 1920×1080 — *A finished modern modular kitchen, wide angle — cabinetry and countertop on the right of frame, calm wall/window light on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A finished L-shape modular kitchen.*
- `card-2.png` — **[CARD]** 1200×750 — *A finished U-shape modular kitchen.*
- `card-3.png` — **[CARD]** 1200×750 — *A finished parallel-layout modular kitchen.*
- `card-4.png` — **[CARD]** 1200×750 — *A finished island-layout modular kitchen.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of a laminate finish texture.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a wood veneer finish texture.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a high-gloss acrylic finish.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of a glass shutter/panel finish.*

### `interior/living-room/`
- `hero.png` — **[HERO]** 1920×1080 — *A finished, styled living room, wide angle — TV wall unit and seating on the right of frame, calm wall on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A finished custom TV unit wall design.*
- `card-2.png` — **[CARD]** 1200×750 — *A finished feature/accent wall design.*
- `card-3.png` — **[CARD]** 1200×750 — *A finished false ceiling with cove/LED lighting.*
- `card-4.png` — **[CARD]** 1200×750 — *A finished built-in storage/shelving unit.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of a wood veneer finish texture.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a fluted wood panel texture.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a laminate finish texture.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of a natural stone/marble finish.*

### `interior/bedroom/`
- `hero.png` — **[HERO]** 1920×1080 — *A finished, styled master bedroom, wide angle — bed and wardrobe on the right of frame, calm wall/window on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A finished bed with headboard panel design.*
- `card-2.png` — **[CARD]** 1200×750 — *A finished floor-to-ceiling wardrobe design.*
- `card-3.png` — **[CARD]** 1200×750 — *A finished walk-in closet design.*
- `card-4.png` — **[CARD]** 1200×750 — *A finished study nook/desk built into a bedroom.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of a wood veneer finish texture.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a laminate finish texture.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a natural wood grain texture.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of cabinet hardware — a handle or hinge.*

### `interior/office/`
- `hero.png` — **[HERO]** 1920×1080 — *A finished corporate office interior, wide angle — reception desk/branding wall on the right of frame, calm wall on the left.*
- `card-1.png` — **[CARD]** 1200×750 — *A finished office reception/lobby design.*
- `card-2.png` — **[CARD]** 1200×750 — *A finished open workstation area.*
- `card-3.png` — **[CARD]** 1200×750 — *A finished meeting/conference room.*
- `card-4.png` — **[CARD]** 1200×750 — *A finished executive cabin/private office.*
- `material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of a wood finish texture.*
- `material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a glass partition detail.*
- `material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a metal/aluminum frame detail.*
- `material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of office flooring (vinyl/laminate) texture.*

## Interior Design — turnkey homes (special layout, `/interior-design/turnkey-home-interiors`)

- `interior/turnkey-home-interiors/hero.png` — **[HERO]** 1920×1080 — *A finished full-home interior, wide living space shot — furnished seating and decor on the right of frame, calm wall/window on the left.*
- `interior/turnkey-home-interiors/room-living.png` — **[ROOM]** 1600×900 — *A finished, fully styled living room.*
- `interior/turnkey-home-interiors/room-kitchen.png` — **[ROOM]** 1600×900 — *A finished modular kitchen.*
- `interior/turnkey-home-interiors/room-bedroom.png` — **[ROOM]** 1600×900 — *A finished master bedroom.*
- `interior/turnkey-home-interiors/room-guest.png` — **[ROOM]** 1600×900 — *A finished guest bedroom.*
- `interior/turnkey-home-interiors/room-dining.png` — **[ROOM]** 1600×900 — *A finished dining area.*
- `interior/turnkey-home-interiors/material-1.png` — **[MATERIAL]** 1000×1000 — *Close-up of a wood veneer finish texture.*
- `interior/turnkey-home-interiors/material-2.png` — **[MATERIAL]** 1000×1000 — *Close-up of a laminate finish texture.*
- `interior/turnkey-home-interiors/material-3.png` — **[MATERIAL]** 1000×1000 — *Close-up of a quartz/stone countertop texture.*
- `interior/turnkey-home-interiors/material-4.png` — **[MATERIAL]** 1000×1000 — *Close-up of cabinet hardware/fittings.*

## Interior Design — division overview page (`/interior-design`)

- `interior/overview/hero.png` — **[HERO]** 1920×1080 — *A broad shot representing the interior design division — a beautifully styled open living space on the right of frame, calm wall on the left.*
- `interior/overview/style-1.png` — **[CARD]** 1200×750 — *A living space styled in a Contemporary design aesthetic.*
- `interior/overview/style-2.png` — **[CARD]** 1200×750 — *A living space styled in a Minimalist design aesthetic — clean lines, neutral palette.*
- `interior/overview/style-3.png` — **[CARD]** 1200×750 — *A living space styled in a Classic/traditional design aesthetic.*
- `interior/overview/style-4.png` — **[CARD]** 1200×750 — *A living space styled in an Industrial design aesthetic — exposed brick, metal accents.*

## Home page (`/`)

**Already done** — the hero carousel (5 slides, **[HERO]** pattern) and
both division cards read from `public/images/MainHeroBannersCarousel/`:
`Construction Division.png`, `Interior Design Division.png`,
`Residential Construction.png`, `Kitchen Design.png`, `Living Room
Design.png`. All 5 are already in place — nothing to add here.

Still needed:
- `home/how-we-work-1-consult.png` — **[STEP: CARD]** 1200×750 — *A free client consultation — designer and client at a table reviewing a site plan or laptop.*
- `home/how-we-work-2-design.png` — **[STEP: CARD]** 1200×750 — *A 3D render or structural drawing being reviewed on a screen or printed sheet.*
- `home/how-we-work-3-build.png` — **[STEP: CARD]** 1200×750 — *An active construction or interior fit-out site mid-execution, workers visible.*
- `home/how-we-work-4-handover.png` — **[STEP: CARD]** 1200×750 — *A final walkthrough/handover moment — finished space, client and site manager present.*
- `home/areas-served-map.png` — **[MAP GRAPHIC]** 1200×1200 — *An illustrated map of Pune highlighting the areas/zones Zemitech Urban serves, with simple pin markers, in the brand's navy/green palette.*

## About page (`/about`)

- `about/hero-about.png` — **[HERO]** 1920×1080 — *The Zemitech Urban team or office/site setting on the right of frame, calm wall or sky on the left.*
- `about/office-team.png` — **[PORTRAIT BLOCK]** 1000×1250 — *A candid shot of the team working together in the office.*
- `about/timeline-2019-founding.png` — **[DOC PHOTO]** 1200×900 — *A small founding-era office or early project site, documentary style — evokes 2019.*
- `about/timeline-2022-division-split.png` — **[DOC PHOTO]** 1200×900 — *A team planning/strategy meeting, evoking the company splitting into Construction and Interior Design divisions.*
- `about/timeline-2024-scale.png` — **[DOC PHOTO]** 1200×900 — *A larger, busier office or multiple active project sites, evoking growth/scale.*
- `about/office-exterior.png` — **[DOC PHOTO]** 1200×900 — *The exterior of a modern office building.*
- `about/team-site-review.png` — **[DOC PHOTO]** 1200×900 — *Team members doing an on-site review/walkthrough at a construction or interior site.*
- `about/design-studio.png` — **[DOC PHOTO]** 1200×900 — *An interior design studio — material samples, mood boards, desks with design work.*
- `about/site-walkthrough.png` — **[DOC PHOTO]** 1200×900 — *A site manager walking a client through an active construction site.*

## Team page (`/team`)

- `team/hero-team.png` — **[HERO]** 1920×1080 — *A professional team/office setting on the right of frame, calm wall on the left.* (Leadership photos are intentionally NOT images — see below.)

## Projects listing page hero (`/projects`)

- `projects/hero-projects.png` — **[HERO]** 1920×1080 — *A completed showcase project (finished home exterior or interior) on the right of frame, calm background on the left.* Individual project photos are uploaded per-project through `/admin` instead.

## Gallery page (`/gallery`)

- `gallery/hero-gallery.png` — **[HERO]** 1920×1080 — *A visually striking finished interior or exterior shot on the right of frame, calm background on the left.* (The gallery grid itself pulls from Supabase project photos — nothing else needed.)

## Contact / Inquiry

- `contact/hero-contact.png` — **[HERO]** 1920×1080 — *An inviting office reception or exterior on the right of frame, calm background on the left.*
- `contact/office-exterior.png` — **[DOC PHOTO]** 1200×900 — *The exterior of the Zemitech Urban office building/entrance.*
- `inquiry/hero-inquiry.png` — **[HERO]** 1920×1080 — *A friendly consultation scene (team member on a call or greeting a client) on the right of frame, calm background on the left.*
- `inquiry/consultation-call.png` — **[DOC PHOTO]** 1200×900 — *A team member on a phone/video consultation call at a desk, notepad and laptop visible.*

## Certifications (`/certifications`)

- `certifications/hero-certifications.png` — **[HERO]** 1920×1080 — *A quality-inspection moment on an active site on the right of frame, calm background on the left.*
- `certifications/quality-check-structural.png` — **[DOC PHOTO]** 1200×900 — *An engineer performing a structural quality check on-site (measuring, inspecting RCC work).*
- `certifications/quality-check-electrical.png` — **[DOC PHOTO]** 1200×900 — *An electrician performing an electrical quality check (wiring, panel inspection).*
- `certifications/quality-check-interior-installation.png` — **[DOC PHOTO]** 1200×900 — *A quality check during interior installation (cabinetry or fixture being inspected/fitted).*
- `certifications/quality-check-interior-finish.png` — **[DOC PHOTO]** 1200×900 — *A quality check on a finished interior surface (paint, laminate, or veneer finish being inspected).*
- `certifications/site-safety-ppe.png` — **[DOC PHOTO]** 1200×900 — *Site workers wearing full PPE (helmets, vests, safety boots) on an active construction site.*

## Blog listing page hero

- `blog/hero-blog.png` — **[HERO]** 1920×1080 — *A construction or interior design scene evoking articles/insights, on the right of frame, calm background on the left.* (Post covers are uploaded per-post through `/admin` instead.)

## Homepage service carousel (`components/sections/ServiceCarousel.tsx`)

- `services/service-villa.png` — **[SERVICE TILE]** 1600×900 — *A completed independent villa exterior.*
- `services/service-civil.png` — **[SERVICE TILE]** 1600×900 — *An RCC structural frame under construction — columns, beams, formwork.*
- `services/service-industrial.png` — **[SERVICE TILE]** 1600×900 — *A completed pre-engineered steel warehouse exterior.*
- `services/service-kitchen.png` — **[SERVICE TILE]** 1600×900 — *A finished modular kitchen.*
- `services/service-living.png` — **[SERVICE TILE]** 1600×900 — *A finished, styled living room.*
- `services/service-bedroom.png` — **[SERVICE TILE]** 1600×900 — *A finished master bedroom.*
- `services/service-turnkey.png` — **[SERVICE TILE]** 1600×900 — *A finished full-home interior, wide shot showing multiple furnished spaces.*

## Social preview

- `og/zemitech-urban-og.png` — **[OG]** 1200×630 — *A striking finished project photo (villa exterior or styled living room) filling most of the frame, with the Zemitech Urban logo and the tagline "Building & Renovation" placed in a clear area (e.g. a bottom or side band) in navy/green brand colors — legible as a small thumbnail.*

---

## Not photos — intentionally

- **Team leadership** (`lib/data/team.ts`) and **testimonials**
  (`lib/data/testimonials.ts`) show initials avatars, not photos, because
  earlier placeholder photos were showing unrelated stock people under real
  staff/client names. If you want real headshots, add a `photo` field back
  to `TeamMember` in `lib/data/team.ts` and update
  `components/ui/InitialsAvatar.tsx` usage in `app/team/page.tsx` and
  `components/sections/TestimonialsSection.tsx` to use them.
