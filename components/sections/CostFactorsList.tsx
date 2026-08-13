import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CostFactorsListProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  factors: { title: string; description: string }[];
}

export default function CostFactorsList({ eyebrow, title, sub, factors }: CostFactorsListProps) {
  if (!factors || factors.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          eyebrow={eyebrow || "Cost Factors"}
          title={title}
          sub={sub || "Factors that genuinely change cost project to project — what to expect a quote to depend on."}
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {factors.slice(0, 4).map((factor, i) => (
            <ScrollReveal key={factor.title} delay={i * 0.1}>
              <div className="flex gap-4 sm:gap-6 items-start p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0 shadow-inner">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-blue-950 text-base sm:text-lg">{factor.title}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{factor.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
