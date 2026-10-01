import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-sm transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70 shadow-lg flex flex-col justify-between">
      <div className="space-y-4">
        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 mb-5">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {/* Subtle Visual Distinction Badge */}
          <div className="absolute bottom-2.5 right-2.5">
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-md border ${
                project.imageType === "actual"
                  ? "bg-zinc-950/85 text-emerald-400 border-emerald-900/60"
                  : "bg-zinc-950/85 text-zinc-300 border-zinc-700/60"
              }`}
            >
              {project.imageType === "actual" ? "Verified UI" : "Project Context"}
            </span>
          </div>
        </div>

        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>
          {project.featured && (
            <span className="text-[11px] font-mono text-emerald-400 font-medium">
              Featured System
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Short 1- or 2-sentence description */}
        <p className="text-sm text-zinc-300 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Relevant Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="neutral" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono text-zinc-500 self-center pl-1">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
