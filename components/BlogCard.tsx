import { formatDate } from "@/utils/helpers";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 border-b border-border px-2 py-4 transition-colors last:border-b-0 hover:bg-muted/40"
    >
      <div className="min-w-0">
        <h3 className="text-[15px] font-medium leading-relaxed text-foreground sm:text-base">{post.title}</h3>
        <p className="my-2 text-[13px] leading-6 text-muted-foreground">{post.description}</p>
        <time dateTime={post.date} className="block font-mono text-xs text-muted-foreground">{formatDate(post.date)}</time>
      </div>
      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-1.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    </a>
  );
}
