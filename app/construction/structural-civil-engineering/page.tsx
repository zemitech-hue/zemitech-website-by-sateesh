import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";

import EditorialGallery from "@/components/sections/EditorialGallery";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Structural & Civil Engineering | Zemitech Urban",
  description: "Structural & Civil Engineering for Reliable Project Execution.",
  alternates: { canonical: "/construction/structural-civil-engineering" },
};

export default function StructuralCivilPage() {
  const relatedProjects = projects.filter((p) => p.category === "infrastructure" || p.category === "residential").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Construction", href: "/construction" },
    { name: "Structural & Civil Engineering", href: "/construction/structural-civil-engineering" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Structural & Civil Engineering for Reliable Project Execution"
        copy="Executing structural designs with rigorous site control and engineering oversight."
        primaryCtaText="Talk to Our Team"
        primaryCtaLink="/contact"
        image="/images/construction/Structural & Civil.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Engineering Scope */}
      <ServiceProblemCards
        eyebrow="Capabilities"
        title="Engineering Scope"
        sub="Civil engineering and RCC structural execution services."
        cards={[
          { title: "Structural RCC Framing", image: "/images/construction/site-progress-structure.jpg", description: "Precision RCC columns, beams, post-tensioned slabs, and heavy load framing." },
          { title: "Deep Foundation & Excavation", image: "/images/construction/site-progress-foundation.jpg", description: "Pile foundations, raft footings, and soil retaining wall engineering." },
          { title: "Masonry & Plastering", image: "/images/construction/residential-site-progress-1.jpg", description: "AAC blockwork, solid brick masonry, double-coat external sand-face plastering." },
          { title: "Site Civil Infrastructure", image: "/images/construction/infrastructure-team-survey.jpg", description: "Compound retaining walls, stormwater drainage channels, and site land grading." },
        ]}
      />

      {/* Section 3 — Engineering Before Execution */}
      <ServiceScopeGrid
        eyebrow="Process"
        title="Engineering Before Execution"
        sub="We execute designs provided by your architect or structural engineer with absolute fidelity."
        groups={[
          {
            category: "Pre-execution Flow",
            items: ["Requirement", "Assessment", "Design/Planning", "BOQ", "Execution"],
          },
          {
            category: "Civil Scope",
            items: ["Masonry", "Flooring", "Plastering", "Site works", "Drainage", "Finishing"],
          },
        ]}
      />

      {/* Section 4 — Quality & Site Checks */}
      <EditorialGallery
        eyebrow="Quality"
        title="Quality & Site Checks"
        images={[
          { src: "/images/construction/residential-team-inspection.jpg", caption: "Level and plumb checks." },
          { src: "/images/construction/material-closeup-steel.jpg", caption: "Reinforcement inspection." },
          { src: "/images/construction/material-closeup-concrete.jpg", caption: "Concrete cube testing on site." },
          { src: "/images/construction/completed-work-facade.jpg", caption: "Curing process monitoring." },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Have a Structural or Civil Requirement?"
        copy="Tell us what you're building, where you're building it and what you need from our team."
        primaryCtaText="Talk to Our Team"
      />
    </>
  );
}
