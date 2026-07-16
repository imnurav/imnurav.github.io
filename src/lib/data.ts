import { GITHUB_URL, LINKEDIN_URL, SITE_EMAIL, SITE_PHONE } from "./constants";

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

export const aboutData = {
  summary: `I'm a passionate Full Stack Software Engineer who loves building elegant, 
  performant systems that solve real-world problems. I specialize in backend engineering 
  with Node.js & NestJS while also delivering polished frontend experiences with Next.js 
  and React Native. I thrive at the intersection of clean architecture and developer 
  experience — crafting APIs that scale and interfaces that delight. When I'm not shipping 
  features, I'm exploring new technologies, contributing to open source, or optimizing 
  existing systems for peak performance.`,
  highlights: [
    {
      value: "3+",
      label: "Years Experience",
      description: "Building production-grade systems",
    },
    {
      value: "1000+",
      label: "Concurrent Jobs",
      description: "Processed via distributed queues",
    },
    {
      value: "40%",
      label: "API Improvement",
      description: "Performance boost via optimization",
    },
    {
      value: "40%",
      label: "SEO Growth",
      description: "Organic traffic via SSR strategies",
    },
  ],
};

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
    items: ["MongoDB", "PostgreSQL", "Redis"],
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
] as const;

export const experienceData = [
  {
    company: "Khan Global Studies Pvt Ltd",
    companyUrl: "#",
    location: "Noida, India",
    logo: "https://khanglobalstudies.com/Images/logos/logo.avif",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        period: "Jan 2024 – Present",
        achievements: [
          "Engineered a high-throughput queue-based notification system using BullMQ & Redis, handling 1000+ concurrent jobs with no downtime.",
          "Designed and implemented scalable RESTful APIs in NestJS, improving response times by 40% through caching and query optimization.",
          "Built a fully SSR-enabled marketing site with Next.js, boosting organic SEO traffic by 40% within 3 months.",
          "Led integration of AWS S3 for asset management and CloudFront CDN for global content delivery.",
          "Contributed to architectural decisions for micro-service decomposition, improving team autonomy and deploy frequency.",
        ],
      },
      {
        title: "Junior Software Engineer",
        type: "Full-time",
        period: "Jul 2022 – Dec 2023",
        achievements: [
          "Developed cross-platform mobile application using React Native, shipped to 10,000+ users on iOS and Android.",
          "Integrated Socket.io for real-time features including live notifications and chat, reducing polling overhead by 60%.",
          "Built reusable React component library reducing UI development time by 30% across teams.",
          "Collaborated with product and design teams to deliver pixel-perfect UI from Figma specs.",
          "Implemented JWT-based authentication with refresh token rotation and role-based access control.",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        period: "Jan 2022 – Jun 2022",
        achievements: [
          "Built REST APIs with Node.js and Express for the internal content management system.",
          "Assisted in migrating legacy jQuery codebase to React, improving maintainability.",
          "Wrote unit and integration tests using Jest, achieving 80%+ code coverage on assigned modules.",
          "Participated in daily stand-ups, sprint planning, and code reviews in an Agile environment.",
        ],
      },
    ],
  },
];

export const projectsData = [
  {
    id: "envguard",
    title: "EnvGuard",
    tagline: "CLI Tool for Environment Variable Management",
    description:
      "A powerful CLI tool that scans your project for missing or undocumented environment variables, validates .env files against a schema, and generates type-safe TypeScript types from your env configuration.",
    type: "CLI Tool / NPM Package",
    featured: true,
    status: "Published",
    links: {
      github: "https://github.com/varunsingh31000/envguard",
      npm: "https://www.npmjs.com/package/envguard",
      live: null,
    },
    tech: ["Node.js", "TypeScript", "Commander.js", "Chalk", "Zod", "NPM"],
    features: [
      "Validates env vars against a schema definition",
      "Auto-generates TypeScript types from .env files",
      "Detects undocumented or missing variables",
      "CI/CD integration ready with exit codes",
      "Zero-config setup with sensible defaults",
    ],
    color: "violet",
  },
  {
    id: "shrinika",
    title: "Shrinika Dermacare",
    tagline: "Full Stack Appointment Booking Platform",
    description:
      "A complete clinic management and patient booking system for a dermatology clinic. Features online appointment scheduling, patient records, doctor availability management, and automated confirmation emails.",
    type: "Full Stack Web Application",
    featured: true,
    status: "Live",
    links: {
      github: "https://github.com/varunsingh31000/shrinika-dermacare",
      npm: null,
      live: "https://shrinkadermacare.com",
    },
    tech: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "Docker",
      "AWS",
    ],
    features: [
      "Real-time appointment slot management",
      "SMS & email booking confirmations",
      "Doctor dashboard with schedule management",
      "Patient history and records tracking",
      "Mobile-responsive PWA",
    ],
    color: "sky",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Maharshi Dayanand University (MDU)",
    location: "Rohtak, Haryana",
    period: "2018 – 2022",
    grade: "First Division",
    highlights: [
      "Specialized in Data Structures, Algorithms & System Design",
      "Final year project: Real-time collaborative coding platform",
      "Active member of the Computer Science Society",
    ],
  },
];

export const contactData = {
  heading: "Let's Build Something Amazing Together",
  subheading:
    "Whether you have a project in mind, a role to fill, or just want to connect — my inbox is always open.",
  email: SITE_EMAIL,
  phone: SITE_PHONE,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  resume: "/resume.pdf",
};
