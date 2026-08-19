import Container from "@/components/ui/Container";
import { Building2, Home, Armchair, Handshake } from "lucide-react";

export default function HeroFeatureBar() {
  const features = [
    { title: "Quality Construction", icon: Building2 },
    { title: "Modern Architecture", icon: Home },
    { title: "Elegant Interiors", icon: Armchair },
    { title: "On-Time Delivery", icon: Handshake },
  ];

  return (
    <div className="bg-amber-50/70 border-b border-amber-200/80 py-5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-amber-200/90 shadow-xs text-slate-900 group hover:border-amber-400 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-slate-950 tracking-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
