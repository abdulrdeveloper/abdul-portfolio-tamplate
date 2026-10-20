import type { Metadata } from "next";
import { Container } from "@/components/Layout";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/utils/projects";
import { siteConfig } from "@/utils/site";
import { JsonLd, getBreadcrumbSchema, getProjectsCollectionSchema } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${siteConfig.name}’s full-stack projects: ${new Intl.ListFormat("en-US", { style: "long", type: "conjunction" }).format(projects.map((project) => project.title))}. Built with React, Next.js, Node.js, and modern databases.`,
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
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
