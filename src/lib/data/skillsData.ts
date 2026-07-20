import type { SkillCategory } from "@/types";

export const skillsData = [
  {
    category: "Backend",
    color: "violet",
    items: ["Node.js", "NestJS", "TypeScript", "BullMQ", "Express", "REST API"],
  },
  {
    category: "Frontend",
    color: "sky",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "SSR"],
  },
  {
    category: "Database",
    color: "emerald",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "DevOps",
    color: "amber",
    items: ["AWS", "DigitalOcean", "Docker", "GitHub Actions"],
  },
  {
    category: "Tools & Other",
    color: "rose",
    items: ["Postman", "Socket.io", "Git", "Linux", "Nginx"],
  },
] satisfies SkillCategory[];
