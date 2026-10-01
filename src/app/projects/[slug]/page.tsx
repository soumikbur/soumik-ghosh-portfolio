import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, PROJECTS } from "@/lib/data/projects";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Soumik Ghosh",
    };
  }

  return {
    title: `${project.title} — Soumik Ghosh | Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Engineering Case Study`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
