"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageSquareText, PenTool, Calculator, Hammer, ShieldCheck, KeyRound } from "lucide-react";

export default function ProjectProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      sub: "Understand your needs & vision",
      icon: MessageSquareText,
    },
    {
      number: "02",
      title: "Design & Planning",
      sub: "Create detailed architectural plans",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Estimation",
      sub: "Transparent cost & material planning",
      icon: Calculator,
    },
    {
      number: "04",
      title: "Execution",
      sub: "Professional construction & interior work",
      icon: Hammer,
    },
    {
      number: "05",
      title: "Quality Check",
      sub: "Strict quality control at every stage",
      icon: ShieldCheck,
    },
    {
      number: "06",
      title: "Handover",
      sub: "Ready-to-use beautiful spaces",
      icon: KeyRound,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Our Project Process"
          title="From Concept to Completion"
          sub="Transparent 6-step workflow ensuring predictable budgets, quality control, and timely delivery."
          align="center"
        />

        {/* 6 Connected Steps Cards Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between items-center text-center relative z-10"
              >
                <div>
                  {/* Step Icon inside Yellow Circle */}
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <span className="text-xs font-mono-label font-black text-amber-600 block mb-1">
                    {step.number}
                  </span>

                  <h3 className="text-base font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs mt-2 leading-relaxed font-medium">
                    {step.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
