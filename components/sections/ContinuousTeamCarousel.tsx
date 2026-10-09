"use client";

import { TeamMember } from "@/lib/supabase/queries";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export default function ContinuousTeamCarousel({ members }: { members: TeamMember[] }) {
  if (members.length === 0) return null;

  // Build a single track set with at least 6-8 items to cover wide displays
  let trackItems = [...members];
  while (trackItems.length < 8) {
    trackItems = [...trackItems, ...members];
  }

  const renderCard = (member: TeamMember, idx: number, keyPrefix: string) => (
    <div key={`${keyPrefix}-${member.id}-${idx}`} className="w-72 sm:w-80 shrink-0">
      <TeamMemberCard member={member} />
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
