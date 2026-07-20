export const projectsData = [
  {
    id: "playerkit",
    title: "PlayerKit",
    tagline: "Comprehensive Video Player Monorepo",
    description:
      "A complete suite for building modern video experiences. With native support for HLS, YouTube, and MP4 out of the box, it provides a headless playback engine, ready-to-use React components, and a fully-themed UI library that gives you complete control over the viewing experience.",
    type: "NPM Monorepo / Open Source",
    featured: true,
    status: "Published",
    links: {
      github: "https://github.com/imnurav/playerkit",
      npm: "https://www.npmjs.com/package/@playerkit/core",
      live: "https://imnurav.github.io/playerkit/",
    },
    tech: [
      "TypeScript",
      "HLS.js",
      "YouTube API",
      "MP4",
      "React",
      "Rollup",
      "CSS",
    ],
    packages: [
      {
        name: "@playerkit/core",
        desc: "Headless engine managing quality, streams, and player state",
      },
      {
        name: "@playerkit/react",
        desc: "Drop-in React wrapper with gestures and event bindings",
      },
      {
        name: "@playerkit/ui",
        desc: "Customizable overlay, controls, and timeline components",
      },
    ],
    color: "emerald",
  },
  {
    id: "envguard",
    title: "EnvGuard",
    tagline: "Type-Safe Environment Variable Manager",
    description:
      "A developer CLI tool that enforces environment variable strictness. It automatically validates your .env files against defined schemas, flags missing variables during CI/CD, and generates strict TypeScript types for zero-runtime errors.",
    type: "CLI Tool / NPM Package",
    featured: true,
    status: "Published",
    links: {
      github: "https://github.com/imnurav/envguard",
      npm: "https://www.npmjs.com/package/@nurav/envguard",
      live: null,
    },
    tech: ["Node.js", "TypeScript", "Zod", "Commander.js", "NPM"],
    features: [
      "Schema-based validation for .env files",
      "Auto-generates strict TypeScript typings",
      "CI/CD integration for missing variables detection",
      "Zero-config setup with sensible defaults",
    ],
    color: "violet",
  },
];
