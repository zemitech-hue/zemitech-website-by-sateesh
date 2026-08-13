import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowDown } from "lucide-react";

interface VisualJourneyTimelineProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  steps: { title: string; image?: string; description?: string }[];
}

export default function VisualJourneyTimeline({ eyebrow, title, sub, steps }: VisualJourneyTimelineProps) {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white overflow-hidden">
      <Container className="max-w-4xl">
        <div className="text-center mb-16">
          <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" className="text-white" />
        </div>
        
        <div className="relative">
          {/* Vertical Track Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} className="relative md:grid md:grid-cols-2 md:gap-16 items-center group">
                {/* Node for Desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950 hidden md:block z-10 group-hover:scale-125 transition-transform" />

                {/* Left Side (Even items push content left, Odd push image left) */}
                <div className={`md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className="mb-4 md:mb-0">
                    <span className="font-mono-label text-blue-400 tracking-widest text-xs uppercase block mb-2">
                      Stage {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    {step.description && (
                      <p className="text-slate-400 text-sm leading-relaxed max-w-sm md:ml-auto">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Side */}
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                    <GracefulImage
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-12">
                    <ArrowDown className="text-slate-700 w-6 h-6 animate-pulse" />
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
