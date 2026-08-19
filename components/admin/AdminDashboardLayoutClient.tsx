"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, Video, Newspaper, LogOut, ExternalLink, ShieldCheck, Menu, X, MapPin, Users } from "lucide-react";
import SupabaseStatusBadge from "@/components/admin/SupabaseStatusBadge";

const navItems = [
  { href: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/dashboard/projects", label: "Property Photos", icon: Building2 },
  { href: "/admin/dashboard/videos", label: "Video Reels", icon: Video },
  { href: "/admin/dashboard/blog", label: "Blog Posts", icon: Newspaper },
  { href: "/admin/dashboard/company", label: "Company Settings", icon: MapPin },
  { href: "/admin/dashboard/team", label: "Team Members", icon: Users },
  { href: "/admin/dashboard/security", label: "Security & Credentials", icon: ShieldCheck },
];

export default function AdminDashboardLayoutClient({
  children,
  signOutAction,
}: {
  children: React.ReactNode;
  signOutAction: () => Promise<void>;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans">
      
      {/* Mobile Header Bar (Only visible on screens < md) */}
      <header className="flex md:hidden items-center justify-between bg-blue-950 text-white px-4 py-3.5 border-b border-white/10 sticky top-0 z-40 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Image src="/images/brand/zemitech-urban-logo.png" alt="Zemitech Urban" width={130} height={32} className="bg-white px-2 py-1 rounded-lg" />
        </div>
        <SupabaseStatusBadge compact />
      </header>

      {/* Mobile Slide-Over Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-40 md:hidden transition-opacity"
        />
      )}

      {/* Sidebar: Desktop fixed / Mobile slide-over drawer */}
      <aside
        className={`fixed md:static top-0 left-0 bottom-0 z-50 w-72 md:w-64 bg-blue-950 text-white flex flex-col transition-transform duration-300 ease-in-out border-r border-white/10 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="bg-white p-5 border-b border-slate-200 flex items-center justify-between">
          <Image src="/images/brand/zemitech-urban-logo.png" alt="Zemitech Urban" width={150} height={38} />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden text-slate-500 hover:text-slate-900 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/30"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-blue-100 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            <span>View Live Website</span>
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-rose-300 hover:bg-rose-500/20 hover:text-rose-200 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              <span>Sign out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Desktop Header */}
        <header className="hidden md:flex bg-white border-b border-slate-200 px-8 py-4 items-center justify-between shadow-xs sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-label font-bold text-slate-500 uppercase tracking-wider">
              Zemitech Urban Admin Control Panel
            </span>
          </div>
          <SupabaseStatusBadge />
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>

    </div>
  );
}
