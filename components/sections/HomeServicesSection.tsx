"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, Compass, Armchair, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomeServicesSection() {
  const services = [
    {
      title: "Construction Services",
      icon: Building2,
      image: "/images/divisions/construction-division-card.png",
      href: "/construction",
      items: [
        "Residential Building",
        "Commercial Construction",
        "Renovation & Remodeling",
      ],
    },
    {
      title: "Architecture Services",
      icon: Compass,
      image: "/images/construction/structural-civil-engineering/card-1.png",
      href: "/construction/structural-civil-engineering",
      items: [
        "Architectural Planning",
        "2D / 3D Design",
        "Building Elevation",
      ],
    },
    {
      title: "Interior Design Services",
      icon: Armchair,
      image: "/images/divisions/interior-division-card.png",
      href: "/interior-design",
      items: [
        "Residential Interiors",
        "Office & Commercial",
        "Modular Kitchen",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Our Core Offerings"
          sub="Concept • Design • Execution"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-amber-600 transition-colors">
                        {s.title}
                      </h3>
                    </div>

                    <ul className="mt-4 space-y-2.5 pt-3 border-t border-slate-100">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={s.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs tracking-wide shadow-md shadow-amber-400/30 hover:scale-[1.02] transition-all"
                  >
                    <span>Explore {s.title.replace(" Services", "")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
