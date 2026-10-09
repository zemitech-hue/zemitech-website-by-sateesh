"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import type { TeamMember } from "@/lib/supabase/queries";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4000;

// Native scroll-snap track: swipe, trackpad and keyboard scrolling all work,
// and the arrows / autoplay just nudge the same scroll position one card at a
// time. Autoplay pauses while the visitor is interacting or the tab is hidden.
export default function TeamCarousel({ members }: { members: TeamMember[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [active, setActive] = useState(0);

  const cardStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
    // The last few cards can't snap to the left edge, so "at the end" means
    // the last dot.
    const step = cardStep();
    if (track.scrollLeft >= maxScroll - 4) setActive(members.length - 1);
    else if (step > 0) setActive(Math.min(members.length - 1, Math.round(track.scrollLeft / step)));
  }, [cardStep, members.length]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({ left: index * cardStep(), behavior: reduceMotion ? "auto" : "smooth" });
    },
    [cardStep]
  );

  const scrollByCards = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollBy({ left: direction * cardStep(), behavior: reduceMotion ? "auto" : "smooth" });
    },
    [cardStep]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const raf = requestAnimationFrame(updateState);
    track.addEventListener("scroll", updateState, { passive: true });
    const observer = new ResizeObserver(updateState);
    observer.observe(track);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", updateState);
      observer.disconnect();
    };
  }, [updateState]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current || document.hidden) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 4) return;
      if (track.scrollLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCards(1);
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [scrollByCards]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);
  const scrollable = canPrev || canNext;

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Team members"
        tabIndex={0}
        className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth overscroll-x-contain px-1 pt-2 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none"
      >
        {members.map((member, i) => (
          <div
            key={member.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${members.length}`}
            className="snap-start shrink-0 w-[82%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>

      {/* Edge fades hint that there's more to scroll */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-50 to-transparent transition-opacity",
          canPrev ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-50 to-transparent transition-opacity",
          canNext ? "opacity-100" : "opacity-0"
        )}
      />

      {scrollable && (
        <div className="mt-2 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            disabled={!canPrev}
            aria-label="Previous team member"
            className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 hover:text-slate-950 transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-slate-300 cursor-pointer disabled:cursor-default"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {members.map((member, i) => (
              <button
                key={member.id}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${member.name}`}
                aria-current={i === active}
                className={cn(
                  "h-2 rounded-full transition-all cursor-pointer",
                  i === active ? "w-7 bg-amber-400" : "w-2 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCards(1)}
            disabled={!canNext}
            aria-label="Next team member"
            className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 hover:text-slate-950 transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-slate-300 cursor-pointer disabled:cursor-default"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
