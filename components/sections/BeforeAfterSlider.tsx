"use client";

import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GracefulImage from "@/components/ui/GracefulImage";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ eyebrow, title, sub, beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setPosition((x / rect.width) * 100);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center" />
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl cursor-col-resize select-none touch-none shadow-2xl border border-slate-200"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <GracefulImage src={afterImage} alt="After" fill priority />
              <div className="absolute bottom-4 right-4 bg-white/90 text-blue-950 font-bold px-3 py-1 rounded shadow-sm text-sm">
                After
              </div>
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <GracefulImage src={beforeImage} alt="Before" fill priority />
              <div className="absolute bottom-4 left-4 bg-slate-950/90 text-white font-bold px-3 py-1 rounded shadow-sm text-sm">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-200">
                <ArrowLeftRight className="w-5 h-5 text-blue-950" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
