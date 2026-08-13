import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblemCards from "@/components/sections/ServiceProblemCards";
import ServiceScopeGrid from "@/components/sections/ServiceScopeGrid";
import MaterialBoard from "@/components/sections/MaterialBoard";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Office Interior Fit-Outs | Zemitech Urban",
  description: "Office Interiors Designed for Better Workspaces.",
  alternates: { canonical: "/interior-design/office" },
};

export default function OfficeInteriorsPage() {
  const relatedProjects = projects.filter((p) => p.category === "commercial").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [
    { name: "Interior Design", href: "/interior-design" },
    { name: "Office Interior Fit-Outs", href: "/interior-design/office" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="Office Interiors Designed for Better Workspaces"
        copy="Turnkey corporate and startup office fit-outs delivered on time, with full MEP coordination."
        primaryCtaText="Discuss Your Workspace"
        primaryCtaLink="/contact"
        image="/images/interior/hero-office.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Section 2 — Office Zones */}
      <ServiceProblemCards
        eyebrow="Layouts"
        title="Office Zones"
        sub="Functional corporate workspace layouts designed for productivity, collaboration, and brand identity."
        cards={[
          {
            title: "Reception & Welcome Desk",
            image: "/images/interior/office-reception-desk.jpg",
            description: "Brand-aligned arrival reception desks featuring backlit corporate signage and warm guest seating lounge.",
          },
          {
            title: "Modular Workstation Pods",
            image: "/images/interior/office-workstation-pods.jpg",
            description: "Linear and cluster workstation desks equipped with integrated wire management raceways and acoustic desktop dividers.",
          },
          {
            title: "Glass Conference & Meeting Rooms",
            image: "/images/interior/office-glass-conference.jpg",
            description: "Double-glazed glass partition meeting rooms optimized for privacy, AV presentation screens, and acoustic isolation.",
          },
          {
            title: "Executive Suites & Cabins",
            image: "/images/interior/office-executive-cabin.jpg",
            description: "Private leadership office suites designed with veneer credenzas, comfortable seating, and ambient lighting.",
          },
        ]}
      />

      {/* Section 3 — What We Design */}
      <ServiceProblemCards
        eyebrow="Capabilities"
        title="What We Design"
        sub="Comprehensive interior design solutions for modern commercial spaces."
        cards={[
          { title: "Workstations & Pods", image: "/images/interior/office-workstation-pods.jpg", description: "Linear, cluster, and flexible desk systems." },
          { title: "Reception Area", image: "/images/interior/office-reception-desk.jpg", description: "Brand-aligned arrival experiences." },
          { title: "Conference Rooms", image: "/images/interior/office-glass-conference.jpg", description: "Acoustically sound meeting spaces." },
          { title: "Executive Cabins", image: "/images/interior/office-executive-cabin.jpg", description: "Premium, private enclosures." },
        ]}
      />

      {/* Section 4 — Materials & Finishes */}
      <MaterialBoard
        eyebrow="Selections"
        title="Materials & Finishes"
        materials={[
          { name: "Wood & Veneer", image: "/images/interior/kitchen-mat-veneer.jpg" },
          { name: "Glass", image: "/images/interior/office-glass-conference.jpg" },
          { name: "Metal", image: "/images/interior/office-workstation-pods.jpg" },
          { name: "Flooring", image: "/images/interior/office-reception-desk.jpg" },
        ]}
      />

      {/* Section 5 — CTA */}
      <ServiceFinalCTA
        title="Planning a New Office?"
        copy="Tell us about your office requirement and let's discuss the right approach."
        primaryCtaText="Discuss Your Workspace"
      />
    </>
  );
}
