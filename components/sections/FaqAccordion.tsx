"use client";

import { useState } from "react";

type Faq = { question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white border-2 border-blue-600/40 shadow-xl shadow-blue-950/5"
                : "bg-white/80 border border-slate-200 hover:border-slate-300 hover:bg-white"
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-blue-700" : "text-blue-950"}`}>
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen ? "bg-blue-700 text-white rotate-45" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
