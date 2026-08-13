import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaptionedImage from "@/components/ui/CaptionedImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/sections/PageHero";
import StatsStrip from "@/components/sections/StatsStrip";
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
    year: "2021",
    title: "First major township contract",
    body: "Took on our first township-scale infrastructure contract — internal roads, drainage and boundary works for a phased residential development — which meant building out dedicated site survey, grading and civil-systems capability beyond single-building construction.",
    image: "/images/about/timeline-2021-first-major-project.jpg",
    alt: "Zemitech Urban's first major township infrastructure contract under construction, 2021",
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

const processPhilosophy = [
  {
    title: "In-house first",
    body: "We default to our own site and design crews on every project. Sub-contracting is the exception, not the norm — and when it happens, it's a named, vetted vendor, never an anonymous crew we haven't worked with before.",
  },
  {
    title: "Decisions before execution",
    body: "Material grade, finish level and layout are locked in writing — a BOQ or material sheet — before construction or manufacturing starts. We don't leave major decisions to be made on site mid-project, where they're both rushed and expensive to change.",
  },
  {
    title: "Weekly cadence, not on-request",
    body: "Progress reporting happens on a fixed weekly schedule by default, whether or not a client asks for an update. If a project goes quiet for a week, that's treated as our failure, not the client's job to chase.",
  },
  {
    title: "Documentation as we go",
    body: "As-built drawings, material specification sheets and stage-wise quality-check photos are logged as each stage completes — not reconstructed from memory at handover, which is when documentation gaps are hardest to fix.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        headline="Construction and interior design, under one roof"
        sub="Zemitech Urban Private Limited has delivered 240+ projects across Pune since 2019 — built by in-house teams, not stitched together across sub-contractors."
        image="/images/about/hero-about.jpg"
        breadcrumbs={[{ name: "About Us", href: "/about" }]}
      />

      <SplitSection
        eyebrow="Our Story"
        title="Why we started, and what's changed since"
        paragraphs={[
          "Zemitech Urban Private Limited was founded in 2019 in Narhe, Pune, on a fairly simple observation: construction and interior design are usually handled by separate companies, and the handoff between them is where most homeowners lose time, money and quality control. A structural contractor finishes a shell and walks away; an interior designer arrives months later with no accountability for what's underneath the walls they're now decorating. We started as a construction contractor with the explicit intention of building an interior design capability under the same roof once the construction side was solid — not bolting one onto the other as an afterthought.",
          "The first two years were almost entirely residential construction — independent homes and villas across Narhe and neighbouring suburbs, built by a small in-house team rather than sub-contracted crews. That in-house-first decision, made before the company had the scale to make it easy, is the one piece of the original founding bet that hasn't changed since: we still run our own site supervision and design teams today, at 240+ projects, for the same reason we did at project one — sub-contracted execution is where accountability gets diluted.",
          "2021 brought our first township-scale infrastructure contract, which forced us to build out civil-systems capability — survey, grading, drainage design — that a single-building residential contractor doesn't need. That expansion is also where we learned to plan construction in phases against a client's own timeline (a developer's sales schedule, in that case) rather than our own convenience, a discipline that now runs through every division.",
          "The interior design division launched formally in 2022, with a dedicated factory-manufacturing partnership for modular kitchens and wardrobes rather than sub-contracting fit-out work per project, as we had been doing informally before then. This is also when the 'one team, one project manager' model — which now defines how we work across both divisions — was made official policy rather than an occasional convenience for repeat clients.",
          "Today, whether you need a single modular kitchen or a complete building from foundation to final coat of paint, the same company — and typically the same project manager, if you engage both divisions — stays accountable from first site visit to final handover. That's still the core idea the company was founded on in 2019; what's changed is the scale at which we can deliver it.",
        ]}
        image="/images/about/office-team.jpg"
        imageAlt="Zemitech Urban leadership and site team outside the Narhe office"
        imageCaption="Zemitech Urban team, Narhe office"
      />

      <StatsStrip />

      {/* Timeline */}
      <section className="py-16 sm:py-20">
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

      {/* Process Philosophy */}
      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Process Philosophy"
            title="The operating principles behind every project"
            sub="Distinct from the step-by-step process on each service page — these are the company-wide rules that don't change by division or project size."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {processPhilosophy.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white border border-line p-6">
                <p className="font-semibold text-blue-950">{p.title}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
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
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container className="grid sm:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-line p-8">
            <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-3">Vision</p>
            <p className="text-blue-950 text-lg leading-relaxed">
              To be Pune&apos;s most trusted name for construction and interior design — where clients never have to choose between quality, transparency, and timeline.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-line p-8">
            <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-3">Mission</p>
            <p className="text-blue-950 text-lg leading-relaxed">
              To deliver cost-effective, technically sound construction and interior projects with in-house accountability at every stage — from first site visit to final handover.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What guides how we work" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", body: "Fixed-scope BOQs and material sheets agreed before work starts — no surprise line items." },
              { title: "Accountability", body: "One project manager, one point of contact, from first visit to handover." },
              { title: "Craftsmanship", body: "In-house site and design teams held to the same quality standard on every project." },
              { title: "Timeliness", body: "Schedules planned backwards from your handover or opening date, and tracked weekly." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-line p-6">
                <p className="font-semibold text-blue-950">{v.title}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Registered Office" title="Where to find us" />
          <div className="mt-6 text-ink-soft space-y-1">
            <p>{company.legalName}</p>
            <p>{company.address.line1}</p>
            <p>{company.address.line2}, {company.address.state}, {company.address.country}</p>
            <p className="mt-3">GSTIN: {company.gstin}</p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
