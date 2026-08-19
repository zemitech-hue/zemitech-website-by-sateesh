export type HeroSlide = {
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  tag: "Construction" | "Interior Design";
};

// Powers the dynamically scrolling homepage hero banner. Add/reorder slides here
// (or from Admin → Homepage Banner once wired to Supabase) — the carousel auto-advances.
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Construction Division",
    headline: "Build Better. Live Better.",
    sub: "240+ residential & commercial projects delivered across major cities with complete construction, interior & architecture solutions.",
    image: "/images/MainHeroBannersCarousel/Construction%20Division.png",
    ctaLabel: "Explore Our Work",
    ctaHref: "/construction",
    tag: "Construction",
  },
  {
    eyebrow: "Interior Design Division",
    headline: "Turnkey interiors executed under one roof.",
    sub: "From 3D renders to factory precision manufacturing across major cities — zero subcontractor delays, guaranteed 5-year warranty.",
    image: "/images/MainHeroBannersCarousel/Interior%20Design%20Division.png",
    ctaLabel: "Explore Interior Design",
    ctaHref: "/interior-design",
    tag: "Interior Design",
  },
  {
    eyebrow: "Residential Construction",
    headline: "Luxury independent villas built for modern families.",
    sub: "Vastu-compliant architectural planning, fixed-milestone BOQ pricing, and dedicated site engineering from foundation to handover.",
    image: "/images/MainHeroBannersCarousel/Residential%20Construction.png",
    ctaLabel: "See Villa Projects",
    ctaHref: "/construction/residential",
    tag: "Construction",
  },
  {
    eyebrow: "Kitchen Design",
    headline: "Factory-crafted modular kitchens designed for everyday living.",
    sub: "BWP marine-grade plywood, soft-close Blum & Hettich fittings, and quartz countertops manufactured with CNC precision.",
    image: "/images/MainHeroBannersCarousel/Kitchen%20Design.png",
    ctaLabel: "Explore Modular Kitchens",
    ctaHref: "/interior-design/kitchen",
    tag: "Interior Design",
  },
  {
    eyebrow: "Living Room Design",
    headline: "Bespoke living room interiors that inspire.",
    sub: "Floating marble TV consoles, acoustic fluted wall joinery, and layered LED lighting custom-built for modern homes.",
    image: "/images/MainHeroBannersCarousel/Living%20Room%20Design.png",
    ctaLabel: "Explore Living Room Interiors",
    ctaHref: "/interior-design/living-room",
    tag: "Interior Design",
  },
];

export const homeUsps = [
  {
    title: "One team, start to finish",
    description: "Design, engineering, execution and interiors handled in-house — not stitched together across sub-contractors.",
  },
  {
    title: "Transparent, fixed-scope pricing",
    description: "Detailed BOQ or material sheet agreed before work starts. No vague 'finishing' lump sums.",
  },
  {
    title: "Weekly, photo-logged reporting",
    description: "You always know where your site or interior installation actually stands.",
  },
  {
    title: "6+ years, 240+ projects",
    description: "Across residential, commercial, infrastructure and interior work nationwide.",
  },
  {
    title: "In-house site supervision",
    description: "Core crews report to our own project managers daily — not a rotating cast of anonymous subcontractors.",
  },
  {
    title: "Post-handover accountability",
    description: "Defect liability on construction and hardware warranty on interiors — support doesn't end at handover.",
  },
];

export type VisualStep = { title: string; description: string; image: string; alt: string };

// Company-wide "How We Work" narrative — distinct from the per-service
// ProcessSteps text list on each construction/interior page.
export const howWeWork: VisualStep[] = [
  {
    title: "Consult",
    description: "A free site visit or call to understand your brief, budget and timeline — no obligation to proceed.",
    image: "/images/home/how-we-work-1-consult.png",
    alt: "Zemitech Urban team conducting a free client consultation and site visit",
  },
  {
    title: "Design",
    description: "Structural drawings or 3D renders, refined until you approve the final layout and material sheet.",
    image: "/images/home/how-we-work-2-design.png",
    alt: "Design and 3D approval stage with client reviewing renders",
  },
  {
    title: "Build",
    description: "Our own site or factory teams execute against the approved plan, with weekly photo-logged updates.",
    image: "/images/home/how-we-work-3-build.png",
    alt: "Construction and execution stage with site team at work",
  },
  {
    title: "Handover",
    description: "Final walkthrough, snag-list closure, and documentation — followed by post-handover support.",
    image: "/images/home/how-we-work-4-handover.png",
    alt: "Handover and final walkthrough stage with client and project manager",
  },
];

export const homeFaqs = [
  { question: "Which areas do you operate in?", answer: "We execute turnkey construction and interior design projects across major cities and operational regions nationwide, including Pune, Mumbai, Indore, Bhopal, Hyderabad, Ranchi, Patna, Kolkata, Jamshedpur, Nagpur, and surrounding areas." },
  { question: "Can you handle both construction and interiors for the same project?", answer: "Yes — many of our clients start with construction and move directly into our interior design division for a fully coordinated handover." },
  { question: "How do I get a quote?", answer: "Share your requirement through the enquiry form or WhatsApp, and we'll schedule a site visit or call to scope your project before quoting." },
  { question: "Do you offer free consultations?", answer: "Yes, an initial consultation and site assessment is free and comes with no obligation." },
  { question: "Do you work with landowners, developers, and individual homeowners?", answer: "Yes, all three — from a single independent home to township-scale infrastructure work for developers." },
  { question: "How is Zemitech Urban different from hiring a separate architect and contractor?", answer: "We run construction and interior design as one accountable company with one project manager per project, rather than you coordinating separate firms and absorbing the gaps between them." },
  { question: "What's your typical response time to an enquiry?", answer: "We aim to respond within one business day and schedule a site visit or call shortly after, depending on your availability." },
  { question: "Is a quote free, and does requesting one commit me to anything?", answer: "Yes, quotes and initial site assessments are free with no obligation to proceed — we're happy to just talk through your project first." },
];
