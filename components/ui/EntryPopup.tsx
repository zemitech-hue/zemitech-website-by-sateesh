"use client";

import { useState, useEffect } from "react";
import { X, Building2, Home, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

type Step = "MAJOR_SERVICE" | "SUB_SERVICE" | "LEAD_FORM" | "SUCCESS";

const subServices = {
  construction: [
    "Residential Villa Construction",
    "Structural & Civil Engineering",
    "Turnkey Home Renovation",
    "Industrial Warehouses",
  ],
  interior: [
    "Modular Kitchen Interior",
    "Living Room & Ceilings",
    "Master Bedroom & Wardrobes",
    "Turnkey 2BHK & 3BHK",
    "Office Interior Fit-Outs",
  ],
};

export default function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("MAJOR_SERVICE");
  const [majorService, setMajorService] = useState<"construction" | "interior" | null>(null);
  const [subService, setSubService] = useState<string | null>(null);

  useEffect(() => {
    // Check session storage so we don't annoy users on every reload
    const hasSeenPopup = sessionStorage.getItem("zemitech_popup_seen");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("zemitech_popup_seen", "true");
  };

  const handleMajorSelect = (service: "construction" | "interior") => {
    setMajorService(service);
    setStep("SUB_SERVICE");
  };

  const handleSubSelect = (service: string) => {
    setSubService(service);
    setStep("LEAD_FORM");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to an API
    setStep("SUCCESS");
    setTimeout(() => {
      closePopup();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closePopup}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10 text-center">
          {step !== "SUCCESS" && (
            <>
              <h2 className="text-2xl font-bold text-blue-950 mb-2 leading-tight">
                Resolve your queries with our expert
              </h2>
              <p className="text-slate-500 mb-8 text-sm">
                Trusted Builders for End-to-End Construction & Interiors
              </p>
            </>
          )}

          {step === "MAJOR_SERVICE" && (
            <div className="flex gap-4 mt-2">
              {/* Construction Card */}
              <button
                onClick={() => handleMajorSelect("construction")}
                className="flex-1 group flex flex-col rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Choose Construction"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/MainHeroBannersCarousel/Construction%20Division.png"
                    alt="Construction"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="py-3 px-3 bg-white flex items-center justify-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-bold text-sm text-slate-800 group-hover:text-blue-700 transition-colors">
                    Construction
                  </span>
                </div>
              </button>

              {/* Interior Design Card */}
              <button
                onClick={() => handleMajorSelect("interior")}
                className="flex-1 group flex flex-col rounded-2xl overflow-hidden border-2 border-slate-100 hover:border-orange-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                aria-label="Choose Interior Design"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/MainHeroBannersCarousel/Interior%20Design%20Division.png"
                    alt="Interior Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="py-3 px-3 bg-white flex items-center justify-center gap-2">
                  <Home className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="font-bold text-sm text-slate-800 group-hover:text-orange-600 transition-colors">
                    Interior Design
                  </span>
                </div>
              </button>
            </div>
          )}


          {step === "SUB_SERVICE" && majorService && (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <p className="font-semibold text-slate-700 mb-4 text-left">What exactly are you looking for?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subServices[majorService].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => handleSubSelect(sub)}
                    className="p-3 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors text-left"
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "LEAD_FORM" && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name*" 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Mobile Number*" 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder={majorService === "construction" ? "Location of your plot*" : "Property Location*"} 
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5 transition-all duration-200 mt-2"
              >
                {majorService === "construction" ? "Start Your Construction" : "Start Your Interior Design"}
              </button>
              <p className="text-[10px] text-slate-400 mt-4 leading-tight">
                *By submitting, you agree to our Privacy Policy, allowing us to use your information as outlined.
              </p>
            </form>
          )}

          {step === "SUCCESS" && (
            <div className="py-12 animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
              <p className="text-slate-500">
                {subService ? `Our expert will call you shortly about ${subService.toLowerCase()}.` : "Our expert will call you shortly."}
              </p>
            </div>
          )}
        </div>

        {/* Bottom Trust Badges */}
        {step !== "SUCCESS" && (
          <div className="bg-slate-50 p-6 border-t border-slate-100">
            <div className="flex justify-between items-center max-w-sm mx-auto">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-orange-500"><Home className="w-6 h-6" /></div>
                <div className="text-xs font-bold text-slate-700">240+<br/><span className="text-slate-500 font-normal">Projects</span></div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-orange-500"><ShieldCheck className="w-6 h-6" /></div>
                <div className="text-xs font-bold text-slate-700">100%<br/><span className="text-slate-500 font-normal">Quality Checks</span></div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-orange-500"><Clock className="w-6 h-6" /></div>
                <div className="text-xs font-bold text-slate-700">On-Time<br/><span className="text-slate-500 font-normal">Delivery</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
