import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";

import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import MaterialBoard from "@/components/sections/MaterialBoard";
import CostFactorsList from "@/components/sections/CostFactorsList";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Turnkey Home Renovation | Zemitech Urban",
  description: "Transform Your Existing Home Without Managing Multiple Contractors.",
  alternates: { canonical: "/construction/renovation" },
};

export default function RenovationPage() {
  const relatedProjects = projects.filter((p) => p.category === "residential").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Construction", href: "/construction" },
    { name: "Turnkey Home Renovation", href: "/construction/renovation" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Transform Your Existing Home Without Managing Multiple Contractors"
        copy="From civil changes and flooring to plumbing and paint, we handle the entire renovation scope under one project manager."
        primaryCtaText="Plan My Renovation"
        primaryCtaLink="/contact"
        image="/images/construction/turnkey.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — What Can Be Renovated? */}
      <ServiceProblemCards
        eyebrow="Spaces"
        title="What Can Be Renovated?"
        sub="Complete or phased home refurbishment and civil transformation."
        cards={[
          { title: "Complete Home Overhaul", image: "/images/interior/hero-turnkey.jpg", description: "Full house civil restructuring, re-tiling, wall removal, electrical rewiring, and complete interiors." },
          { title: "Modular Kitchen Upgrade", image: "/images/interior/kitchen-layout-l-shape.jpg", description: "Demolishing old kitchen platforms and installing factory modular cabinets with quartz tops." },
          { title: "Living & Entertainment Room", image: "/images/interior/living-tv-console-unit.jpg", description: "False ceiling installation, floating media wall consoles, and decorative fluted wood panelling." },
          { title: "Structural Civil Modifications", image: "/images/construction/residential-site-progress-1.jpg", description: "Wall removal, balcony enclosures, waterproof bathroom tiling, and plumbing overhauls." },
        ]}
      />

      {/* Section 3 — Renovation Scope */}
      <ServiceScopeGrid
        eyebrow="Capabilities"
        title="Renovation Scope"
        groups={[
          {
            category: "Core Works",
            items: ["Civil modifications", "Flooring", "Painting", "Electrical", "Plumbing", "Ceilings", "Joinery", "Interior finishing"],
          }
        ]}
      />

      {/* Section 4 — Materials & Finishes */}
      <MaterialBoard
        eyebrow="Selections"
        title="Materials & Finishes"
        materials={[
          { name: "Vitrified Flooring Options", image: "/images/construction/residential-material-tiles.jpg" },
          { name: "Washable Acrylic Paints", image: "/images/interior/kitchen-mat-laminate.jpg" },
          { name: "Sanitary & Bathroom Fittings", image: "/images/interior/hero-interior.jpg" },
          { name: "Joinery & Woodwork Finishes", image: "/images/interior/kitchen-mat-veneer.jpg" },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Ready to Transform Your Existing Home?"
        copy="Tell us about your property location and required scope to get an instant consultation."
        primaryCtaText="Plan My Renovation"
      />
    </>
  );
}
