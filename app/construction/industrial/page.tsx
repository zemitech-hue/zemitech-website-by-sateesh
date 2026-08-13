import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";
import VisualJourneyTimeline from "@/components/sections/VisualJourneyTimeline";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Industrial Warehouses & Sheds | Zemitech Urban",
  description: "Industrial Warehouses & Sheds Built for Functional Performance.",
  alternates: { canonical: "/construction/industrial" },
};

export default function IndustrialPage() {
  const relatedProjects = projects.filter((p) => p.category === "infrastructure" || p.category === "commercial").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Construction", href: "/construction" },
    { name: "Industrial Warehouses & Sheds", href: "/construction/industrial" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Industrial Warehouses & Sheds Built for Functional Performance"
        copy="Heavy-duty structures engineered for logistics, manufacturing, and storage."
        primaryCtaText="Discuss Your Requirement"
        primaryCtaLink="/contact"
        image="/images/construction/Warehouses.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Industrial Facilities */}
      <ServiceProblemCards
        eyebrow="Facilities"
        title="Industrial Facilities We Construct"
        sub="Engineered industrial solutions built for heavy floor loads, logistics, and clear-span headroom."
        cards={[
          { title: "Logistics Warehouses", image: "/images/construction/Warehouses.png", description: "High-bay logistics warehouses with VDF heavy-duty flooring and container loading bays." },
          { title: "Pre-Engineered Sheds (PEB)", image: "/images/construction/commercial-site-progress-1.jpg", description: "Clear-span steel PEB structures designed for rapid assembly and maximum internal space." },
          { title: "Heavy Storage Facilities", image: "/images/construction/commercial-site-progress-2.jpg", description: "Enclosed industrial storage units with high load-bearing foundations and crane gantries." },
          { title: "Manufacturing Plants", image: "/images/construction/infrastructure-aerial-progress.jpg", description: "Turnkey manufacturing plants integrated with heavy electrical, ventilation, and drainage systems." },
        ]}
      />

      {/* Section 3 — Project Scope */}
      <ServiceScopeGrid
        eyebrow="Capabilities"
        title="Project Scope"
        groups={[
          {
            category: "Core Construction",
            items: ["Site preparation", "Civil works", "Foundations", "Structural systems", "Roofing", "Flooring", "Services coordination"],
          }
        ]}
      />

      {/* Section 4 — Industrial Planning Considerations */}
      <ServiceProblemCards
        eyebrow="Planning"
        title="Industrial Planning Considerations"
        sub="Critical engineering requirements for high-performance industrial plants."
        cards={[
          { title: "Site & Vehicle Access", image: "/images/construction/infrastructure-road-work.jpg", description: "Heavy vehicle turning radius, approach roads, and dedicated loading dock ramps." },
          { title: "Heavy Floor Load Limits", image: "/images/construction/material-closeup-concrete.jpg", description: "VDF (Vacuum Dewatered Flooring) and epoxy coatings engineered for forklift traffic." },
          { title: "Clear Span Headroom", image: "/images/construction/Warehouses.png", description: "Wide clear-span steel trusses and crane gantry support columns." },
          { title: "High-Capacity Drainage", image: "/images/construction/infrastructure-drainage-work.jpg", description: "Industrial stormwater management and heavy effluent drainage channels." },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Planning an Industrial Facility?"
        copy="Tell us what you're building, where you're building it and what you need from our team."
        primaryCtaText="Discuss Your Requirement"
      />
    </>
  );
}
