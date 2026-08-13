import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";

import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

const service = services["construction-infrastructure"];

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
  alternates: { canonical: "/construction/infrastructure" },
};

export default function InfrastructurePage() {
  const relatedProjects = projects.filter((p) => p.category === service.projectCategory).slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Construction", href: "/construction" },
    { name: "Township Infrastructure & Roads", href: "/construction/infrastructure" },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, url: `${siteUrl}/${service.slug}`, siteUrl, legalName: company.legalName })} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Infrastructure Built for Long-Term Performance"
        copy="Structured execution for roads, site development and civil infrastructure requirements."
        primaryCtaText="Discuss The Requirement"
        primaryCtaLink="/contact"
        image="/images/construction/infrastructure hero.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Infrastructure Capabilities */}
      <ServiceProblemCards
        eyebrow="Capabilities"
        title="Infrastructure Capabilities"
        sub="Civil infrastructure and township land development services."
        cards={[
          { title: "Internal Concrete Roads", image: "/images/construction/infrastructure-road-work.jpg", description: "PVD & RCC rigid pavement internal roads designed for heavy vehicle transit." },
          { title: "Township Site Development", image: "/images/construction/infrastructure-aerial-progress.jpg", description: "Mass earthwork, grading, terracing, and plot demarcation for master planned layouts." },
          { title: "Stormwater Drainage Systems", image: "/images/construction/infrastructure-drainage-work.jpg", description: "Heavy reinforced box culverts and roadside RCC storm water drainage channels." },
          { title: "Boundary Walls & Utilities", image: "/images/construction/infrastructure-boundary-wall.jpg", description: "Precast compound boundary walls, security gates, and underground utility ducting." },
        ]}
      />

      {/* Section 3 — Road Construction Process */}
      <ServiceScopeGrid
        eyebrow="Detailed Process"
        title="Road Construction Process"
        groups={[
          {
            category: "Execution Stages",
            items: ["Site preparation", "Earthwork", "Sub-base", "Base preparation", "Surface work", "Drainage / finishing"],
          }
        ]}
      />

      {/* Section 4 — Engineering & Site Coordination */}
      <ServiceProblemCards
        eyebrow="Oversight"
        title="Engineering & Site Coordination"
        sub="Rigorous site management and technical quality controls."
        cards={[
          { title: "Topographical Site Surveys", image: "/images/construction/infrastructure-team-survey.jpg", description: "Precision total-station and drone topographical data mapping." },
          { title: "Execution Drawings & BOQ", image: "/images/construction/infrastructure-phasing-diagram.jpg", description: "Phased engineering drawings aligned with sales possession dates." },
          { title: "Heavy Equipment Fleet", image: "/images/construction/infrastructure-road-work.jpg", description: "Excavators, rollers, and graders for rapid large-scale earthmoving." },
          { title: "Quality Control & Compaction", image: "/images/construction/infrastructure-team-survey.jpg", description: "Core cutter compaction testing and concrete cube strength verification." },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Planning Infrastructure for a New Development?"
        copy="Tell us what you're building, where you're building it and what you need from our team."
        primaryCtaText="Discuss the Requirement"
      />
    </>
  );
}
