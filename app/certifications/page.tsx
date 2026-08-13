import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import CaptionedImage from "@/components/ui/CaptionedImage";
import { certifications, qualityProcess, siteSafetyImage } from "@/lib/data/certifications";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Zemitech Urban's registrations, compliance and stage-wise quality inspection process — what gets checked at every construction & interior milestone.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        headline="Registered, compliant, and built on documented process"
        sub="The registrations and internal standards behind every project we deliver, plus what our quality inspection actually checks at each milestone."
        image="/images/certifications/hero-certifications.jpg"
        breadcrumbs={[{ name: "Certifications", href: "/certifications" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Registrations & Standards" title="What we operate under" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-2xl border border-line bg-white p-6">
                <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">{cert.issuer}</p>
                <p className="font-semibold text-blue-950 text-lg mt-1">{cert.name}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-bg-tint border border-line p-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">Legal Entity</p>
              <p className="text-ink">{company.legalName}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">GSTIN</p>
              <p className="text-ink">{company.gstin}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality process, expanded */}
      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading
            eyebrow="Our Quality Process"
            title="What a quality check actually inspects"
            sub="Every project moves through stage-wise inspection, documented and photo-logged — not a single check at handover. Here's what gets reviewed at each milestone."
          />
          <div className="mt-12 space-y-8">
            {qualityProcess.map((q, i) => (
              <div key={q.stage} className="grid lg:grid-cols-5 gap-8 items-start rounded-2xl bg-white border border-line p-6 sm:p-8">
                <div className="lg:col-span-3">
                  <p className="font-mono-label text-xs uppercase tracking-wide text-green-700">Stage {String(i + 1).padStart(2, "0")}</p>
                  <p className="font-semibold text-blue-950 text-lg mt-1">{q.stage}</p>
                  <ul className="mt-4 space-y-2">
                    {q.inspects.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <svg width="14" height="14" viewBox="0 0 16 16" className="shrink-0 mt-1 text-green-600" aria-hidden="true">
                          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <CaptionedImage src={q.image} alt={q.alt} aspect="aspect-[4/3]" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Site safety */}
      <section className="py-16 sm:py-20">
        <Container className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Site Safety"
              title="PPE and safety compliance on every active site"
              sub="Helmets, safety vests and boots are mandatory for all site personnel and visitors, with periodic safety audits documented alongside our quality inspection records."
            />
          </div>
          <div className="lg:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden reg-corners">
            <Image src={siteSafetyImage.src} alt={siteSafetyImage.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
