import { siteConfig } from "@/constants/site";
import { blogPosts } from "@/constants/blog";
import type { Project } from "@/types/project";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.fullName,
    alternateName: "abdulrdeveloper",
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    address: { "@type": "PostalAddress", addressLocality: "Sheikhupura", addressCountry: "PK" },
    sameAs: [siteConfig.socialProfiles.github, siteConfig.socialProfiles.linkedin],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.title,
    url: siteConfig.url,
    author: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en",
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteConfig.url,
    name: siteConfig.title,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: item.url,
    })),
  };
}

export function getProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: { "@id": `${siteConfig.url}/#person` },
    about: project.technologies,
    sameAs: [project.liveUrl, project.githubUrl],
  };
}

export function getProjectsCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects | Abdul Rahman",
    description: "Selected full-stack web applications and developer tools.",
    url: `${siteConfig.url}/projects`,
    author: { "@id": `${siteConfig.url}/#person` },
  };
}

export function getBlogCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog | Abdul Rahman",
    url: `${siteConfig.url}/blog`,
    author: { "@id": `${siteConfig.url}/#person` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem", position: index + 1, name: post.title, url: post.url,
      })),
    },
  };
}
