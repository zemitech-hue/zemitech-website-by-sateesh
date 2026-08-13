export type Faq = { question: string; answer: string };
export type KitchenSpecTable = {
  title: string;
  note?: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
};
export type KitchenSwatch = { src: string; label: string; tier: "₹" | "₹₹" | "₹₹₹" };
export type GalleryImage = { src: string; alt: string; caption: string };

export type KitchenSubType = {
  name: string;
  idealFor: string;
  minSpace: string;
  description: string;
  image: string;
  alt: string;
  faqs: Faq[];
};

export type KitchenType = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  idealFor: string;
  minSpace: string;
  priceIndicator: string; // dummy indicative range, clearly marked as indicative on-page
  description: string[];
  features: string[];
  layoutNote: string;
  faqs: Faq[];
  specTable: KitchenSpecTable;
  swatches: KitchenSwatch[];
  gallery: GalleryImage[];
  longFormTitle: string;
  longForm: string[]; // 400–600 words, supports "[label](/href)" inline links
};

// Shared material/hardware/countertop swatches — reused across both full
// kitchen-type pages and the overview page's spec sections.
const kitchenSwatches: KitchenSwatch[] = [
  { src: "/images/interior/swatch-laminate.jpg", label: "Laminate", tier: "₹" },
  { src: "/images/interior/swatch-acrylic.jpg", label: "Acrylic", tier: "₹₹" },
  { src: "/images/interior/swatch-pu.jpg", label: "PU Finish", tier: "₹₹₹" },
  { src: "/images/interior/swatch-granite.jpg", label: "Granite", tier: "₹" },
  { src: "/images/interior/swatch-quartz.jpg", label: "Quartz", tier: "₹₹" },
  { src: "/images/interior/swatch-sintered-stone.jpg", label: "Sintered Stone", tier: "₹₹₹" },
];

export const kitchenOverview = {
  eyebrow: "Interior Design / Kitchen",
  heroHeadline: "The kitchen is the one room everyone actually uses.",
  heroSub:
    "Modular carcass, chosen hardware, and a layout tested against how you cook — not a display-model floor plan. Every kitchen ships with soft-close hardware as standard, whatever finish tier you choose.",
  heroImage: "/images/interior/hero-kitchen.jpg",
  intro: [
    "We build kitchens the same way for every layout: factory-finished modular carcasses, soft-close hardware as standard, and a work-triangle (stove–sink–fridge) checked against your actual cooking habits before anything is manufactured.",
    "Choose the layout that fits your kitchen's shape below — [Modular (straight/parallel)](/interior-design/kitchen/modular-kitchen) or [L-Shape](/interior-design/kitchen/l-shape-kitchen) have their own dedicated pages with full specification detail — or read on for Island and U-Shape layouts, which we also design and build regularly. Tell us your dimensions and we'll recommend the layout that fits.",
  ],
  standardInclusions: [
    "Termite & moisture-resistant plywood carcass",
    "Soft-close hinges & channels",
    "Modular basket & drawer organizers",
    "Granite / quartz countertop (as specified)",
    "Chimney & hob cut-out planning",
    "Under-cabinet task lighting",
  ],
  swatches: kitchenSwatches,
  // Island & U-Shape are covered as anchored sections on this overview page
  // rather than standalone routes, since the site's page budget is fixed —
  // see AGENTS.md Part 2 (Kitchen overview + Modular + L-Shape).
  subTypes: [
    {
      name: "Island Kitchen",
      idealFor: "Large, open-plan kitchens where the kitchen opens directly onto a living or dining area",
      minSpace: "10 x 10 ft and above, plus 42 in clearance on all sides of the island",
      description:
        "An island kitchen adds a freestanding counter — used for prep, casual seating, or a secondary hob — in the middle of an otherwise straight or L-shape layout. It needs real clearance to work: at least 42 inches on every side of the island for two people to move and work comfortably, which is why it suits open-plan homes with 10+ ft of working width more than compact apartments.",
      image: "/images/interior/kitchen-island.jpg",
      alt: "Island kitchen layout with a freestanding central counter and open-plan living area beyond",
      faqs: [
        { question: "How much clearance does an island kitchen actually need?", answer: "At minimum 42 inches on every side of the island for comfortable two-person movement — tighter clearance defeats the purpose and makes the kitchen feel more cramped than a straight layout." },
        { question: "Can an island kitchen include a hob or sink?", answer: "Yes, both are common — a hob on the island works well for open-plan entertaining, though it needs a dedicated exhaust/chimney solution planned in from the design stage." },
        { question: "Is an island kitchen practical for a typical Pune apartment?", answer: "Usually only in larger, open-plan 3BHK+ layouts — most standard apartment kitchens don't have the width for the clearance an island genuinely needs." },
      ],
    },
    {
      name: "U-Shape Kitchen",
      idealFor: "Large, dedicated (non-open-plan) kitchens with three usable walls",
      minSpace: "8 x 10 ft and above",
      description:
        "A U-shape kitchen wraps cabinetry and counter across three connecting walls, giving the most continuous counter and storage of any layout — at the cost of needing a dedicated kitchen room rather than an open-plan space. It suits households that do heavier daily cooking and want every zone (prep, cook, clean) on its own run of counter without crossing paths.",
      image: "/images/interior/kitchen-u-shape.jpg",
      alt: "U-shape kitchen layout with cabinetry wrapping three walls and continuous countertop",
      faqs: [
        { question: "How is a U-shape kitchen different from an L-shape kitchen?", answer: "L-shape uses two walls and leaves a corner open toward the living/dining area; U-shape uses three walls and needs a dedicated kitchen space, but gives noticeably more counter and storage." },
        { question: "Does a U-shape kitchen work with a window on one of the walls?", answer: "Yes — we regularly plan the sink or a prep counter under a window wall on U-shape layouts, which is a common request for natural light at the workspace." },
        { question: "What's the biggest planning challenge with U-shape kitchens?", answer: "The two corner junctions — without magic-corner or carousel storage at both, a meaningful share of the layout's storage advantage over an L-shape is lost to dead space." },
      ],
    },
  ] as KitchenSubType[],
  planningChecklist: [
    "Measure the full room width and depth, including door and window swing clearances",
    "Mark where plumbing (sink) and gas/electrical (hob) points currently exist or need to move",
    "List major appliances to be built in — chimney, hob, oven, microwave, dishwasher, refrigerator",
    "Count your cookware and grocery storage volume, not just cabinet count, to size storage correctly",
    "Decide your countertop material tier (granite / quartz / sintered stone) before finalizing carcass budget",
    "Choose a shutter finish (laminate / acrylic / PU) based on maintenance tolerance, not just look",
    "Confirm hob and chimney position relative to a window or duct route for exhaust",
    "Walk through your actual cooking routine — stove, sink, fridge — and check the triangle isn't broken by a door swing or walkway",
  ],
};

export const kitchenTypes: Record<string, KitchenType> = {
  "modular-kitchen": {
    slug: "interior-design/kitchen/modular-kitchen",
    name: "Modular Kitchen",
    metaTitle: "Modular Kitchen Design in Pune | Zemitech Urban",
    metaDescription:
      "Straight & parallel modular kitchen design in Pune — factory-built cabinets, soft-close hardware, granite to sintered-stone countertops. Fixed material sheet.",
    heroImage: "/images/interior/kitchen-modular.jpg",
    idealFor: "Compact apartments, single-wall or galley kitchens",
    minSpace: "6 ft width and above",
    priceIndicator: "Indicative — final quote depends on carcass length & finish",
    description: [
      "A modular kitchen in the straight or parallel (galley) configuration is the most space-efficient layout for apartments, fitting the full storage-to-counter ratio into a compact footprint.",
      "Every unit is manufactured off-site in a controlled factory environment and installed on site in a fraction of the time carpentered kitchens take, with tighter tolerances on fit and finish.",
      "Straight layouts run cabinetry along one wall and suit kitchens under about 8 ft wide; parallel (galley) layouts use two facing counters and need at least 4 ft of clearance between them — we measure your room and recommend which one fits before design work starts, not after.",
    ],
    features: [
      "Straight or parallel (galley) carcass layout",
      "Full-height tall units for pantry storage",
      "Concealed appliance housing (microwave, oven)",
      "Bottle pull-outs & corner solutions",
      "Choice of laminate, acrylic or PU finish shutters",
    ],
    layoutNote:
      "Best suited where kitchen width is under 10 ft — the parallel version needs at least 4 ft clearance between opposing counters for comfortable movement.",
    longFormTitle: "How a modular kitchen actually gets built",
    longForm: [
      "A modular kitchen is manufactured very differently from a site-carpentered one, and understanding that difference explains most of what makes the finished result feel tighter and more consistent. Every carcass panel is cut to size in a factory using CNC machinery against your exact measurements, edge-banded to seal the raw plywood edge from moisture, and pre-drilled for hardware — none of which happens with the same precision when a carpenter is cutting and assembling panels on your kitchen floor.",
      "That precision is also why measurement matters so much before manufacturing starts. Once a carcass panel is cut and edge-banded at the factory, its dimensions are fixed — there's no on-site trimming to fix a measurement that was slightly off, the way a carpenter might adjust a panel on the spot. We measure kitchen dimensions twice, once during initial consultation and again just before manufacturing is confirmed, specifically to catch any change (a re-plastered wall, a shifted door frame) between the two visits.",
      "Straight and parallel layouts — the two we cover on this page — are also the fastest to install once units arrive on site, typically 3–5 days for a straight kitchen, since there's no corner-junction carpentry to align. Installation is largely assembly: carcasses are levelled and fixed to the wall, shutters and hardware are fitted, and countertop is templated and installed as the final step once the carcass position is confirmed.",
      "Appliance integration is planned into the carcass design before manufacturing, not cut into the finished unit afterward — chimney and hob cut-outs, concealed housing for a built-in oven or microwave, and ventilation routing for the chimney duct are all dimensioned against your specific appliance models during the design stage. This is worth finalizing your appliance brands and models before design sign-off, since a last-minute appliance change after manufacturing has started can mean a mismatched cut-out.",
      "Whether you choose a straight or parallel configuration, every modular kitchen we build ships with the same soft-close hardware standard and the same material and finish specification tiers detailed below — the layout decision affects total carcass length and cost, not the baseline quality of what's actually being installed.",
    ],
    specTable: {
      title: "Modular Kitchen Material & Finish Tiers",
      note: "₹ / ₹₹ / ₹₹₹ are indicative price tiers, not fixed rates — your final quote depends on carcass length and exact selections.",
      columns: ["₹ Basic", "₹₹ Standard", "₹₹₹ Premium"],
      rows: [
        { label: "Carcass Material", values: ["MR-grade commercial ply", "BWP-grade marine ply", "BWP-grade ply, factory pre-laminated"] },
        { label: "Shutter Finish", values: ["Laminate", "Acrylic", "PU (Polyurethane)"] },
        { label: "Hardware Brand Tier", values: ["Domestic soft-close", "Branded domestic soft-close", "Imported (German-tier) soft-close"] },
        { label: "Countertop Material", values: ["Granite", "Quartz", "Sintered stone"] },
      ],
    },
    swatches: kitchenSwatches,
    faqs: [
      { question: "What's the difference between straight and parallel modular kitchens?", answer: "A straight kitchen runs cabinets along one wall; a parallel (galley) kitchen runs two facing counters — we'll recommend which fits your room based on width and door/window placement." },
      { question: "How long does installation take once manufacturing is done?", answer: "On-site installation for a modular kitchen typically takes 3–5 days once factory-made units arrive." },
      { question: "What's the minimum kitchen width for a modular kitchen?", answer: "A straight modular layout works from around 6 ft of usable wall width; a parallel layout needs at least 4 ft of clearance between the two facing counters on top of their own depth." },
      { question: "How much does a modular kitchen cost in Pune?", answer: "It depends on carcass length, shutter finish and countertop material — see the price-tier table above. We quote against a fixed material sheet rather than a flat per-foot rate, since finish tier changes cost significantly." },
      { question: "Can I fit a chimney and built-in oven into a straight modular kitchen?", answer: "Yes, chimney and hob cut-outs are planned into the carcass design from the start, and a concealed housing unit can accommodate a built-in oven or microwave in most straight and parallel layouts." },
      { question: "What plywood grade should I choose for a modular kitchen?", answer: "BWP (boiling water proof) marine-grade ply is worth the upgrade over MR-grade specifically in kitchens, given daily exposure to steam and moisture near the sink and hob." },
      { question: "How do bottle pull-outs and corner solutions work in a straight layout?", answer: "Narrow pull-out units fit alongside the hob for oil/spice bottles, and where a straight kitchen meets a wall corner, a blind-corner pull-out recovers storage that would otherwise be dead space." },
      { question: "Is a modular kitchen more durable than a carpentered one?", answer: "Factory manufacturing gives tighter tolerances on joinery and finish consistency than site carpentry, and combined with soft-close hardware, that generally means less wear at hinges and drawer runners over time." },
    ],
    gallery: [
      { src: "/images/interior/kitchen-modular-countertop-texture.jpg", alt: "Close-up of granite countertop texture on a modular kitchen installation", caption: "Countertop texture close-up" },
      { src: "/images/interior/kitchen-modular-hardware-closeup.jpg", alt: "Close-up of soft-close drawer channel hardware on a modular kitchen unit", caption: "Soft-close channel hardware" },
      { src: "/images/interior/kitchen-modular-storage-detail.jpg", alt: "Close-up of a bottle pull-out storage unit beside the hob in a modular kitchen", caption: "Bottle pull-out storage detail" },
      { src: "/images/interior/kitchen-modular-angle-1.jpg", alt: "Modular kitchen in a straight-run layout with full-height tall units", caption: "Straight-run modular kitchen" },
      { src: "/images/interior/kitchen-modular-angle-2.jpg", alt: "Modular kitchen tall unit bank used for pantry storage", caption: "Tall unit bank — pantry storage" },
      { src: "/images/interior/kitchen-modular-angle-3.jpg", alt: "Modular kitchen hob and chimney cut-out installation detail", caption: "Hob & chimney cut-out detail" },
    ],
  },
  "l-shape-kitchen": {
    slug: "interior-design/kitchen/l-shape-kitchen",
    name: "L-Shape Kitchen",
    metaTitle: "L-Shape Kitchen Design in Pune | Zemitech Urban",
    metaDescription:
      "L-shape modular kitchen design in Pune — corner storage, wraparound counters, granite to sintered-stone tops. See L-shape kitchen cost factors & FAQs.",
    heroImage: "/images/interior/kitchen-l-shape.jpg",
    idealFor: "Medium to large kitchens with an open or semi-open layout",
    minSpace: "8 x 8 ft and above",
    priceIndicator: "Indicative — final quote depends on carcass length & finish",
    description: [
      "The L-shape layout wraps cabinetry across two adjoining walls, freeing up a corner for a dining nook, island prep counter, or simply more breathing room than a straight kitchen allows.",
      "It's our most requested layout for open-plan homes, since it keeps the cooking zone contained while still opening toward the living or dining area.",
      "The corner junction is where an L-shape earns its keep over a straight layout — planned properly with a carousel or magic-corner pull-out, it recovers storage that would otherwise sit dead behind the door swing of two intersecting cabinet runs.",
    ],
    features: [
      "Wraparound counter across two walls",
      "Corner carousel or magic-corner storage",
      "Optional breakfast counter extension",
      "Dedicated wet & dry zone separation",
      "Choice of laminate, acrylic or PU finish shutters",
    ],
    layoutNote:
      "Works well for open-plan kitchen-dining areas — the corner join is where most of the usable storage gain over a straight kitchen comes from, so we plan that junction first.",
    longFormTitle: "Why the corner junction is the whole design problem",
    longForm: [
      "Every L-shape kitchen conversation we have eventually comes back to one detail: the corner. It's the single feature that separates an L-shape from simply being two straight runs placed at an angle, and it's also the one component where a poorly planned kitchen loses most of its theoretical storage advantage. A corner cabinet fitted with standard shelving, rather than a carousel or magic-corner pull-out mechanism, effectively becomes dead space — you can see items in it, but reaching them means kneeling and reaching past the door swing of the adjoining run.",
      "We plan the corner junction first, before finalizing the rest of the layout, specifically because it constrains what's possible on both adjoining walls. A carousel unit needs a minimum radius to rotate; a magic-corner pull-out needs enough door swing clearance on the adjacent cabinet not to collide with it when both are open. Getting this wrong doesn't just cost you storage — it can mean two cabinet doors that physically can't open at the same time, discovered only once installation is complete.",
      "Beyond the corner, an L-shape kitchen's two walls are usually planned with different functions — a wet zone (sink, dishwashing) on one run and a dry zone (prep, storage, cooking) on the other, so water splash from washing doesn't reach pantry storage or electrical appliances. This zone separation is one of the layout's underappreciated advantages over a straight kitchen, where wet and dry activities inevitably share the same counter run.",
      "Because an L-shape kitchen opens toward the living or dining area on its open side, we also think about sightlines during design — what's visible from the dining table or sofa when someone's cooking. Tall units and the corner carousel are usually placed on the wall furthest from that sightline, while the more visually 'finished' run (often including a breakfast counter extension) faces the open living space.",
      "All of this planning happens before manufacturing, using the same factory production process as our [modular kitchens](/interior-design/kitchen/modular-kitchen) — the corner unit itself is simply a more complex manufactured component than a straight run of cabinetry, which is part of why L-shape kitchens typically carry a modest cost premium over a straight layout of similar total width.",
    ],
    specTable: {
      title: "L-Shape Kitchen Material & Finish Tiers",
      note: "₹ / ₹₹ / ₹₹₹ are indicative price tiers, not fixed rates — your final quote depends on carcass length and exact selections.",
      columns: ["₹ Basic", "₹₹ Standard", "₹₹₹ Premium"],
      rows: [
        { label: "Carcass Material", values: ["MR-grade commercial ply", "BWP-grade marine ply", "BWP-grade ply, factory pre-laminated"] },
        { label: "Shutter Finish", values: ["Laminate", "Acrylic", "PU (Polyurethane)"] },
        { label: "Hardware Brand Tier", values: ["Domestic soft-close", "Branded domestic soft-close", "Imported (German-tier) soft-close"] },
        { label: "Countertop Material", values: ["Granite", "Quartz", "Sintered stone"] },
      ],
    },
    swatches: kitchenSwatches,
    faqs: [
      { question: "Does an L-shape kitchen work for an open-plan living area?", answer: "Yes, it's our most common recommendation for open-plan homes since it keeps cooking contained while staying visually open toward the living/dining space." },
      { question: "What goes in the corner unit?", answer: "We typically fit a carousel or 'magic corner' pull-out system there, since that's the area most likely to become dead storage otherwise." },
      { question: "What does an L-shape kitchen cost in Pune?", answer: "Cost depends on total carcass length (both walls combined), shutter finish and countertop material tier — see the price-tier table above. As a layout, L-shape typically costs somewhat more than a straight kitchen of similar total width because of the corner unit's specialized hardware." },
      { question: "What's the minimum room size for an L-shape kitchen?", answer: "Roughly 8 x 8 ft is our practical minimum — below that, the corner junction doesn't leave enough clear floor space to be usable and a straight or parallel layout usually works better." },
      { question: "Can I add a breakfast counter to an L-shape kitchen?", answer: "Yes, extending one arm of the L past the wall line into a breakfast counter is a common addition, provided there's enough floor clearance on the room side for seating." },
      { question: "How is wet and dry zone separation planned in an L-shape layout?", answer: "We typically place the sink and dishwashing zone on one wall arm and dry storage/prep on the other, so water splash doesn't reach pantry storage or appliances." },
      { question: "Is an L-shape kitchen better than a parallel kitchen for a small apartment?", answer: "It depends on the room's proportions more than size alone — L-shape suits rooms where one wall is notably longer than the other; parallel suits narrow, roughly rectangular rooms with two similar-length walls." },
      { question: "Do L-shape kitchens support an integrated dining nook?", answer: "Yes, the open corner an L-shape leaves is well suited to a small dining table or bench seating, which is one of the layout's most requested variations." },
    ],
    gallery: [
      { src: "/images/interior/kitchen-lshape-corner-storage.jpg", alt: "Close-up of a magic corner pull-out storage system in an L-shape kitchen", caption: "Magic corner pull-out storage" },
      { src: "/images/interior/kitchen-lshape-hardware-closeup.jpg", alt: "Close-up of drawer hardware on an L-shape modular kitchen unit", caption: "Drawer hardware close-up" },
      { src: "/images/interior/kitchen-lshape-countertop-texture.jpg", alt: "Close-up of wraparound countertop texture spanning the L-shape corner junction", caption: "Wraparound countertop texture" },
      { src: "/images/interior/kitchen-lshape-angle-1.jpg", alt: "L-shape kitchen wide angle view showing both cabinet runs and the corner junction", caption: "L-shape kitchen — wide angle" },
      { src: "/images/interior/kitchen-lshape-angle-2.jpg", alt: "Close-up of the L-shape kitchen corner junction where two cabinet runs meet", caption: "Corner junction detail" },
      { src: "/images/interior/kitchen-lshape-angle-3.jpg", alt: "L-shape kitchen breakfast counter extension with seating", caption: "Breakfast counter extension" },
    ],
  },
};
