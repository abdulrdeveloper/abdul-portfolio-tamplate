import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/core/projects/ProjectGrid";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";
import { JsonLd, getBreadcrumbSchema, getProjectsCollectionSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Abdul Rahman’s full-stack projects: Klar, Sonik, Glimpse, and DevScope. Built with React, Next.js, Node.js, and modern databases.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: "Projects | Abdul Rahman",
    description: "Selected web applications and developer tools.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="py-16">
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Work</p>
        <h1 className="font-serif text-3xl font-semibold">Projects</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">A selection of web applications I&apos;ve built, from a study assistant and music platform to developer tools.</p>
        <ProjectGrid projects={projects} />
      </Container>
      <JsonLd data={getProjectsCollectionSchema()} />
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Projects", url: `${siteConfig.url}/projects` }])} />
    </>
  );
}
