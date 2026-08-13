import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

interface ServiceScopeGridProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  groups: { category: string; items: string[] }[];
}

export default function ServiceScopeGrid({ eyebrow, title, sub, groups }: ServiceScopeGridProps) {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {groups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-bold text-blue-950 text-xl border-b border-slate-200 pb-3">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
