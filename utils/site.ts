import type { NavItem, SocialLink } from "@/types";

const name = "Abdul Rahman";
const handle = "abdulrdeveloper";
const email = "hire@abdulrdeveloper.me";
const jobTitle = "Full Stack Developer";
const city = "Sheikhupura";
const country = "Pakistan";

export const siteConfig = {
  name,
  fullName: name,
  handle,
  title: `${name} | ${jobTitle}`,
  description: `Self-taught full stack developer and Computer Science student from ${city}, ${country}. Building web applications with React, Next.js, TypeScript, and Node.js.`,
  url: "https://abdulrdeveloper.me",
  blogUrl: "https://blog.abdulrdeveloper.me",
  ogImage: "/og-image.png",
  email,
  jobTitle,
  location: `${city}, ${country}`,
  address: { city, countryCode: "PK" },
  socialProfiles: {
    github: `https://github.com/${handle}`,
    linkedin: `https://linkedin.com/in/${handle}`,
    x: `https://x.com/${handle}`,
    instagram: `https://www.instagram.com/${handle}/`,
    email: `mailto:${email}`,
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
