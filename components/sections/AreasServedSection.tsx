import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/lib/data/company";

export default function AreasServedSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <Container className="grid lg:grid-cols-5 gap-12 items-center">
        {/* Left Column: Heading & 2-Column Location Pills Grid */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <SectionHeading
            eyebrow="Where We Work"
            title="Areas we serve across Pune"
            sub="We're based in Narhe and take on construction and interior projects across the following neighbourhoods and their surrounding areas — if you're nearby but don't see your area listed, ask us anyway."
            align="left"
          />
          
          {/* Balanced 2-Column Grid for Location Pills */}
          <div className="mt-8 grid grid-cols-2 gap-3.5">
            {company.areasServed.map((area) => (
              <div
                key={area}
                className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-bold text-blue-950 shadow-xs hover:border-blue-700/60 hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-default group"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" className="shrink-0 text-green-600 group-hover:text-green-400 transition-colors" aria-hidden="true">
                  <path d="M8 1c-2.8 0-5 2.2-5 5 0 3.7 5 9 5 9s5-5.3 5-9c0-2.8-2.2-5-5-5z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="8" cy="6" r="1.8" fill="currentColor" />
                </svg>
                <span className="truncate">{area}, Pune</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column: Borderless Floating Isometric 3D Pune Island Artwork */}
        <div className="lg:col-span-3 w-full flex justify-center">
          <div className="relative aspect-square w-full max-w-xl group bg-transparent">
            <Image
              src="/images/home/areas-served-map.jpg"
              alt="Map graphic marking Zemitech Urban's Pune service areas: Narhe, Kondhwa, Wagholi, Hinjewadi, Baner, Viman Nagar and Pirangut"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
