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
      <section id="projects" className="py-14 sm:py-24 border-b border-zinc-800/80 bg-zinc-950">
        <Container size="default">
          <div className="mb-10 sm:mb-14">
            <p className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">
              03 · Projects
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1.5">
              Featured Engineering Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Representative production systems spanning embedded industrial firmware, SCADA desktop monitoring, enterprise inventory platforms, and operations dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400">
              Complete archive contains {PROJECTS.length} verified projects across embedded firmware, industrial IIoT, full-stack systems, and geospatial tools.
            </div>
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View All {PROJECTS.length} Verified Projects
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
