"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaptionedImage from "@/components/ui/CaptionedImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import CTASection from "@/components/sections/CTASection";
import InquiryModal from "@/components/ui/InquiryModal";
import GracefulImage from "@/components/ui/GracefulImage";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

const siteUrl = `https://${company.domain}`;

const timeline = [
  {
    year: "2019",
    title: "Zemitech Urban founded in Narhe",
    body: "Started as a small in-house team taking on residential construction contracts across Narhe and the surrounding Pune suburbs — keeping core execution in-house to hold both quality and timelines.",
    image: "/images/about/timeline-2019-founding.png",
    alt: "Zemitech Urban founding team on a residential construction site in Narhe, Pune, 2019",
  },
  {
    year: "2022",
    title: "Interior Design division launches",
    body: "Formalized interior design as its own division with a dedicated factory-manufacturing partnership for modular kitchens and wardrobes, applying in-house accountability to interior design.",
    image: "/images/about/timeline-2022-division-split.png",
    alt: "Zemitech Urban Interior Design division's first dedicated design studio, 2022",
  },
  {
    year: "2024–25",
    title: "240+ projects, both divisions at scale",
    body: "Crossed 240 completed projects across residential, commercial, infrastructure and interior categories, with construction and interior design running as genuinely coordinated divisions.",
    image: "/images/about/timeline-2024-scale.png",
    alt: "Zemitech Urban team celebrating the 240-plus completed projects milestone",
  },
];

const values = [
  { title: "Transparency", body: "Fixed-scope BOQs and material sheets agreed before work starts — no surprise line items." },
  { title: "Accountability", body: "One project manager, one point of contact, from first visit to handover." },
  { title: "Craftsmanship", body: "In-house site and design teams held to the same quality standard on every project." },
  { title: "Timeliness", body: "Schedules planned backwards from your handover or opening date, and tracked weekly." },
];

const workLocations = [
  {
    tag: "Head Office • Narhe, Pune",
    title: "Narhe Head Office & Experience Center",
    description: "Our dedicated corporate office in Narhe serves as the central hub for engineering design, client consultations, project management, and BOQ estimation.",
    highlights: ["In-House Engineering Team", "Client Consultation Studio", "Dedicated Project Managers"],
    image: "/images/about/office-exterior.png",
    ctaText: "Book Appointment at Narhe Office",
  },
  {
    tag: "Quality Audit • Site Supervision",
    title: "Site Engineering & Quality Control Meetings",
    description: "Our senior civil engineers conduct weekly on-site quality audits, laser level checks, structural reinforcement verification, and client progress reviews.",
    highlights: ["Weekly Site Photo Updates", "IS Code Structural Audit", "Zero-Defect Protocol"],
    image: "/images/about/team-site-review.png",
    ctaText: "Schedule On-Site Inspection",
  },
  {
    tag: "Material Library • 3D Renders",
    title: "Bespoke Interior Design Studio",
    description: "Explore 100+ physical material samples, veneer textures, quartz slab swatches, and photorealistic 3D renders to visualize your home interiors.",
    highlights: ["100+ Physical Samples", "3D Photorealistic Renders", "Factory Direct Pricing"],
    image: "/images/about/design-studio.png",
    ctaText: "Book Interior Design Consultation",
  },
  {
    tag: "Turnkey Completion • Move-In Ready",
    title: "Client Handover & Structural Walkthrough",
    description: "Before final keys are handed over, our project manager leads a comprehensive 50-point walkthrough with the client to verify every fixture and finish.",
    highlights: ["50-Point Snag Inspection", "Pristine Chemical Cleaned", "Active Warranty Folder"],
    image: "/images/about/site-walkthrough.png",
    ctaText: "Book Turnkey Villa Project",
  },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "About Us", url: `${siteUrl}/about` },
        ])}
      />

      {/* Section 1 — Hero */}
      <PageHero
        eyebrow="About Us"
        headline="Construction and interior design, under one roof"
        sub="Zemitech Urban Private Limited has delivered 240+ projects across Pune since 2019 — built by in-house teams, not stitched together across sub-contractors."
        image="/images/about/hero.png"
        breadcrumbs={[{ name: "About Us", href: "/about" }]}
      />

      {/* Section 2 — Our story + stats */}
      <SplitSection
        eyebrow="Our Story"
        title="Why we started, and what's changed since"
        paragraphs={[
          "Zemitech Urban Private Limited was founded in 2019 in Narhe, Pune, on a fairly simple observation: construction and interior design are usually handled by separate companies, and the handoff between them is where most homeowners lose time, money and quality control. We started as a construction contractor with the explicit intention of building an interior design capability under the same roof once the construction side was solid.",
          "The first two years were almost entirely residential construction, built by a small in-house team rather than sub-contracted crews. That in-house-first decision, made before the company had the scale to make it easy, is the one piece of the original founding bet that hasn't changed since: we still run our own site supervision and design teams today, at 240+ projects, for the same reason we did at project one.",
          "Today, whether you need a single modular kitchen or a complete building from foundation to final coat of paint, the same company — and typically the same project manager, if you engage both divisions — stays accountable from first site visit to final handover.",
        ]}
        image="/images/about/office-team.png"
        imageAlt="Zemitech Urban leadership and site team outside the Narhe office"
        imageCaption="Zemitech Urban team, Narhe office"
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="backdrop-blur-2xl bg-slate-50/90 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-950/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-slate-200">
              {company.stats.map((s, i) => (
                <div key={s.label} className={`text-center py-2 ${i !== 0 ? "md:pl-6" : ""}`}>
                  <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">{s.value}</p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 font-mono-label font-bold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3 — Timeline */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <Container>
          <SectionHeading eyebrow="Company Timeline" title="Milestones since 2019" />
          <div className="mt-12 space-y-10">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 80}>
                <div className="grid sm:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr_280px] gap-6 items-start rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-mono-label text-2xl font-semibold text-blue-700">{t.year}</p>
                  <div>
                    <p className="font-semibold text-blue-950 text-lg">{t.title}</p>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">{t.body}</p>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <CaptionedImage src={t.image} alt={t.alt} aspect="aspect-[4/3]" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4 — Where We Work (Converted into 4 Full Horizontal Split Cards with Alternating Layout) */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHeading eyebrow="Where We Work" title="Office, Studio & Site Execution" sub="Our operational facilities, engineering studios, and site supervision practices across Pune." align="center" />
          
          <div className="mt-14 space-y-12 sm:space-y-16">
            {workLocations.map((item, i) => {
              const isImageLeft = i % 2 === 0;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(30,58,138,0.15)] hover:border-blue-700/60 transition-all duration-500 p-7 sm:p-9 lg:p-11">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Image Column (Alternates Left / Right) */}
                      <div
                        className={`lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80 ${
                          isImageLeft ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <GracefulImage
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="group-hover:scale-105 transition-transform duration-700 ease-out object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white font-mono-label font-bold text-xs px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                          Facility 0{i + 1}
                        </div>
                      </div>

                      {/* Content Column */}
                      <div
                        className={`lg:col-span-6 flex flex-col justify-center ${
                          isImageLeft ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="inline-flex items-center gap-2 mb-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                          <span className="text-xs font-mono-label font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                            {item.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                          {item.description}
                        </p>

                        {/* Badges Grid */}
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-slate-700 font-mono-label">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/70">
                              <svg className="w-4 h-4 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Service CTA Button triggering InquiryModal */}
                        <div className="mt-7 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                          <button
                            onClick={() => setModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/30 hover:shadow-lg hover:scale-105 transition-all cursor-pointer border border-amber-300"
                          >
                            <span>{item.ctaText}</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                          <span className="text-xs font-mono-label font-bold text-slate-500">
                            Free Consultation & Estimate
                          </span>
                        </div>

                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section 5 — Vision, mission & values */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <Container>
          <SectionHeading eyebrow="What Guides Us" title="Vision, mission and values" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm">
              <p className="font-mono-label text-xs uppercase tracking-wide text-blue-700 font-bold mb-3">Vision</p>
              <p className="text-slate-900 text-lg leading-relaxed font-semibold">
                To be Pune&apos;s most trusted name for construction and interior design — where clients never have to choose between quality, transparency, and timeline.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm">
              <p className="font-mono-label text-xs uppercase tracking-wide text-blue-700 font-bold mb-3">Mission</p>
              <p className="text-slate-900 text-lg leading-relaxed font-semibold">
                To deliver cost-effective, technically sound construction and interior projects with in-house accountability at every stage.
              </p>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm">
                <p className="font-bold text-slate-950 text-base">{v.title}</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 6 — Final CTA */}
      <CTASection />

      {/* Interactive Service Lead Modal */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
