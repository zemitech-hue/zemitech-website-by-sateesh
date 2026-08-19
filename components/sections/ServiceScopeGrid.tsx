"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InquiryModal from "@/components/ui/InquiryModal";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ScopeGroup {
  category: string;
  items: string[];
  description?: string;
}

interface ServiceScopeGridProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  groups: ScopeGroup[];
}

export default function ServiceScopeGrid({ eyebrow, title, sub, groups }: ServiceScopeGridProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Normalize scope data into 4 distinct template cards (matching Screenshot 2 reference layout)
  const cardThemes = [
    {
      bg: "bg-gradient-to-br from-amber-500/10 via-amber-50/80 to-orange-500/10",
      border: "border-amber-200/90 hover:border-amber-400",
      tagBg: "bg-amber-100/90 text-amber-900 border-amber-300/60",
      accent: "text-amber-800",
      badge: "Step 01 • Planning & Feasibility",
    },
    {
      bg: "bg-gradient-to-br from-blue-500/10 via-blue-50/80 to-sky-500/10",
      border: "border-blue-200/90 hover:border-blue-400",
      tagBg: "bg-blue-100/90 text-blue-900 border-blue-300/60",
      accent: "text-blue-800",
      badge: "Step 02 • Engineering & BOQ",
    },
    {
      bg: "bg-gradient-to-br from-purple-500/10 via-purple-50/80 to-indigo-500/10",
      border: "border-purple-200/90 hover:border-purple-400",
      tagBg: "bg-purple-100/90 text-purple-900 border-purple-300/60",
      accent: "text-purple-800",
      badge: "Step 03 • Site Execution",
    },
    {
      bg: "bg-gradient-to-br from-emerald-500/10 via-emerald-50/80 to-teal-500/10",
      border: "border-emerald-200/90 hover:border-emerald-400",
      tagBg: "bg-emerald-100/90 text-emerald-900 border-emerald-300/60",
      accent: "text-emerald-800",
      badge: "Step 04 • Quality & Handover",
    },
  ];

  // Derive 4 structured scope cards from groups
  const scopeCards = [
    {
      tag: groups[0]?.category || "Planning & Assessment",
      title: "Site Assessment & Initial Brief",
      description: "Thorough site evaluation, soil analysis, and client brief alignment to establish clear project milestones and initial feasibility.",
      items: groups[0]?.items.slice(0, 4) || ["Site topography survey", "Soil bearing capacity test", "Client requirements brief", "Initial budget roadmap"],
    },
    {
      tag: groups[1]?.category || "Engineering & Structural BOQ",
      title: "Structural Design & Detailed BOQ",
      description: "3D architectural modeling, IS-code structural framing calculations, and a fixed itemized BOQ agreement before work begins.",
      items: groups[1]?.items.slice(0, 4) || ["Structural RCC calculations", "3D architectural elevation", "Fixed material sheet agreement", "Municipal plan approvals"],
    },
    {
      tag: "Civil & Materials Execution",
      title: "In-House Skilled Site Execution",
      description: "Dedicated Zemitech Urban project managers supervise RCC column casting, AAC block masonry, electrical conduit routing, and waterproofing.",
      items: (groups[0]?.items.slice(4) || []).concat(groups[1]?.items.slice(4) || []).slice(0, 4).length > 0
        ? (groups[0]?.items.slice(4) || []).concat(groups[1]?.items.slice(4) || []).slice(0, 4)
        : ["Column & slab RCC casting", "AAC block masonry work", "Concealed electrical conduits", "Polymer waterproofing membrane"],
    },
    {
      tag: "Finishing & Handover",
      title: "Quality Audit & Final Handover",
      description: "Rigorous 50-point snag list inspection, double-coat painting, deep site cleaning, and documentation handover with active warranty support.",
      items: ["50-point snag audit closure", "Deep site chemical cleaning", "Warranty documentation folder", "Post-handover maintenance support"],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />

        {/* 4 Modern Feature Cards in a 2x2 Grid (Template Screenshot 2 Layout) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {scopeCards.map((card, i) => {
            const theme = cardThemes[i % cardThemes.length];
            return (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div
                  className={`group relative h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${theme.bg} ${theme.border}`}
                >
                  <div>
                    {/* Top Pill Tag Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className={`text-[11px] font-mono-label font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${theme.tagBg}`}>
                        {card.tag}
                      </span>
                      <span className="text-xs font-mono-label font-bold text-slate-500">
                        0{i + 1} / 04
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-900 transition-colors mb-3">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                      {card.description}
                    </p>

                    {/* Scope Items List */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                      {card.items.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link / CTA Button */}
                  <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => setModalOpen(true)}
                      className={`inline-flex items-center gap-2 font-bold text-xs sm:text-sm transition-all cursor-pointer ${theme.accent} hover:translate-x-1`}
                    >
                      <span>Explore Scope Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] font-mono-label font-bold text-slate-500">
                      Standardized Protocol ✓
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
