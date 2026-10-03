import React from "react";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { TechnicalCapabilities } from "@/components/sections/TechnicalCapabilities";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects, PROJECTS } from "@/lib/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Terminal Pipeline & Metrics */}
      <Hero />

      {/* 01 · About Overview */}
      <AboutOverview />

      {/* 02 · Structured Technical Experience */}
      <ExperienceSection />

      {/* 03 · Featured Projects */}
      <section id="projects" className="py-16 sm:py-24 lg:py-28 xl:py-32 border-b border-zinc-800/80 bg-transparent">
        <Container size="default">
          <div className="mb-10 sm:mb-14">
            <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
              03 · Projects
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
              Featured Engineering Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
              Production systems spanning embedded firmware, SCADA, enterprise platforms, and operations dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-500">
              {PROJECTS.length} verified projects in archive
            </span>
            <Button
              href="/projects"
              variant="outline-cyan"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View All Projects
            </Button>
          </div>
        </Container>
      </section>

      {/* 04 · Skills & Technical Toolbox */}
      <TechnicalCapabilities />

      {/* Engineering Approach & Operational Reliability */}
      <EngineeringApproach />

      {/* 05 · Contact */}
      <ContactCTA />
    </div>
  );
}
