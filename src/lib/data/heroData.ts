import { GITHUB_URL, LINKEDIN_URL, SITE_EMAIL } from "../constants";

export const heroData = {
  greeting: "Hello, I'm",
  name: "Varun Kumar",
  title: "Software Engineer",
  subtitle: "Backend / Full Stack",
  description:
    "Full Stack Software Engineer with 3+ years of experience building scalable production applications using NestJS, Next.js, TypeScript and AWS.",
  status: "Open to Opportunities",
  location: "New Delhi, India",
  resumeUrl: "https://drive.google.com/file/d/1zqNo17lUaZuwn4SYSotXZfTRzVJZtpA3/view?usp=sharing",
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "View Resume", href: "https://drive.google.com/file/d/1zqNo17lUaZuwn4SYSotXZfTRzVJZtpA3/view?usp=sharing" },
  },
  socials: [
    { label: "GitHub", href: GITHUB_URL, icon: "github" },
    { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
    { label: "Email", href: `mailto:${SITE_EMAIL}`, icon: "mail" },
  ],
};
