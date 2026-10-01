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
    <div className="py-16 sm:py-24 bg-zinc-950">
      <Container size="default">
        <SectionHeader
          badge="Complete Collection"
          title="Verified Engineering Projects"
          description="High-level case studies of verified systems across embedded firmware, industrial IIoT, full-stack applications, and internal tools."
        />

        <ProjectList projects={PROJECTS} />
      </Container>
    </div>
  );
}
