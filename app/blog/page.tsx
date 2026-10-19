import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "@/components/core/blogs/BlogCard";
import { blogPosts } from "@/constants/blog";
import { siteConfig } from "@/constants/site";
import { JsonLd, getBreadcrumbSchema, getBlogCollectionSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog - Engineering Insights & Software Development",
  description: "Read engineering articles by Abdul Rahman Asif on full-stack development, React, Next.js, AI integrations, and software architecture. Practical insights from a working software engineer.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog - Abdul Rahman Asif | Engineering & Development",
    description: "Practical engineering articles on code, design, architecture, and the craft of building software.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return (
    <>
      <Container className="py-16">
        <SectionHeader label="Writing" title="Blog" />
        <p className="mb-10 max-w-md leading-relaxed text-muted-foreground">
          Thoughts on code, design, and the craft of building software.
        </p>
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </Container>

      {/* Structured data */}
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />
      <JsonLd data={getBlogCollectionSchema()} />
    </>
  );
}
