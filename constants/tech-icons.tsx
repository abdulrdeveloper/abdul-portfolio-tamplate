import type { ReactNode } from "react";

const iconPaths: Record<string, string> = {
  "next.js": "/assets/icons/skills/nextjs.png",
  "next.js 15": "/assets/icons/skills/nextjs.png",
  react: "/assets/icons/skills/react.png",
  "react native": "/assets/icons/skills/reactnative.png",
  typescript: "/assets/icons/skills/typescript.png",
  "tailwind css": "/assets/icons/skills/tailwindcss.png",
  "node.js": "/assets/icons/skills/nodejs.png",
  prisma: "/assets/icons/skills/prisma.png",
  fastapi: "/assets/icons/skills/fastapi.png",
  langgraph: "/assets/icons/skills/langgraph.png",
  postgresql: "/assets/icons/skills/postgresql.png",
  postgres: "/assets/icons/skills/postgresql.png",
  "upstash redis": "/assets/icons/skills/redis.png",
  supabase: "/assets/icons/skills/supabase.png",
  docker: "/assets/icons/skills/docker.svg",
  livekit: "/assets/icons/skills/livekit.svg",
  openai: "/assets/icons/skills/openai.svg",
  "vercel ai sdk": "/assets/icons/skills/vercel.png",
  "redux toolkit": "/assets/icons/skills/redux.svg",
  expo: "/assets/icons/skills/expo.svg",
};

const fallbackIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-3 w-3 shrink-0 text-foreground/80"
    aria-hidden="true"
  >
    <path d="M8 8L4 12l4 4M16 8l4 4-4 4M10.5 19l3-14" strokeLinecap="round" />
  </svg>
);

export function getTechSvgIcon(name: string): string | ReactNode {
  return iconPaths[name.toLowerCase()] ?? fallbackIcon;
}
