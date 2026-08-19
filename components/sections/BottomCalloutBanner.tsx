"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";

export default function BottomCalloutBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        
        {/* Background Sketch Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
          <Image
            src="/images/home/how-we-work-2-design.png"
            alt="Architectural Blueprint"
            fill
            className="object-cover"
          />
        </div>


        <Container className="relative z-10">
          <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono-label font-bold text-amber-400 uppercase tracking-widest">
                Start Your Project
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Create <span className="text-amber-400">Something Great</span> Together
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Get in touch for a free consultation and bring your dream space to life.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                type="button"
                onClick={() => setModalOpen(true)}
                variant="primary"
                showArrow
                className="px-8 py-4 text-sm sm:text-base font-black shadow-xl shadow-amber-400/30 hover:scale-105 transition-all cursor-pointer"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry Lead Modal */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
