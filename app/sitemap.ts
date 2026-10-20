import type { MetadataRoute } from "next";
import { projects } from "@/utils/projects";
import { siteConfig } from "@/utils/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url },
    { url: `${siteConfig.url}/projects` },
    { url: `${siteConfig.url}/blog` },
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}` })),
  ];
}
