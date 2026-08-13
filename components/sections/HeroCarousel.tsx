"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";
import { heroSlides } from "@/lib/data/home";

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"construction" | "interior" | null>(null);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000); // 3-Second Auto Slide
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = heroSlides[active];

  const handleCtaClick = (cat: "construction" | "interior" | null = null) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  // Helper to color key words in headline with vibrant blue accent
  const renderHighlightedHeadline = (headline: string) => {
    const highlights = ["outlast the blueprint.", "same team.", "how you actually live.", "everyone actually uses.", "opens on schedule.", "infrastructure", "custom wall joinery."];

    for (const h of highlights) {
      if (headline.includes(h)) {
        const parts = headline.split(h);
        return (
          <>
            {parts[0]}
            <span className="text-blue-400 font-extrabold">{h}</span>
            {parts[1]}
          </>
        );
      }
    }

    return headline;
  };

  return (
    <>
      <section
        className="relative overflow-hidden bg-slate-950 w-full flex items-center"
        style={{ height: '100dvh', minHeight: '100svh' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Featured services"
      >
        {/* Background Photos */}
        {heroSlides.map((s, i) => (
          <div
            key={s.headline}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
              quality={92}
            />
            {/* Seamless Soft Fog Scrim — NO Card Boxes or Hard Borders */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none" />
          </div>
        ))}

        {/* Left-Aligned Content Container (No Border Boxes) */}
        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-12 text-left">
          <div className="max-w-2xl text-left flex flex-col items-start">
            
            {/* Eyebrow Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 text-green-400 border border-blue-600/50 font-mono-label text-xs uppercase tracking-[0.2em] font-bold mb-4 shadow-md backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              {slide.eyebrow}
            </span>
            
            {/* Headline with Vibrant Blue Keyword Highlights */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight drop-shadow-md">
              {renderHighlightedHeadline(slide.headline)}
            </h1>
            
            {/* Sub Headline */}
            <p className="mt-4 text-slate-100 text-base sm:text-lg leading-relaxed max-w-xl font-medium drop-shadow-xs">
              {slide.sub}
            </p>

            {/* Proof Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-md">
                <span className="text-amber-400 font-black">★ 4.9/5</span>
                <span>Rating (240+ Pune Projects)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-md">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-blue-300 font-bold">Fixed BOQ</span> Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/80 text-white border border-white/20 text-xs font-bold backdrop-blur-md shadow-md">
                <span className="text-green-400 font-bold">✓</span>
                <span>In-House Engineers</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                type="button"
                onClick={() => handleCtaClick(slide.eyebrow.toLowerCase().includes("interior") ? "interior" : "construction")}
                variant="primary"
              >
                {slide.ctaLabel}
              </Button>
              <Button
                type="button"
                onClick={() => handleCtaClick(null)}
                variant="outline"
                className="text-white border-white/70 hover:border-white"
              >
                Get a Free Quote
              </Button>
            </div>

          </div>
        </div>

        {/* Presenting Indicator Marks */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2.5">
          {heroSlides.map((s, i) => (
            <button
              key={s.headline}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}: ${s.headline}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === active
                  ? "w-12 bg-green-400 shadow-[0_0_12px_rgba(124,185,61,0.9)]"
                  : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Global Interactive Service Lead Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={selectedCategory}
      />
    </>
  );
}
