import resumeData from "./data/resume.json";

export const SITE_URL = "https://imnurav.github.io";
export const SITE_NAME =
  "Varun Kumar — Backend-focused Full Stack Software Engineer";
export const SITE_DESCRIPTION =
  "Backend-focused Full Stack Software Engineer with 3+ years of experience architecting scalable backend platforms, microservices, and high-concurrency applications using Node.js, NestJS, TypeScript, Redis, and Next.js.";
export const SITE_AUTHOR = "Varun Kumar";
export const SITE_EMAIL = "kumarvarun9811@gmail.com";
export const SITE_PHONE = "+91-9873538514";

export const GITHUB_URL = "https://github.com/imnurav";
export const LINKEDIN_URL = "https://linkedin.com/in/imnurav";
export const NPM_URL = "https://www.npmjs.com/~nurav";
export const WHATSAPP_URL = "https://wa.me/919873538514";
export const RESUME_URL = resumeData.resumeUrl;

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
