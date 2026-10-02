import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectList } from "@/components/projects/ProjectList";
import { PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects — Soumik Ghosh",
  description:
    "Complete collection of verified engineering systems across embedded software, industrial IoT, full-stack business applications, and geospatial platforms.",
};

export default function ProjectsPage() {
  return (
    <div className="relative py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-transparent overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container size="default" className="relative z-10">
        <SectionHeader
          as="h1"
          badge="Verified Portfolio Archive"
          badgeVariant="cyan"
          title="Engineering Systems & Case Studies"
          description="Complete collection of verified production systems across embedded firmware, industrial IIoT telemetry, enterprise inventory platforms, and geospatial automation."
        />

        <ProjectList projects={PROJECTS} />
      </Container>
    </div>
  );
}
