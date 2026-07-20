import { GITHUB_URL, LINKEDIN_URL, SITE_EMAIL } from "../constants";

export const heroData = {
  greeting: "Hello, I'm",
  name: "Varun Kumar",
  title: "Software Engineer",
  subtitle: "Backend / Full Stack",
  description:
    "Full Stack Software Engineer with 3+ years of experience building scalable production applications using NestJS, Next.js, React Native, TypeScript and AWS.",
  status: "Open to Opportunities",
  location: "New Delhi, India",
  resumeUrl: "/resume.pdf",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
  socials: [
    { label: "GitHub", href: GITHUB_URL, icon: "github" },
    { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
    { label: "Email", href: `mailto:${SITE_EMAIL}`, icon: "mail" },
  ],
};
