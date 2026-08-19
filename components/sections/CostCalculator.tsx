"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import InquiryModal from "@/components/ui/InquiryModal";
import { company } from "@/lib/data/company";
import { Calculator, ArrowRight, ShieldCheck, Clock, Check, MessageCircle, Sparkles, SlidersHorizontal } from "lucide-react";

export default function CostCalculator() {
  const [activeTab, setActiveTab] = useState<"construction" | "interior">("construction");
  const [modalOpen, setModalOpen] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Helper to reset calculation output whenever options change
  const resetCalc = () => setHasCalculated(false);

  // ================= CONSTRUCTION STATE =================
  const [constProjectType, setConstProjectType] = useState<string>("Villa");
  const [constArea, setConstArea] = useState<number>(1500);
  const [constFloors, setConstFloors] = useState<string>("G+1");
  const [constQuality, setConstQuality] = useState<"standard" | "premium" | "luxury">("premium");
  const [constLocation, setConstLocation] = useState<string>("Narhe, Pune");

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
📍 *Location:* ${constLocation}

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

  return (
    <>
      <section id="calculator" className="scroll-mt-20 py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        <Container className="relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono-label text-xs uppercase tracking-widest font-bold mb-4 shadow-xs">
              <Calculator className="w-4 h-4 text-blue-700" />
              Dynamic Cost Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Estimate Your Project Cost
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Select your options below and click &quot;Calculate Estimate Range&quot; to reveal your custom price estimate.
            </p>
          </div>

          {/* Main Workspace */}
          <div className="mt-12 max-w-5xl mx-auto bg-slate-50/90 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl">
            
            {/* Main Service Discipline Switcher */}
            <div className="flex justify-center mb-10">
              <div className="bg-white p-1.5 rounded-2xl border border-slate-200 inline-flex flex-wrap gap-2 shadow-xs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("construction");
                    resetCalc();
                  }}
                  className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                    activeTab === "construction"
                      ? "bg-amber-400 text-slate-950 border border-amber-300 font-extrabold shadow-md shadow-amber-400/30 scale-[1.02]"
                      : "text-slate-700 hover:text-amber-800 hover:bg-amber-50/80"
                  }`}
                >
                  1. Construction Cost Estimator
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("interior");
                    resetCalc();
                  }}
                  className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                    activeTab === "interior"
                      ? "bg-amber-400 text-slate-950 border border-amber-300 font-extrabold shadow-md shadow-amber-400/30 scale-[1.02]"
                      : "text-slate-700 hover:text-amber-800 hover:bg-amber-50/80"
                  }`}
                >
                  2. Interior Cost Estimator
                </button>
              </div>
            </div>

            {/* DYNAMIC FORM AREA (Items stretch for equal bottom alignment) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* ================= FORM INPUTS (LEFT) ================= */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                <div className="space-y-6">
                  {activeTab === "construction" ? (
                    /* ---------------- CONSTRUCTION CALCULATOR FORM ---------------- */
                    <>
                      {/* Project Type */}
                      <div>
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
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
                              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                                constProjectType === t
                                  ? "bg-blue-700 text-white border-blue-700 shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Built-up Area */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="const-area-input" className="text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700">
                            Built-Up Area (Sq. Ft.)
                          </label>
                          <input
                            id="const-area-input"
                            type="number"
                            min={500}
                            max={10000}
                            step={50}
                            value={constArea}
                            onChange={(e) => {
                              setConstArea(Math.max(500, Number(e.target.value) || 500));
                              resetCalc();
                            }}
                            className="w-28 px-3 py-1 rounded-xl bg-white border border-slate-300 text-right text-xs font-extrabold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <input
                          type="range"
                          aria-label="Built-up area in square feet"
                          min={500}
                          max={10000}
                          step={50}
                          value={constArea}
                          onChange={(e) => {
                            setConstArea(Number(e.target.value));
                            resetCalc();
                          }}
                          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                        />
                        <div className="flex justify-between text-[11px] font-mono-label text-slate-600 font-bold mt-1.5">
                          <span>500 sq ft</span>
                          <span>5,000 sq ft</span>
                          <span>10,000 sq ft</span>
                        </div>
                      </div>

                      {/* Floors */}
                      <div>
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
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
                              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                                constFloors === f
                                  ? "bg-blue-700 text-white border-blue-700 shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Construction Quality */}
                      <div>
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                          Construction Quality Grade
                        </label>
                        <div className="grid grid-cols-3 gap-2.5">
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
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                                constQuality === q.id
                                  ? "bg-blue-50/90 border-blue-600 shadow-xs"
                                  : "bg-white border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <span className="block text-xs font-bold text-slate-950">{q.label}</span>
                              <span className="block text-[11px] font-mono text-blue-700 font-bold mt-0.5">{q.rate}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Location */}
                      <div>
                        <label htmlFor="const-location-select" className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Project Location
                        </label>
                        <select
                          id="const-location-select"
                          value={constLocation}
                          onChange={(e) => {
                            setConstLocation(e.target.value);
                            resetCalc();
                          }}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="Narhe, Pune">Narhe, Pune</option>
                          <option value="Baner, Pune">Baner, Pune</option>
                          <option value="Hinjewadi, Pune">Hinjewadi, Pune</option>
                          <option value="Kondhwa, Pune">Kondhwa, Pune</option>
                          <option value="Wagholi, Pune">Wagholi, Pune</option>
                          <option value="Viman Nagar, Pune">Viman Nagar, Pune</option>
                          <option value="Kothrud, Pune">Kothrud, Pune</option>
                          <option value="Hadapsar, Pune">Hadapsar, Pune</option>
                          <option value="Mumbai Region">Mumbai Region</option>
                          <option value="Ranchi Region">Ranchi Region</option>
                          <option value="Other Location">Other Location</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    /* ---------------- INTERIOR CALCULATOR FORM ---------------- */
                    <>
                      {/* Property Type */}
                      <div>
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
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
                              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                                intPropType === pt
                                  ? "bg-blue-700 text-white border-blue-700 shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              {pt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Carpet Area */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="int-area-input" className="text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700">
                            Carpet Area (Sq. Ft.)
                          </label>
                          <input
                            id="int-area-input"
                            type="number"
                            min={400}
                            max={5000}
                            step={50}
                            value={intArea}
                            onChange={(e) => {
                              setIntArea(Math.max(400, Number(e.target.value) || 400));
                              resetCalc();
                            }}
                            className="w-28 px-3 py-1 rounded-xl bg-white border border-slate-300 text-right text-xs font-extrabold text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <input
                          type="range"
                          aria-label="Carpet area in square feet"
                          min={400}
                          max={5000}
                          step={50}
                          value={intArea}
                          onChange={(e) => {
                            setIntArea(Number(e.target.value));
                            resetCalc();
                          }}
                          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                        />
                        <div className="flex justify-between text-[11px] font-mono-label text-slate-600 font-bold mt-1.5">
                          <span>400 sq ft</span>
                          <span>2,500 sq ft</span>
                          <span>5,000 sq ft</span>
                        </div>
                      </div>

                      {/* Rooms Required */}
                      <div>
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
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
                                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                                  isSel
                                    ? "bg-blue-50 text-blue-900 border-blue-600 font-extrabold"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
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
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                          Interior Scope
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            type="button"
                            onClick={() => {
                              setIntScope("modular");
                              resetCalc();
                            }}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              intScope === "modular"
                                ? "bg-blue-50/90 border-blue-600 shadow-xs"
                                : "bg-white border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <span className="block text-xs font-bold text-slate-950">Modular Only</span>
                            <span className="block text-[11px] text-slate-500 mt-0.5">Kitchen &amp; Wardrobes</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIntScope("full");
                              resetCalc();
                            }}
                            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                              intScope === "full"
                                ? "bg-blue-50/90 border-blue-600 shadow-xs"
                                : "bg-white border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <span className="block text-xs font-bold text-slate-950">Full Turnkey Interior</span>
                            <span className="block text-[11px] text-slate-500 mt-0.5">Complete Fit-Out &amp; Lighting</span>
                          </button>
                        </div>
                      </div>

                      {/* Material Quality */}
                      <div>
                        <label className="block text-xs font-mono-label font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                          Material Quality Grade
                        </label>
                        <div className="grid grid-cols-3 gap-2.5">
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
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                                intQuality === q.id
                                  ? "bg-blue-50/90 border-blue-600 shadow-xs"
                                  : "bg-white border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <span className="block text-xs font-bold text-slate-950">{q.label}</span>
                              <span className="block text-[11px] font-mono text-blue-700 font-bold mt-0.5">{q.rate}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Primary Action Button to Generate Calculation */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setHasCalculated(true)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-400/30 hover:scale-105 transition-all cursor-pointer border border-amber-300"
                  >
                    <Calculator className="w-4 h-4 text-slate-950" />
                    <span>Calculate Estimate Range</span>
                    <ArrowRight className="w-4 h-4 ml-1 text-slate-950" />
                  </button>
                </div>

              </div>

              {/* ================= DYNAMIC OUTPUT CARD (RIGHT — Stretches to equal bottom alignment) ================= */}
              <div className="lg:col-span-5 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white p-7 sm:p-8 rounded-3xl border border-blue-800/80 shadow-2xl flex flex-col justify-between h-full space-y-6">
                
                {!hasCalculated ? (
                  /* Initial State before user selects options and calculates */
                  <div className="my-auto text-center space-y-4 py-8">
                    <div className="w-16 h-16 rounded-2xl bg-blue-800/50 border border-blue-700/60 flex items-center justify-center mx-auto text-blue-300">
                      <SlidersHorizontal className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-extrabold text-white">Select Your Options</h3>
                      <p className="text-xs text-blue-200 leading-relaxed max-w-xs mx-auto">
                        Choose your project type, area in sq ft, and quality grade on the left, then click &quot;Calculate Estimate Range&quot; to view your custom price estimate!
                      </p>
                    </div>
                    <div className="pt-2">
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
                  /* Revealed Calculation Results State */
                  <>
                    <div>
                      <div className="flex items-center justify-between border-b border-blue-800/60 pb-3 mb-5">
                        <span className="text-xs font-mono-label uppercase tracking-widest text-blue-200 font-bold">
                          Estimated Cost Range
                        </span>
                        <span className="text-[11px] font-mono-label text-green-400 font-bold bg-green-950/80 px-2.5 py-0.5 rounded-full border border-green-700/60">
                          Indicative Range
                        </span>
                      </div>

                      {/* Calculated Price RANGE Display */}
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

                      {/* Specification Breakdown */}
                      <div className="mt-6 space-y-2.5 pt-5 border-t border-blue-800/60 text-xs font-bold text-slate-200">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                            <Clock className="w-4 h-4 text-blue-400" />
                            Estimated Duration:
                          </span>
                          <span className="text-blue-300 font-mono-label">
                            {activeTab === "construction" ? constEst.duration : intEst.timeline}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                            <ShieldCheck className="w-4 h-4 text-green-400" />
                            Price Guarantee:
                          </span>
                          <span className="text-green-400 font-mono-label">Fixed BOQ Scope</span>
                        </div>
                      </div>
                    </div>

                    {/* ONLY WHATSAPP CTA BUTTON */}
                    <div className="space-y-3 pt-2">
                      <button
                        type="button"
                        onClick={handleWhatsAppShare}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-all cursor-pointer border border-emerald-400/30"
                      >
                        <MessageCircle className="w-5 h-5 fill-current text-white" />
                        <span>Send Calculation to WhatsApp</span>
                      </button>

                      <p className="text-[11px] text-center font-mono-label text-blue-200">
                        Includes free 3D design &amp; site evaluation
                      </p>
                    </div>
                  </>
                )}

              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry Lead Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={activeTab}
      />
    </>
  );
}
