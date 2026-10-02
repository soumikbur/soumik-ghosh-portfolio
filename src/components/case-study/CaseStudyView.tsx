import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Project } from "@/lib/data/projects";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const isActual = project.imageType === "actual";

  return (
    <article className="py-10 sm:py-20 bg-zinc-950 text-zinc-100">
      <Container size="default">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-4 border-b border-zinc-800 pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-zinc-600 font-mono text-xs">•</span>
            <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Verified Production Engineering
            </span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed pt-1">
            {project.shortDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.github && (
              <Button
                href={project.github}
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
                external
              >
                GitHub Profile
              </Button>
            )}
            {project.demo && (
              <Button
                href={project.demo}
                variant="outline"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
                external
              >
                Live Demo
              </Button>
            )}
            <Button
              href="/contact"
              variant="outline"
              size="md"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Discuss System
            </Button>
          </div>
        </header>

        {/* Main Case Study Content */}
        <div className="mt-8 sm:mt-12 space-y-10 sm:space-y-14 max-w-4xl">
          {/* 1. Project Overview */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5" />
              <span>Project Overview</span>
            </h2>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-7">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </section>

          {/* 2. What It Does */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" />
              <span>What It Does</span>
            </h2>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-7">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.whatItDoes}
              </p>
            </div>
          </section>

          {/* 3. Key Capabilities */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Key Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyCapabilities.map((capability, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300">{capability}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Engineering Highlights (High-Level, Non-Disclosive) */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" />
              <span>Engineering Highlights</span>
            </h2>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-7">
              <ul className="space-y-3">
                {project.engineeringHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                    <span className="text-sm text-zinc-300 leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Visual Asset Section (Actual Screenshot vs Context Representation) */}
          {project.image && (
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {isActual ? "Verified System Interface" : "Domain & Context Representation"}
                </h2>
                <span
                  className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                    isActual
                      ? "text-emerald-400 border-emerald-900/60 bg-emerald-950/30"
                      : "text-zinc-400 border-zinc-800 bg-zinc-900/50"
                  }`}
                >
                  {isActual ? "ACTUAL PROJECT SCREENSHOT" : "CONTEXTUAL FIELD COVER"}
                </span>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 sm:p-3 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between border-b border-zinc-850 px-2 py-1.5 mb-2 text-[10px] sm:text-xs font-mono text-zinc-400">
                  <span className="text-zinc-300 font-medium">
                    {project.slug}.{isActual ? "interface.view" : "domain.context"}
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    {isActual ? "PRODUCTION UI CAPTURE" : "FIELD ENVIRONMENT CONTEXT"}
                  </span>
                </div>
                <div className="relative rounded overflow-hidden border border-zinc-850 bg-black aspect-[16/9] w-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} ${isActual ? "production interface" : "field domain context"}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
                {/* Attribution note for external images */}
                {project.imageAttribution && (
                  <div className="mt-2.5 px-2 text-[11px] font-mono text-zinc-500 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-900 pt-2">
                    <span>
                      Photo by {project.imageAttribution.photographer} on {project.imageAttribution.source}
                    </span>
                    <span className="text-[10px] text-zinc-600">
                      {project.imageAttribution.license}
                    </span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 6. Technology */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.techCategories.map((group, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 space-y-2.5"
                >
                  <h3 className="font-mono text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Badge key={item} variant="neutral" size="sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Outcome / Purpose */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Outcome & Purpose
            </h2>
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-7 border-l-4 border-l-emerald-500">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Interested in discussing this implementation?
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              I discuss technical architecture, system design tradeoffs, and operational reliability in direct interviews.
            </p>
            <div className="pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Get in Touch
              </Button>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
