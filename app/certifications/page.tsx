import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { certifications, qualityProcess } from "@/lib/data/certifications";
import { company } from "@/lib/data/company";
import { HardHat, Zap, ShieldCheck, CheckCircle2, FileCheck, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Zemitech Urban's registrations, compliance and stage-wise quality inspection process — what gets checked at every construction & interior milestone.",
  alternates: { canonical: "/certifications" },
};

const stageIcons = [
  <HardHat key="1" className="w-8 h-8 text-amber-500" />,
  <Zap key="2" className="w-8 h-8 text-blue-600" />,
  <ShieldCheck key="3" className="w-8 h-8 text-indigo-600" />,
  <CheckCircle2 key="4" className="w-8 h-8 text-emerald-600" />,
];

export default function CertificationsPage() {
  const siteUrl = `https://${company.domain}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "Certifications", url: `${siteUrl}/certifications` },
        ])}
      />
      <PageHero
        eyebrow="Certifications"
        headline="Registered, compliant, and built on documented process"
        sub="The registrations and internal standards behind every project we deliver, plus what our quality inspection actually checks at each milestone."
        image="/images/certifications/hero-certifications.png"
        breadcrumbs={[{ name: "Certifications", href: "/certifications" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Registrations & Standards" title="What we operate under" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 font-bold">{cert.issuer}</p>
                <p className="font-semibold text-blue-950 text-lg mt-1">{cert.name}</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 font-bold mb-1">Legal Entity</p>
              <p className="text-slate-900 font-semibold">{company.legalName}</p>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 font-bold mb-1">GSTIN</p>
              <p className="text-slate-900 font-semibold">{company.gstin}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Process — 4 Steps of Inspection with Icons */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <SectionHeading
            eyebrow="Our Quality Process"
            title="4 Steps of Milestone Quality Inspection"
            sub="Every project moves through stage-wise inspection, documented and photo-logged — not a single check at handover. Here is what gets reviewed at each milestone."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {qualityProcess.map((q, i) => (
              <div
                key={q.stage}
                className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-700/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                      {stageIcons[i] || <FileCheck className="w-8 h-8 text-blue-700" />}
                    </div>
                    <span className="font-mono-label text-xs uppercase font-extrabold tracking-wider text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200/80">
                      Step 0{i + 1} Inspection
                    </span>
                  </div>

                  <h3 className="font-extrabold text-blue-950 text-xl tracking-tight mb-4">
                    {q.stage}
                  </h3>

                  <ul className="space-y-3">
                    {q.inspects.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
