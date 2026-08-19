"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";
import { heroSlides } from "@/lib/data/home";
import { Building2, Armchair, Compass, Calculator, ArrowRight } from "lucide-react";

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
    const id = setInterval(next, 4000); // 4-Second Auto Slide
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = heroSlides[active];

  const handleCtaClick = (cat: "construction" | "interior" | null = null) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  const renderHighlightedHeadline = (headline: string) => {
    const highlights = [
      "outlast the blueprint.",
      "under one roof.",
      "built for Pune families.",
      "designed for everyday living.",
      "interiors that inspire.",
      "same team.",
      "how you actually live.",
      "everyone actually uses.",
      "opens on schedule.",
      "infrastructure",
      "custom wall joinery."
    ];

    for (const h of highlights) {
      if (headline.includes(h)) {
        const parts = headline.split(h);
        return (
          <>
            {parts[0]}
            <span className="font-editorial-italic text-amber-600 font-black pr-1.5">{h}</span>
            {parts[1]}
          </>
        );
      }
    }

    return headline;
  };

  // 4 Feature Cards for Slide 1 (matching reference image)
  const slide1Features = [
    {
      title: "CONSTRUCTION",
      sub: "Quality that lasts forever.",
      icon: Building2,
    },
    {
      title: "INTERIOR DESIGN",
      sub: "Spaces that inspire.",
      icon: Armchair,
    },
    {
      title: "ARCHITECTURE",
      sub: "Designs that define tomorrow.",
      icon: Compass,
    },
    {
      title: "BOQ & ESTIMATION",
      sub: "Accurate. Transparent. Reliable.",
      icon: Calculator,
    },
  ];

  return (
    <>
      <section
        className="relative overflow-hidden bg-white w-full flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20"
        style={{ height: '100dvh', minHeight: '100svh' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Featured services"
      >
        {/* 100% Pure Natural Background Photos */}
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
              preload={i === 0}
              className="object-cover"
              sizes="100vw"
              quality={95}
            />
          </div>
        ))}

        {/* Dynamic Slide Content Container */}
        <div className="relative z-20 w-full mx-auto max-w-7xl px-4 sm:px-8 lg:px-10 text-left h-full flex flex-col justify-between">
          
          {/* SLIDE 1 (FIRST PAGE): 100% EXACT PIXEL-PERFECT REPLICA MATCHING REFERENCE IMAGE 2 */}
          {active === 0 ? (
            <div className="max-w-xl lg:max-w-[500px] text-left flex flex-col items-start space-y-2.5 sm:space-y-3.5 mt-2 sm:mt-4 lg:mt-6 mb-auto">
              
              {/* Reference 2-Line Headline: BUILDING SPACES. / CREATING EXPERIENCES. */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-950 leading-[1.06] tracking-tight">
                BUILDING <span className="text-amber-700">SPACES.</span>
                <br />
                <span className="whitespace-nowrap">CREATING <span className="text-amber-700">EXPERIENCES.</span></span>
              </h1>

              {/* Reference Amber Underline Bar */}
              <div className="w-12 h-1 bg-amber-500 rounded-full my-0.5" />

              {/* Reference Subheadline */}
              <p className="text-slate-900 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg font-black text-slate-900">
                Complete Construction, Interior &amp; Architecture Solutions for Modern Living.
              </p>

              {/* 4 Feature Cards Grid (Translucent White Glassmorphism, Center-Aligned, Strictly Left Side - 0% Overlap on Villa) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full pt-1">
                {slide1Features.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="bg-white/70 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/80 shadow-md text-center flex flex-col items-center justify-center hover:bg-white/85 hover:shadow-lg transition-all"
                    >
                      <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-amber-100/90 text-amber-700 flex items-center justify-center mb-1.5 shrink-0 border border-amber-200/80">
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="text-center">
                        <h4 className="text-[10px] sm:text-[11px] font-mono-label font-black text-slate-950 uppercase tracking-tight text-center">
                          {feat.title}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-slate-700 font-bold leading-tight mt-0.5 text-center">
                          {feat.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons: Primary = GET A FREE QUOTE, Secondary = SEE OUR WORK (Links to /projects) */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                {/* PRIMARY CTA BUTTON: GET A FREE QUOTE (Opens 3-Step Inquiry Modal) */}
                <button
                  type="button"
                  onClick={() => handleCtaClick("construction")}
                  className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-400/30 border border-amber-300 hover:scale-105 transition-all text-xs sm:text-sm w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>GET A FREE QUOTE</span>
                  <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs">
                    →
                  </div>
                </button>

                {/* SECONDARY CTA BUTTON: SEE OUR WORK (Redirects to /projects) */}
                <Link
                  href="/projects"
                  className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-white/90 hover:bg-slate-950 text-slate-950 hover:text-white border-2 border-slate-950 font-black shadow-md hover:scale-105 transition-all text-xs sm:text-sm w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>SEE OUR WORK</span>
                  <div className="w-5 h-5 rounded-full bg-slate-950 group-hover:bg-white text-white group-hover:text-slate-950 flex items-center justify-center text-xs transition-colors">
                    →
                  </div>
                </Link>
              </div>

              {/* Reference Tagline text (Matching exact font size & weight of reference image) */}
              <div className="pt-1.5 flex items-start gap-3">
                <div className="w-1.5 h-10 bg-amber-500 rounded-full shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base lg:text-lg font-black text-slate-950 leading-snug">
                  <div>From Concept to Creation,</div>
                  <div>We Build <span className="text-amber-500 font-black">Your Dreams.</span></div>
                </div>
              </div>

            </div>
          ) : (
            /* SLIDES 2, 3, 4, 5: LEFT-CENTER POSITIONED AS REQUESTED.
               min-h reserves space for the longest slide's headline/sub text
               so swapping between slides of different text length doesn't
               reflow the section and register as layout shift. */
            <div className="max-w-2xl text-left flex flex-col items-start space-y-3.5 sm:space-y-4 my-auto py-8 lg:py-12 min-h-[500px] sm:min-h-[460px] lg:min-h-[500px]">
              
              {/* Eyebrow Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 text-amber-400 border border-amber-400/50 font-mono-label text-[11px] sm:text-xs uppercase tracking-[0.18em] font-extrabold shadow-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                {slide.eyebrow}
              </span>
              
              {/* Dark Colored Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 leading-[1.1] sm:leading-[1.08] tracking-tight">
                {renderHighlightedHeadline(slide.headline)}
              </h1>

              {/* Dark Colored Sub Headline */}
              <p className="text-slate-900 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl font-extrabold">
                {slide.sub}
              </p>

              {/* Proof Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-950 text-white border border-slate-800 text-[11px] sm:text-xs font-bold shadow-xl">
                  <span className="text-amber-400 font-black">★ 4.9/5</span>
                  <span className="hidden sm:inline">Rating (240+ Residential &amp; Commercial Projects Delivered Across Pune)</span>
                  <span className="sm:hidden">Rating (240+ Pune Projects)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-950 text-white border border-slate-800 text-[11px] sm:text-xs font-bold shadow-xl">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-amber-300 font-bold">Fixed BOQ</span> Guarantee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-950 text-white border border-slate-800 text-[11px] sm:text-xs font-bold shadow-xl">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>100% In-House Engineers</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-950 text-white border border-amber-400/60 text-[11px] sm:text-xs font-bold shadow-xl">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span className="text-amber-300 font-extrabold">10-Year Warranty</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  type="button"
                  onClick={() => handleCtaClick(slide.eyebrow.toLowerCase().includes("interior") ? "interior" : "construction")}
                  variant="primary"
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black shadow-2xl shadow-amber-400/40 border border-amber-300 hover:scale-105 transition-all px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-xs sm:text-base w-full sm:w-auto text-center"
                >
                  {slide.ctaLabel}
                </Button>
                <Button
                  type="button"
                  onClick={() => handleCtaClick(null)}
                  variant="outline"
                  className="!bg-white !text-slate-950 hover:!bg-slate-950 hover:!text-white border-2 border-slate-950 font-black shadow-xl hover:scale-105 transition-all px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-xs sm:text-base w-full sm:w-auto text-center"
                >
                  Get a Free Quote
                </Button>
              </div>

            </div>
          )}

        </div>

        {/* Slide Indicator Marks — each button has a fixed-width hit area
            (>=24px, for mobile touch-target a11y) so the active dot growing
            to w-12 never reflows its neighbors and contributes to CLS. */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-1">
          {heroSlides.map((s, i) => (
            <button
              key={s.headline}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}: ${s.headline}`}
              aria-current={i === active}
              className="group h-6 w-12 shrink-0 flex items-center justify-center cursor-pointer"
            >
              <span
                aria-hidden="true"
                className={`h-2.5 rounded-full transition-all duration-300 block ${
                  i === active
                    ? "w-12 bg-amber-400 shadow-md"
                    : "w-3 bg-white/50 group-hover:bg-white border border-white/20"
                }`}
              />
            </button>
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
