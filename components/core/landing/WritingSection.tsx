import Link from "next/link";
import { BlogCard } from "@/components/core/blogs/BlogCard";
import { blogPosts } from "@/constants/blog";

export function WritingSection() {
  return (
    <section className="py-12" aria-labelledby="writing-heading">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 id="writing-heading" className="font-mono text-[13px] font-normal uppercase tracking-[0.06em] text-muted-foreground">Latest Articles</h2>
        <Link href="/blog" aria-label="View all articles" className="font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground">all <span aria-hidden="true">→</span></Link>
      </div>
      <div>{blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}</div>
    </section>
  );
}
