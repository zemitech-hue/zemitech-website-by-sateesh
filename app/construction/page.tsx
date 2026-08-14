import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/sections/ServiceHero";
import MaterialBoard from "@/components/sections/MaterialBoard";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ServiceFinalCTA from "@/components/sections/ServiceFinalCTA";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getProjects } from "@/lib/supabase/queries";
import JsonLd, { faqJsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";
import { constructionSubServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Construction Services in Pune — Residential, Commercial & Infrastructure",
  description:
    "End-to-end construction contractor in Pune. Independent villas, commercial fit-outs, township infrastructure, civil engineering, renovation & industrial sheds. Fixed BOQ & in-house engineers.",
  alternates: { canonical: "/construction" },
};

const constructionFaqs = [
  {
    question: "What types of construction projects does Zemitech Urban handle?",
    answer: "We handle residential villa construction, commercial office and retail fit-outs, township infrastructure and road works, structural engineering, turnkey home renovations, and industrial warehouses across Pune.",
  },
  {
    question: "How is pricing structured for construction projects?",
    answer: "We provide a fully itemized Bill of Quantities (BOQ) with material grades and labor costs agreed upfront. Payments are linked to verified site milestones, not calendar dates.",
  },
  {
    question: "Do you manage municipal plan sanctions and approvals?",
    answer: "Yes, our team coordinates architectural drawings, structural certifications, municipal plan sanctions and completion certificates as part of our turnkey execution.",
  },
  {
    question: "Do you hire third-party subcontractors?",
    answer: "No — core structural engineering, masonry, and site supervision are handled by our own in-house engineers and site crews.",
  },
];

export const revalidate = 60;

export default async function ConstructionOverviewPage() {
  const projects = await getProjects();
  const constructionProjects = projects.filter((p) => p.category === "residential" || p.category === "commercial" || p.category === "infrastructure").slice(0, 4);
  const siteUrl = `https://${company.domain}`;
  const breadcrumbs = [{ name: "Construction", href: "/construction" }];

  return (
    <>
      <JsonLd data={faqJsonLd(constructionFaqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: siteUrl }, ...breadcrumbs].map(b => ({ name: b.name, url: b.href.startsWith("http") ? b.href : `${siteUrl}${b.href}` })))} />
      <JsonLd data={serviceJsonLd({ name: "Construction Services", description: metadata.description as string, url: `${siteUrl}/construction`, siteUrl, legalName: company.legalName })} />

      {/* Section 1 — Hero */}
      <ServiceHero
        headline="End-to-End Construction Services in Pune"
        copy="From independent villas and commercial fit-outs to township infrastructure — built by one accountable engineering team with fixed BOQs and weekly photo reports."
        primaryCtaText="Discuss Your Construction Project"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Portfolio"
        secondaryCtaLink="/projects"
        image="/images/construction/overview/hero.png"
      />

      {/* Section 2 — Sub-service navigation cards (pulled from lib/data/services.ts) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Specializations"
            title="Explore Our Construction Services"
            sub="Select a construction division to view detailed scope, technical specifications, and material standards."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {constructionSubServices.map((s) => (
              <div
                key={s.slug}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-700/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={s.heroImage}
                    alt={s.navLabel}
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
                    {s.navLabel}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">
                    {s.heroCopy}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button href={`/${s.slug}`} variant="primary" className="w-full justify-center">
                      Explore {s.navLabel.split(" ")[0]} →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3 — Quality & material standards */}
      <MaterialBoard
        eyebrow="Quality Standards"
        title="Engineering & Material Specifications"
        sub="We specify exact material grades in writing before work starts — no vague allowances or mid-project compromises."
        materials={[
          { name: "Fe 550D TMT Reinforcement Steel", image: "/images/construction/overview/material-1.png" },
          { name: "OPC 53 & PPC Grade Cement", image: "/images/construction/overview/material-2.png" },
          { name: "Red Clay Bricks & AAC Blocks", image: "/images/construction/overview/material-3.png" },
          { name: "Vitrified Tiles & Natural Stone", image: "/images/construction/overview/material-4.png" },
        ]}
      />

      {/* Section 4 — Featured construction projects */}
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

      {/* Section 5 — FAQ */}
      <section className="py-20 bg-white border-b border-slate-200">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Construction Questions & Answers" align="center" />
          <div className="mt-12">
            <FaqAccordion faqs={constructionFaqs} />
          </div>
        </Container>
      </section>

      {/* Section 6 — Final CTA */}
      <ServiceFinalCTA
        title="Planning a Construction Project in Pune?"
        copy="Tell us about your plot location, proposed built-up area and timeline. Our structural engineering team will schedule a free site visit and feasibility assessment."
        primaryCtaText="Discuss Your Construction Requirement"
      />
    </>
  );
}
