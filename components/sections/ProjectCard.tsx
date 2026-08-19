"use client";

import { useState } from "react";
import { Project } from "@/lib/types/project";
import GracefulImage from "@/components/ui/GracefulImage";
import InquiryModal from "@/components/ui/InquiryModal";
import { MapPin, Calendar, Play, X, ArrowRight, User, Maximize2, Calculator } from "lucide-react";

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  // Match YouTube watch, shorts, embed, or short links
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1&controls=1`;
  }
  return null;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const embedUrl = project.videoUrl ? getYouTubeEmbedUrl(project.videoUrl) : null;
  const isVideo = Boolean(project.videoUrl && embedUrl);

  const mediaContent = isPlaying && embedUrl ? (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center">
      <iframe
        src={embedUrl}
        title={project.title}
        className="w-full h-full border-0 object-cover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
      {/* Close In-Spot Video Button */}
      <button
        onClick={() => setIsPlaying(false)}
        className="absolute top-3 right-3 bg-slate-950/90 hover:bg-amber-400 hover:text-slate-950 text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg z-30"
        title="Close Video"
        aria-label="Close video"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Fullscreen Expand Button */}
      <button
        onClick={() => setLightboxOpen(true)}
        className="absolute top-3 left-3 bg-slate-950/90 hover:bg-amber-400 hover:text-slate-950 text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg z-30"
        title="Expand Fullscreen"
        aria-label="Expand video fullscreen"
      >
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
  ) : (
    <>
      {/* Cover Photo */}
      <GracefulImage
        src={project.coverImage}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="group-hover:scale-105 transition-transform duration-700 ease-out object-cover"
      />

      {/* Dark Ambient Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      {/* Category & YouTube Shorts Badges */}
      <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap z-10">
        <span className="backdrop-blur-md bg-amber-400 text-slate-950 border border-amber-300 text-xs font-mono-label font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
          {project.category}
        </span>
        {isVideo && (
          <span className="backdrop-blur-md bg-slate-950/90 text-amber-400 font-mono-label font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-400/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            YouTube Shorts
          </span>
        )}
      </div>

      {/* Prominent Gold Play Button Overlay */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setIsPlaying(true)}
            className="group/btn relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400/90 hover:bg-amber-400 text-slate-950 shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer border border-amber-300 backdrop-blur-md"
            aria-label={`Play video: ${project.title}`}
          >
            <span className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping" />
            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-slate-950 relative z-10" />
          </button>
        </div>
      )}
    </>
  );

  return (
    <>
      <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.2)] hover:border-amber-400/60 transition-all duration-300">
        
        {/* Uniform Decent Vertical Aspect Ratio (4:5) for ALL Cards */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-950 border-b border-slate-200/80">
          {mediaContent}
        </div>

        {/* Compact Card Content Section */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Meta Tags */}
            <div className="flex items-center justify-between gap-3 mb-2.5 text-xs font-mono-label font-bold text-slate-500">
              <span className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                {project.location}
              </span>
              <span className="flex items-center gap-1 text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 font-bold">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-amber-600 transition-colors leading-snug">
              {project.title}
            </h3>

            {/* Client Name Badge */}
            {project.clientQuote?.author && (
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono-label font-bold text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200">
                <User className="w-3.5 h-3.5 text-amber-600" />
                <span>Client: {project.clientQuote.author}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-medium line-clamp-2">
              {project.summary || project.description[0] || "Turnkey project built by Zemitech Urban in Pune."}
            </p>
          </div>

          {/* Clean Action Footer CTAs */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 font-black text-xs sm:text-sm bg-amber-400 hover:bg-amber-500 text-slate-950 px-4 py-2 rounded-xl shadow-md shadow-amber-400/30 hover:scale-105 transition-all cursor-pointer border border-amber-300"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/#calculator"
              className="inline-flex items-center gap-1.5 font-extrabold text-xs sm:text-sm bg-slate-900 hover:bg-blue-900 text-white px-3.5 py-2 rounded-xl shadow-xs hover:scale-105 transition-all cursor-pointer border border-slate-800"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Estimate Cost</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Fullscreen Video Reel Modal */}
      {lightboxOpen && embedUrl && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <iframe
              src={embedUrl}
              title={project.title}
              className="w-full h-full border-0 object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-slate-900/90 hover:bg-amber-400 hover:text-slate-950 text-white p-2.5 rounded-full border border-white/20 shadow-xl transition-all cursor-pointer z-50"
              aria-label="Close fullscreen video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
