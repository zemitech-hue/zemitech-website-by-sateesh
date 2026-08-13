import { company } from "@/lib/data/company";
import Container from "@/components/ui/Container";

export default function StatsStrip() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/90 relative z-20">
      <Container>
        <div className="backdrop-blur-2xl bg-slate-50/90 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-950/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-slate-200">
            {company.stats.map((s, i) => (
              <div key={s.label} className={`text-center py-2 ${i !== 0 ? "md:pl-6" : ""}`}>
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">
                  {s.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 font-mono-label font-bold uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
