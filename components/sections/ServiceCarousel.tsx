"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";

type ServiceItem = {
  title: string;
  category: "construction" | "interior";
  tag: string;
  description: string;
  href: string;
  image: string;
  highlights: string[];
};

const constructionServices: ServiceItem[] = [
  {
    title: "Residential Villa Construction",
    category: "construction",
    tag: "Residential",
    description: "Turnkey G+1 & G+2 independent villas built by in-house civil engineering teams in Pune with fixed BOQ pricing.",
    href: "/construction/residential",
    image: "/images/construction/residential/card-1.png",
    highlights: ["Fixed-Scope BOQ Guarantee", "In-House Structural Engineers", "Weekly Photo-Logged Updates"],
  },
  {
    title: "Structural & Civil Engineering",
    category: "construction",
    tag: "Civil Engineering",
    description: "Structural engineering, municipal plan sanctions, footing casting, and RCC frame construction.",
    href: "/construction/structural-civil-engineering",
    image: "/images/construction/structural-civil-engineering/card-1.png",
    highlights: ["Municipal Plan Sanctions", "RCC Slab & Beam Casting", "Waterproofing Guarantee"],
  },
  {
    title: "Turnkey Home Renovation",
    category: "construction",
    tag: "Renovation",
    description: "Full structural upgrades, floor additions, wall re-alignments and modern facade revamps for existing homes.",
    href: "/construction/renovation",
    image: "/images/construction/renovation/card-1.png",
    highlights: ["Structural Integrity Checks", "Fixed Renovation BOQ", "Complete Interior Handover"],
  },
  {
    title: "Industrial Warehouses & Sheds",
    category: "construction",
    tag: "Industrial",
    description: "Heavy-duty PEB steel warehouses, factory floors, and logistics facilities engineered for high equipment load.",
    href: "/construction/industrial",
    image: "/images/construction/industrial/card-1.png",
    highlights: ["Pre-Engineered Steel Framework", "Heavy-Duty Trimix Flooring", "High Clearance & Crane Beams"],
  },
];

const interiorServices: ServiceItem[] = [
  {
    title: "Modular Kitchen Interior Design",
    category: "interior",
    tag: "Modular Kitchen",
    description: "L-shape, Parallel, and Island modular kitchens manufactured in-house with marine-grade ply and soft-close hardware.",
    href: "/interior-design/kitchen",
    image: "/images/interior/kitchen/card-1.png",
    highlights: ["BWP Marine Ply (710 Grade)", "Soft-Close Blum / Hettich Hardware", "Quartz & Granite Countertops"],
  },
  {
    title: "Living Room & Wall Joinery",
    category: "interior",
    tag: "Living Room",
    description: "Custom TV wall units, false ceilings, ambient LED profiles, veneer panelling, and integrated shoe racks.",
    href: "/interior-design/living-room",
    image: "/images/interior/living-room/card-1.png",
    highlights: ["Custom TV Wall Consoles", "Gypsum Ceiling & LED Profiles", "Veneer & Charcoal Panelling"],
  },
  {
    title: "Master Bedroom & Storage Design",
    category: "interior",
    tag: "Bedroom",
    description: "Floor-to-ceiling modular wardrobes, headboard panelling, dressing tables, and hydraulic storage beds.",
    href: "/interior-design/bedroom",
    image: "/images/interior/bedroom/card-1.png",
    highlights: ["Floor-to-Ceiling Wardrobes", "Hydraulic Storage Beds", "Upholstered Headboards"],
  },
  {
    title: "Turnkey Full-Home Interior Execution",
    category: "interior",
    tag: "Turnkey Home",
    description: "Complete 2BHK & 3BHK home interior design under one project manager from 3D visual render to handover.",
    href: "/interior-design",
    image: "/images/interior/turnkey-home-interiors/card-1.png",
    highlights: ["3D Photorealistic Design", "Dedicated Site Manager", "Post-Handover Warranty"],
  },
];

export default function ServiceCarousel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"construction" | "interior" | null>(null);

  const handleBookClick = (cat: "construction" | "interior") => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          
          {/* Main Top Header */}
          <SectionHeading
            eyebrow="Our Specializations"
            title="Comprehensive Construction & Interior Services"
            sub="Explore our complete range of specialized services delivered across Pune by in-house engineering and interior teams."
            align="center"
            className="mb-12"
          />

          {/* DIVISION 01: CONSTRUCTION SERVICES */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-3 border-b border-slate-200">
              <div>
                <span className="inline-block font-mono-label text-[11px] uppercase tracking-widest text-blue-700 font-bold px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 mb-1.5">
                  Division 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-950">Construction Services</h3>
                <p className="text-slate-600 text-sm mt-0.5">Turnkey civil construction, independent villas, commercial fit-outs, and township infrastructure.</p>
              </div>
              <Button href="/construction" variant="outline" showArrow className="shrink-0 text-xs py-2 px-4">
                All Construction Services
              </Button>
            </div>

            {/* 2 Cards Per Row Sleek Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {constructionServices.map((s) => (
                <ServiceCard key={s.title} service={s} onBook={() => handleBookClick("construction")} />
              ))}
            </div>
          </div>

          {/* DIVISION 02: INTERIOR DESIGN SERVICES */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-3 border-b border-slate-200">
              <div>
                <span className="inline-block font-mono-label text-[11px] uppercase tracking-widest text-blue-700 font-bold px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200 mb-1.5">
                  Division 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-950">Interior Design Services</h3>
                <p className="text-slate-600 text-sm mt-0.5">Modular kitchens, living room wall joinery, bedroom wardrobes, and turnkey home interiors.</p>
              </div>
              <Button href="/interior-design" variant="outline" showArrow className="shrink-0 text-xs py-2 px-4">
                All Interior Services
              </Button>
            </div>

            {/* 2 Cards Per Row Sleek Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {interiorServices.map((s) => (
                <ServiceCard key={s.title} service={s} onBook={() => handleBookClick("interior")} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Interactive Service Lead Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={selectedCategory}
      />
    </>
  );
}

function ServiceCard({ service, onBook }: { service: ServiceItem; onBook: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:border-blue-700/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Sleek Cinematic 16:9 Image Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute top-3 left-3 bg-blue-950/85 backdrop-blur-md text-green-400 text-[11px] font-mono-label font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 shadow-md">
            {service.tag}
          </span>
        </div>

        {/* Compact Content Body */}
        <div className="p-5 sm:p-6">
          <h4 className="text-lg sm:text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors leading-snug">
            {service.title}
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            {service.description}
          </p>

          {/* Compact Service Highlights List */}
          <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100">
            {service.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Proportioned Compact Footer Action Button */}
      <div className="p-5 sm:p-6 pt-0 mt-1">
        <Button
          type="button"
          onClick={onBook}
          variant="primary"
          className="w-full justify-center !py-3 !text-xs shadow-md font-black hover:scale-[1.02] transition-transform"
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
