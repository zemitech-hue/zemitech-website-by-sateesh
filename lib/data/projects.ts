export type GalleryImage = { src: string; alt: string };
export type ClientQuote = { quote: string; author: string; location: string };

export type Project = {
  slug: string;
  title: string;
  category: "residential" | "commercial" | "infrastructure" | "interior";
  location: string;
  year: string;
  area: string;
  summary: string;
  description: string[];
  scope: string[];
  challenge: string;
  solution: string;
  coverImage: string;
  galleryDetailed: GalleryImage[];
  clientQuote?: ClientQuote;
};

// A representative, honest set of completed projects — not an exhaustive
// portfolio. Each project has its own dedicated photo set (no shared/reused
// images across projects). Swap photos via public/images/projects/<slug>/.
export const projects: Project[] = [
  {
    slug: "narhe-hillcrest-villa",
    title: "Hillcrest Villa",
    category: "residential",
    location: "Narhe, Pune",
    year: "2025",
    area: "3,200 sq. ft.",
    summary: "A 4BHK independent villa with a vastu-aligned layout and rooftop garden.",
    description: [
      "Hillcrest Villa was built for a joint family requiring independent floors with a shared ground-floor living space.",
      "The brief called for natural cross-ventilation across all bedrooms and a rooftop garden usable through Pune's monsoon season.",
      "We delivered the project as a G+1 structure with vastu-aligned room placement, a covered rooftop pergola for monsoon usability, and stage-wise billing across a 9-month build from foundation to handover.",
    ],
    scope: ["Full construction", "Structural engineering", "Rooftop waterproofing", "Landscape boundary work"],
    challenge:
      "The family needed two genuinely independent floors sharing one ground-level living space, on a plot narrow enough that standard column spacing would have blocked cross-ventilation in the rear bedrooms.",
    solution:
      "We adjusted structural column placement to open a ventilation corridor along the rear wall and used a covered pergola structure on the roof so the garden stayed usable even during heavy monsoon weeks.",
    coverImage: "/images/projects/narhe-hillcrest-villa/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/narhe-hillcrest-villa/1.jpg", alt: "Hillcrest Villa front elevation with vastu-aligned entrance" },
      { src: "/images/projects/narhe-hillcrest-villa/2.jpg", alt: "Hillcrest Villa rooftop garden with covered pergola" },
      { src: "/images/projects/narhe-hillcrest-villa/3.jpg", alt: "Hillcrest Villa ground-floor shared living space" },
      { src: "/images/projects/narhe-hillcrest-villa/4.jpg", alt: "Hillcrest Villa master bedroom with cross-ventilation window bay" },
    ],
    clientQuote: {
      quote: "What stood out was the weekly reporting — I always knew exactly where the site stood without having to call anyone. Handover happened within two weeks of the promised date.",
      author: "Prashant Deshmukh",
      location: "Narhe, Pune",
    },
  },
  {
    slug: "wagholi-orchid-residency",
    title: "Orchid Residency",
    category: "residential",
    location: "Wagholi, Pune",
    year: "2024",
    area: "2,600 sq. ft.",
    summary: "A duplex home with an integrated home office and double-height living area.",
    description: [
      "Designed for a work-from-home professional, this duplex prioritizes a quiet, naturally lit office on the mezzanine level.",
      "The double-height living area allowed for a larger clerestory window band, reducing daytime lighting load.",
      "Structural design accounted for the mezzanine's additional floor loading from the outset, avoiding the retrofit constraints that usually come with adding a mezzanine after structural drawings are finalized.",
    ],
    scope: ["Full construction", "Interior fit-out", "Electrical & plumbing"],
    challenge:
      "The client needed a dedicated, quiet home office that didn't feel bolted onto the house as an afterthought, while keeping the ground-floor living area feeling open rather than cut up by a staircase to a mezzanine.",
    solution:
      "We designed a double-height living space with the mezzanine office set back from the main volume, reached by an open staircase that reads as part of the living area, plus a clerestory window band that lights both levels.",
    coverImage: "/images/projects/wagholi-orchid-residency/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/wagholi-orchid-residency/1.jpg", alt: "Orchid Residency double-height living area with clerestory windows" },
      { src: "/images/projects/wagholi-orchid-residency/2.jpg", alt: "Orchid Residency mezzanine home office" },
      { src: "/images/projects/wagholi-orchid-residency/3.jpg", alt: "Orchid Residency open staircase to the mezzanine level" },
      { src: "/images/projects/wagholi-orchid-residency/4.jpg", alt: "Orchid Residency front elevation" },
    ],
  },
  {
    slug: "wagholi-twin-villas",
    title: "Wagholi Twin Villas",
    category: "residential",
    location: "Wagholi, Pune",
    year: "2025",
    area: "5,400 sq. ft. (combined)",
    summary: "Two matching independent villas on adjoining plots, built for siblings sharing a boundary wall.",
    description: [
      "Two siblings purchased adjoining plots and wanted matching villa designs with a shared architectural language, but fully independent construction contracts and timelines.",
      "We ran both builds under one project management structure with synchronized scheduling, so shared boundary-wall and utility-trenching work only happened once instead of twice.",
      "Each villa retained independent material selection within the shared elevation design, giving both families their own finish choices without the exteriors looking mismatched from the street.",
    ],
    scope: ["Full construction (both villas)", "Shared boundary & utility coordination", "Structural engineering", "Landscape work"],
    challenge:
      "Coordinating two legally separate construction contracts on adjoining plots without duplicating shared infrastructure work or letting one villa's schedule slip and delay the other's utility connections.",
    solution:
      "We scheduled shared boundary wall and utility trenching as a single combined work package billed proportionally to each contract, and ran one unified site calendar for both villas.",
    coverImage: "/images/projects/wagholi-twin-villas/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/wagholi-twin-villas/1.jpg", alt: "Wagholi Twin Villas shared boundary wall and driveway" },
      { src: "/images/projects/wagholi-twin-villas/2.jpg", alt: "Wagholi Twin Villas matching front elevations" },
      { src: "/images/projects/wagholi-twin-villas/3.jpg", alt: "Wagholi Twin Villas rooftop terrace" },
      { src: "/images/projects/wagholi-twin-villas/4.jpg", alt: "Wagholi Twin Villas living room interior" },
    ],
    clientQuote: {
      quote: "We used our own architect's plans and Zemitech simply took over structural engineering and execution — no friction, no re-drawing. Site supervisor was present every single day.",
      author: "Vikram Oswal",
      location: "Wagholi, Pune",
    },
  },
  {
    slug: "hinjewadi-techpark-office",
    title: "Meridian Tech Park — Office Fit-out",
    category: "commercial",
    location: "Hinjewadi, Pune",
    year: "2025",
    area: "18,000 sq. ft.",
    summary: "A shell-and-core to move-in-ready office fit-out for a 220-seat IT floor.",
    description: [
      "This project moved a single floor from bare shell to fully operational office within a fixed 70-day window ahead of the client's lease start date.",
      "Coordination across HVAC, fire, and structured cabling vendors was managed on a shared schedule to avoid trade conflicts.",
      "The completed floor included a 220-seat open workstation area, six meeting rooms of varying size, a full pantry, and a dedicated server room with raised flooring and independent cooling.",
    ],
    scope: ["MEP coordination", "Partition & ceiling work", "Fire compliance", "Flooring & branding elements"],
    challenge:
      "70 working days from bare shell to a fully operational 220-seat floor, with the lease start date fixed and non-negotiable, meant zero tolerance for the trade-sequencing conflicts that typically add weeks to commercial fit-outs.",
    solution:
      "We produced a single coordinated MEP drawing covering HVAC, fire sprinkler and structured cabling before any rough-in work began, catching two ceiling-void clashes on paper that would otherwise have cost a combined 9 days on site.",
    coverImage: "/images/projects/hinjewadi-techpark-office/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/hinjewadi-techpark-office/1.jpg", alt: "Meridian Tech Park open workstation floor, 220-seat capacity" },
      { src: "/images/projects/hinjewadi-techpark-office/2.jpg", alt: "Meridian Tech Park reception area" },
      { src: "/images/projects/hinjewadi-techpark-office/3.jpg", alt: "Meridian Tech Park meeting room with glazed partition" },
      { src: "/images/projects/hinjewadi-techpark-office/4.jpg", alt: "Meridian Tech Park server room with raised flooring" },
    ],
    clientQuote: {
      quote: "Our office had to be ready before the lease started. The team coordinated HVAC, fire and electrical vendors on one schedule and we moved in on time.",
      author: "Aniket Rane",
      location: "Hinjewadi, Pune",
    },
  },
  {
    slug: "baner-boutique-showroom-fitout",
    title: "Baner Boutique Showroom Fit-out",
    category: "commercial",
    location: "Baner, Pune",
    year: "2025",
    area: "3,200 sq. ft.",
    summary: "A single-brand furniture showroom fit-out inside an existing retail shell, completed around live neighbouring tenants.",
    description: [
      "This fit-out converted a bare retail shell into a branded showroom for a furniture retailer, inside a building where three other retail units were already trading.",
      "Work had to avoid disrupting the operating hours or customer access of neighbouring tenants sharing the same common corridor and parking access.",
      "The finished showroom includes a double-height display window, a raised product plinth system for merchandising flexibility, and a back-of-house storage and staff area.",
    ],
    scope: ["Interior fit-out", "Facade & signage", "Electrical & lighting design", "Storage & display millwork"],
    challenge:
      "Three neighbouring retail units were already trading in the same building, sharing the common corridor and parking access our work needed to use for material delivery and noisy construction phases.",
    solution:
      "We agreed a fixed early-morning work window with building management for anything generating noise or dust, and scheduled material deliveries before the block's opening hours — keeping the fit-out on its 45-day schedule.",
    coverImage: "/images/projects/baner-boutique-showroom-fitout/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/baner-boutique-showroom-fitout/1.jpg", alt: "Baner Boutique Showroom double-height display window" },
      { src: "/images/projects/baner-boutique-showroom-fitout/2.jpg", alt: "Baner Boutique Showroom raised product plinth display" },
      { src: "/images/projects/baner-boutique-showroom-fitout/3.jpg", alt: "Baner Boutique Showroom interior lighting design" },
      { src: "/images/projects/baner-boutique-showroom-fitout/4.jpg", alt: "Baner Boutique Showroom facade and signage" },
    ],
    clientQuote: {
      quote: "Five retail units, five different tenant timelines, one shell-and-core schedule that didn't slip. That's the part most contractors get wrong.",
      author: "Rohan Bhagwat",
      location: "Baner, Pune",
    },
  },
  {
    slug: "pirangut-green-township-phase1",
    title: "Green Township — Phase 1 Infrastructure",
    category: "infrastructure",
    location: "Pirangut, Pune",
    year: "2024",
    area: "45 acres",
    summary: "Internal roads, drainage and boundary infrastructure for a phased residential township.",
    description: [
      "Phase 1 covered internal road construction, storm-water drainage and boundary wall work across the first 45-acre release of a larger township master plan.",
      "Work was sequenced to hand over possession-ready blocks ahead of the developer's sales timeline.",
      "Drainage was sized against actual site grading and catchment survey data rather than a standard pipe diameter, following waterlogging complaints the developer had experienced on a previous unrelated project.",
    ],
    scope: ["Internal roads", "Storm-water drainage", "Boundary wall", "Utility ducting"],
    challenge:
      "The developer's sales timeline required the first residential blocks to be possession-ready before the remaining 45-acre phase was anywhere near complete, and a previous project of theirs had suffered waterlogging from under-sized drainage.",
    solution:
      "We zoned the 45 acres into independently completable sub-areas and prioritized road, drainage and utility work for the block closest to sales-ready status, sizing storm-water drainage from actual catchment survey data — the first block handed over four weeks ahead of target.",
    coverImage: "/images/projects/pirangut-green-township-phase1/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/pirangut-green-township-phase1/1.jpg", alt: "Green Township Phase 1 internal road under construction" },
      { src: "/images/projects/pirangut-green-township-phase1/2.jpg", alt: "Green Township Phase 1 storm-water drainage installation" },
      { src: "/images/projects/pirangut-green-township-phase1/3.jpg", alt: "Green Township Phase 1 boundary wall stretch" },
      { src: "/images/projects/pirangut-green-township-phase1/4.jpg", alt: "Green Township Phase 1 aerial view of completed zone" },
    ],
    clientQuote: {
      quote: "Phase 1 handover happened block by block, exactly as planned against our sales timeline. Drainage and road work never held up a single possession date.",
      author: "Sandeep Joshi",
      location: "Pirangut, Pune",
    },
  },
  {
    slug: "narhe-layout-roads-drainage",
    title: "Narhe Residential Layout — Roads & Drainage",
    category: "infrastructure",
    location: "Narhe, Pune",
    year: "2025",
    area: "18 acres",
    summary: "Internal road network and drainage upgrade for an existing residential layout with 40+ independent plots.",
    description: [
      "Unlike a greenfield township, this project retrofitted internal roads and drainage into an existing 18-acre residential layout where most plots already had homes built or under construction.",
      "Work had to proceed in short sections with continuous access maintained for residents already living on site, rather than closing the layout for a single continuous construction period.",
      "We resurveyed drainage gradients across the layout, since the original informal road grading predated any formal civil design and had caused recurring monsoon waterlogging at two low points.",
    ],
    scope: ["Internal road resurfacing", "Storm-water drainage retrofit", "Utility ducting coordination"],
    challenge:
      "Residents were already living in homes across the layout, so roads couldn't be closed for extended continuous work, and two known low points flooded every monsoon under the original informal grading.",
    solution:
      "We worked the layout in short, sequential road sections with steel plate crossings maintaining vehicle access at all times, and re-graded drainage through the two flood-prone low points first.",
    coverImage: "/images/projects/narhe-layout-roads-drainage/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/narhe-layout-roads-drainage/1.jpg", alt: "Narhe Residential Layout road resurfacing in progress" },
      { src: "/images/projects/narhe-layout-roads-drainage/2.jpg", alt: "Narhe Residential Layout drainage retrofit at a former flood point" },
      { src: "/images/projects/narhe-layout-roads-drainage/3.jpg", alt: "Narhe Residential Layout utility ducting coordination" },
      { src: "/images/projects/narhe-layout-roads-drainage/4.jpg", alt: "Narhe Residential Layout completed road section" },
    ],
  },
  {
    slug: "kondhwa-3bhk-turnkey-interior",
    title: "Kondhwa 3BHK — Turnkey Interior",
    category: "interior",
    location: "Kondhwa, Pune",
    year: "2025",
    area: "1,450 sq. ft.",
    summary: "Complete turnkey interior including modular kitchen, all bedrooms and living area.",
    description: [
      "A full-home interior for a young family's first owned apartment, with an L-shape modular kitchen, three custom wardrobes and an integrated study nook in the second bedroom.",
      "The family's biggest concern going in was mismatched expectations between a render and the final install — we addressed this by having our own manufacturing team review every 3D render before client presentation.",
      "The full scope was designed and installed in 58 working days from design approval, with all three wardrobes and the kitchen manufactured in parallel to compress the schedule.",
    ],
    scope: ["Modular kitchen (L-shape)", "3 wardrobes", "False ceiling & lighting", "Living room TV unit"],
    challenge:
      "As a first-time apartment owner, the client's biggest fear wasn't cost — it was the gap between the rendered design and what actually gets built, a common complaint they'd heard from friends who'd used other interior firms.",
    solution:
      "Every 3D render was reviewed by our own manufacturing team before it was ever shown to the client, so nothing was presented that couldn't be built at the approved specification and budget.",
    coverImage: "/images/projects/kondhwa-3bhk-turnkey-interior/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/kondhwa-3bhk-turnkey-interior/1.jpg", alt: "Kondhwa 3BHK L-shape modular kitchen" },
      { src: "/images/projects/kondhwa-3bhk-turnkey-interior/2.jpg", alt: "Kondhwa 3BHK master bedroom wardrobe" },
      { src: "/images/projects/kondhwa-3bhk-turnkey-interior/3.jpg", alt: "Kondhwa 3BHK living room TV unit and false ceiling" },
      { src: "/images/projects/kondhwa-3bhk-turnkey-interior/4.jpg", alt: "Kondhwa 3BHK second bedroom study nook" },
    ],
    clientQuote: {
      quote: "We saw the 3D render of every room before anything was ordered, so there were no surprises when the kitchen and wardrobes were installed. Exactly what we approved.",
      author: "Ritika Shah",
      location: "Kondhwa, Pune",
    },
  },
  {
    slug: "viman-nagar-modular-kitchen",
    title: "Viman Nagar Parallel Kitchen",
    category: "interior",
    location: "Viman Nagar, Pune",
    year: "2025",
    area: "110 sq. ft. kitchen",
    summary: "A parallel modular kitchen with concealed appliance housing and a breakfast counter.",
    description: [
      "This galley-style kitchen needed to fit a full appliance suite — built-in oven, microwave and chimney — within a narrow footprint without feeling cramped.",
      "We used tall-unit concealed housing on one run and kept the opposing counter clear for prep and cooking, protecting the 4 ft clearance a parallel layout needs to feel usable.",
      "A fold-down breakfast counter was added at the open end of the galley, giving the kitchen informal seating without extending its footprint into the adjoining passage.",
    ],
    scope: ["Modular kitchen (parallel)", "Appliance housing", "Under-cabinet lighting"],
    challenge:
      "Fitting a full appliance suite — chimney, built-in oven and microwave — into a genuinely narrow galley footprint without dropping below the 4 ft clearance a parallel kitchen needs to remain usable.",
    solution:
      "We concentrated tall-unit appliance housing entirely on one run of the galley, keeping the opposing wall as clear counter and storage, and added a fold-down breakfast counter at the open end instead of extending the kitchen's footprint.",
    coverImage: "/images/projects/viman-nagar-modular-kitchen/cover.jpg",
    galleryDetailed: [
      { src: "/images/projects/viman-nagar-modular-kitchen/1.jpg", alt: "Viman Nagar parallel kitchen, both counter runs" },
      { src: "/images/projects/viman-nagar-modular-kitchen/2.jpg", alt: "Viman Nagar kitchen concealed appliance housing" },
      { src: "/images/projects/viman-nagar-modular-kitchen/3.jpg", alt: "Viman Nagar kitchen fold-down breakfast counter" },
      { src: "/images/projects/viman-nagar-modular-kitchen/4.jpg", alt: "Viman Nagar kitchen hob and chimney installation" },
    ],
    clientQuote: {
      quote: "The corner storage in our L-shape kitchen fits things we used to just pile on the counter. Installation was done in under a week once the units arrived.",
      author: "Sunita Patil",
      location: "Viman Nagar, Pune",
    },
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "interior", label: "Interior Design" },
] as const;
