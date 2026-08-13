export default function Marquee() {
  const items = [
    "240+ PROJECTS COMPLETED ACROSS PUNE",
    "IN-HOUSE SITE ENGINEERS & CARPENTRY TEAMS",
    "TRANSPARENT FIXED-SCOPE BOQ PRICING",
    "RESIDENTIAL VILLAS & APARTMENTS",
    "COMMERCIAL FIT-OUTS & RETAIL SHOWROOMS",
    "MODULAR KITCHENS & TURNKEY INTERIORS",
    "NARHE • KONDHWA • WAGHOLI • HINJEWADI • BANER • VIMAN NAGAR",
    "GST REGISTERED & CERTIFIED COMPANY",
  ];

  return (
    <div className="bg-slate-100 text-blue-950 py-3.5 overflow-hidden border-y border-slate-200 select-none relative z-10">
      <div className="animate-marquee flex gap-8 items-center font-mono-label text-xs tracking-[0.25em] uppercase font-bold text-blue-900 whitespace-nowrap">
        {items.concat(items).map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span>{text}</span>
            <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
