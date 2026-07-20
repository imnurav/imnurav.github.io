import { Mail, Phone, Code2, Layers, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon, NpmIcon, WhatsappIcon } from "@/components/Icons";

export const SITE_URL = "https://varunkumar.dev";
export const SITE_NAME = "Varun Kumar — Software Engineer";
export const SITE_DESCRIPTION =
  "Full Stack Software Engineer with 3+ years of experience building scalable production applications using NestJS, Next.js, TypeScript and AWS.";
export const SITE_AUTHOR = "Varun Kumar";
export const SITE_EMAIL = "kumarvarun9811@gmail.com";
export const SITE_PHONE = "+91-9873538514";

export const GITHUB_URL = "https://github.com/imnurav";
export const LINKEDIN_URL = "https://linkedin.com/in/imnurav";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const SECTIONS = [
  "about",
  "experience",
  "skills",
  "projects",
  "education",
  "contact",
] as const;

const primaryProjectStyle = {
  badge: "bg-primary/10 border-primary/20 text-primary dark:text-primary",
  border: "hover:border-primary/30",
  pill: "bg-secondary/70 border-border text-muted-foreground",
  gradient: "from-primary/90 to-primary/70",
  icon: "text-primary",
  pkgBg: "bg-primary/5 border-primary/10",
};

export const PROJECTS_COLOR_MAP: Record<string, typeof primaryProjectStyle> = {
  violet: primaryProjectStyle,
  sky: primaryProjectStyle,
  emerald: primaryProjectStyle,
  primary: primaryProjectStyle,
};

export const CONTACT_COLOR_MAP: Record<string, string> = {
  violet: "bg-primary/5 border-primary/20 text-primary",
  indigo: "bg-primary/5 border-primary/20 text-primary",
  sky: "bg-primary/5 border-primary/20 text-primary",
  emerald: "bg-primary/5 border-primary/20 text-primary",
  primary: "bg-primary/5 border-primary/20 text-primary",
};

export const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
    color: "violet",
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_PHONE,
    href: `tel:${SITE_PHONE}`,
    color: "indigo",
  },
];

export const CONTACT_SOCIAL_ITEMS = [
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: LINKEDIN_URL,
    href: LINKEDIN_URL,
    color: "sky",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: GITHUB_URL,
    href: GITHUB_URL,
    color: "emerald",
  },
];

export const FOOTER_SOCIALS = [
  { label: "GitHub", href: GITHUB_URL, icon: GithubIcon, color: "hover:text-primary" },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: LinkedinIcon, color: "hover:text-primary" },
  { label: "Email", href: `mailto:${SITE_EMAIL}`, icon: Mail, color: "hover:text-primary" },
  { label: "npm", href: "https://www.npmjs.com/~nurav", icon: NpmIcon, color: "hover:text-primary" },
  { label: "WhatsApp", href: "https://wa.me/919873538514", icon: WhatsappIcon, color: "hover:text-primary" },
];

export const HERO_SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

export const HERO_FLOATING_ICONS = [
  { Icon: Code2, delay: 0, x: "85%", y: "15%", size: 20 },
  { Icon: Server, delay: 1.5, x: "80%", y: "55%", size: 18 },
  { Icon: Layers, delay: 0.8, x: "90%", y: "75%", size: 16 },
];
