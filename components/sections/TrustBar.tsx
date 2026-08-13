import { company } from "@/lib/data/company";
import Container from "@/components/ui/Container";

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 16 16" className="shrink-0 text-green-600" aria-hidden="true">
    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Non-intrusive strip used on key conversion pages (Contact, Inquiry, service
// & kitchen pages) to keep GSTIN / experience / project-count trust signals
// visible without repeating the full StatsStrip.
export default function TrustBar() {
  const yearsStat = company.stats.find((s) => s.label.toLowerCase().includes("years"));
  const projectsStat = company.stats.find((s) => s.label.toLowerCase().includes("projects"));
  const satisfactionStat = company.stats.find((s) => s.label.toLowerCase().includes("satisfaction"));

  const items = [
    `GSTIN ${company.gstin} — Registered`,
    projectsStat ? `${projectsStat.value} Projects Completed` : null,
    yearsStat ? `${yearsStat.value} in Business` : null,
    satisfactionStat ? `${satisfactionStat.value} Client Satisfaction` : null,
  ].filter(Boolean) as string[];

  return (
    <div className="bg-blue-50 border-b border-line">
      <Container className="py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-1.5 text-xs sm:text-[13px] text-blue-950 font-medium">
            {CHECK}
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
