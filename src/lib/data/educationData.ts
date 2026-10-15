export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  category: string;
  categoryLabel: string;
  pillTitle: string;
  description: string;
  highlights?: string[];
  coursework: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Maharshi Dayanand University (MDU)",
    location: "Rohtak, Haryana",
    period: "2018 – 2022",
    grade: "70% (First Division)",
    category: "formal",
    categoryLabel: "Academic Degree",
    pillTitle: "Core Coursework",
    description:
      "Four-year computer science engineering program focused on computing fundamentals, data structures, algorithmic problem solving, database management, and operating systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },
  {
    degree: "Self-Directed Systems & Architecture",
    institution: "Open Source Ecosystems & Modern Engineering",
    location: "Self-Directed",
    period: "2022 – Present",
    grade: "Continuous Learning",
    category: "self-taught",
    categoryLabel: "Continuous Study",
    pillTitle: "Focus & Exploration",
    description:
      "Hands-on exploration and practical implementation spanning distributed backend patterns, asynchronous BullMQ queues, Redis caching, and real-time media streaming protocols.",
    coursework: [
      "System Design & Microservices",
      "Event-Driven BullMQ Queues",
      "Redis Caching & Lua Scripts",
      "HLS & Media Streaming",
      "Docker & AWS CI/CD",
    ],
  },
];
