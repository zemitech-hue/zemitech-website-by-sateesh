import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import TrustBar from "@/components/sections/TrustBar";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free construction or interior design quote from Zemitech Urban — site visit, BOQ or material sheet, no obligation. Serving Pune & suburbs.",
  alternates: { canonical: "/inquiry" },
};

const afterSubmitSteps = [
  { title: "Enquiry reviewed same day", body: "A project coordinator reads your requirement and routes it to the right division — construction, interior, or both." },
  { title: "Call or site visit scheduled", body: "We follow up within one business day to schedule a free consultation or site assessment, no obligation to proceed." },
  { title: "A scoped next step, not a brochure", body: "You get a specific next step — typically a BOQ or material-sheet timeline — based on what we learn on the call or visit." },
];

export default function InquiryPage() {
  const message = encodeURIComponent("Hi Zemitech Urban, I'd like to get a quote for my project.");

  return (
    <>
      <PageHero
        eyebrow="Free Consultation"
        headline="Get a free quote for your project"
        sub="Tell us a bit about what you're planning — a site visit or call is free, with no obligation to proceed. We take on projects across Pune, including Narhe, Kondhwa, Wagholi and Hinjewadi."
        image="/images/about/hero.png"
        breadcrumbs={[{ name: "Get a Free Quote", href: "/inquiry" }]}
      />

      <TrustBar />

      <section className="py-16 sm:py-20">
        <Container className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <InquiryForm />
            </div>

            <p className="text-center text-sm text-ink-soft mt-6">
              Prefer to talk directly?{" "}
              <a
                href={`https://wa.me/${company.whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-medium hover:underline"
              >
                Message us on WhatsApp
              </a>{" "}
              or call{" "}
              <a href={company.phonePrimaryHref} className="text-blue-700 font-medium hover:underline">
                {company.phonePrimary}
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line reg-corners">
              <Image
                src="/images/about/hero.png"
                alt="Zemitech Urban team member on a free client consultation call"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="rounded-2xl bg-bg-tint border border-line p-6">
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-4">What Happens Next</p>
              <ol className="space-y-4">
                {afterSubmitSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-3">
                    <span className="font-mono-label text-sm text-green-600 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-semibold text-blue-950 text-sm">{s.title}</p>
                      <p className="text-sm text-ink-soft mt-1 leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
