export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
  links: {
    live: string | null;
    github: string | null;
    npm: string | null;
  };
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "playerkit",
    title: "PlayerKit",
    tagline: "Headless video player & stream security engine",
    category: "Open Source",
    status: "Published",
    featured: true,
    description:
      "A modular headless video player monorepo (@playerkit/core, @playerkit/react, @playerkit/ui) unifying HLS, YouTube, and direct video. Built with DevTools anti-tamper detection, dynamic watermarking, and Akamai EdgeAuth token refresh, powering secure playback for 100K+ students.",
    tech: ["TypeScript", "HLS.js", "Akamai EdgeAuth", "React", "Rollup"],
    links: {
      live: "https://imnurav.github.io/playerkit/",
      github: "https://github.com/imnurav/playerkit",
      npm: "https://www.npmjs.com/package/@playerkit/core",
    },
  },
  {
    id: "botsphere",
    title: "Bot Sphere",
    tagline: "WhatsApp automation & customer support platform",
    category: "Production Platform",
    status: "Production",
    featured: true,
    description:
      "A full-stack customer engagement platform serving 50K+ users across the KGS ecosystem. Built with NestJS, React, and Meta Cloud API, utilizing Redis Streams for asynchronous message queues and Redis Lua scripts for round-robin agent routing with under 20ms queue latency.",
    tech: ["NestJS", "React", "Redis Streams", "Meta Cloud API", "MongoDB"],
    links: {
      live: null,
      github: null,
      npm: null,
    },
  },
  {
    id: "react-datekit",
    title: "React DateKit",
    tagline: "Zero-dependency date & time picker for React",
    category: "Open Source",
    status: "Published",
    featured: true,
    description:
      "A lightweight, zero-dependency date and time picker built with native Intl utilities. Features headless state hooks, single/range/datetime selection, auto-stacking responsive layouts, and CSS variable theming with full keyboard navigation and Next.js compatibility.",
    tech: ["React", "TypeScript", "Next.js", "CSS Tokens", "Rollup"],
    links: {
      live: "https://imnurav.github.io/react-datekit/",
      github: "https://github.com/imnurav/react-datekit",
      npm: "https://www.npmjs.com/package/react-datekit",
    },
  },
  {
    id: "envguard",
    title: "EnvGuard",
    tagline: "Type-safe environment variable manager & CLI",
    category: "Developer Tools",
    status: "Published",
    featured: true,
    description:
      "A developer CLI tool built with Node.js and Zod that validates .env files against schema definitions and automatically generates type-safe TypeScript declarations, catching missing or invalid variables during CI/CD before production deployment.",
    tech: ["Node.js", "TypeScript", "Zod", "Commander.js", "NPM"],
    links: {
      live: null,
      github: "https://github.com/imnurav/envguard",
      npm: "https://www.npmjs.com/package/@nurav/envguard",
    },
  },
];
