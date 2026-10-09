import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import type { TeamMember } from "@/lib/supabase/queries";
import { needsUnoptimizedImage } from "@/lib/utils";

/**
 * Normalizes member fields defensively so unexpected data (e.g. an entire bio
 * accidentally pasted into the 'experience' column) renders cleanly and elegantly.
 */
export function formatTeamMember(member: TeamMember) {
  // 1. Format Name (converts ALL CAPS to Title Case if needed)
  let name = (member.name || "").trim();
  if (name && name === name.toUpperCase() && name.length > 3) {
    name = name
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  // 2. Format Role (converts ALL CAPS to clean Title Case if needed)
  let role = (member.role || "").trim();
  if (role && role === role.toUpperCase() && role.length > 4) {
    role = role
      .toLowerCase()
      .split(" ")
      .map((w) => {
        if (w === "crm" || w === "pr" || w === "boq" || w === "hr" || w === "it") return w.toUpperCase();
        if (w === "-" || w === "&") return w;
        return w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(" ");
  }

  // 3. Format Experience Badge (safely extract "X+ Years" if someone pasted a full bio)
  const exp = (member.experience || "").trim();
  let cleanExpBadge = "5+ Years";

  if (exp) {
    if (exp.length <= 25) {
      cleanExpBadge = exp.toLowerCase().includes("year") || exp.toLowerCase().includes("yr")
        ? exp
        : `${exp} Exp`;
    } else {
      // Bio paragraph detected — extract years using regex
      const match = exp.match(/\b(\d+\+?\s*(?:years?|yrs?))\b/i);
      if (match) {
        cleanExpBadge = `${match[1]}`;
      } else {
        cleanExpBadge = "5+ Years";
      }
    }
  }

  return {
    ...member,
    name,
    role,
    experienceBadge: cleanExpBadge,
  };
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const formatted = formatTeamMember(member);

  return (
    <article className="group relative h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-400/80 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Portrait Image Header */}
      <div className="relative w-full aspect-[4/5] lg:aspect-[6/7] bg-slate-100 overflow-hidden">
        {formatted.image_url ? (
          <Image
            src={formatted.image_url}
            alt={formatted.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 400px"
            unoptimized={needsUnoptimizedImage(formatted.image_url)}
          />
        ) : (
          <InitialsAvatar name={formatted.name} className="w-full h-full rounded-none text-3xl font-bold" />
        )}

        {/* Ambient Dark Gradient Vignette for Contrast */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Experience Chip (Top Right Glassmorphism) */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{formatted.experienceBadge}</span>
          </span>
        </div>

        {/* Status Chip (Bottom Left) */}
        <div className="absolute bottom-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase shadow-xs">
            In-House Lead
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
            {formatted.name}
          </h3>
          <p className="text-xs font-mono-label font-bold text-amber-800 uppercase tracking-wide mt-1.5">
            {formatted.role}
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Verified Staff</span>
          </span>
          <span className="text-[11px] font-mono-label text-slate-400 uppercase tracking-wider font-semibold">
            Zemara Spaces
          </span>
        </div>
      </div>
    </article>
  );
}
