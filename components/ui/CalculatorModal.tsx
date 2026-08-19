"use client";

import { useState, useEffect, useRef } from "react";
import { company } from "@/lib/data/company";
import { Calculator, ArrowRight, ShieldCheck, Clock, Check, MessageCircle, Sparkles, SlidersHorizontal, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "construction" | "interior";
};

export default function CalculatorModal({ isOpen, onClose, initialTab = "construction" }: Props) {
  const [activeTab, setActiveTab] = useState<"construction" | "interior">(initialTab);
  const [hasCalculated, setHasCalculated] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setHasCalculated(false);
      closeButtonRef.current?.focus();

      function onKey(e: KeyboardEvent) {
        if (e.key === "Escape") {
          onCloseRef.current();
        }
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [isOpen, initialTab]);

  // Helper to reset calculation output whenever options change
  const resetCalc = () => setHasCalculated(false);

  // ================= CONSTRUCTION STATE =================
  const [constProjectType, setConstProjectType] = useState<string>("Villa");
  const [constArea, setConstArea] = useState<number>(1500);
  const [constFloors, setConstFloors] = useState<string>("G+1");
  const [constQuality, setConstQuality] = useState<"standard" | "premium" | "luxury">("premium");
  const [constLocation, setConstLocation] = useState<string>("");

  // ================= INTERIOR STATE =================
  const [intPropType, setIntPropType] = useState<string>("3BHK");
  const [intArea, setIntArea] = useState<number>(1200);
  const [intRooms, setIntRooms] = useState<string[]>(["Living", "Kitchen", "Bedrooms"]);
  const [intScope, setIntScope] = useState<"modular" | "full">("full");
  const [intQuality, setIntQuality] = useState<"standard" | "premium" | "luxury">("premium");

  // Toggle room checkboxes
  const toggleRoom = (room: string) => {
    resetCalc();
    setIntRooms((prev) =>
      prev.includes(room) ? prev.filter((r) => r !== room) : [...prev, room]
    );
  };

  // ================= CALCULATIONS =================
  const getConstructionEstimate = () => {
    const rates = { standard: 1650, premium: 1950, luxury: 2450 };
    const floorMultipliers: Record<string, number> = { "G+0": 1.0, "G+1": 1.85, "G+2": 2.7, "G+3+": 3.5 };
    const typeMultipliers: Record<string, number> = { Villa: 1.05, "Independent House": 1.0, Apartment: 0.95, Commercial: 1.1 };

    const baseRate = rates[constQuality];
    const flMult = floorMultipliers[constFloors] || 1.85;
    const tpMult = typeMultipliers[constProjectType] || 1.0;

    const totalRaw = constArea * baseRate * (flMult * 0.55) * tpMult;
    const minLakhs = (totalRaw * 0.92 / 100000).toFixed(1);
    const maxLakhs = (totalRaw * 1.08 / 100000).toFixed(1);
    const minPerSq = Math.round((totalRaw * 0.92) / constArea);
    const maxPerSq = Math.round((totalRaw * 1.08) / constArea);

    let duration = "8–10 Months";
    if (constArea <= 1200) duration = "6–8 Months";
    else if (constArea >= 2500) duration = "10–14 Months";

    return { minLakhs, maxLakhs, minPerSq, maxPerSq, duration };
  };

  const getInteriorEstimate = () => {
    const rates = { standard: 450, premium: 750, luxury: 1200 };
    const propMultipliers: Record<string, number> = { "2BHK": 0.95, "3BHK": 1.0, "4BHK": 1.1, Villa: 1.25, Office: 1.05 };
    const scopeMultipliers = { modular: 0.65, full: 1.0 };
    const roomFactor = Math.max(0.75, Math.min(1.2, intRooms.length * 0.25));

    const baseRate = rates[intQuality];
    const prMult = propMultipliers[intPropType] || 1.0;
    const scMult = scopeMultipliers[intScope];

    const totalRaw = intArea * baseRate * prMult * scMult * roomFactor;
    const minLakhs = (totalRaw * 0.90 / 100000).toFixed(1);
    const maxLakhs = (totalRaw * 1.10 / 100000).toFixed(1);
    const minPerSq = Math.round((totalRaw * 0.90) / intArea);
    const maxPerSq = Math.round((totalRaw * 1.10) / intArea);

    let timeline = "45–60 Days";
    if (intScope === "modular") timeline = "25–35 Days";
    else if (intArea >= 2000) timeline = "60–75 Days";

    return { minLakhs, maxLakhs, minPerSq, maxPerSq, timeline };
  };

  const constEst = getConstructionEstimate();
  const intEst = getInteriorEstimate();

  // ================= DIRECT WHATSAPP DATA SHARE =================
  const handleWhatsAppShare = () => {
    const isConst = activeTab === "construction";
    let message = "";

    if (isConst) {
      message = `Hi Zemitech Urban! I just calculated my project estimate on your website:

📌 *Service:* Construction Cost Estimator
🏢 *Project Type:* ${constProjectType}
📐 *Built-Up Area:* ${constArea.toLocaleString()} sq. ft.
🧱 *Floors:* ${constFloors}
⭐ *Quality Grade:* ${constQuality.toUpperCase()} (₹${constQuality === "standard" ? "1,650" : constQuality === "premium" ? "1,950" : "2,450"}/sq ft)
${constLocation ? `📍 *Location:* ${constLocation}` : ""}

💰 *Calculated Price Range:* ₹${constEst.minLakhs} – ₹${constEst.maxLakhs} Lakhs
⏱️ *Estimated Duration:* ${constEst.duration}

I would like to speak directly with an engineer about this calculation!`;
    } else {
      message = `Hi Zemitech Urban! I just calculated my interior estimate on your website:

📌 *Service:* Interior Cost Estimator
🏠 *Property Type:* ${intPropType}
📐 *Carpet Area:* ${intArea.toLocaleString()} sq. ft.
🚪 *Rooms Included:* ${intRooms.join(", ") || "Full Home"}
🛠️ *Scope:* ${intScope === "modular" ? "Modular Only (Kitchen & Wardrobes)" : "Full Turnkey Interior"}
⭐ *Material Quality:* ${intQuality.toUpperCase()} (₹${intQuality === "standard" ? "450" : intQuality === "premium" ? "750" : "1,200"}/sq ft)

💰 *Calculated Price Range:* ₹${intEst.minLakhs} – ₹${intEst.maxLakhs} Lakhs
⏱️ *Estimated Timeline:* ${intEst.timeline}

I would like to speak directly with an interior designer about this calculation!`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full overflow-hidden relative max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="calculator-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-white px-6 py-5 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5 text-blue-700" />
            </span>
            <div>
              <h2 id="calculator-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-950">
                Instant Project Cost Estimator
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Select your options to reveal your custom cost calculation
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors font-bold text-sm cursor-pointer"
            aria-label="Close calculator modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-slate-50/60">
          
          {/* Main Service Discipline Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 inline-flex flex-wrap gap-2 shadow-xs">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("construction");
                  resetCalc();
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === "construction"
                    ? "bg-amber-400 text-slate-950 border border-amber-300 font-extrabold shadow-md shadow-amber-400/30 scale-[1.02]"
                    : "text-slate-700 hover:text-amber-800 hover:bg-amber-50/80"
                }`}
              >
                1. Construction Estimator
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("interior");
                  resetCalc();
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === "interior"
                    ? "bg-amber-400 text-slate-950 border border-amber-300 font-extrabold shadow-md shadow-amber-400/30 scale-[1.02]"
                    : "text-slate-700 hover:text-amber-800 hover:bg-amber-50/80"
                }`}
              >
                2. Interior Estimator
              </button>
            </div>
          </div>

          {/* DYNAMIC FORM AREA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* FORM INPUTS (LEFT) */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-5">
              
              <div className="space-y-5">
                {activeTab === "construction" ? (
                  <>
                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Project Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Villa", "Independent House", "Apartment", "Commercial"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => {
                              setConstProjectType(t);
                              resetCalc();
                            }}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              constProjectType === t
                                ? "bg-blue-700 text-white border-blue-700 shadow-xs"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Built-up Area */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700">
                          Built-Up Area (Sq. Ft.)
                        </label>
                        <input
                          type="number"
                          min={500}
                          max={10000}
                          step={50}
                          value={constArea}
                          onChange={(e) => {
                            setConstArea(Math.max(500, Number(e.target.value) || 500));
                            resetCalc();
                          }}
                          className="w-24 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-300 text-right text-xs font-extrabold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <input
                        type="range"
                        min={500}
                        max={10000}
                        step={50}
                        value={constArea}
                        onChange={(e) => {
                          setConstArea(Number(e.target.value));
                          resetCalc();
                        }}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                      />
                    </div>

                    {/* Floors */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Number of Floors
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["G+0", "G+1", "G+2", "G+3+"].map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => {
                              setConstFloors(f);
                              resetCalc();
                            }}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              constFloors === f
                                ? "bg-blue-700 text-white border-blue-700 shadow-xs"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Construction Quality */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Construction Quality Grade
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "standard", label: "Standard", rate: "₹1,650/sq ft" },
                          { id: "premium", label: "Premium", rate: "₹1,950/sq ft" },
                          { id: "luxury", label: "Luxury", rate: "₹2,450/sq ft" },
                        ].map((q) => (
                          <button
                            key={q.id}
                            type="button"
                            onClick={() => {
                              setConstQuality(q.id as any);
                              resetCalc();
                            }}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              constQuality === q.id
                                ? "bg-blue-50 border-blue-600 shadow-xs"
                                : "bg-slate-50 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <span className="block text-xs font-bold text-slate-950">{q.label}</span>
                            <span className="block text-[10px] font-mono text-blue-700 font-bold mt-0.5">{q.rate}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Location / City / Pincode
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. City Name, Pincode, or Area"
                        value={constLocation}
                        onChange={(e) => {
                          setConstLocation(e.target.value);
                          resetCalc();
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Property Type */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Property Type
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {["2BHK", "3BHK", "4BHK", "Villa", "Office"].map((pt) => (
                          <button
                            key={pt}
                            type="button"
                            onClick={() => {
                              setIntPropType(pt);
                              resetCalc();
                            }}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                              intPropType === pt
                                ? "bg-blue-700 text-white border-blue-700 shadow-xs"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {pt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Carpet Area */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700">
                          Carpet Area (Sq. Ft.)
                        </label>
                        <input
                          type="number"
                          min={400}
                          max={5000}
                          step={50}
                          value={intArea}
                          onChange={(e) => {
                            setIntArea(Math.max(400, Number(e.target.value) || 400));
                            resetCalc();
                          }}
                          className="w-24 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-300 text-right text-xs font-extrabold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <input
                        type="range"
                        min={400}
                        max={5000}
                        step={50}
                        value={intArea}
                        onChange={(e) => {
                          setIntArea(Number(e.target.value));
                          resetCalc();
                        }}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                      />
                    </div>

                    {/* Rooms Required */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Rooms Required
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Living", "Kitchen", "Bedrooms", "Dining"].map((rm) => {
                          const isSel = intRooms.includes(rm);
                          return (
                            <button
                              key={rm}
                              type="button"
                              onClick={() => toggleRoom(rm)}
                              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                                isSel
                                  ? "bg-blue-50 text-blue-900 border-blue-600 font-extrabold"
                                  : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              {isSel && <Check className="w-3.5 h-3.5 text-blue-700" />}
                              <span>{rm}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Scope */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Interior Scope
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIntScope("modular");
                            resetCalc();
                          }}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            intScope === "modular"
                              ? "bg-blue-50 border-blue-600 shadow-xs"
                              : "bg-slate-50 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <span className="block text-xs font-bold text-slate-950">Modular Only</span>
                          <span className="block text-[10px] text-slate-500 mt-0.5">Kitchen &amp; Wardrobes</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIntScope("full");
                            resetCalc();
                          }}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            intScope === "full"
                              ? "bg-blue-50 border-blue-600 shadow-xs"
                              : "bg-slate-50 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <span className="block text-xs font-bold text-slate-950">Full Turnkey Interior</span>
                          <span className="block text-[10px] text-slate-500 mt-0.5">Complete Fit-Out &amp; Lighting</span>
                        </button>
                      </div>
                    </div>

                    {/* Material Quality */}
                    <div>
                      <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Material Quality Grade
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "standard", label: "Standard", rate: "₹450/sq ft" },
                          { id: "premium", label: "Premium", rate: "₹750/sq ft" },
                          { id: "luxury", label: "Luxury", rate: "₹1,200/sq ft" },
                        ].map((q) => (
                          <button
                            key={q.id}
                            type="button"
                            onClick={() => {
                              setIntQuality(q.id as any);
                              resetCalc();
                            }}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              intQuality === q.id
                                ? "bg-blue-50 border-blue-600 shadow-xs"
                                : "bg-slate-50 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <span className="block text-xs font-bold text-slate-950">{q.label}</span>
                            <span className="block text-[10px] font-mono text-blue-700 font-bold mt-0.5">{q.rate}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setHasCalculated(true)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md shadow-amber-400/30 hover:scale-[1.02] transition-all cursor-pointer border border-amber-300"
                >
                  <Calculator className="w-4 h-4 text-slate-950" />
                  <span>Calculate Estimate Range</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>

            {/* DYNAMIC OUTPUT CARD (RIGHT) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white p-6 sm:p-7 rounded-2xl border border-blue-800/80 shadow-xl flex flex-col justify-between h-full space-y-5">
              
              {!hasCalculated ? (
                <div className="my-auto text-center space-y-3 py-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-800/50 border border-blue-700/60 flex items-center justify-center mx-auto text-blue-300">
                    <SlidersHorizontal className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-white">Select Your Options</h3>
                    <p className="text-xs text-blue-200 leading-relaxed max-w-xs mx-auto">
                      Adjust your options on the left and click &quot;Calculate Estimate Range&quot; to reveal your estimate!
                    </p>
                  </div>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setHasCalculated(true)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 bg-blue-900/80 px-4 py-2 rounded-xl border border-blue-700/60 hover:bg-blue-800 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>View Instant Estimate</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between border-b border-blue-800/60 pb-3 mb-4">
                      <span className="text-xs font-mono-label uppercase tracking-widest text-blue-200 font-bold">
                        Estimated Cost Range
                      </span>
                      <span className="text-[10px] font-mono-label text-green-400 font-bold bg-green-950/80 px-2 py-0.5 rounded-full border border-green-700/60">
                        Indicative Range
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight block">
                        {activeTab === "construction"
                          ? `₹ ${constEst.minLakhs} – ₹ ${constEst.maxLakhs} Lakhs`
                          : `₹ ${intEst.minLakhs} – ₹ ${intEst.maxLakhs} Lakhs`}
                      </span>
                      <p className="text-xs text-blue-200 font-mono-label mt-1">
                        Approx rate: {activeTab === "construction"
                          ? `₹${constEst.minPerSq.toLocaleString()} – ₹${constEst.maxPerSq.toLocaleString()} / sq ft`
                          : `₹${intEst.minPerSq.toLocaleString()} – ₹${intEst.maxPerSq.toLocaleString()} / sq ft`}
                      </p>
                    </div>

                    <div className="mt-5 space-y-2 pt-4 border-t border-blue-800/60 text-xs font-bold text-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                          <Clock className="w-3.5 h-3.5 text-blue-400" />
                          Duration:
                        </span>
                        <span className="text-blue-300 font-mono-label">
                          {activeTab === "construction" ? constEst.duration : intEst.timeline}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                          Price Guarantee:
                        </span>
                        <span className="text-green-400 font-mono-label">Fixed BOQ Scope</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppShare}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-all cursor-pointer border border-emerald-400/30"
                    >
                      <MessageCircle className="w-4 h-4 fill-current text-white" />
                      <span>Send Calculation to WhatsApp</span>
                    </button>
                    <p className="text-[10px] text-center font-mono-label text-blue-200">
                      Includes free 3D design &amp; site evaluation
                    </p>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
