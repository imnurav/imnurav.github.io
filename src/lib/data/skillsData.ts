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
    items: ["AWS", "Docker", "GitHub Actions"],
  },
  {
    category: "Mobile & Other",
    color: "rose",
    items: ["React Native", "Socket.io", "Git"],
  },
] satisfies SkillCategory[];
