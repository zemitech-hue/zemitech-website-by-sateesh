"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";

interface RoomByRoomProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  rooms: { name: string; scope: string[]; image?: string }[];
}

export default function RoomByRoomInteractive({ eyebrow, title, sub, rooms }: RoomByRoomProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        
        {/* Visible Room Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-700/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Header Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <GracefulImage
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 backdrop-blur-md bg-blue-950/80 text-white border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {room.name}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-950 text-xl mb-4 group-hover:text-blue-700 transition-colors">
                    {room.name} Scope
                  </h3>
                  <ul className="space-y-2.5">
                    {room.scope.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600 font-medium">
                        <span className="text-blue-700 mr-2.5 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
