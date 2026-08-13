"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { primaryNav } from "@/lib/data/nav";
import Button from "@/components/ui/Button";
import InquiryModal from "@/components/ui/InquiryModal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-50 pointer-events-none">
        <Container className="pointer-events-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 transition-all duration-300 px-5 sm:px-6 py-2.5">
            {/* Main Navigation Bar */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 shrink-0 group">
                <Image
                  src="/images/brand/zemitech-urban-logo.png"
                  alt="Zemitech Urban — Building and Renovation"
                  width={160}
                  height={40}
                  className="h-9 sm:h-10 w-auto group-hover:scale-[1.02] transition-transform duration-300"
                  priority
                />
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary">
                {primaryNav.map((item) => (
                  <div
                    key={item.href}
                    className="relative shrink-0"
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => item.children && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-semibold text-slate-800 hover:text-blue-700 rounded-lg hover:bg-slate-100/80 transition-all duration-200 whitespace-nowrap"
                      aria-expanded={item.children ? openDropdown === item.label : undefined}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <svg width="9" height="9" viewBox="0 0 10 10" className={`shrink-0 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} aria-hidden="true">
                          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      )}
                    </Link>
                    {item.children && openDropdown === item.label && (
                      <div className="absolute left-0 top-full pt-2 w-72 z-50">
                        <div className="rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-blue-950/10 p-2.5 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-3.5 py-2.5 hover:bg-blue-50/90 transition-all duration-200 group/item"
                            >
                              <span className="block text-sm font-bold text-blue-950 group-hover/item:text-blue-700 transition-colors whitespace-nowrap">{child.label}</span>
                              {child.blurb && (
                                <span className="block text-xs text-slate-500 mt-0.5 leading-snug">{child.blurb}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Button Opens Inquiry Modal */}
              <div className="hidden lg:block shrink-0">
                <Button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                >
                  Get a Free Quote
                </Button>
              </div>

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg text-blue-950 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {mobileOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile / Tablet Drawer */}
            {mobileOpen && (
              <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 max-h-[80vh] overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {primaryNav.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-base font-bold text-blue-950"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="pl-3.5 border-l-2 border-blue-200 flex flex-col gap-1 my-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1.5 text-sm font-medium text-slate-600 hover:text-blue-700"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                    variant="primary"
                    className="mt-3 w-full justify-center"
                  >
                    Get a Free Quote
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* Global Inquiry Modal Triggered by Header Button */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
