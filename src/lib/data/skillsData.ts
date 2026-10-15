import type { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Backend & Systems Architecture",
    color: "violet",
    items: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "System Design",
    ],
  },
  {
    category: "Caching & Message Queues",
    color: "amber",
    items: ["Redis", "Redis Streams", "BullMQ", "RabbitMQ", "Socket.IO"],
  },
  {
    category: "Databases & ORM",
    color: "emerald",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Knex.js", "Objection.js"],
  },
  {
    category: "Authentication & Security",
    color: "rose",
    items: [
      "Role-Based Access Control (RBAC)",
      "JWT",
      "Passport.js",
      "bcrypt",
      "Akamai EdgeAuth",
    ],
  },
  {
    category: "Cloud, DevOps & Tooling",
    color: "sky",
    items: [
      "AWS (EC2, S3, SES)",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Git & GitHub",
    ],
  },
  {
    category: "Frontend & Mobile",
    color: "primary",
    items: [
      "Next.js (SSR / SSG)",
      "React.js",
      "React Native",
      "Tailwind CSS",
      "JavaScript (ES6+)",
    ],
  },
];
