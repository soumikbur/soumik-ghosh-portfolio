import React from "react";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero/Hero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Capabilities } from "@/components/sections/Capabilities";
import { TechnicalCapabilities } from "@/components/sections/TechnicalCapabilities";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects, PROJECTS } from "@/lib/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Selected Work */}
      <section id="projects" className="py-14 sm:py-28 border-b border-zinc-800/80 bg-zinc-950">
        <Container size="default">
          <SectionHeader
            badge="Selected Work"
            title="Featured Engineering Systems"
            description="Representative production systems spanning embedded industrial firmware, SCADA desktop monitoring, enterprise inventory platforms, and operations dashboards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400">
              Complete archive contains {PROJECTS.length} verified projects across embedded firmware, industrial IIoT, full-stack systems, and geospatial tools.
            </div>
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View All {PROJECTS.length} Projects
            </Button>
          </div>
        </Container>
      </section>

      {/* 3. Capabilities */}
      <Capabilities />

      {/* 4. Technical Capabilities */}
      <TechnicalCapabilities />

      {/* 5. Engineering Approach */}
      <EngineeringApproach />

      {/* 6. Contact CTA */}
      <ContactCTA />
    </div>
  );
}
