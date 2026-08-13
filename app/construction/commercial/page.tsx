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

const service = services["construction-commercial"];

export const metadata: Metadata = {
  title: service.title,
  description: service.metaDescription,
  alternates: { canonical: "/construction/commercial" },
};

export default function CommercialConstructionPage() {
  const relatedProjects = projects.filter((p) => p.category === service.projectCategory).slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Construction", href: "/construction" },
    { name: "Commercial Office Fit-Outs", href: "/construction/commercial" },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(service.faqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, url: `${siteUrl}/${service.slug}`, siteUrl, legalName: company.legalName })} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Commercial Office Spaces Built Around Your Business"
        copy="From planning and civil works to finishing and handover, manage your office project through one coordinated team."
        primaryCtaText="Discuss Your Office Project"
        primaryCtaLink="/contact"
        image="/images/construction/office space.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Commercial Spaces We Work On */}
      <ServiceProblemCards
        eyebrow="Spaces"
        title="Commercial Spaces We Work On"
        sub="Tailored commercial interior and structural construction solutions."
        cards={[
          { title: "Corporate Offices", image: "/images/interior/office-reception-desk.jpg", description: "Multi-floor corporate headquarters with custom executive suites and brand integration." },
          { title: "Startup Workspaces", image: "/images/interior/office-workstation-pods.jpg", description: "Flexible workstation clusters, open breakout zones, and high-density desk layouts." },
          { title: "Glass Conference Facilities", image: "/images/interior/office-glass-conference.jpg", description: "Acoustically sound double-glazed meeting rooms and presentation boardrooms." },
          { title: "Executive Suites", image: "/images/interior/office-executive-cabin.jpg", description: "Private leadership cabins with custom veneer credenzas and ambient lighting." },
        ]}
      />

      {/* Section 3 — What the Fit-Out Includes */}
      <ServiceScopeGrid
        eyebrow="Capabilities"
        title="What the Fit-Out Includes"
        groups={[
          {
            category: "Core Works",
            items: ["Space planning", "Civil modifications", "Partitions", "Doors", "Joinery"],
          },
          {
            category: "Finishing & Services",
            items: ["Flooring", "Ceiling", "Electrical coordination", "Lighting coordination", "Painting"],
          },
        ]}
      />

      {/* Section 4 — Designed Around Business Operations */}
      <ServiceProblemCards
        eyebrow="Design Logic"
        title="Designed Around Business Operations"
        sub="How the project considers your daily workflows and organizational growth."
        cards={[
          { title: "Employee Movement", image: "/images/interior/office-workstation-pods.jpg", description: "Optimized circulation paths and ergonomic desk arrangements." },
          { title: "Meeting Spaces", image: "/images/interior/office-glass-conference.jpg", description: "Acoustically sound collaboration zones and private phone booths." },
          { title: "Reception & Client Areas", image: "/images/interior/office-reception-desk.jpg", description: "Brand-aligned front-of-house arrival lounges for visiting clients." },
          { title: "Executive Cabins", image: "/images/interior/office-executive-cabin.jpg", description: "Ergonomic and organized leadership office layouts." },
        ]}
      />

      {/* Section 5 — Final CTA */}
      <ServiceFinalCTA
        title="Planning a New Commercial Space?"
        copy="Tell us about your floor area and target move-in timeline to get started."
        primaryCtaText="Discuss Your Project"
      />
    </>
  );
}
