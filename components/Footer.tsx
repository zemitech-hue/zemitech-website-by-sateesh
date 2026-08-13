import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/data/company";
import { footerSitemap } from "@/lib/data/nav";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-800 py-12 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-10 border-b border-slate-200">
          
          {/* Company Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="inline-block bg-white rounded-xl p-2.5 shadow-xs border border-slate-200">
              <Image
                src="/images/brand/zemitech-urban-logo.png"
                alt="Zemitech Urban"
                width={160}
                height={40}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Turnkey construction and interior design company based in Narhe, Pune — delivering residential villas, commercial spaces, and modular interiors under one accountable team.
            </p>
            <div className="text-xs text-slate-600 font-mono-label space-y-1">
              <p>📍 {company.address.line1}, {company.address.line2}, {company.address.state}</p>
              <p>📞 <a href={company.phonePrimaryHref} className="hover:text-blue-700 font-bold transition-colors">{company.phonePrimary}</a> | ✉️ <a href={`mailto:${company.emailPrimary}`} className="hover:text-blue-700 font-bold transition-colors">{company.emailPrimary}</a></p>
              <p>🏛️ GSTIN: {company.gstin}</p>
            </div>
          </div>

          {/* Clean Navigation Links */}
          <FooterColumn title="Company" links={footerSitemap.company} />
          <FooterColumn title="Construction" links={footerSitemap.construction} />
          <FooterColumn title="Interior Design" links={footerSitemap.interior} />
        </div>

        {/* Minimal Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono-label">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Designed &amp; built by <a href="https://dorabeen.com" className="hover:text-blue-700 font-bold transition-colors">Dorabeen</a></p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-widest text-blue-700 font-bold mb-3.5">{title}</p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-slate-600 hover:text-blue-700 transition-colors font-medium">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
