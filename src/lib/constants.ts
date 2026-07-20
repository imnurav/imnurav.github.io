import { Mail, Phone, Code2, Layers, Cpu, Coffee, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const SITE_URL = "https://varunkumar.dev";
export const SITE_NAME = "Varun Kumar — Software Engineer";
export const SITE_DESCRIPTION =
  "Full Stack Software Engineer with 3+ years of experience building scalable production applications using NestJS, Next.js, React Native, TypeScript and AWS.";
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

export const PROJECTS_COLOR_MAP: Record<string, {
  badge: string;
  border: string;
  pill: string;
  gradient: string;
  icon: string;
  pkgBg: string;
}> = {
  violet: {
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-500/20",
    pill: "bg-secondary/70 border-border text-foreground/70",
    gradient: "from-violet-600 to-indigo-600",
    icon: "text-violet-500",
    pkgBg: "bg-violet-500/8 border-violet-500/20",
  },
  sky: {
    badge: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400",
    border: "hover:border-sky-500/20",
    pill: "bg-secondary/70 border-border text-foreground/70",
    gradient: "from-sky-600 to-cyan-600",
    icon: "text-sky-500",
    pkgBg: "bg-sky-500/8 border-sky-500/20",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/20",
    pill: "bg-secondary/70 border-border text-foreground/70",
    gradient: "from-emerald-600 to-teal-600",
    icon: "text-emerald-500",
    pkgBg: "bg-emerald-500/8 border-emerald-500/20",
  },
};

export const CONTACT_COLOR_MAP: Record<string, string> = {
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-500",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
  sky: "bg-sky-500/10 border-sky-500/20 text-sky-500",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
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
  { label: "GitHub", href: GITHUB_URL, icon: GithubIcon, color: "hover:text-violet-500" },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: LinkedinIcon, color: "hover:text-sky-500" },
  { label: "Email", href: `mailto:${SITE_EMAIL}`, icon: Mail, color: "hover:text-rose-500" },
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
