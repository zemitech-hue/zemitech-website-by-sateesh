"use client";

import Container from "@/components/ui/Container";
import { FileCheck, Leaf, Zap, ShieldCheck, CheckCircle2, Award, Building2, Flame, Droplets, Scale } from "lucide-react";

export default function ConstructionApprovalsSection() {
  const approvalLabels = [
    { label: "PMC / PCMC Sanction", icon: Building2 },
    { label: "Environmental Clearance", icon: Leaf },
    { label: "Structural Audit Stamp", icon: ShieldCheck },
    { label: "State Fire Department NOC", icon: Flame },
    { label: "MSEDCL Power & Water", icon: Droplets },
    { label: "RERA & Legal Compliance", icon: Scale },
  ];

  const approvalCards = [
    {
      icon: FileCheck,
      phase: "Phase 1: Sanctions",
      title: "Architectural & Structural Sanctions",
      description: "100% PMC & PCMC municipal plan approvals, FAR calculations, soil test reports, and certified structural engineer stability stamps before ground excavation.",
      highlight: "PMC / PCMC Approved",
      color: "from-blue-600/20 to-blue-800/10 border-blue-200 text-blue-700",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: Leaf,
      phase: "Phase 2: Statutory Clearances",
      title: "Environmental & Statutory Clearances",
      description: "Handling state Environmental Clearance (EC), Maharashtra Pollution Control Board (MPCB) green norms, debris disposal permits, and Tree Authority NOCs.",
      highlight: "MPCB & EC Compliant",
      color: "from-emerald-600/20 to-emerald-800/10 border-emerald-200 text-emerald-700",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: Zap,
      phase: "Phase 3: Utility & Handover",
      title: "Utility Sanctions & Completion NOCs",
      description: "Securing final Fire Department NOC, MSEDCL high-tension electrical load sanctions, PMRDA water connections, and Occupation Certificates (OC).",
      highlight: "Final OC Handover",
      color: "from-purple-600/20 to-purple-800/10 border-purple-200 text-purple-700",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-mono-label text-xs uppercase tracking-widest font-extrabold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            100% Government &amp; Statutory Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Government, Environmental &amp; Design Approvals
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Zemitech Urban manages all mandatory municipal sanctions, environmental clearances, and structural stamps so your project proceeds without legal delays.
          </p>
        </div>

        {/* 6 Official Compliance Labels / Badges (Immediately below header) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {approvalLabels.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs text-xs font-mono-label font-bold text-slate-800 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <item.icon className="w-4 h-4 text-blue-700 shrink-0" />
              <span>{item.label}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-0.5 shrink-0" />
            </div>
          ))}
        </div>

        {/* 3 Clean Approval Process Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {approvalCards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center border shadow-xs`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono-label font-bold px-3 py-1 rounded-full border ${card.badgeColor}`}>
                    {card.highlight}
                  </span>
                </div>

                <span className="text-[11px] font-mono-label font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {card.phase}
                </span>

                <h3 className="text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Handled by Zemitech Urban</span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
