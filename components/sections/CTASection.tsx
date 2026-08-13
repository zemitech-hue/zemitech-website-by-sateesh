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
      <section className="relative overflow-hidden bg-white py-20 border-t border-slate-200">
        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-10 sm:p-14 shadow-xl relative overflow-hidden text-center">
            {/* Top Blue Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-700" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 leading-[1.15] tracking-tight text-center">
              {title}
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-center">
              {sub}
            </p>
            
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold border-2 border-slate-300 text-blue-950 hover:border-blue-700 hover:bg-blue-50/80 active:scale-[0.97] transition-all duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Interactive Service Lead Modal */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
