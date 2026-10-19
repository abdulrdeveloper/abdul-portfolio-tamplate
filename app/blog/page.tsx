import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/core/blogs/BlogCard";
import { blogPosts } from "@/constants/blog";
import { siteConfig } from "@/constants/site";
import { JsonLd, getBreadcrumbSchema, getBlogCollectionSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles by Abdul Rahman on JavaScript, Node.js, Express, databases, and the things learned while building web applications.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog | Abdul Rahman",
    description: "Notes on web development, projects, and things worth sharing.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <Container className="py-16">
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Writing</p>
        <h1 className="font-serif text-3xl font-semibold">Blog</h1>
        <p className="mb-6 mt-5 text-sm leading-relaxed text-muted-foreground">
          Writing about web development as I learn — projects, mistakes, and
          things worth sharing. Full articles are published on my blog.
        </p>
        <div>{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
        <a href={siteConfig.blogUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm underline decoration-border underline-offset-4">Visit the full blog <span aria-hidden="true">↗</span></a>
      </Container>
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }])} />
      <JsonLd data={getBlogCollectionSchema()} />
    </>
  );
}
