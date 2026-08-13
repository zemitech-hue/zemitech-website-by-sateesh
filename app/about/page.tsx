import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaptionedImage from "@/components/ui/CaptionedImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import ImageGrid from "@/components/sections/ImageGrid";
import CTASection from "@/components/sections/CTASection";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Zemitech Urban — founded 2019 in Narhe, Pune. 240+ construction & interior projects delivered by in-house teams, not sub-contractors.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "2019",
    title: "Zemitech Urban founded in Narhe",
    body: "Started as a small in-house team taking on residential construction contracts across Narhe and the surrounding Pune suburbs — the founding bet was that keeping core execution in-house, rather than sub-contracting it out, was the only way to hold both quality and timelines.",
    image: "/images/about/timeline-2019-founding.jpg",
    alt: "Zemitech Urban's founding team on an early residential construction site in Narhe, Pune, 2019",
  },
  {
    year: "2022",
    title: "Interior Design division launches",
    body: "Formalized interior design as its own division with a dedicated factory-manufacturing partnership for modular kitchens and wardrobes, instead of sub-contracting interior fit-outs project by project — the same in-house-first principle that founded the company, applied to a second discipline.",
    image: "/images/about/timeline-2022-division-split.jpg",
    alt: "Zemitech Urban Interior Design division's first dedicated design studio, 2022",
  },
  {
    year: "2024–25",
    title: "240+ projects, both divisions at scale",
    body: "Crossed 240 completed projects across residential, commercial, infrastructure and interior categories, with construction and interior design now running as genuinely coordinated divisions — many clients move directly from a construction handover into a full interior fit-out with the same project manager staying involved.",
    image: "/images/about/timeline-2024-scale.jpg",
    alt: "Zemitech Urban team celebrating the 240-plus completed projects milestone",
  },
];

const values = [
  { title: "Transparency", body: "Fixed-scope BOQs and material sheets agreed before work starts — no surprise line items." },
  { title: "Accountability", body: "One project manager, one point of contact, from first visit to handover." },
  { title: "Craftsmanship", body: "In-house site and design teams held to the same quality standard on every project." },
  { title: "Timeliness", body: "Schedules planned backwards from your handover or opening date, and tracked weekly." },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <PageHero
        eyebrow="About Us"
        headline="Construction and interior design, under one roof"
        sub="Zemitech Urban Private Limited has delivered 240+ projects across Pune since 2019 — built by in-house teams, not stitched together across sub-contractors."
        image="/images/about/hero-about.jpg"
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
        image="/images/about/office-team.jpg"
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
      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="Company Timeline" title="Milestones since 2019" />
          <div className="mt-12 space-y-10">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 80}>
                <div className="grid sm:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr_280px] gap-6 items-start rounded-2xl border border-line bg-white p-6">
                  <p className="font-mono-label text-2xl font-semibold text-blue-700">{t.year}</p>
                  <div>
                    <p className="font-semibold text-blue-950">{t.title}</p>
                    <p className="text-sm text-ink-soft mt-2 leading-relaxed">{t.body}</p>
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

      {/* Section 4 — Vision, mission & values, merged into one section */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What Guides Us" title="Vision, mission and values" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-bg-tint border border-line p-8">
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-3">Vision</p>
              <p className="text-blue-950 text-lg leading-relaxed">
                To be Pune&apos;s most trusted name for construction and interior design — where clients never have to choose between quality, transparency, and timeline.
              </p>
            </div>
            <div className="rounded-2xl bg-bg-tint border border-line p-8">
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-3">Mission</p>
              <p className="text-blue-950 text-lg leading-relaxed">
                To deliver cost-effective, technically sound construction and interior projects with in-house accountability at every stage.
              </p>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line p-6">
                <p className="font-semibold text-blue-950">{v.title}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 5 — Where we work + registered office */}
      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="Where We Work" title="Office, studio & site" />
          <div className="mt-10">
            <ImageGrid
              images={[
                { src: "/images/about/office-exterior.jpg", alt: "Exterior of the Zemitech Urban office in Narhe, Pune", caption: "Narhe office exterior" },
                { src: "/images/about/team-site-review.jpg", alt: "Zemitech Urban team conducting a site review meeting", caption: "Site review meeting" },
                { src: "/images/about/design-studio.jpg", alt: "Interior design studio where mood boards and 3D renders are prepared", caption: "Interior design studio" },
                { src: "/images/about/site-walkthrough.jpg", alt: "Zemitech Urban project manager walking a client through a completed site", caption: "Client site walkthrough" },
              ]}
              columns={4}
            />
          </div>
          <div className="mt-10 rounded-2xl bg-white border border-line p-6 max-w-xl">
            <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-2">Registered Office</p>
            <div className="text-ink-soft space-y-1 text-sm">
              <p>{company.legalName}</p>
              <p>{company.address.line1}</p>
              <p>{company.address.line2}, {company.address.state}, {company.address.country}</p>
              <p className="mt-2">GSTIN: {company.gstin}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 6 — Final CTA */}
      <CTASection />
    </>
  );
}
