"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Plus, Minus, ArrowRight, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import JsonLd, { faqJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data/company";

const contactFaqs = [
  {
    question: "What services do you offer?",
    answer: "We provide end-to-end residential villa construction, commercial fit-outs, township infrastructure, structural civil engineering, turnkey home renovations, modular kitchens, and full-home interior design across Pune.",
  },
  {
    question: "How can I contact your team?",
    answer: `You can reach us by filling out the contact form above, emailing us at ${company.emailPrimary}, or calling/WhatsApping us directly at ${company.phonePrimary}.`,
  },
  {
    question: "Do you offer free site visits and consultations?",
    answer: "Yes! Our initial site assessment and project feasibility consultation in Pune are 100% free with no obligation to proceed.",
  },
  {
    question: "How is pricing structured for construction and interior projects?",
    answer: "We provide a fully itemized Bill of Quantities (BOQ) with material specifications and labor costs fixed upfront before any work begins — zero mid-project price escalation.",
  },
  {
    question: "What areas in Pune do you operate in?",
    answer: "Our office is in Narhe, Pune, and we deliver projects across Narhe, Baner, Wakad, Kothrud, Kharadi, Hinjewadi, Kondhwa, Wagholi, Viman Nagar, and wider Pune.",
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.mapEmbedQuery)}`;
  const siteUrl = `https://${company.domain}`;

  return (
    <div className="bg-white min-h-screen">
      <JsonLd data={faqJsonLd(contactFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteUrl },
          { name: "Contact", url: `${siteUrl}/contact` },
        ])}
      />

      {/* 1. TOP HERO & CONTACT FORM SECTION */}
      <section className="bg-slate-100/70 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <Container>
          
          {/* Centered Main Title */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block font-mono-label text-xs uppercase tracking-widest text-blue-700 font-bold px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 mb-3">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight">
              Get in touch with our team today.
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Planning a construction or interior project in Pune? Send us a message below and our engineering team will get back to you shortly.
            </p>
          </div>

          {/* Centered Floating Contact Form Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-950/5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Contact Form</h3>
            <ContactFormCard />
          </div>

          {/* 3 Contact Info Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 sm:mt-16">
            {/* Card 1 — Address */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Registered Office</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {company.legalName}<br />
                {company.address.line1}, {company.address.line2}<br />
                {company.address.state}, India
              </p>
              <p className="mt-2 text-[11px] font-mono-label font-bold text-blue-900 uppercase">GSTIN: {company.gstin}</p>
            </div>

            {/* Card 2 — Email */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Email Us</h4>
              <a href={`mailto:${company.emailPrimary}`} className="text-blue-700 font-semibold text-sm hover:underline">
                {company.emailPrimary}
              </a>
              <p className="text-slate-500 text-xs mt-1">We respond within 1 business day</p>
            </div>

            {/* Card 3 — Phone */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Call / WhatsApp</h4>
              <a href={company.phonePrimaryHref} className="text-blue-700 font-semibold text-sm hover:underline">
                {company.phonePrimary}
              </a>
              <p className="text-slate-500 text-xs mt-1">Mon – Sat: 9:00 AM – 7:00 PM</p>
            </div>
          </div>

        </Container>
      </section>

      {/* 2. FREQUENTLY ASKED QUESTIONS SECTION (Centered Layout) */}
      <section className="py-20 bg-white">
        <Container className="max-w-4xl">
          
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-medium max-w-xl mx-auto">
              Find quick answers to common questions below. Need more help? Contact us anytime for further assistance!
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={company.phonePrimaryHref}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/25 transition-all group"
              >
                <span>Book a Free Call</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Centered Interactive Accordion */}
          <div className="max-w-3xl mx-auto">
            <ContactFaqAccordion />
          </div>

        </Container>
      </section>

      {/* 3. GOOGLE MAPS SECTION (Above Bottom CTA Banner - Same Width max-w-4xl) */}
      <section className="pt-10 pb-6 bg-slate-100/70">
        <Container className="max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-950/5 bg-slate-200 aspect-[16/9] sm:aspect-[21/9]">
            <iframe
              title="Zemitech Urban Office Google Maps Location"
              src="https://maps.google.com/maps?q=Office+No.+15/1,+Samarth+Sankul,+Narhe,+Pune+411041&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Floating Location Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/90 shadow-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Zemitech Urban Registered Office</p>
                <p className="text-[11px] text-slate-500 font-medium">Samarth Sankul, Narhe, Pune – 411041</p>
              </div>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1 shrink-0"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. STANDARDIZED FLOATING BLUE GLOW CTA BANNER CARD */}
      <CTASection
        title="Have a project in mind?"
        sub="Tell us about it and we'll follow up with next steps."
      />

    </div>
  );
}

{/* Interactive Form Component */}
function ContactFormCard() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-8 text-center my-4">
        <h4 className="text-xl font-bold text-blue-950">Thank you! Your message has been sent.</h4>
        <p className="text-sm text-slate-600 mt-2">Our Pune team will review your requirement and reach out within 1 business day.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-bold text-blue-700 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Inputs Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Type your name"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Your Mail *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Type your mail"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Subject / Phone *</label>
            <input
              type="text"
              name="phone"
              required
              placeholder="Type your subject or phone number"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Right Message Textarea Column */}
        <div className="flex flex-col">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Message *</label>
          <textarea
            name="message"
            required
            rows={7}
            placeholder="Type your message..."
            className="w-full flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none transition-colors resize-none"
          />
        </div>

      </div>

      {/* Full Width Primary Blue Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-2xl shadow-md shadow-amber-400/30 hover:scale-[1.01] transition-all duration-200 disabled:opacity-60 text-sm tracking-wide border border-amber-300 cursor-pointer"
      >
        {status === "submitting" ? "Sending Message..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600 text-center font-medium">Something went wrong — please try again or call us directly.</p>
      )}
    </form>
  );
}

{/* Interactive Accordion Component */}
function ContactFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200">
      {contactFaqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between text-left py-2 font-bold text-slate-900 hover:text-blue-700 transition-colors gap-4"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <span className="shrink-0 text-slate-500 font-medium">
                {isOpen ? <Minus className="w-5 h-5 text-blue-700" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            {isOpen && (
              <p className="mt-2 text-slate-600 text-sm leading-relaxed pr-6">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
