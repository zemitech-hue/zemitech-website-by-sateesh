import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Phone, MessageCircle } from "lucide-react";
import { company } from "@/lib/data/company";

interface ServiceFinalCTAProps {
  title: string;
  copy: string;
  primaryCtaText: string;
}

export default function ServiceFinalCTA({ title, copy, primaryCtaText }: ServiceFinalCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute -bottom-[50%] -left-[20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <Container className="relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-mono-label text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Ready To Start
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {copy}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button href="/contact" variant="primary">
            {primaryCtaText}
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-mono-label tracking-widest text-slate-400">
          <a href={`https://wa.me/${company.phonePrimary.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-slate-700">
              <MessageCircle className="w-4 h-4 text-green-400" />
            </div>
            <span>WhatsApp Us</span>
          </a>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <a href={`tel:${company.phonePrimary.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-slate-700">
              <Phone className="w-4 h-4 text-blue-400" />
            </div>
            <span>Call Us</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
