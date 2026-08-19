"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { Gem, Users, Clock, DollarSign, Building2, Smile } from "lucide-react";

export default function WhyChooseUsHomeSection() {
  const features = [
    { label: "Quality Workmanship", icon: Gem },
    { label: "Expert Team", icon: Users },
    { label: "Timely Execution", icon: Clock },
    { label: "Transparent Pricing", icon: DollarSign },
    { label: "Modern Designs", icon: Building2 },
    { label: "Client Satisfaction", icon: Smile },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & 6-Icon Grid (matching green circle in screenshot 3) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-mono-label text-xs uppercase tracking-widest font-extrabold shadow-xs mb-3">
                Why Choose Us?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Your Trusted Partner in Construction &amp; Design
              </h2>
            </div>

            {/* 6 Clean Feature Icon Boxes (3 cols x 2 rows) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-slate-950 leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High Quality Room Interior Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group">
              <Image
                src="/images/divisions/interior-division-card.png"
                alt="Why Choose Zemitech Urban Construction and Design"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
