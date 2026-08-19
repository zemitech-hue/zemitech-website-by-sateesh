"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageSquareText, PenTool, Factory, KeyRound, Compass, PencilRuler, Hammer, ShieldCheck } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  badge: string;
  icon: any;
};

const interiorSteps: Step[] = [
  {
    number: "01",
    title: "1. Consultation",
    description: "In-depth site measurement, space planning analysis, client requirement gathering, and preliminary budget estimation.",
    badge: "Site Survey & Brief",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "2. Design & 3D Renders",
    description: "Photorealistic 3D space rendering, material & hardware selection at our studio, and fixed-scope BOQ approval.",
    badge: "3D & Material Approval",
    icon: PenTool,
  },
  {
    number: "03",
    title: "3. Build & Factory Fabrication",
    description: "Automated European CNC precision panel cutting, edge-banding in factory, and rapid on-site modular installation.",
    badge: "CNC Precision Build",
    icon: Factory,
  },
  {
    number: "04",
    title: "4. Quality & Handover",
    description: "Rigorous 50-point quality audit, site deep cleaning, hardware warranty certificate issuance, and key handover.",
    badge: "Final Handover NOC",
    icon: KeyRound,
  },
];

const constructionSteps: Step[] = [
  {
    number: "01",
    title: "1. Consultation & Feasibility",
    description: "Site soil testing, topography survey, structural feasibility assessment, and initial cost budgeting.",
    badge: "Site Assessment",
    icon: Compass,
  },
  {
    number: "02",
    title: "2. Design & Sanctions",
    description: "Architectural 3D drafting, RCC structural calculations, municipal plan sanctions (PMC/PCMC), and NOC clearances.",
    badge: "Government Approvals",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "3. Build & Civil Construction",
    description: "Foundation excavation, M30 RMC RCC framing, AAC block masonry, electrical & plumbing ducting, and waterproofing.",
    badge: "Civil Site Execution",
    icon: Hammer,
  },
  {
    number: "04",
    title: "4. Quality & Handover",
    description: "Structural load testing, snag list clearance, municipal completion certificate, and final key handover.",
    badge: "Key Handover Certificate",
    icon: ShieldCheck,
  },
];

export default function FourStepProcessSection({
  category = "interior",
}: {
  category?: "interior" | "construction";
}) {
  const isInterior = category === "interior";
  const steps = isInterior ? interiorSteps : constructionSteps;
  const accentBg = "bg-amber-400 border-amber-300 text-slate-950";

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={isInterior ? "Interior Execution Workflow" : "Construction Execution Workflow"}
          title={isInterior ? "Our 4-Step Interior Design Process" : "Our 4-Step Construction Execution Process"}
          sub="Transparent, structured execution from initial consultation to final key handover."
          align="center"
          dark
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/60 hover:bg-slate-900 transition-all duration-300 shadow-xl"
              >
                {/* Step Number Tag */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono-label text-slate-600 group-hover:text-amber-400 transition-colors">
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-2xl border ${accentBg} transition-all duration-300 shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-slate-950 border border-amber-400/30 text-[11px] font-mono-label font-bold uppercase tracking-wider text-amber-300 mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span>Step {step.number} Completed</span>
                  <span className="text-amber-400">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
