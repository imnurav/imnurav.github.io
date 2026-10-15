import { GITHUB_URL, LINKEDIN_URL, RESUME_URL, SITE_EMAIL } from "../constants";

export const heroData = {
  greeting: "Hello, I'm",
  name: "Varun Kumar",
  title: "Backend-focused Full Stack Engineer",
  subtitle: "Distributed Systems • Scalable Architecture",
  description:
    "Backend-focused Full Stack Software Engineer with 3+ years of experience architecting scalable backend platforms, microservices, and high-concurrency applications using Node.js, NestJS, TypeScript, Redis, and Next.js.",
  status: "Open to Opportunities",
  location: "New Delhi, India",
  resumeUrl: RESUME_URL,
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "View Resume", href: RESUME_URL },
  },
  socials: [
    { label: "GitHub", href: GITHUB_URL, icon: "github" },
    { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
    { label: "Email", href: `mailto:${SITE_EMAIL}`, icon: "mail" },
  ],
};
