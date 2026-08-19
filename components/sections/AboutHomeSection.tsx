"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function AboutHomeSection() {
  const highlights = [
    "Experienced & Skilled Team",
    "End-to-End Project Solutions",
    "Transparent Work Process",
    "Timely Project Completion",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-mono-label text-xs uppercase tracking-widest font-extrabold shadow-xs">
              About Zemitech Urban
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Building Spaces. <span className="text-amber-700">Creating Experiences.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              We are a professional construction, interior and architecture company committed to quality, innovation and client satisfaction. With a skilled team and proven expertise, we turn your ideas into beautiful, functional and long-lasting spaces.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-900">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/about" variant="primary" showArrow className="px-7 py-3.5 text-xs sm:text-sm">
                Know More
              </Button>
            </div>
          </div>

          {/* Right Geometric Framed Image (matching reference screenshot) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group">
              <Image
                src="/images/home/how-we-work-2-design.png"
                alt="About Zemitech Urban — Interior and Architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Yellow Decorative Triangle Angle Frame */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 opacity-90 clip-triangle pointer-events-none" />
            </div>
            
            {/* Background Decorative Yellow Glow Pill */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-amber-400/20 blur-3xl rounded-full -z-10" />
          </div>

        </div>
      </Container>
    </section>
  );
}
