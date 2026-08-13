"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import { cn } from "@/lib/utils";

interface RoomByRoomProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  rooms: { name: string; scope: string[]; image?: string }[];
}

export default function RoomByRoomInteractive({ eyebrow, title, sub, rooms }: RoomByRoomProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        
        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {rooms.map((room, idx) => (
              <button
                key={room.name}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "text-left px-5 py-4 rounded-xl transition-all duration-300 font-bold text-lg border",
                  activeIdx === idx 
                    ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm" 
                    : "bg-white border-transparent text-slate-500 hover:bg-slate-50 hover:text-blue-950"
                )}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-md">
            <div className="relative w-full aspect-[16/9]">
              <GracefulImage
                src={rooms[activeIdx].image}
                alt={rooms[activeIdx].name}
                fill
                priority
              />
            </div>
            <div className="p-8">
              <h3 className="font-bold text-blue-950 text-2xl mb-4">{rooms[activeIdx].name} Scope</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {rooms[activeIdx].scope.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700">
                    <span className="text-green-500 mr-3 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
