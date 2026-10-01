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

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800/80 pb-4">
        {PROJECT_CATEGORIES.map((cat) => {
          const count = getCategoryCount(cat);
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                active
                  ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850 border border-zinc-800"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded ${
                  active ? "bg-zinc-300 text-zinc-950" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
