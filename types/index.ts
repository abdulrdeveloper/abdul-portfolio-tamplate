export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  logoSize?: "small";
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

export interface SocialLink {
  name: "GitHub" | "LinkedIn" | "X" | "Hashnode" | "Instagram" | "WhatsApp" | "Email" | "CV";
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}
