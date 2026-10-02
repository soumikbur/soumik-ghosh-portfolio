import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Category-based color accents for purposeful visual differentiation
  const getCategoryTheme = (group: string) => {
    switch (group) {
      case "Embedded Systems":
        return {
          hoverBorder: "hover:border-emerald-600/80 hover:shadow-[0_4px_28px_-6px_rgba(16,185,129,0.22)]",
          titleHover: "group-hover:text-emerald-300",
          tagVariant: "emerald" as const,
          indexColor: "text-emerald-400/80",
          dotColor: "bg-emerald-400",
        };
      case "Dashboards & Tools":
        return {
          hoverBorder: "hover:border-cyan-600/80 hover:shadow-[0_4px_28px_-6px_rgba(6,182,212,0.22)]",
          titleHover: "group-hover:text-cyan-300",
          tagVariant: "cyan" as const,
          indexColor: "text-cyan-400/80",
          dotColor: "bg-cyan-400",
        };
      case "Full-Stack Applications":
        return {
          hoverBorder: "hover:border-violet-600/80 hover:shadow-[0_4px_28px_-6px_rgba(139,92,246,0.22)]",
          titleHover: "group-hover:text-violet-300",
          tagVariant: "violet" as const,
          indexColor: "text-violet-400/80",
          dotColor: "bg-violet-400",
        };
      case "Geospatial & Web":
      default:
        return {
          hoverBorder: "hover:border-amber-600/80 hover:shadow-[0_4px_28px_-6px_rgba(245,158,11,0.22)]",
          titleHover: "group-hover:text-amber-300",
          tagVariant: "amber" as const,
          indexColor: "text-amber-400/80",
          dotColor: "bg-amber-400",
        };
    }
  };

  const theme = getCategoryTheme(project.categoryGroup);

  // Status style mapping based on project statusVariant
  const getStatusStyles = (variant?: string) => {
    switch (variant) {
      case "cyan":
        return {
          badge: "bg-cyan-950/70 border-cyan-800/80 text-cyan-300",
          dot: "bg-cyan-400",
        };
      case "blue":
        return {
          badge: "bg-blue-950/70 border-blue-800/80 text-blue-300",
          dot: "bg-blue-400",
        };
      case "amber":
        return {
          badge: "bg-amber-950/70 border-amber-800/80 text-amber-300",
          dot: "bg-amber-400",
        };
      case "emerald":
      default:
        return {
          badge: "bg-emerald-950/70 border-emerald-800/80 text-emerald-400",
          dot: "bg-emerald-400",
        };
    }
  };

  const statusStyles = getStatusStyles(project.statusVariant);

  return (
    <article
      className={`group rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-4 sm:p-6 backdrop-blur-sm transition-all duration-200 ${theme.hoverBorder} hover:bg-zinc-900/80 shadow-lg flex flex-col justify-between hover:-translate-y-0.5`}
    >
      <div className="space-y-4">
        {/* Project Top Bar: Status Badge, Category Tag, & Index Number */}
        <div className="flex items-center justify-between gap-2 border-b border-zinc-800/60 pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${statusStyles.badge}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot} animate-pulse shrink-0`} />
              <span>{project.status || "Production Ready"}</span>
            </span>
            <Badge variant={theme.tagVariant} size="sm">
              {project.categoryGroup}
            </Badge>
          </div>
          {typeof index === "number" && (
            <span className={`font-mono text-xs font-bold tracking-wider shrink-0 ${theme.indexColor}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Project Visual Image with Ambient Corner Glow */}
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
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
                  ? "bg-zinc-950/85 text-emerald-300 border-emerald-800/70"
                  : "bg-zinc-950/85 text-zinc-300 border-zinc-700/60"
              }`}
            >
              {project.imageType === "actual" ? "Verified UI" : "Project Context"}
            </span>
          </div>
        </div>

        {/* Category & Title */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
            {project.category}
          </span>
          <h3 className={`text-lg sm:text-xl font-bold tracking-tight text-white ${theme.titleHover} transition-colors`}>
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Relevant Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="neutral" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-zinc-500 self-center pl-1">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action CTA & External Links */}
      <div className="pt-4 mt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 ${theme.titleHover} transition-colors`}
        >
          <span>View Case Study</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors px-2 py-1 rounded bg-zinc-800/70 border border-zinc-700/70 hover:border-zinc-500"
              title="View GitHub Repository"
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubIcon className="h-3 w-3" />
              <span>Code</span>
              <ArrowUpRight className="h-2.5 w-2.5 opacity-60" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:text-cyan-200 transition-colors px-2 py-1 rounded bg-cyan-950/60 border border-cyan-800/80 hover:border-cyan-600"
              title="Open Live Demonstration"
              aria-label={`${project.title} Live Demonstration`}
            >
              <ExternalLink className="h-3 w-3" />
              <span>Demo</span>
              <ArrowUpRight className="h-2.5 w-2.5 opacity-60" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
