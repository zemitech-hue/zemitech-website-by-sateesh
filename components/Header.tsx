"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { primaryNav } from "@/lib/data/nav";
import { company } from "@/lib/data/company";
import InquiryModal from "@/components/ui/InquiryModal";
import { PhoneCall, ChevronDown, ArrowRight, Building2, Home, Menu, X, CheckCircle2, MapPin, Zap } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const majorCitiesStr = company.majorCities.join(" • ");

  return (
    <>
      {/* Top Fixed Container containing both Ticker and 100% Width White Header Bar */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        
        {/* 1. TOP CONTINUOUS SCROLLING LOCATION MARQUEE TICKER (BLUE SHADE BACKGROUND) */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white py-2 border-b border-blue-900/70 overflow-hidden pointer-events-auto shadow-md">
          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-6 text-xs font-mono-label font-extrabold tracking-wider text-slate-200 px-4">
              <span className="flex items-center gap-1.5 text-amber-400 uppercase shrink-0 font-extrabold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                OUR OPERATIONAL LOCATIONS:
              </span>
              <span className="text-white font-black tracking-widest bg-blue-900/80 px-3.5 py-0.5 rounded-full border border-blue-500/50">{majorCitiesStr}</span>
              <span className="text-blue-500/70">|</span>
              <span className="flex items-center gap-1.5 text-blue-200 shrink-0 font-extrabold">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                100% In-House Site Engineering &amp; Fixed BOQs
              </span>
              <span className="text-blue-500/70">|</span>
              <a href={company.phonePrimaryHref} className="flex items-center gap-1 text-white hover:text-amber-300 font-black transition-colors shrink-0">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call/WhatsApp: {company.phonePrimary}</span>
              </a>
            </div>
            
            {/* Duplicated track for continuous seamless infinite marquee loop */}
            <div className="flex items-center gap-6 text-xs font-mono-label font-extrabold tracking-wider text-slate-200 px-4">
              <span className="flex items-center gap-1.5 text-amber-400 uppercase shrink-0 font-extrabold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                OUR OPERATIONAL LOCATIONS:
              </span>
              <span className="text-white font-black tracking-widest bg-blue-900/80 px-3.5 py-0.5 rounded-full border border-blue-500/50">{majorCitiesStr}</span>
              <span className="text-blue-500/70">|</span>
              <span className="flex items-center gap-1.5 text-blue-200 shrink-0 font-extrabold">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                100% In-House Site Engineering &amp; Fixed BOQs
              </span>
              <span className="text-blue-500/70">|</span>
              <a href={company.phonePrimaryHref} className="flex items-center gap-1 text-white hover:text-amber-300 font-black transition-colors shrink-0">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call/WhatsApp: {company.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. 100% WIDTH FULL-BLEED WHITE NAVIGATION BAR */}
        <div className="w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md pointer-events-auto transition-all duration-300">
          <Container>
            <div className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
              
              {/* BIGGER BRAND LOGO */}
              <Link href="/" className="flex items-center gap-2 shrink-0 group">
                <div className="py-0.5 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/brand/zemitech-urban-logo.png"
                    alt="Zemitech Urban — Building and Renovation"
                    width={220}
                    height={56}
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                    preload
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary">
                {primaryNav.map((item) => {
                  const isActive = pathname === item.href || (item.children && item.children.some((c) => pathname === c.href));
                  const isHovered = openDropdown === item.label;

                  return (
                    <div
                      key={item.href}
                      className="relative shrink-0"
                      onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                      onMouseLeave={() => item.children && setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={`group relative flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-extrabold rounded-xl transition-all duration-200 whitespace-nowrap uppercase tracking-wider border ${
                          isActive || isHovered
                            ? "text-slate-950 bg-amber-400 border-amber-300 shadow-2xs font-black"
                            : "text-slate-800 hover:text-amber-700 hover:bg-amber-50/80 border-transparent"
                        }`}
                        aria-expanded={item.children ? openDropdown === item.label : undefined}
                      >
                        <span>{item.label}</span>
                        {item.children && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                              isHovered ? "rotate-180 text-slate-950" : ""
                            }`}
                          />
                        )}

                        {/* Animated Bottom Underline Glow */}
                        {(isActive || isHovered) && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-slate-950 animate-pulse" />
                        )}
                      </Link>

                      {/* Dropdown Menu (Construction & Interior Design) */}
                      {item.children && isHovered && (
                        <div className="absolute left-0 top-full pt-3 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="rounded-2xl border border-slate-200 bg-white/98 backdrop-blur-2xl shadow-xl p-3 space-y-1.5">
                            <div className="px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                              <span className="text-[10px] font-mono-label font-bold uppercase tracking-widest text-slate-500">
                                {item.label} Solutions
                              </span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                            </div>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-blue-50/90 border border-transparent hover:border-blue-100 transition-all duration-200 group/child"
                              >
                                <div className="mt-0.5 p-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 group-hover/child:bg-blue-700 group-hover/child:text-white transition-colors shrink-0">
                                  {item.label.toLowerCase().includes("construction") ? (
                                    <Building2 className="w-3.5 h-3.5" />
                                  ) : (
                                    <Home className="w-3.5 h-3.5" />
                                  )}
                                </div>
                                <div>
                                  <span className="block text-xs font-bold text-slate-900 group-hover/child:text-blue-700 transition-colors uppercase tracking-wide">
                                    {child.label}
                                  </span>
                                  {child.blurb && (
                                    <span className="block text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                                      {child.blurb}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Conversion-Focused Gold/Yellow CTA Button with Phone Icon */}
              <div className="hidden lg:block shrink-0">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="relative group inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black text-xs xl:text-sm tracking-wider uppercase shadow-md shadow-amber-400/30 hover:shadow-lg hover:shadow-amber-400/40 hover:scale-105 transition-all duration-300 cursor-pointer border border-amber-300"
                >
                  <PhoneCall className="w-4 h-4 text-slate-950 animate-pulse" />
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
              </button>
            </div>

            {/* Mobile / Tablet Responsive Drawer */}
            {mobileOpen && (
              <div className="lg:hidden mt-2 mb-3 p-4 bg-white border border-slate-200 rounded-2xl max-h-[80vh] overflow-y-auto space-y-3 shadow-xl">
                <div className="flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm font-extrabold text-slate-900 hover:text-blue-700 transition-colors uppercase tracking-wider"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="pl-4 ml-3 border-l border-blue-200 flex flex-col gap-1 my-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1.5 text-xs font-bold text-slate-700 hover:text-blue-700 uppercase tracking-wide"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md shadow-amber-400/30 border border-amber-300"
                >
                  <PhoneCall className="w-4 h-4 text-slate-950" />
                  <span>GET A FREE QUOTE</span>
                </button>
              </div>
            )}

          </Container>
        </div>

      </header>

      {/* Global Inquiry Modal Triggered by Header Button */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
