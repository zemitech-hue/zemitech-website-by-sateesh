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
            preload
          />
          {/* Subtle Bottom Fog Scrim Only — Left Bluish Shade Completely Removed */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 text-amber-400 border border-amber-400/40 font-mono-label text-xs uppercase tracking-[0.2em] font-bold mb-4 shadow-md backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              {eyebrow}
            </span>

            {/* Headline with Brand Gold/Yellow Keyword Highlight */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight [text-shadow:_0_4px_16px_rgb(0_0_0_/_95%)]">
              {renderHighlightedHeadline(headline)}
            </h1>

            {/* Sub Headline */}
            <p className="mt-4 text-slate-100 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-bold [text-shadow:_0_2px_12px_rgb(0_0_0_/_95%)]">
              {sub}
            </p>

            {/* Trust Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/95 text-white border border-slate-700 text-xs font-bold shadow-xl backdrop-blur-md">
                <span className="text-amber-400 font-black">★ 4.9/5</span>
                <span>Customer Verified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/95 text-white border border-slate-700 text-xs font-bold shadow-xl backdrop-blur-md">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-amber-300 font-bold">GST Registered</span> Company
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/95 text-white border border-amber-400/60 text-xs font-bold shadow-xl backdrop-blur-md">
                <span className="text-amber-400 font-bold">✓</span>
                <span className="text-amber-300 font-extrabold">10-Year Warranty</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                type="button"
                onClick={() => setModalOpen(true)}
                variant="primary"
                showArrow
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black shadow-2xl shadow-amber-400/40 border border-amber-300 hover:scale-105 transition-all px-8 py-3.5 rounded-2xl text-sm sm:text-base cursor-pointer"
              >
                Get a Free Quote
              </Button>
              <Button
                type="button"
                onClick={() => setModalOpen(true)}
                variant="outline"
                className="bg-slate-950 text-white hover:bg-slate-900 border-2 border-amber-400/80 font-black shadow-2xl hover:scale-105 transition-all px-8 py-3.5 rounded-2xl text-sm sm:text-base cursor-pointer"
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
