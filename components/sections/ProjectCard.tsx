import Link from "next/link";
import { Project } from "@/lib/types/project";
import GracefulImage from "@/components/ui/GracefulImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-3xl overflow-hidden border border-slate-200/90 bg-white/90 shadow-md shadow-blue-950/5 hover:shadow-2xl hover:shadow-blue-900/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <GracefulImage
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-4 left-4 backdrop-blur-md bg-blue-950/85 text-green-400 border border-white/15 text-xs font-mono-label font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {project.category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono-label font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location}
          </span>
          <span className="text-xs font-mono-label font-bold text-blue-700">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 transition-colors mt-2">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed flex-1">{project.summary}</p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-700 group-hover:text-blue-900">
          <span>View Project Details</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1.5 transition-transform duration-200"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
