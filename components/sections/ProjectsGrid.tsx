"use client";

import { useState } from "react";
import { Project, projectCategories } from "@/lib/types/project";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Centered Filter Pill Tabs */}
      <div className="flex justify-center mb-10">
        <div className="backdrop-blur-xl bg-slate-100/90 p-2 rounded-full border border-slate-200/90 inline-flex flex-wrap items-center justify-center gap-2 shadow-xs">
          {projectCategories.map((cat) => {
            const count = cat.value === "all" ? projects.length : projects.filter((p) => p.category === cat.value).length;
            return (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  active === cat.value
                    ? "bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-md shadow-blue-700/25 scale-[1.02]"
                    : "text-slate-600 hover:text-blue-900 hover:bg-white/80"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${active === cat.value ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 mt-10">
          <p className="text-slate-500 font-medium">No projects in this category yet — check back soon.</p>
        </div>
      )}
    </div>
  );
}
