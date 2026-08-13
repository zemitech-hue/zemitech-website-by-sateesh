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

const service = services["construction"];

export const metadata: Metadata = {
  title: "Construction Services in Pune — Residential, Commercial & Infrastructure",
  description:
    "End-to-end construction contractor in Pune. Independent villas, commercial fit-outs, township infrastructure, civil engineering, renovation & industrial sheds. Fixed BOQ & in-house engineers.",
  alternates: { canonical: "/construction" },
};

const constructionServices = [
  {
    title: "Residential Villa Construction",
    href: "/construction/residential",
    image: "/images/home/hero-3-residential.jpg",
    description:
      "Custom independent homes, duplexes and luxury villas built from groundwork to final coat of paint. Vastu-aware layouts, fixed-scope BOQ, and stage-wise billing.",
    features: ["Custom Villa & Duplex Layouts", "Vastu-Aware Architectural Design", "8–11 Months Target Delivery", "12-Month Structural Warranty"],
  },
  {
    title: "Commercial Office Fit-Outs",
    href: "/construction/commercial",
    image: "/images/home/hero-5-commercial.jpg",
    description:
      "Offices, retail stores, showrooms and IT park building fit-outs sequenced backwards from your target opening date. Full MEP trade coordination on one drawing.",
    features: ["Schedule-First Opening Target", "MEP & Fire Code Compliance", "Off-Hours Work Windows", "As-Built Documentation"],
  },
  {
    title: "Township Infrastructure & Roads",
    href: "/construction/infrastructure",
    image: "/images/home/hero-6-infrastructure.jpg",
    description:
      "Township-scale civil works: internal road networks, storm-water drainage sized to catchment, boundary walls, and clubhouse amenity structures.",
    features: ["Phased Zone Handover", "Storm-water Catchment Sizing", "Utility Ducting Pre-surfacing", "Developer Timeline Alignment"],
  },
  {
    title: "Structural & Civil Engineering",
    href: "/construction/structural-civil-engineering",
    image: "/images/services/civil/thumb.jpg",
    description:
      "Foundation design, RCC framework, retrofitting, seismic structural auditing, and civil engineering supervision for complex architectural plans.",
    features: ["Fe 550D TMT Reinforcement", "Concrete Mix Design & Testing", "Structural Stability Audit", "Resident Site Engineers"],
  },
  {
    title: "Turnkey Home Renovation",
    href: "/construction/renovation",
    image: "/images/services/renovation/thumb.jpg",
    description:
      "Full structural upgrades, floor additions, wall re-alignments, exterior waterproofing, and modern facade revamps for existing homes and properties.",
    features: ["Structural Integrity Checks", "Clean Site Containment", "Fixed Renovation BOQ", "Complete Interior Handover"],
  },
  {
    title: "Industrial Warehouses & Sheds",
    href: "/construction/industrial",
    image: "/images/services/industrial/hero.jpg",
    description:
      "PEB steel sheds, industrial warehouses, factory floors, and heavy-duty concrete aprons designed for high equipment load and logistics workflows.",
    features: ["Pre-Engineered Steel Framework", "Heavy-Duty Trimix Flooring", "High Clearance & Crane Beams", "Industrial Safety Compliant"],
  },
];

const constructionFaqs = [
  {
    question: "What types of construction projects does Zemitech Urban handle?",
    answer: "We handle residential villa construction, commercial office and retail fit-outs, township infrastructure and road works, structural engineering, turnkey home renovations, and industrial warehouses across Pune.",
  },
  {
    question: "How is pricing structured for construction projects?",
    answer: "We provide a fully itemized Bill of Quantities (BOQ) with material grades, steel/cement specifications, and labor costs agreed upon upfront. Payments are linked to verified site milestones (e.g. footing, slab, brickwork) rather than calendar dates.",
  },
  {
    question: "Do you manage municipal plan sanctions and approvals?",
    answer: "Yes, our team coordinates architectural drawings, structural stability certifications, municipal plan sanctions (PMC / PCMC / PMRDA), and completion certificates as part of our turnkey execution.",
  },
  {
    question: "Do you hire third-party subcontractors?",
    answer: "No, core structural engineering, masonry, steel-binding, and site supervision are handled by our own in-house engineers and dedicated site crews to guarantee consistent craftsmanship.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Independent villas take 8–11 months, commercial fit-outs take 60–90 days, and infrastructure phases range from 8–14 months depending on acreage and site complexity.",
  },
  {
    question: "How do you handle construction during Pune's monsoon season?",
    answer: "Site activities are planned around monsoon seasons. Foundation and structural concrete pours are scheduled ahead of heavy rain, and waterproofing protocols are applied before finishing work begins.",
  },
];

export default function ConstructionOverviewPage() {
  const constructionProjects = projects.filter((p) => p.category === "residential" || p.category === "commercial" || p.category === "infrastructure").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [{ name: "Construction", href: "/construction" }];

  return (
    <>
      <JsonLd data={faqJsonLd(constructionFaqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, url: `${siteUrl}/${service.slug}`, siteUrl, legalName: company.legalName })} />

      {/* SECTION 1 — HERO */}
      <ServiceHero
        headline="End-to-End Construction Services in Pune"
        copy="From independent villas and commercial fit-outs to township infrastructure — built by one accountable engineering team with fixed BOQs and weekly photo reports."
        primaryCtaText="Discuss Your Construction Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Portfolio"
        secondaryCtaLink="/projects"
        image="/images/home/hero-1-construction.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 2 — CONSTRUCTION SERVICES & DIVISIONS (NAVIGATION CARDS) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Specializations"
            title="Explore Our Construction Services"
            sub="Select a construction division to view detailed scope, technical specifications, timelines, and past project photos."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionServices.map((s) => (
              <div
                key={s.href}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-700/60 hover:-translate-y-1 transition-all duration-300"
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
                  <span className="absolute top-4 left-4 backdrop-blur-md bg-blue-950/80 text-green-400 border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Construction
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-center text-xs font-medium text-slate-700 gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button href={s.href} variant="primary" className="w-full justify-center">
                      Explore {s.title.split(" ")[0]} →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>



      {/* SECTION 4 — QUALITY & MATERIAL STANDARDS */}
      <MaterialBoard
        eyebrow="Quality Standards"
        title="Engineering & Material Specifications"
        sub="We specify exact material grades in writing before work starts — no vague allowances or mid-project compromises."
        materials={[
          { name: "Fe 550D TMT Reinforcement Steel", image: "/images/services/residential/mat-steel.jpg" },
          { name: "OPC 53 & PPC Grade Cement", image: "/images/services/residential/mat-concrete.jpg" },
          { name: "Red Clay Bricks & AAC Blocks", image: "/images/services/residential/mat-brick.jpg" },
          { name: "Crystalline & Polymer Waterproofing", image: "/images/services/residential/mat-finish.jpg" },
          { name: "Vitrified Tiles & Natural Stone", image: "/images/services/residential/mat-floor.jpg" },
          { name: "ISI-Marked Copper & UPVC Conduiting", image: "/images/services/residential/mat-doors.jpg" },
        ]}
      />

      {/* SECTION 5 — WHY ZEMITECH CONSTRUCTION (USPS) */}
      <ServiceProblemCards
        eyebrow="The Zemitech Standard"
        title="Why Property Owners Choose Our Construction Team"
        cards={[
          { title: "In-House Engineers", description: "Dedicated site engineers and supervisors present on-site daily, not sub-contracted out." },
          { title: "Fixed BOQ Guarantee", description: "Detailed itemized Bill of Quantities agreed before work starts — no hidden surprises." },
          { title: "Weekly Photo Reports", description: "Transparent weekly photo-logged updates and milestone progress tracking." },
          { title: "Approval Coordination", description: "Complete handling of municipal plan sanctions, structural audits, and NOCs." },
          { title: "Milestone-Linked Billing", description: "Payments tied directly to inspected, verified site milestones like foundation or slab pour." },
          { title: "12-Month Defect Liability", description: "Post-handover defect warranty on structural work and waterproofing." },
        ]}
      />

      {/* SECTION 6 — FEATURED CONSTRUCTION PROJECTS */}
      {constructionProjects.length > 0 && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
              <SectionHeading eyebrow="Portfolio" title="Featured Construction Projects" align="left" />
              <Button href="/projects" variant="outline">
                View All Projects
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {constructionProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 7 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Construction Questions & Answers" align="center" />
          <div className="mt-12">
            <FaqAccordion faqs={constructionFaqs} />
          </div>
        </Container>
      </section>

      {/* SECTION 8 — FINAL CALL TO ACTION */}
      <ServiceFinalCTA
        title="Planning a Construction Project in Pune?"
        copy="Tell us about your plot location, proposed built-up area and timeline. Our structural engineering team will schedule a free site visit and feasibility assessment."
        primaryCtaText="Discuss Your Construction Requirement"
      />
    </>
  );
}
