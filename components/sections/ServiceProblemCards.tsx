"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InquiryModal from "@/components/ui/InquiryModal";

interface ServiceProblemCardsProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  cards: {
    title: string;
    image?: string;
    description?: string;
    highlights?: string[];
    ctaText?: string;
  }[];
}

export default function ServiceProblemCards({ eyebrow, title, sub, cards }: ServiceProblemCardsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCardTitle, setActiveCardTitle] = useState<string | null>(null);

  const handleOpenModal = (cardTitle: string) => {
    setActiveCardTitle(cardTitle);
    setModalOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />

        {/* Full-Width Alternating Horizontal Split Rows (Zig-Zag Layout) */}
        <div className="mt-14 space-y-12 sm:space-y-16">
          {cards.map((card, i) => {
            const isImageLeft = i % 2 === 0;
            return (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(30,58,138,0.15)] hover:border-blue-700/60 transition-all duration-500 p-7 sm:p-9 lg:p-11">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Image Column (Alternates Order Left/Right) */}
                    <div
                      className={`lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80 ${
                        isImageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {card.image && (
                        <GracefulImage
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="group-hover:scale-105 transition-transform duration-700 ease-out object-cover"
                        />
                      )}
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-slate-900/85 text-white font-mono-label font-bold text-xs px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                        Phase 0{i + 1}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-center ${
                        isImageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                        <span className="text-xs font-mono-label font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                          Solution 0{i + 1} • In-House Engineering
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors">
                        {card.title}
                      </h3>

                      {card.description && (
                        <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                          {card.description}
                        </p>
                      )}

                      {/* Technical Highlights / Specification Deliverables */}
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-slate-700 font-mono-label">
                        {(card.highlights && card.highlights.length > 0
                          ? card.highlights
                          : [
                              "100% Turnkey In-House Execution",
                              "IS Code & Structural Audit Compliant",
                              "Fixed BOQ Pricing Guarantee",
                              "Dedicated Senior Site Engineer",
                            ]
                        ).map((item) => (
                          <div key={item} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/70">
                            <svg className="w-4 h-4 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Service-Specific Call to Action Button */}
                      <div className="mt-7 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                        <button
                          onClick={() => handleOpenModal(card.title)}
                          className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/30 hover:shadow-lg hover:scale-105 transition-all cursor-pointer border border-amber-300"
                        >
                          <span>{card.ctaText || `Book Appointment for ${card.title}`}</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                        <span className="text-xs font-mono-label font-bold text-slate-500">
                          Free Consultation & Estimate
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* Service-Specific Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
