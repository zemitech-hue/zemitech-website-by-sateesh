"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";
import { company } from "@/lib/data/company";

export default function CTASection({
  title = "Ready to talk through your project?",
  sub = "Free consultation and site assessment — no obligation, no pressure.",
}: {
  title?: string;
  sub?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const message = encodeURIComponent("Hi Zemitech Urban, I'd like to enquire about a project.");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <Container className="relative z-10">
          <div className="max-w-5xl lg:max-w-6xl mx-auto relative rounded-[32px] border border-blue-200/80 bg-gradient-to-b from-white via-slate-50 to-blue-50/70 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-blue-900/15 overflow-hidden text-center flex flex-col items-center justify-center">
            
            {/* Ambient Soft Bottom Blue Glow (Taller height & richer blue shadow glow) */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-blue-600/30 via-blue-500/15 to-transparent pointer-events-none rounded-b-[32px]" />
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-5/6 h-36 bg-blue-600/25 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight text-center">
                {title}
              </h2>
              <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base max-w-xl text-center leading-relaxed font-normal">
                {sub}
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                >
                  Get a Free Quote
                </Button>
                <a
                  href={`https://wa.me/${company.whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold border border-slate-300 bg-white/90 text-blue-950 hover:border-blue-700 hover:bg-white hover:shadow-md active:scale-[0.97] transition-all duration-200"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Interactive Service Lead Modal */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
