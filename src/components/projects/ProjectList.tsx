"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project, PROJECT_CATEGORIES } from "@/lib/data/projects";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Systems");

  const filteredProjects =
    selectedCategory === "All Systems"
      ? projects
      : projects.filter((p) => p.categoryGroup === selectedCategory);

  const getCategoryCount = (cat: string) => {
    if (cat === "All Systems") return projects.length;
    return projects.filter((p) => p.categoryGroup === cat).length;
  };

  const getTabStyles = (cat: string, active: boolean) => {
    if (!active) {
      return "bg-zinc-900/70 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850 border border-zinc-800/80";
    }

    switch (cat) {
      case "Embedded Systems":
        return "bg-emerald-950/70 text-emerald-300 border border-emerald-700/80 font-semibold shadow-[0_0_15px_-4px_rgba(16,185,129,0.3)]";
      case "Dashboards & Tools":
        return "bg-cyan-950/70 text-cyan-300 border border-cyan-700/80 font-semibold shadow-[0_0_15px_-4px_rgba(6,182,212,0.3)]";
      case "Full-Stack Applications":
        return "bg-violet-950/70 text-violet-300 border border-violet-700/80 font-semibold shadow-[0_0_15px_-4px_rgba(139,92,246,0.3)]";
      case "Geospatial & Web":
        return "bg-amber-950/70 text-amber-300 border border-amber-700/80 font-semibold shadow-[0_0_15px_-4px_rgba(245,158,11,0.3)]";
      case "All Systems":
      default:
        return "bg-zinc-100 text-zinc-950 border border-white font-semibold shadow-sm";
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs with Color-Coded Accents */}
      <div className="overflow-x-auto scroll-container -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-4 min-w-max sm:min-w-0 sm:flex-wrap">
          {PROJECT_CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat);
            const active = selectedCategory === cat;
            const tabClasses = getTabStyles(cat, active);

            return (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-2 whitespace-nowrap min-h-[40px] sm:min-h-auto ${tabClasses}`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    active
                      ? cat === "All Systems"
                        ? "bg-zinc-300 text-zinc-950"
                        : "bg-white/20 text-white"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: 1 col on mobile, 2 cols on tablet/laptop, 3 cols on xl/2xl widescreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
