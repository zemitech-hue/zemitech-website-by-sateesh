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
  gallery: string[]; // kept as plain src[] for backward-compat consumers (Gallery page flatMap)
  galleryDetailed: GalleryImage[]; // same images, with per-project alt text, used on the detail page
  clientQuote?: ClientQuote;
};

// NOTE: All entries below are placeholder/demo content — swap for real project
// photos and details via Admin → Projects once available. Slugs are stable and
// safe to keep even after content changes.
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
      "We adjusted structural column placement to open a ventilation corridor along the rear wall and used a covered pergola structure on the roof so the garden stayed usable even during heavy monsoon weeks — a request we hadn't priced for in the original brief but built into the BOQ once soil testing was complete.",
    coverImage: "/images/projects/hillcrest-villa-cover.jpg",
    gallery: [
      "/images/projects/hillcrest-villa-1.jpg",
      "/images/projects/hillcrest-villa-2.jpg",
      "/images/projects/hillcrest-villa-3.jpg",
      "/images/projects/pool/residential-01.jpg",
      "/images/projects/pool/residential-02.jpg",
      "/images/projects/pool/residential-03.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/hillcrest-villa-1.jpg", alt: "Hillcrest Villa front elevation with vastu-aligned entrance" },
      { src: "/images/projects/hillcrest-villa-2.jpg", alt: "Hillcrest Villa rooftop garden with covered pergola" },
      { src: "/images/projects/hillcrest-villa-3.jpg", alt: "Hillcrest Villa ground-floor shared living space" },
      { src: "/images/projects/pool/residential-01.jpg", alt: "Hillcrest Villa staircase connecting the two independent floors" },
      { src: "/images/projects/pool/residential-02.jpg", alt: "Hillcrest Villa master bedroom with cross-ventilation window bay" },
      { src: "/images/projects/pool/residential-03.jpg", alt: "Hillcrest Villa compound wall and boundary landscaping" },
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
      "We designed a double-height living space with the mezzanine office set back from the main volume, reached by an open staircase that reads as part of the living area rather than a separate corridor — plus a clerestory window band that lights both levels without adding to the office's direct sightline into the living room.",
    coverImage: "/images/projects/orchid-residency-cover.jpg",
    gallery: [
      "/images/projects/orchid-residency-1.jpg",
      "/images/projects/orchid-residency-2.jpg",
      "/images/projects/pool/residential-04.jpg",
      "/images/projects/pool/residential-05.jpg",
      "/images/projects/pool/residential-06.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/orchid-residency-1.jpg", alt: "Orchid Residency double-height living area with clerestory windows" },
      { src: "/images/projects/orchid-residency-2.jpg", alt: "Orchid Residency mezzanine home office" },
      { src: "/images/projects/pool/residential-04.jpg", alt: "Orchid Residency open staircase to the mezzanine level" },
      { src: "/images/projects/pool/residential-05.jpg", alt: "Orchid Residency front elevation" },
      { src: "/images/projects/pool/residential-06.jpg", alt: "Orchid Residency kitchen window bay" },
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
      "We scheduled shared boundary wall and utility trenching as a single combined work package billed proportionally to each contract, and ran one unified site calendar for both villas so structural stages stayed synchronized even though material and finish decisions were made independently by each family.",
    coverImage: "/images/projects/wagholi-twin-villas-cover.jpg",
    gallery: [
      "/images/projects/pool/residential-07.jpg",
      "/images/projects/pool/residential-08.jpg",
      "/images/projects/pool/residential-09.jpg",
      "/images/projects/pool/residential-10.jpg",
      "/images/projects/pool/residential-11.jpg",
      "/images/projects/pool/residential-01.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/residential-07.jpg", alt: "Wagholi Twin Villas shared boundary wall and driveway" },
      { src: "/images/projects/pool/residential-08.jpg", alt: "Wagholi Twin Villas matching front elevations" },
      { src: "/images/projects/pool/residential-09.jpg", alt: "Wagholi Twin Villas rooftop terrace" },
      { src: "/images/projects/pool/residential-10.jpg", alt: "Wagholi Twin Villas living room interior, Villa A" },
      { src: "/images/projects/pool/residential-11.jpg", alt: "Wagholi Twin Villas living room interior, Villa B" },
      { src: "/images/projects/pool/residential-01.jpg", alt: "Wagholi Twin Villas night elevation view" },
    ],
    clientQuote: {
      quote: "We used our own architect's plans and Zemitech simply took over structural engineering and execution — no friction, no re-drawing. Site supervisor was present every single day.",
      author: "Vikram Oswal",
      location: "Wagholi, Pune",
    },
  },
  {
    slug: "pirangut-farmhouse-retreat",
    title: "Pirangut Farmhouse Retreat",
    category: "residential",
    location: "Pirangut, Pune",
    year: "2024",
    area: "4,100 sq. ft.",
    summary: "A weekend farmhouse with a wraparound veranda, built for a family relocating occasional weekends outside the city.",
    description: [
      "This farmhouse sits on a larger agricultural plot on the outskirts of Pirangut, designed for occasional weekend use rather than daily living, which changed several structural and finish decisions from a typical city home.",
      "A wraparound veranda was central to the brief — usable shaded outdoor space through most of the year, structurally tied into the main roof rather than added as a lean-to extension.",
      "Because the home sits unoccupied for stretches between visits, we specified higher-durability exterior finishes and simplified plumbing shut-off points, so the property doesn't need active maintenance between weekend stays.",
    ],
    scope: ["Full construction", "Wraparound veranda structure", "Rainwater harvesting", "Boundary & access road"],
    challenge:
      "Building a home that would sit unoccupied for stretches at a time meant standard finish and plumbing specifications weren't appropriate — the family needed a property that tolerated neglect between visits without deteriorating.",
    solution:
      "We specified higher-durability exterior paint and waterproofing rated for extended unmaintained exposure, and designed simplified, clearly labelled plumbing shut-off points so a caretaker visiting periodically could isolate water supply in minutes rather than needing a plumber on call.",
    coverImage: "/images/projects/pirangut-farmhouse-retreat-cover.jpg",
    gallery: [
      "/images/projects/pool/residential-02.jpg",
      "/images/projects/pool/residential-04.jpg",
      "/images/projects/pool/residential-06.jpg",
      "/images/projects/pool/residential-08.jpg",
      "/images/projects/pool/residential-09.jpg",
      "/images/projects/pool/residential-12.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/residential-02.jpg", alt: "Pirangut Farmhouse Retreat wraparound veranda" },
      { src: "/images/projects/pool/residential-04.jpg", alt: "Pirangut Farmhouse Retreat front elevation with farmland backdrop" },
      { src: "/images/projects/pool/residential-06.jpg", alt: "Pirangut Farmhouse Retreat kitchen window bay overlooking the veranda" },
      { src: "/images/projects/pool/residential-08.jpg", alt: "Pirangut Farmhouse Retreat living room with exposed structural beams" },
      { src: "/images/projects/pool/residential-09.jpg", alt: "Pirangut Farmhouse Retreat rainwater harvesting installation" },
      { src: "/images/projects/pool/residential-12.jpg", alt: "Pirangut Farmhouse Retreat access road and boundary" },
    ],
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
      "We produced a single coordinated MEP drawing covering HVAC, fire sprinkler and structured cabling before any rough-in work began, and ran all three trades against that shared reference rather than sequentially — catching two ceiling-void clashes on paper that would otherwise have cost a combined 9 days on site.",
    coverImage: "/images/projects/meridian-office-cover.jpg",
    gallery: [
      "/images/projects/meridian-office-1.jpg",
      "/images/projects/meridian-office-2.jpg",
      "/images/projects/pool/commercial-01.jpg",
      "/images/projects/pool/commercial-02.jpg",
      "/images/projects/pool/commercial-03.jpg",
      "/images/projects/pool/commercial-04.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/meridian-office-1.jpg", alt: "Meridian Tech Park open workstation floor, 220-seat capacity" },
      { src: "/images/projects/meridian-office-2.jpg", alt: "Meridian Tech Park reception area" },
      { src: "/images/projects/pool/commercial-01.jpg", alt: "Meridian Tech Park meeting room with glazed partition" },
      { src: "/images/projects/pool/commercial-02.jpg", alt: "Meridian Tech Park server room with raised flooring" },
      { src: "/images/projects/pool/commercial-03.jpg", alt: "Meridian Tech Park pantry and breakout area" },
      { src: "/images/projects/pool/commercial-04.jpg", alt: "Meridian Tech Park corridor and fire exit signage" },
    ],
    clientQuote: {
      quote: "Our office had to be ready before the lease started. The team coordinated HVAC, fire and electrical vendors on one schedule and we moved in on time.",
      author: "Aniket Rane",
      location: "Hinjewadi, Pune",
    },
  },
  {
    slug: "baner-highstreet-retail",
    title: "Baner High Street Retail Block",
    category: "commercial",
    location: "Baner, Pune",
    year: "2024",
    area: "6,400 sq. ft.",
    summary: "Shell-and-core construction for a 5-unit retail block on a high-footfall street.",
    description: [
      "Built for a developer leasing to individual retail tenants, this project required flexible shell-and-core units that could be fit out independently by each tenant's own designer.",
      "Each unit was designed with its own utility metering and structural flexibility for future partition changes, since tenant mix wasn't finalized before construction began.",
      "The building envelope and shared facade were completed first specifically so leasing marketing could begin before individual units were tenant-ready.",
    ],
    scope: ["Civil & structural work", "Common area finishing", "Signage zone planning"],
    challenge:
      "The developer needed to begin leasing marketing before knowing which tenants would occupy which units, which meant the shell couldn't assume any specific fit-out — every unit had to support widely different future uses without rework.",
    solution:
      "We designed independent utility metering per unit and left internal partition walls as non-structural, so each eventual tenant's designer could reconfigure their unit's layout freely without touching the building's core structural or electrical systems.",
    coverImage: "/images/projects/baner-retail-cover.jpg",
    gallery: [
      "/images/projects/baner-retail-1.jpg",
      "/images/projects/pool/commercial-05.jpg",
      "/images/projects/pool/commercial-06.jpg",
      "/images/projects/pool/commercial-07.jpg",
      "/images/projects/pool/commercial-08.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/baner-retail-1.jpg", alt: "Baner High Street Retail Block shell-and-core facade" },
      { src: "/images/projects/pool/commercial-05.jpg", alt: "Baner High Street Retail Block individual unit shell interior" },
      { src: "/images/projects/pool/commercial-06.jpg", alt: "Baner High Street Retail Block signage zone above storefronts" },
      { src: "/images/projects/pool/commercial-07.jpg", alt: "Baner High Street Retail Block common area paving" },
      { src: "/images/projects/pool/commercial-08.jpg", alt: "Baner High Street Retail Block street-facing elevation" },
    ],
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
      "We agreed a fixed early-morning work window with building management for anything generating noise or dust, and scheduled material deliveries before the block's opening hours — keeping the fit-out on its 45-day schedule without a single disruption complaint from neighbouring tenants.",
    coverImage: "/images/projects/baner-boutique-showroom-fitout-cover.jpg",
    gallery: [
      "/images/projects/pool/commercial-01.jpg",
      "/images/projects/pool/commercial-03.jpg",
      "/images/projects/pool/commercial-05.jpg",
      "/images/projects/pool/commercial-07.jpg",
      "/images/projects/pool/commercial-02.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/commercial-01.jpg", alt: "Baner Boutique Showroom double-height display window" },
      { src: "/images/projects/pool/commercial-03.jpg", alt: "Baner Boutique Showroom raised product plinth display" },
      { src: "/images/projects/pool/commercial-05.jpg", alt: "Baner Boutique Showroom interior lighting design" },
      { src: "/images/projects/pool/commercial-07.jpg", alt: "Baner Boutique Showroom back-of-house storage area" },
      { src: "/images/projects/pool/commercial-02.jpg", alt: "Baner Boutique Showroom facade and signage" },
    ],
    clientQuote: {
      quote: "Five retail units, five different tenant timelines, one shell-and-core schedule that didn't slip. That's the part most contractors get wrong.",
      author: "Rohan Bhagwat",
      location: "Baner, Pune",
    },
  },
  {
    slug: "hinjewadi-coworking-space",
    title: "Hinjewadi Co-working Space",
    category: "commercial",
    location: "Hinjewadi, Pune",
    year: "2024",
    area: "12,500 sq. ft.",
    summary: "A flexible co-working fit-out with a mix of open desks, private cabins and bookable meeting pods.",
    description: [
      "This co-working operator needed a floor that could flex between hot-desking, dedicated desks and private cabins without a full re-fit each time their tenant mix changed.",
      "We designed a modular partition system on a fixed structural grid, so internal walls can be reconfigured by the operator's own facilities team without touching electrical or HVAC infrastructure.",
      "The floor includes four bookable meeting pods, a phone-booth cluster for private calls, and a central café/breakout zone designed as the space's main gathering point.",
    ],
    scope: ["MEP coordination", "Modular partition system", "Meeting pod fit-out", "Café & breakout zone"],
    challenge:
      "The operator's tenant mix — and therefore desk layout — changes every few months as memberships shift, but a full re-fit for every change wasn't commercially viable.",
    solution:
      "We planned electrical, data and HVAC outlets on a fixed grid dense enough to support multiple future layouts, then built internal partitions as a demountable modular system rather than fixed drywall — the operator has since reconfigured roughly a third of the floor twice without needing to call us back for infrastructure work.",
    coverImage: "/images/projects/hinjewadi-coworking-space-cover.jpg",
    gallery: [
      "/images/projects/pool/commercial-02.jpg",
      "/images/projects/pool/commercial-04.jpg",
      "/images/projects/pool/commercial-06.jpg",
      "/images/projects/pool/commercial-08.jpg",
      "/images/projects/pool/commercial-01.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/commercial-02.jpg", alt: "Hinjewadi Co-working Space open desk area" },
      { src: "/images/projects/pool/commercial-04.jpg", alt: "Hinjewadi Co-working Space bookable meeting pod" },
      { src: "/images/projects/pool/commercial-06.jpg", alt: "Hinjewadi Co-working Space café and breakout zone" },
      { src: "/images/projects/pool/commercial-08.jpg", alt: "Hinjewadi Co-working Space phone-booth cluster" },
      { src: "/images/projects/pool/commercial-01.jpg", alt: "Hinjewadi Co-working Space private cabin row" },
    ],
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
      "We zoned the 45 acres into independently completable sub-areas and prioritized road, drainage and utility work for the block closest to sales-ready status, while sizing storm-water drainage from actual catchment survey data rather than a standard specification — the first block handed over four weeks ahead of the developer's internal target.",
    coverImage: "/images/projects/green-township-cover.jpg",
    gallery: [
      "/images/projects/green-township-1.jpg",
      "/images/projects/green-township-2.jpg",
      "/images/projects/pool/infrastructure-01.jpg",
      "/images/projects/pool/infrastructure-02.jpg",
      "/images/projects/pool/infrastructure-03.jpg",
      "/images/projects/pool/infrastructure-04.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/green-township-1.jpg", alt: "Green Township Phase 1 internal road under construction" },
      { src: "/images/projects/green-township-2.jpg", alt: "Green Township Phase 1 storm-water drainage installation" },
      { src: "/images/projects/pool/infrastructure-01.jpg", alt: "Green Township Phase 1 boundary wall stretch" },
      { src: "/images/projects/pool/infrastructure-02.jpg", alt: "Green Township Phase 1 clubhouse amenity block under construction" },
      { src: "/images/projects/pool/infrastructure-03.jpg", alt: "Green Township Phase 1 street lighting installation" },
      { src: "/images/projects/pool/infrastructure-04.jpg", alt: "Green Township Phase 1 aerial view of completed zone" },
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
      "We worked the layout in short, sequential road sections with steel plate crossings maintaining vehicle access at all times, and re-graded drainage specifically through the two flood-prone low points first — residents saw the recurring waterlogging problem solved before the rest of the road resurfacing was even complete.",
    coverImage: "/images/projects/narhe-layout-roads-drainage-cover.jpg",
    gallery: [
      "/images/projects/pool/infrastructure-05.jpg",
      "/images/projects/pool/infrastructure-06.jpg",
      "/images/projects/pool/infrastructure-07.jpg",
      "/images/projects/pool/infrastructure-08.jpg",
      "/images/projects/pool/infrastructure-01.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/infrastructure-05.jpg", alt: "Narhe Residential Layout road resurfacing in progress" },
      { src: "/images/projects/pool/infrastructure-06.jpg", alt: "Narhe Residential Layout drainage retrofit at a former flood point" },
      { src: "/images/projects/pool/infrastructure-07.jpg", alt: "Narhe Residential Layout utility ducting coordination" },
      { src: "/images/projects/pool/infrastructure-08.jpg", alt: "Narhe Residential Layout completed road section" },
      { src: "/images/projects/pool/infrastructure-01.jpg", alt: "Narhe Residential Layout survey and grading work" },
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
      "Every 3D render was reviewed by our own manufacturing team before it was ever shown to the client, so nothing was presented that couldn't be built at the approved specification and budget — the finished install matched the approved renders closely enough that the client specifically called this out in feedback.",
    coverImage: "/images/projects/kondhwa-interior-cover.jpg",
    gallery: [
      "/images/projects/kondhwa-interior-1.jpg",
      "/images/projects/kondhwa-interior-2.jpg",
      "/images/projects/kondhwa-interior-3.jpg",
      "/images/projects/pool/interior-01.jpg",
      "/images/projects/pool/interior-02.jpg",
      "/images/projects/pool/interior-03.jpg",
      "/images/projects/pool/interior-04.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/kondhwa-interior-1.jpg", alt: "Kondhwa 3BHK L-shape modular kitchen" },
      { src: "/images/projects/kondhwa-interior-2.jpg", alt: "Kondhwa 3BHK master bedroom wardrobe" },
      { src: "/images/projects/kondhwa-interior-3.jpg", alt: "Kondhwa 3BHK living room TV unit and false ceiling" },
      { src: "/images/projects/pool/interior-01.jpg", alt: "Kondhwa 3BHK second bedroom study nook" },
      { src: "/images/projects/pool/interior-02.jpg", alt: "Kondhwa 3BHK dining area" },
      { src: "/images/projects/pool/interior-03.jpg", alt: "Kondhwa 3BHK kids' bedroom storage" },
      { src: "/images/projects/pool/interior-04.jpg", alt: "Kondhwa 3BHK balcony seating corner" },
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
      "We concentrated tall-unit appliance housing entirely on one run of the galley, keeping the opposing wall as clear counter and storage, and added a fold-down breakfast counter at the open end instead of extending the kitchen's footprint — preserving the full 4 ft working clearance the layout needed.",
    coverImage: "/images/projects/viman-nagar-kitchen-cover.jpg",
    gallery: [
      "/images/projects/viman-nagar-kitchen-1.jpg",
      "/images/projects/pool/interior-05.jpg",
      "/images/projects/pool/interior-06.jpg",
      "/images/projects/pool/interior-07.jpg",
      "/images/projects/pool/interior-08.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/viman-nagar-kitchen-1.jpg", alt: "Viman Nagar parallel kitchen, both counter runs" },
      { src: "/images/projects/pool/interior-05.jpg", alt: "Viman Nagar kitchen concealed appliance housing" },
      { src: "/images/projects/pool/interior-06.jpg", alt: "Viman Nagar kitchen fold-down breakfast counter" },
      { src: "/images/projects/pool/interior-07.jpg", alt: "Viman Nagar kitchen under-cabinet task lighting" },
      { src: "/images/projects/pool/interior-08.jpg", alt: "Viman Nagar kitchen hob and chimney installation" },
    ],
    clientQuote: {
      quote: "The corner storage in our L-shape kitchen fits things we used to just pile on the counter. Installation was done in under a week once the units arrived.",
      author: "Sunita Patil",
      location: "Viman Nagar, Pune",
    },
  },
  {
    slug: "baner-2bhk-turnkey-interior",
    title: "Baner 2BHK Compact Turnkey Interior",
    category: "interior",
    location: "Baner, Pune",
    year: "2025",
    area: "980 sq. ft.",
    summary: "A full-home interior for a compact 2BHK, designed around concealed storage to keep the smaller footprint uncluttered.",
    description: [
      "This 980 sq. ft. apartment needed full-home storage for a family of three without the visual clutter that compact homes often end up with.",
      "Nearly every surface — TV unit, bed base, wardrobe end panels — was designed with a secondary storage function, since floor area couldn't be given up to standalone storage furniture.",
      "The kitchen was designed as a compact straight layout with full-height tall units, freeing floor area in the adjoining living-dining space that would otherwise have gone to a separate pantry cabinet.",
    ],
    scope: ["Modular kitchen (straight)", "2 wardrobes", "Living-dining storage wall", "False ceiling & lighting"],
    challenge:
      "980 sq. ft. for a family of three left very little room for standalone storage furniture without the apartment feeling cramped and cluttered.",
    solution:
      "We designed storage into structural surfaces rather than as separate furniture — a bed base with drawer storage, a TV unit wall doubling as a bookshelf and cabinet run, and wardrobe end panels used for shoe storage — recovering an estimated 60+ sq. ft. of otherwise-lost floor area across the apartment.",
    coverImage: "/images/projects/baner-2bhk-turnkey-interior-cover.jpg",
    gallery: [
      "/images/projects/pool/interior-09.jpg",
      "/images/projects/pool/interior-10.jpg",
      "/images/projects/pool/interior-11.jpg",
      "/images/projects/pool/interior-12.jpg",
      "/images/projects/pool/interior-01.jpg",
      "/images/projects/pool/interior-02.jpg",
      "/images/projects/pool/interior-03.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/interior-09.jpg", alt: "Baner 2BHK compact modular kitchen with tall units" },
      { src: "/images/projects/pool/interior-10.jpg", alt: "Baner 2BHK living-dining storage wall" },
      { src: "/images/projects/pool/interior-11.jpg", alt: "Baner 2BHK bed base with drawer storage" },
      { src: "/images/projects/pool/interior-12.jpg", alt: "Baner 2BHK wardrobe with shoe storage end panel" },
      { src: "/images/projects/pool/interior-01.jpg", alt: "Baner 2BHK false ceiling and layered lighting" },
      { src: "/images/projects/pool/interior-02.jpg", alt: "Baner 2BHK second bedroom" },
      { src: "/images/projects/pool/interior-03.jpg", alt: "Baner 2BHK entryway storage" },
    ],
  },
  {
    slug: "hinjewadi-studio-interior",
    title: "Hinjewadi Studio Apartment Interior",
    category: "interior",
    location: "Hinjewadi, Pune",
    year: "2024",
    area: "540 sq. ft.",
    summary: "A single-occupant studio apartment interior with multi-function furniture to separate sleeping, working and living zones.",
    description: [
      "Designed for an IT professional living alone, this 540 sq. ft. studio needed distinct sleeping, work-from-home and living zones without physical walls to separate them.",
      "A sliding partition unit doubling as bookshelf storage lets the sleeping zone close off visually during work-from-home video calls, then open back up for a larger living area in the evening.",
      "The work-from-home desk unit was sized specifically for a dual-monitor setup with dedicated cable management, a detail the client called out as missing from every ready-made desk they'd considered.",
    ],
    scope: ["Multi-function furniture design", "Sliding partition unit", "Work-from-home desk unit", "Lighting design"],
    challenge:
      "A single-occupant IT professional needed distinct sleeping, work and living zones inside 540 sq. ft. with no interior walls to work with, plus a proper dual-monitor desk setup that off-the-shelf furniture couldn't provide.",
    solution:
      "We designed a sliding partition/bookshelf unit that visually closes off the sleeping zone during work-from-home calls and opens the space back up in the evening, paired with a custom desk sized exactly for a dual-monitor setup with built-in cable management — solving the specific gap the client had been unable to fill with ready-made furniture.",
    coverImage: "/images/projects/hinjewadi-studio-interior-cover.jpg",
    gallery: [
      "/images/projects/pool/interior-04.jpg",
      "/images/projects/pool/interior-06.jpg",
      "/images/projects/pool/interior-08.jpg",
      "/images/projects/pool/interior-10.jpg",
      "/images/projects/pool/interior-12.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/interior-04.jpg", alt: "Hinjewadi Studio sliding partition and bookshelf unit" },
      { src: "/images/projects/pool/interior-06.jpg", alt: "Hinjewadi Studio work-from-home desk with dual-monitor setup" },
      { src: "/images/projects/pool/interior-08.jpg", alt: "Hinjewadi Studio sleeping zone" },
      { src: "/images/projects/pool/interior-10.jpg", alt: "Hinjewadi Studio living area" },
      { src: "/images/projects/pool/interior-12.jpg", alt: "Hinjewadi Studio lighting design detail" },
    ],
  },
  {
    slug: "wagholi-master-bedroom-makeover",
    title: "Wagholi Master Bedroom Makeover",
    category: "interior",
    location: "Wagholi, Pune",
    year: "2025",
    area: "220 sq. ft. (single room)",
    summary: "A single-room wardrobe and lighting makeover for an existing master bedroom, completed without disturbing the rest of the home.",
    description: [
      "Unlike our full-home projects, this was a single-room scope — replacing an ageing hinged wardrobe and flat overhead lighting in an existing master bedroom, without touching the rest of the apartment.",
      "We measured the client's actual clothing volume before designing the new wardrobe interior, which changed the hanging-to-shelving ratio significantly from what the old wardrobe had.",
      "Work was scheduled to complete in a single contained zone of the apartment, with dust sheeting and a defined daily work window so the rest of the home stayed fully livable throughout.",
    ],
    scope: ["Wardrobe replacement", "Layered bedroom lighting", "Paint touch-up (single room)"],
    challenge:
      "A single-room interior update inside an otherwise fully lived-in apartment meant containing dust, noise and material movement to one room without disrupting the family's daily routine in the rest of the home.",
    solution:
      "We sheeted off the work zone at the bedroom door, scheduled noisier cutting and fitting work to a fixed daily window, and sequenced material delivery to avoid carrying anything through other occupied rooms — the makeover completed in 12 working days with the rest of the apartment undisturbed throughout.",
    coverImage: "/images/projects/wagholi-master-bedroom-makeover-cover.jpg",
    gallery: [
      "/images/projects/pool/interior-05.jpg",
      "/images/projects/pool/interior-07.jpg",
      "/images/projects/pool/interior-09.jpg",
      "/images/projects/pool/interior-11.jpg",
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/interior-05.jpg", alt: "Wagholi Master Bedroom new wardrobe interior" },
      { src: "/images/projects/pool/interior-07.jpg", alt: "Wagholi Master Bedroom layered bedside lighting" },
      { src: "/images/projects/pool/interior-09.jpg", alt: "Wagholi Master Bedroom completed wardrobe exterior" },
      { src: "/images/projects/pool/interior-11.jpg", alt: "Wagholi Master Bedroom repainted accent wall" },
    ],
  },

  {
    slug: "kondhwa-duplex-residence",
    title: "Kondhwa Duplex Residence",
    category: "residential",
    location: "Kondhwa, Pune",
    year: "2025",
    area: "2,850 sq. ft.",
    summary: "A 4BHK duplex residence with open-plan living and custom joinery throughout.",
    description: [
      "Built for an extended family, this 4BHK duplex residence combines spacious living areas with quiet private bedrooms across two levels.",
      "Custom storage joinery was integrated into structural niches during the build to maximize usable floor area."
    ],
    scope: ["Turnkey construction", "Structural engineering", "Interior joinery"],
    challenge: "Maximizing usable floor space in a compact suburban footprint while keeping all living zones well lit.",
    solution: "We integrated storage joinery directly into wall niches during structural framing, saving 70+ sq. ft. of floor space.",
    coverImage: "/images/projects/pool/residential-04.jpg",
    gallery: [
      "/images/projects/pool/residential-04.jpg",
      "/images/projects/pool/residential-05.jpg",
      "/images/projects/pool/residential-06.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/residential-04.jpg", alt: "Kondhwa Duplex duplex living room" },
      { src: "/images/projects/pool/residential-05.jpg", alt: "Kondhwa Duplex master bedroom" },
      { src: "/images/projects/pool/residential-06.jpg", alt: "Kondhwa Duplex exterior front" }
    ]
  },
  {
    slug: "baner-luxury-penthouse",
    title: "Baner Penthouse Residence",
    category: "residential",
    location: "Baner, Pune",
    year: "2024",
    area: "3,600 sq. ft.",
    summary: "A top-floor penthouse build with cantilevered balcony and acoustic glass walling.",
    description: [
      "Designed with floor-to-ceiling glass paneling and a cantilevered balcony overlooking the Baner hills.",
      "Acoustic glazing was specified throughout to insulate the living areas from street ambient noise."
    ],
    scope: ["Penthouse construction", "Glazing & insulation", "Terrace waterproofing"],
    challenge: "Managing wind load and acoustic insulation for an expansive top-floor glass facade.",
    solution: "We specified multi-layer acoustic laminated glazing with reinforced aluminum mullions.",
    coverImage: "/images/projects/pool/residential-07.jpg",
    gallery: [
      "/images/projects/pool/residential-07.jpg",
      "/images/projects/pool/residential-08.jpg",
      "/images/projects/pool/residential-09.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/residential-07.jpg", alt: "Baner Penthouse living room glass wall" },
      { src: "/images/projects/pool/residential-08.jpg", alt: "Baner Penthouse cantilevered balcony" },
      { src: "/images/projects/pool/residential-09.jpg", alt: "Baner Penthouse terrace garden" }
    ]
  },
  {
    slug: "kondhwa-commercial-arcade",
    title: "Kondhwa Retail & Commercial Arcade",
    category: "commercial",
    location: "Kondhwa, Pune",
    year: "2024",
    area: "14,500 sq. ft.",
    summary: "A multi-tenant retail and office arcade with structured basement parking.",
    description: [
      "A 3-story commercial complex accommodating retail shops on the ground level and office suites on upper floors.",
      "Designed for high footfall durability with polished granite common corridors and automated fire systems."
    ],
    scope: ["Shell & core construction", "MEP infrastructure", "Basement parking"],
    challenge: "Sequencing retail shopfront fit-outs while heavy upper-floor office work was underway.",
    solution: "We separated service access shafts and completed ground floor retail access corridors first.",
    coverImage: "/images/projects/pool/commercial-04.jpg",
    gallery: [
      "/images/projects/pool/commercial-04.jpg",
      "/images/projects/pool/commercial-05.jpg",
      "/images/projects/pool/commercial-06.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/commercial-04.jpg", alt: "Kondhwa Commercial Arcade facade" },
      { src: "/images/projects/pool/commercial-05.jpg", alt: "Kondhwa Commercial Arcade retail shopfront" },
      { src: "/images/projects/pool/commercial-06.jpg", alt: "Kondhwa Commercial Arcade office corridor" }
    ]
  },
  {
    slug: "narhe-tech-park-fitout",
    title: "Narhe Innovation Hub",
    category: "commercial",
    location: "Narhe, Pune",
    year: "2025",
    area: "11,000 sq. ft.",
    summary: "A 140-seat tech hub with acoustic discussion pods and centralized server room.",
    description: [
      "Turnkey office fit-out including modular workstation bays, acoustic conference pods, and dedicated server room.",
      "Delivered within a compressed 60-day schedule ahead of tenant move-in date."
    ],
    scope: ["Commercial fit-out", "Server room HVAC", "Acoustic wall paneling"],
    challenge: "Fitting a high-density IT layout into a non-standard floor shape without bottlenecking circulation.",
    solution: "We arranged workstation bays radially around a central circulation corridor with perimeter meeting pods.",
    coverImage: "/images/projects/pool/commercial-07.jpg",
    gallery: [
      "/images/projects/pool/commercial-07.jpg",
      "/images/projects/pool/commercial-08.jpg",
      "/images/projects/pool/commercial-01.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/commercial-07.jpg", alt: "Narhe Innovation Hub open workstation bay" },
      { src: "/images/projects/pool/commercial-08.jpg", alt: "Narhe Innovation Hub acoustic pod" },
      { src: "/images/projects/pool/commercial-01.jpg", alt: "Narhe Innovation Hub conference room" }
    ]
  },
  {
    slug: "wagholi-access-network",
    title: "Wagholi Township Arterial Access",
    category: "infrastructure",
    location: "Wagholi, Pune",
    year: "2025",
    area: "2.4 km road corridor",
    summary: "A 4-lane paved access road network with integrated stormwater drainage culverts.",
    description: [
      "Arterial township road infrastructure connecting residential sectors to the main highway corridor.",
      "Built with heavy-duty interlocking concrete paver shoulders and underground storm lines."
    ],
    scope: ["Road grading & paving", "Stormwater drainage culverts", "Street lighting poles"],
    challenge: "Maintaining residential access while excavating deep storm drainage lines during monsoon season.",
    solution: "We phased excavation in 300m segments with temporary bypass lanes.",
    coverImage: "/images/projects/pool/infrastructure-05.jpg",
    gallery: [
      "/images/projects/pool/infrastructure-05.jpg",
      "/images/projects/pool/infrastructure-06.jpg",
      "/images/projects/pool/infrastructure-07.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/infrastructure-05.jpg", alt: "Wagholi Access Network asphalt road" },
      { src: "/images/projects/pool/infrastructure-06.jpg", alt: "Wagholi Access Network drainage line" },
      { src: "/images/projects/pool/infrastructure-07.jpg", alt: "Wagholi Access Network street light installation" }
    ]
  },
  {
    slug: "narhe-duplex-interior-fitout",
    title: "Narhe Duplex Turnkey Interior",
    category: "interior",
    location: "Narhe, Pune",
    year: "2025",
    area: "2,200 sq. ft.",
    summary: "A full turnkey interior design for a modern duplex apartment, featuring custom navy cabinetry.",
    description: [
      "Complete interior design including living room TV unit joinery, modular kitchen, and built-in bedroom wardrobes.",
      "Executed in Zemitech Urban's signature minimalist palette of deep navy, off-white walls, and soft charcoal accents."
    ],
    scope: ["Turnkey interior design", "Modular kitchen", "Living & bedroom joinery"],
    challenge: "Unifying interior design aesthetics across two floors while giving each bedroom a distinct character.",
    solution: "We maintained a consistent navy-and-white base palette while varying bedroom accent finishes.",
    coverImage: "/images/projects/pool/interior-07.jpg",
    gallery: [
      "/images/projects/pool/interior-07.jpg",
      "/images/projects/pool/interior-08.jpg",
      "/images/projects/pool/interior-09.jpg"
    ],
    galleryDetailed: [
      { src: "/images/projects/pool/interior-07.jpg", alt: "Narhe Duplex living room TV unit" },
      { src: "/images/projects/pool/interior-08.jpg", alt: "Narhe Duplex modular kitchen" },
      { src: "/images/projects/pool/interior-09.jpg", alt: "Narhe Duplex bedroom wardrobe" }
    ]
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "interior", label: "Interior Design" },
] as const;
