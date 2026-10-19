import type { NavItem, SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Abdul Rahman",
  fullName: "Abdul Rahman",
  title: "Abdul Rahman | Full Stack Developer",
  description: "Self-taught full stack developer and Computer Science student from Sheikhupura, Pakistan. Building web applications with React, Next.js, TypeScript, and Node.js.",
  url: "https://abdulrdeveloper.me",
  blogUrl: "https://blog.abdulrdeveloper.me",
  ogImage: "/og-image.png",
  email: "hire@abdulrdeveloper.me",
  jobTitle: "Full Stack Developer",
  location: "Sheikhupura, Pakistan",
  socialProfiles: {
    github: "https://github.com/abdulrdeveloper",
    linkedin: "https://linkedin.com/in/abdulrdeveloper",
    x: "https://x.com/abdulrdeveloper",
    instagram: "https://www.instagram.com/abdulrdeveloper/",
    email: "mailto:hire@abdulrdeveloper.me",
  },
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: siteConfig.socialProfiles.github },
  { name: "LinkedIn", url: siteConfig.socialProfiles.linkedin },
  { name: "X", url: siteConfig.socialProfiles.x },
  { name: "Instagram", url: siteConfig.socialProfiles.instagram },
  { name: "WhatsApp", url: "https://wa.me/923254338820" },
  { name: "Hashnode", url: siteConfig.blogUrl },
  { name: "Email", url: siteConfig.socialProfiles.email },
  { name: "CV", url: "/Abdul_Rahman_CV.pdf" },
];
