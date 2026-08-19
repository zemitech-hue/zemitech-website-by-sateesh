"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// Deferred: EntryPopup already waits 2.5s before showing anything, so
// there's no UX cost to keeping its bundle (and the InquiryModal it renders)
// off the critical initial-load path.
const EntryPopup = dynamic(() => import("@/components/ui/EntryPopup"), { ssr: false });

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 min-h-0">{children}</main>
      <Footer />
      <WhatsAppButton />
      <EntryPopup />
    </>
  );
}
