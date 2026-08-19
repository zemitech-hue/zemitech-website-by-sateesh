"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { company } from "@/lib/data/company";

type Step = 1 | 2 | 3;
type MainCategory = "construction" | "interior" | null;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: MainCategory;
  initialSubService?: string;
};

type SubService = {
  id: string;
  label: string;
  subText: string;
  image: string;
};

const subServicesMap: Record<"construction" | "interior", SubService[]> = {
  construction: [
    {
      id: "residential-construction",
      label: "Residential Villa & Home Construction",
      subText: "Turnkey G+1 & G+2 independent villas built by in-house civil teams in Pune.",
      image: "/images/construction/residential/card-1.png",
    },
    {
      id: "general-civil",
      label: "Structural & Civil Construction",
      subText: "RCC frame structures, foundation works, and municipal plan sanctions.",
      image: "/images/construction/structural-civil-engineering/card-1.png",
    },
    {
      id: "renovation-construction",
      label: "Turnkey Home Renovation",
      subText: "Structural upgrades, floor additions, and full interior handover for existing homes.",
      image: "/images/construction/renovation/card-1.png",
    },
    {
      id: "industrial-construction",
      label: "Industrial Warehouses & Sheds",
      subText: "Heavy-duty structures engineered for logistics, manufacturing, and storage.",
      image: "/images/construction/industrial/card-1.png",
    },
  ],
  interior: [
    {
      id: "kitchen-interior",
      label: "Modular Kitchen Design",
      subText: "L-Shape, Parallel, and Island kitchens with marine-grade ply & soft-close hardware.",
      image: "/images/interior/kitchen/card-1.png",
    },
    {
      id: "living-room-interior",
      label: "Living Room Joinery & TV Walls",
      subText: "Custom TV wall panels, false ceilings, ambient LED lights, and sofa joinery.",
      image: "/images/interior/living-room/card-1.png",
    },
    {
      id: "bedroom-interior",
      label: "Bedroom Wardrobes & Storage",
      subText: "Floor-to-ceiling sliding wardrobes, headboards, and hydraulic storage beds.",
      image: "/images/interior/bedroom/card-1.png",
    },
    {
      id: "turnkey-interior",
      label: "Full-Home Turnkey Interior Design",
      subText: "End-to-end 2BHK & 3BHK interior execution from 3D design to final cleanup.",
      image: "/images/interior/turnkey-home-interiors/card-1.png",
    },
  ],
};

export default function InquiryModal({ isOpen, onClose, initialCategory = null, initialSubService }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [category, setCategory] = useState<MainCategory>(initialCategory);
  const [subService, setSubService] = useState<string>(initialSubService || "");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Only re-run on the actual open/close transition — not on every keystroke
  // in the form below, which would otherwise steal focus back to the close
  // button on each render.
  useEffect(() => {
    if (!isOpen) return;

    if (initialSubService) {
      setCategory(initialCategory || null);
      setSubService(initialSubService);
      setStep(3);
    } else if (initialCategory) {
      setCategory(initialCategory);
      setSubService("");
      setStep(2);
    } else {
      setStep(1);
      setCategory(null);
      setSubService("");
    }

    closeButtonRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onCloseRef.current();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, initialCategory, initialSubService]);

  if (!isOpen) return null;

  const handleCategorySelect = (cat: MainCategory) => {
    setCategory(cat);
    setSubService("");
    setStep(2);
  };

  const handleSubServiceSelect = (subLabel: string) => {
    setSubService(subLabel);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const catLabel = category === "construction" ? "Construction Services" : "Interior Design Services";
    const message = `Hi Zemitech Urban! I would like to get a quote for my project:

• Category: ${catLabel}
• Specific Service: ${subService || "General Enquiry"}
• Name: ${name}
• Phone: ${phone}
• Location: ${location}
${notes ? `• Scope Details: ${notes}` : ""}`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encoded}`;
    
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const resetAndClose = () => {
    setStep(1);
    setCategory(null);
    setSubService("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-3xl w-full overflow-hidden relative max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Top Header — Clean White & Solid Deep Blue Top Accent */}
        <div className="bg-white p-6 sm:p-7 relative border-b border-slate-200">
          <div className="h-1 absolute top-0 left-0 right-0 bg-blue-700" />
          <button
            ref={closeButtonRef}
            onClick={resetAndClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors font-bold text-sm"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="flex items-center gap-2 text-xs font-mono-label uppercase tracking-widest text-blue-700 font-bold mb-1">
            <span>Step {step} of 3</span>
            <span>•</span>
            <span>Instant Quote Request</span>
          </div>

          <h2 id="inquiry-modal-title" className="text-xl sm:text-2xl font-bold text-blue-950">
            {step === 1 && "What type of service do you require?"}
            {step === 2 && `Select your ${category === "construction" ? "Construction" : "Interior"} service:`}
            {step === 3 && "Where should we send your project estimate?"}
          </h2>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
          
          {/* STEP 1: Main Category Selection */}
          {step === 1 && (
            <div className="grid sm:grid-cols-2 gap-6">
              <button
                type="button"
                onClick={() => handleCategorySelect("construction")}
                className="group p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-700 bg-slate-50 hover:bg-blue-50/50 transition-all text-left flex flex-col cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-slate-200">
                  <Image
                    src="/images/divisions/construction-division-card.png"
                    alt="Construction Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-700">Construction Services</h3>
                <p className="text-xs text-slate-600 mt-1">Residential villas, commercial fit-outs, and civil infrastructure.</p>
              </button>

              <button
                type="button"
                onClick={() => handleCategorySelect("interior")}
                className="group p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-700 bg-slate-50 hover:bg-blue-50/50 transition-all text-left flex flex-col cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-slate-200">
                  <Image
                    src="/images/divisions/interior-division-card.png"
                    alt="Interior Design Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-700">Interior Design Services</h3>
                <p className="text-xs text-slate-600 mt-1">Modular kitchens, living rooms, bedrooms, and full-home interiors.</p>
              </button>
            </div>
          )}

          {/* STEP 2: Sub-Services with Visual Images */}
          {step === 2 && category && (
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-label mb-2">
                Choose your specific requirement below:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {subServicesMap[category].map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => handleSubServiceSelect(sub.label)}
                    className="w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-blue-700 bg-slate-50 hover:bg-blue-50/80 transition-all flex flex-col justify-between cursor-pointer group shadow-xs hover:shadow-md"
                  >
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 border border-slate-200">
                      <Image
                        src={sub.image}
                        alt={sub.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-blue-950 group-hover:text-blue-700 transition-colors flex items-center justify-between">
                        <span>{sub.label}</span>
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors text-xs font-bold shrink-0 ml-2">
                          →
                        </span>
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">{sub.subText}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-4 text-xs font-bold text-slate-500 hover:text-blue-700 transition-colors flex items-center gap-1"
              >
                ← Back to main categories
              </button>
            </div>
          )}

          {/* STEP 3: Contact Info & Direct WhatsApp Redirection */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                <p className="text-xs font-bold text-blue-900 font-mono-label uppercase">Selected Service:</p>
                <p className="text-sm font-bold text-blue-950 mt-0.5">{subService}</p>
              </div>

              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Your Full Name *</label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 text-sm font-medium outline-none"
                />
              </div>

              <div>
                <label htmlFor="inquiry-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Phone / WhatsApp Number *</label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 text-sm font-medium outline-none"
                />
              </div>

              <div>
                <label htmlFor="inquiry-location" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Project Location / City / Pincode *</label>
                <input
                  id="inquiry-location"
                  type="text"
                  required
                  placeholder="e.g. Pune, Mumbai, Narhe, Pincode 411041, or City Name"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 text-sm font-medium outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="inquiry-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Brief Scope / Budget (Optional)</label>
                <textarea
                  id="inquiry-notes"
                  rows={2}
                  placeholder="e.g. 3BHK full home interior design, budget ~15 Lakhs"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 text-sm font-medium outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-bold text-slate-500 hover:text-blue-700 transition-colors"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-400/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer border border-amber-300"
                >
                  <span>Submit & Redirect to WhatsApp</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.36-.49.06-1.1.09-1.78-.11-.41-.12-.94-.3-1.62-.58-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35h.55c.18 0 .41-.02.64.49.24.55.81 1.9.88 2.04.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.37-.23.62-.14.26.09 1.62.76 1.9.9.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
                  </svg>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
