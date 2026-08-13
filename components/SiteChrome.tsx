import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import EntryPopup from "@/components/ui/EntryPopup";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
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
