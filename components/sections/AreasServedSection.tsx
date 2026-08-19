"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { company } from "@/lib/data/company";

export default function AreasServedSection() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        
        {/* Compact Center Aligned Section Heading */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Proven Footprint"
            title="Major Project Locations Across Pune, Mumbai & Ranchi"
            sub="240+ turnkey construction and interior projects delivered across Pune, Mumbai, Ranchi, and surrounding regions."
            align="center"
          />
        </ScrollReveal>

        {/* Compact Center Aligned Location Pills */}
        <ScrollReveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
            {company.areasServed.map((area) => (
              <div
                key={area}
                className="bg-white border border-slate-200/90 rounded-xl px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-2xs hover:border-blue-700/80 hover:bg-blue-700 hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-default group"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  className="shrink-0 text-green-600 group-hover:text-green-300 transition-colors"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1c-2.8 0-5 2.2-5 5 0 3.7 5 9 5 9s5-5.3 5-9c0-2.8-2.2-5-5-5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="8" cy="6" r="1.8" fill="currentColor" />
                </svg>
                <span>{area === "Mumbai" || area === "Ranchi" || area === "Pune" ? area : `${area}, Pune`}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Compact Centered 3D Map Artwork (Fits within screen view) */}
        <ScrollReveal delay={0.2} className="w-full">
          <div className="mt-6 sm:mt-8 flex justify-center w-full">
            <div className="relative aspect-[16/10] w-full max-w-md sm:max-w-lg group bg-transparent transition-transform duration-700 ease-out hover:scale-[1.02]">
              
              {/* Soft Backdrop Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/10 via-sky-400/15 to-blue-600/10 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
              
              <div className="relative w-full h-full animate-map-float">
                <Image
                  src="/images/home/areas-served-map.png"
                  alt="3D Map graphic marking Zemitech Urban's Pune service areas"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  preload
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
}
