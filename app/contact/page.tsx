import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";
import TrustBar from "@/components/sections/TrustBar";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Zemitech Urban in Narhe, Pune — call, WhatsApp or send an enquiry for construction or interior design across Narhe, Kondhwa, Wagholi & Hinjewadi.",
  alternates: { canonical: "/contact" },
};

const afterSubmitSteps = [
  { title: "We review your enquiry", body: "A project coordinator reads your requirement the same business day and matches it to the right team — construction, interior, or both." },
  { title: "We call or schedule a site visit", body: "Expect a call within one business day to understand scope, and a free site visit or video call if that's useful before quoting." },
  { title: "You get a scoped next step", body: "Not a generic brochure — a specific next step: a BOQ/material sheet timeline, or a request for more detail if we need it." },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.address.mapEmbedQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        headline="Let's talk about your project"
        sub="Call, WhatsApp, or send an enquiry — we typically respond within one business day. Based in Narhe, working across Narhe, Kondhwa, Wagholi, Hinjewadi, Baner, Viman Nagar, Pirangut and the wider Pune region."
        image="/images/contact/hero-contact.jpg"
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <TrustBar />

      <section className="py-16 sm:py-20">
        <Container className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <ContactBlock label="Call Us" value={company.phonePrimary} href={company.phonePrimaryHref} />
            <ContactBlock label="Email Us" value={company.emailPrimary} href={`mailto:${company.emailPrimary}`} />
            <ContactBlock
              label="Visit Us"
              value={`${company.address.line1}, ${company.address.line2}, ${company.address.state}`}
            />
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-2">Working Hours</p>
              {company.hours.map((h) => (
                <p key={h.day} className="text-sm text-ink-soft">{h.day}: {h.time}</p>
              ))}
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line reg-corners">
              <Image
                src="/images/contact/office-exterior.jpg"
                alt="Exterior of the Zemitech Urban office in Narhe, Pune"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line">
              <iframe
                src={mapSrc}
                title="Zemitech Urban office location"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-blue-950 mb-1">Send an enquiry</h2>
            <p className="text-sm text-ink-soft mb-6">Fill this in and our team will follow up to schedule a call or site visit.</p>
            <InquiryForm />
          </div>
        </Container>
      </section>

      {/* What happens after you submit */}
      <section className="py-16 sm:py-20 bg-bg-tint">
        <Container>
          <SectionHeading eyebrow="What Happens Next" title="What happens after you submit" align="center" />
          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {afterSubmitSteps.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-white border border-line p-6">
                <span className="font-mono-label text-sm text-green-600">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-semibold text-blue-950 mt-2">{s.title}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-wide text-green-700 mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-blue-950 font-medium hover:text-blue-700 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-blue-950 font-medium">{value}</p>
      )}
    </div>
  );
}
