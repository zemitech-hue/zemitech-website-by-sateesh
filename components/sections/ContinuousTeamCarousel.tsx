"use client";

import Image from "next/image";
import InitialsAvatar from "@/components/ui/InitialsAvatar";
import { TeamMember } from "@/lib/supabase/queries";
import { Award, UserCheck } from "lucide-react";

export default function ContinuousTeamCarousel({ members }: { members: TeamMember[] }) {
  if (members.length === 0) return null;

  // Build a single track set with at least 6-8 items to cover wide displays
  let trackItems = [...members];
  while (trackItems.length < 8) {
    trackItems = [...trackItems, ...members];
  }

  const renderCard = (member: TeamMember, idx: number, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${member.id}-${idx}`}
      className="w-72 sm:w-80 shrink-0 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-200 shadow-xs">
          {member.image_url ? (
            <Image
              src={member.image_url}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <InitialsAvatar name={member.name} className="w-full h-full text-xl" />
          )}
        </div>

        <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-amber-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-mono-label font-bold text-amber-800 uppercase tracking-wide mt-1">
          {member.role}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>{member.experience} Experience</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
          <UserCheck className="w-3.5 h-3.5" />
          <span>In-House</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-4 group">
      {/* Soft Side Fades for High-End Look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      {/* Infinite Seamless Scrolling Container (2 identical tracks side by side) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex gap-6 pr-6">
          {trackItems.map((m, i) => renderCard(m, i, "track1"))}
        </div>
        {/* Track 2 (Identical duplicate for 100% gapless continuous loop) */}
        <div className="flex gap-6 pr-6">
          {trackItems.map((m, i) => renderCard(m, i, "track2"))}
        </div>
      </div>
    </div>
  );
}
