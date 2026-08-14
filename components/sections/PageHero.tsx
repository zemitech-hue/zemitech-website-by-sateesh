"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";

export default function PageHero({
  eyebrow,
  headline,
  sub,
  image,
  breadcrumbs,
}: {
  eyebrow: string;
  headline: string;
  sub: string;
  image: string;
  breadcrumbs: { name: string; href: string }[];
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const isInterior = eyebrow.toLowerCase().includes("interior") || headline.toLowerCase().includes("interior");

  const renderHighlightedHeadline = (h: string) => {
    const highlights = [
      "outlast the blueprint.",
      "how you actually live.",
      "opens on schedule.",
      "township infrastructure.",
      "modular kitchen.",
      "wall joinery.",
      "bedroom wardrobes.",
      "turnkey homes."
    ];

    for (const target of highlights) {
      if (h.toLowerCase().includes(target.toLowerCase())) {
        const idx = h.toLowerCase().indexOf(target.toLowerCase());
        const before = h.substring(0, idx);
        const matched = h.substring(idx, idx + target.length);
        const after = h.substring(idx + target.length);
        return (
          <>
            {before}
            <span className="text-blue-400 font-extrabold">{matched}</span>
            {after}
          </>
        );
      }
    }

    return h;
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-slate-950 w-full flex items-end pb-20 sm:pb-24 lg:pb-28"
        style={{ height: "100dvh", minHeight: "100svh" }}
      >
        {/* Full Viewport Ultra HD Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={headline}
            fill
            className="object-cover"
            sizes="100vw"
            quality={92}
            priority
          />
          {/* Seamless Soft Fog Scrim — NO Card Boxes or Borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none" />
        </div>

        {/* Content Container Left Aligned */}
        <Container className="relative z-10 w-full py-12 text-left">
          <div className="max-w-2xl text-left flex flex-col items-start">
            
            {/* Breadcrumbs Pill */}
            <div className="mb-4">
              <span className="inline-block bg-slate-900/80 px-3.5 py-1 rounded-full border border-white/20 text-xs text-white font-medium backdrop-blur-md shadow-xs">
                <Breadcrumbs items={[{ name: "Home", href: "/" }, ...breadcrumbs]} />
              </span>
            </div>

            {/* Eyebrow Tag */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 text-green-400 border border-blue-600/50 font-mono-label text-xs uppercase tracking-[0.2em] font-bold mb-4 shadow-md backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              {eyebrow}
            </span>

            {/* Headline with Brand Blue Keyword Highlight */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.15] tracking-tight drop-shadow-md">
              {renderHighlightedHeadline(headline)}
            </h1>

            {/* Sub Headline */}
            <p className="mt-4 text-slate-100 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium drop-shadow-xs">
              {sub}
            </p>

            {/* Trust Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-md">
                <span className="text-amber-400 font-black">★ 4.9/5</span>
                <span>Customer Verified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-md">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-blue-300 font-bold">GST Registered</span> Company
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                type="button"
                onClick={() => setModalOpen(true)}
                variant="secondary"
                showArrow
                className="shadow-xl shadow-green-600/35"
              >
                Get a Free Quote
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="!border-white/80 !text-white hover:!bg-white/20 backdrop-blur-md shadow-xl"
              >
                Contact Our Team
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* Global Interactive Service Lead Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={isInterior ? "interior" : "construction"}
      />
    </>
  );
}
