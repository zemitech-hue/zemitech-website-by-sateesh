"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InquiryModal from "@/components/ui/InquiryModal";

interface MaterialBoardProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  materials: {
    name: string;
    image?: string;
    description?: string;
    highlights?: string[];
    ctaText?: string;
  }[];
}

export default function MaterialBoard({ eyebrow, title, sub, materials }: MaterialBoardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMatName, setActiveMatName] = useState<string | null>(null);

  const handleOpenModal = (matName: string) => {
    setActiveMatName(matName);
    setModalOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />

        {/* 2-Row Grid (2 Cards per Row) with Wider Images & Rich Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {materials.slice(0, 4).map((mat, i) => (
            <ScrollReveal key={mat.name} delay={i * 0.1}>
              <div className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(30,58,138,0.15)] hover:-translate-y-1 hover:border-blue-700/60 transition-all duration-300">
                
                {/* Wider Image Container (16:10 Ratio) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                  <GracefulImage
                    src={mat.image}
                    alt={mat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="group-hover:scale-105 transition-transform duration-700 ease-out object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                    <span className="text-xs font-mono-label font-bold text-blue-800 uppercase tracking-wider">
                      Grade Standard 0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Content Area with Rich Context & Specifications */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                      <span className="text-[11px] font-mono-label font-bold uppercase tracking-wider text-slate-500">
                        Quality Specification
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-950 text-xl sm:text-2xl group-hover:text-blue-700 transition-colors leading-snug">
                      {mat.name}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                      {mat.description ||
                        "Certified structural specification rigorously tested to meet IS codes, ensuring maximum load capacity, thermal efficiency, and long-term durability."}
                    </p>

                    {/* Feature Badges Grid */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-700 font-mono-label">
                      <div className="flex items-center gap-1.5 bg-blue-50/80 text-blue-900 px-3 py-1.5 rounded-lg border border-blue-200/60">
                        <svg className="w-4 h-4 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Lab Batch Tested</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200/70">
                        <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>IS Code Certified</span>
                      </div>
                    </div>
                  </div>

                  {/* Card-Specific CTA Button */}
                  <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                    <button
                      onClick={() => handleOpenModal(mat.name)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs tracking-wide shadow-md shadow-amber-400/30 hover:shadow-lg hover:scale-105 transition-all cursor-pointer border border-amber-300"
                    >
                      <span>{mat.ctaText || `Inquire About ${mat.name}`}</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    <span className="text-[11px] font-mono-label font-bold text-green-600">
                      Verified Material ✓
                    </span>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* Material Specification Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
