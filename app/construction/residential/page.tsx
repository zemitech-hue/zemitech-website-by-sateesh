import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";

import MaterialBoard from "@/components/sections/MaterialBoard";
import CostFactorsList from "@/components/sections/CostFactorsList";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

const service = services["construction-residential"];

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
  alternates: { canonical: "/construction/residential" },
};

export default function ResidentialConstructionPage() {
  const relatedProjects = projects.filter((p) => p.category === service.projectCategory).slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Construction", href: "/construction" },
    { name: "Residential Villa Construction", href: "/construction/residential" },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, url: `${siteUrl}/${service.slug}`, siteUrl, legalName: company.legalName })} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Residential Villa Construction, From Groundwork to Handover"
        copy="Build your home with a structured construction process, dedicated site execution and transparent project management."
        primaryCtaText="Discuss Your Villa Project"
        primaryCtaLink="/contact"
        secondaryCtaText="View Residential Projects"
        secondaryCtaLink="/projects"
        image="/images/construction/residensialVilla.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Capabilities */}
      <ServiceProblemCards
        eyebrow="Capabilities"
        title="Residential Solutions We Deliver"
        sub="Types of residential projects Zemitech Urban designs and constructs."
        cards={[
          { title: "Independent Luxury Villas", image: "/images/construction/residensialVilla.png", description: "Bespoke standalone luxury villas built with turnkey RCC structures and custom architecture." },
          { title: "Modern Duplex Homes", image: "/images/construction/residential-completed-exterior.jpg", description: "Multi-level modern family duplexes with open floor plans and integrated private parking." },
          { title: "Multi-Floor Residences", image: "/images/construction/residential-site-progress-2.jpg", description: "Multi-storey residential buildings constructed to strict structural engineering standards." },
          { title: "Custom Turnkey Homes", image: "/images/construction/completed-work-facade.jpg", description: "Full end-to-end home construction from foundation excavation to interior move-in handover." },
        ]}
      />

      {/* Section 3 — What We Handle */}
      <ServiceScopeGrid
        eyebrow="Detailed Scope"
        title="What We Handle"
        groups={[
          {
            category: "Planning & Preparation",
            items: ["Site assessment", "Scope definition", "BOQ preparation", "Project planning"],
          },
          {
            category: "Civil & Structural",
            items: ["Foundation", "RCC", "Columns", "Beams", "Slabs", "Masonry"],
          },
          {
            category: "Finishing",
            items: ["Flooring", "Doors", "Windows", "Painting", "Internal finishing"],
          },
        ]}
      />

      {/* Section 4 — Construction Quality */}
      <MaterialBoard
        eyebrow="Quality Standards"
        title="Construction Quality"
        sub="Specified material grades, approved brands, and rigorous on-site execution supervision."
        materials={[
          { name: "M25 / M30 Ready-Mix Concrete", image: "/images/construction/material-closeup-concrete.jpg" },
          { name: "Fe550D TMT Reinforcement Steel", image: "/images/construction/material-closeup-steel.jpg" },
          { name: "Autoclaved Aerated Concrete Blocks", image: "/images/construction/residential-site-progress-1.jpg" },
          { name: "Vitrified & Natural Stone Flooring", image: "/images/construction/residential-material-tiles.jpg" },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Ready to Build Your Dream Home?"
        copy="Tell us about your plot location, size, and timeline to get a transparent estimate."
        primaryCtaText="Discuss Your Villa Project"
      />
    </>
  );
}
