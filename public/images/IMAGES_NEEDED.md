# Images needed

The site currently has **no photos** except the real logo in `brand/`. Every
path below is read by the code — drop a file at that exact path (same name,
same folder) and it appears on the site automatically, no code changes
needed. Until a file exists, that slot shows a clean "Image Coming Soon"
placeholder instead of a broken image.

**Recommended sizes:** hero images ≈ 1920×1080 (landscape, they're full-bleed
backgrounds); card images ≈ 1200×750 (16:10); material/style swatches ≈
1000×1000 (square). JPG or PNG, ideally under ~500KB each after export.

Use real photos of actual completed projects wherever you have them —
that's the whole point of replacing the placeholders. Where you don't have a
specific photo yet (e.g. a generic "material finish" swatch), any on-brand
photo works.

---

## Construction — 6 sub-services

Each of these needs: 1 hero + 4 "capability" cards + 4 material photos.

- `construction/residential/` — hero, card-1..4 (villa/duplex/multi-floor/turnkey examples), material-1..4 (concrete, steel, blocks, flooring)
- `construction/commercial/` — hero, card-1..4 (office/startup/conference/retail examples), material-1..4 (facade glazing, partitions, flooring, ceiling)
- `construction/infrastructure/` — hero, card-1..4 (roads/site development/drainage/boundary), material-1..4 (road base, drainage pipe, boundary panels, lighting)
- `construction/industrial/` — hero, card-1..4 (warehouse/PEB shed/storage/manufacturing), material-1..4 (loading dock, flooring, steel trusses, drainage)
- `construction/renovation/` — hero, card-1..4 (home overhaul/kitchen/living room/structural), material-1..4 (tiles, paint, sanitary fittings, joinery)
- `construction/structural-civil-engineering/` — hero, card-1..4 (RCC framing/foundation/masonry/site infra), material-1..4 (site checks, reinforcement, concrete testing, curing)

## Construction — division overview page (`/construction`)

- `construction/overview/hero.jpg`
- `construction/overview/material-1..4.jpg` — general material standards shown on the overview page

## Interior Design — 5 sub-services (same pattern as construction)

- `interior/kitchen/` — hero, card-1..4 (L-shape/U-shape/parallel/island layouts), material-1..4 (laminate, veneer, acrylic, glass)
- `interior/living-room/` — hero, card-1..4 (TV unit/feature wall/false ceiling/storage), material-1..4 (veneer, fluted panels, laminate, stone)
- `interior/bedroom/` — hero, card-1..4 (bed/wardrobe/walk-in closet/study nook), material-1..4 (veneer, laminate, wood texture, hardware)
- `interior/office/` — hero, card-1..4 (reception/workstations/meeting room/executive cabin), material-1..4 (wood, glass, metal, flooring)
- `interior/custom-joinery/` — hero, card-1..4 (panelling/media console/wardrobe/partitions), material-1..4 (wood texture, veneer, laminate, PU finish)

## Interior Design — turnkey homes (special layout, `/interior-design/turnkey-home-interiors`)

- `interior/turnkey-home-interiors/hero.jpg`
- `interior/turnkey-home-interiors/room-living.jpg`, `room-kitchen.jpg`, `room-bedroom.jpg`, `room-guest.jpg`, `room-dining.jpg` — one photo per room type
- `interior/turnkey-home-interiors/material-1..4.jpg`

## Interior Design — division overview page (`/interior-design`)

- `interior/overview/hero.jpg`
- `interior/overview/style-1..4.jpg` — one per design style shown (Contemporary, Minimalist, Classic, Industrial)

## Home page (`/`)

- `home/hero-1-construction.jpg` … `hero-7-living-room.jpg` — 7 hero carousel slides
- `home/division-construction.jpg`, `division-interior.jpg` — the two division cards
- `home/how-we-work-1-consult.jpg` … `how-we-work-4-handover.jpg` — 4 process-step photos
- `home/areas-served-map.jpg` — map or area-served visual

## About page (`/about`)

- `about/hero-about.jpg`
- `about/office-team.jpg` — used inline in the "our story" section
- `about/timeline-2019-founding.jpg`, `timeline-2022-division-split.jpg`, `timeline-2024-scale.jpg` — 3 milestone photos
- `about/office-exterior.jpg`, `team-site-review.jpg`, `design-studio.jpg`, `site-walkthrough.jpg` — "where we work" image grid (4 photos)

## Team page (`/team`)

- `team/hero-team.jpg` — leadership photos are intentionally NOT images (see below)

## Projects portfolio — 9 projects, each needs 1 cover + 4 gallery photos

Folders: `projects/narhe-hillcrest-villa/`, `wagholi-orchid-residency/`,
`wagholi-twin-villas/`, `hinjewadi-techpark-office/`,
`baner-boutique-showroom-fitout/`, `pirangut-green-township-phase1/`,
`narhe-layout-roads-drainage/`, `kondhwa-3bhk-turnkey-interior/`,
`viman-nagar-modular-kitchen/` — each needs `cover.jpg`, `1.jpg`, `2.jpg`,
`3.jpg`, `4.jpg` (real photos of that specific project, once available).

- `projects/hero-projects.jpg` — portfolio list page hero

## Gallery page (`/gallery`)

- `gallery/hero-gallery.jpg` (the gallery grid itself pulls from the project photos above — nothing else needed)

## Contact / Inquiry

- `contact/hero-contact.jpg`, `contact/office-exterior.jpg`
- `inquiry/hero-inquiry.jpg`, `inquiry/consultation-call.jpg`

## Certifications (`/certifications`)

- `certifications/hero-certifications.jpg`
- `certifications/quality-check-structural.jpg`, `quality-check-electrical.jpg`, `quality-check-interior-installation.jpg`, `quality-check-interior-finish.jpg`
- `certifications/site-safety-ppe.jpg`

## Blog (`/blog`) — 9 posts, several inline images each

- `blog/hero-blog.jpg` (listing page)
- Per-post cover + inline images — see `lib/data/blog.ts` for the exact filenames each post references (they follow the pattern `blog/<topic>-cover.jpg`, `blog/<topic>-<detail>.jpg`).

## Homepage service carousel (`components/sections/ServiceCarousel.tsx`)

- `services/service-villa.jpg`, `service-commercial.jpg`, `service-infrastructure.jpg`, `service-civil.jpg`, `service-kitchen.jpg`, `service-living.jpg`, `service-bedroom.jpg`, `service-turnkey.jpg`

## Social preview

- `og/zemitech-urban-og.jpg` — 1200×630, shown when the site is shared on WhatsApp/social media

---

## Not photos — intentionally

- **Team leadership** (`lib/data/team.ts`) and **testimonials**
  (`lib/data/testimonials.ts`) show initials avatars, not photos, because
  earlier placeholder photos were showing unrelated stock people under real
  staff/client names. If you want real headshots, add a `photo` field back
  to `TeamMember` in `lib/data/team.ts` and update
  `components/ui/InitialsAvatar.tsx` usage in `app/team/page.tsx` and
  `components/sections/TestimonialsSection.tsx` to use them.
