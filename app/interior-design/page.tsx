import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";

import MaterialBoard from "@/components/sections/MaterialBoard";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

const service = services["interior-design"];

export const metadata: Metadata = {
  title: "Interior Design Company in Pune — Turnkey, Kitchens, Living & Bedroom Interiors",
  description:
    "Turnkey interior design & factory modular execution in Pune. Modular kitchens, living room TV consoles, master bedroom wardrobes, 2BHK/3BHK turnkey homes, office fit-outs & custom joinery.",
  alternates: { canonical: "/interior-design" },
};

const interiorServices = [
  {
    title: "Modular Kitchen Interior Design",
    href: "/interior-design/kitchen",
    image: "/images/interior/kitchen-layout-l-shape.jpg",
    description:
      "Parallel, L-shape, U-shape and island modular kitchens built with BWP marine-grade plywood carcasses, soft-close hardware, quartz countertops, and built-in appliances.",
    features: ["BWP Marine Plywood Carcass", "5-Year Soft-Close Hardware Warranty", "3D Approved Before Manufacturing", "Factory Precision Edge Banding"],
  },
  {
    title: "Living Room TV Consoles & Ceilings",
    href: "/interior-design/living-room",
    image: "/images/interior/living-tv-console-unit.jpg",
    description:
      "Custom entertainment TV units with concealed wiring, layered 3-circuit ceiling lighting, accent wall panelling, and traffic-flow seating layouts.",
    features: ["Concealed AV & Router Wiring", "Ambient, Task & Accent Lighting", "Custom Veneer Wall Joinery", "Concealed Storage Systems"],
  },
  {
    title: "Master Bedroom Wardrobes & Beds",
    href: "/interior-design/bedroom",
    image: "/images/interior/bedroom-master-bed.jpg",
    description:
      "Full-height sliding and floor-to-ceiling floor wardrobes custom-measured to your clothing inventory, WFH study desks, warm bedside lighting, and hydraulic beds.",
    features: ["Clothing Inventory Sizing", "Sliding & Hinged Door Systems", "Built-In Work From Home Desks", "Sensor LED Wardrobe Lighting"],
  },
  {
    title: "Turnkey 2BHK & 3BHK Home Interiors",
    href: "/interior-design/turnkey-home-interiors",
    image: "/images/interior/bedroom-walkin-closet.jpg",
    description:
      "Complete end-to-end home interior execution across kitchen, living room, bedrooms, dining area and foyer under one project manager. 45–75 days handover.",
    features: ["Single Project Manager", "45–75 Working Days Delivery", "Fixed Material & Hardware Sheet", "Move-In Ready Handover"],
  },
  {
    title: "Office Interior Fit-Outs",
    href: "/interior-design/office",
    image: "/images/interior/office-reception-desk.jpg",
    description:
      "Executive suites, workstation pods, reception desks, conference room acoustics, and breakout areas designed for corporate branding and high productivity.",
    features: ["Acoustic Ceiling & Wall Panelling", "Modular Workstation Systems", "Corporate Brand Palette Integration", "Ergonomic Layout Planning"],
  },
  {
    title: "Custom Wood & Veneer Wall Joinery",
    href: "/interior-design/custom-joinery",
    image: "/images/interior/joinery-fluted-panel.jpg",
    description:
      "Bespoke wall panelling, fluted CNC wooden panels, decorative lattice partitions, custom dining credenzas, and integrated concealed doors.",
    features: ["Natural Wood Veneers & Polyurethane Polish", "CNC Precision Slatted Panelling", "Concealed Door & Storage Hardware", "Millimeter Custom Fit"],
  },
];

const interiorStyles = [
  {
    name: "Contemporary",
    description: "Clean lines, neutral tones, and sleek handleless cabinetry. Our most popular style for Pune apartments.",
    image: "/images/interior/kitchen-style-contemporary.jpg",
  },
  {
    name: "Minimalist",
    description: "Concealed storage, handleless shutters, and a restrained two-tone palette for clutter-free living.",
    image: "/images/interior/kitchen-style-minimal.jpg",
  },
  {
    name: "Classic",
    description: "Warm wood grains, panelled shutters, cornice detailing, and rich brass/bronze hardware accents.",
    image: "/images/interior/kitchen-style-classic.jpg",
  },
  {
    name: "Industrial",
    description: "Exposed textures, concrete-finish laminate, matte black metal frames, and warm ambient filament lighting.",
    image: "/images/interior/kitchen-style-modern.jpg",
  },
];

const interiorFaqs = [
  {
    question: "Do you handle single-room interiors (like just a modular kitchen) as well as full homes?",
    answer: "Yes! You can commission a single modular kitchen, a living room, or a bedroom, or opt for a full turnkey 2BHK/3BHK home interior.",
  },
  {
    question: "What is the typical timeline for an interior project?",
    answer: "Single rooms (kitchen or living room) take 15–25 working days on-site. Turnkey 2BHK/3BHK home interiors take 45–75 working days from 3D approval.",
  },
  {
    question: "How do 3D design approvals work?",
    answer: "Before any manufacturing begins in our factory, we present photorealistic 3D renders of every room with your exact material and color choices. Production starts only after you sign off on the 3D design.",
  },
  {
    question: "Why do you use factory manufacturing instead of site carpentry?",
    answer: "Factory manufacturing uses automated CNC cutting and edge-banding under controlled temperature/humidity. This produces 100x tighter joints, moisture-sealed edges, and cuts on-site installation time by 70%.",
  },
  {
    question: "What warranty do you provide on interior hardware?",
    answer: "All soft-close hinges, drawer channels, and lift-up systems come with a 5-year replacement warranty, specified in writing in your material sheet.",
  },
  {
    question: "Can I choose my own laminate, veneer, and quartz brands?",
    answer: "Absolutely. We work with leading brands (Greenlam, Merino, Hafele, Blum, Hettich, Kaff) and list every brand and grade in your fixed BOQ material sheet.",
  },
];

export default function InteriorDesignOverviewPage() {
  const interiorProjects = projects.filter((p) => p.category === "interior").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [{ name: "Interior Design", href: "/interior-design" }];

  return (
    <>
      <JsonLd data={faqJsonLd(interiorFaqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, url: `${siteUrl}/${service.slug}`, siteUrl, legalName: company.legalName })} />

      {/* SECTION 1 — HERO */}
      <ServiceHero
        headline="Interiors Designed & Manufactured by One Team"
        copy="From modular kitchens to full 3BHK turnkey homes — 3D-approved before a single panel is cut, manufactured in factory, and installed with a 5-year hardware warranty."
        primaryCtaText="Discuss Your Interior Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Interior Portfolio"
        secondaryCtaLink="/projects"
        image="/images/home/hero-2-interior.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 2 — INTERIOR DESIGN SERVICES (NAVIGATION CARDS) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Specializations"
            title="Explore Our Interior Design Services"
            sub="Select an interior service category to view specialized 3D renders, shutter finish comparisons, pricing tiers, and design galleries."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorServices.map((s) => (
              <div
                key={s.href}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400/80 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 backdrop-blur-md bg-orange-950/80 text-orange-400 border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Interior Design
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-orange-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-center text-xs font-medium text-slate-700 gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button href={s.href} variant="primary" className="w-full justify-center bg-orange-600 hover:bg-orange-700 border-orange-500">
                      Explore {s.title.split(" ")[0]} →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>



      {/* SECTION 4 — DESIGN STYLES WE WORK IN */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Design Aesthetics"
            title="Styles Tailored to Your Home"
            sub="We don't push a single house style. We adapt to the aesthetic that fits your lifestyle."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto gap-8">
            {interiorStyles.map((style) => (
              <div
                key={style.name}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {style.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — MATERIAL BOARD & FACTORY FINISHES */}
      <MaterialBoard
        eyebrow="Material Standards"
        title="Factory Finishes & Hardware Tier"
        sub="Every shutter finish, hinge channel, and carcass ply grade specified line-by-line before work begins."
        materials={[
          { name: "High-Gloss & Matte Acrylic Shutters", image: "/images/interior/kitchen-mat-acrylic.jpg" },
          { name: "Anti-Scratch Polyurethane (PU) Finish", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "BWP Marine Plywood Carcasses", image: "/images/interior/kitchen-storage-drawers.jpg" },
          { name: "German Soft-Close Hardware (5-Yr Warranty)", image: "/images/interior/kitchen-storage-corner.jpg" },
        ]}
      />

      {/* SECTION 6 — WHY CHOOSE ZEMITECH INTERIORS */}
      <ServiceProblemCards
        eyebrow="The Zemitech Advantage"
        title="Why Homeowners Trust Our Interior Division"
        cards={[
          { title: "3D Approved First", description: "Photorealistic 3D renders approved in writing before any material is ordered or cut." },
          { title: "Factory Manufacturing", description: "Modular units crafted on high-precision CNC machinery for flawless edge banding and fit." },
          { title: "45–75 Days Delivery", description: "Fast on-site installation window thanks to off-site factory unit production." },
          { title: "5-Year Hardware Warranty", description: "Soft-close hinges, tandem drawers, and hydraulic lifts covered by a 5-year warranty." },
          { title: "Fixed Material Sheet", description: "No mid-project surprises. Every ply grade, laminate code, and handle tier fixed upfront." },
          { title: "One Point of Contact", description: "A single dedicated project manager oversees 3D design, factory build, and site fit-out." },
        ]}
      />

      {/* SECTION 7 — FEATURED INTERIOR PROJECTS */}
      {interiorProjects.length > 0 && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
              <SectionHeading eyebrow="Portfolio" title="Featured Interior Projects" align="left" />
              <Button href="/projects" variant="outline">
                View All Interior Projects
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {interiorProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 8 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Interior Design Questions & Answers" align="center" />
          <div className="mt-12">
            <FaqAccordion faqs={interiorFaqs} />
          </div>
        </Container>
      </section>

      {/* SECTION 9 — FINAL CALL TO ACTION */}
      <ServiceFinalCTA
        title="Ready to Transform Your Home Interiors?"
        copy="Tell us about your property type (2BHK, 3BHK, Villa, Office) and target move-in date. Our interior design team will schedule a free site consultation and 3D design brief."
        primaryCtaText="Book Free Interior Consultation"
      />
    </>
  );
}
