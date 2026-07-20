export type LinkGroup = {
  github: string | null;
  npm: string | null;
  live: string | null;
};

export type ProjectPackage = {
  name: string;
  desc: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  type: string;
  featured: boolean;
  status: string;
  links: LinkGroup;
  tech: string[];
  features?: string[];
  packages?: ProjectPackage[];
  color: string;
};

export type ExperienceRole = {
  title: string;
  type: string;
  period: string;
  achievements: string[];
};

export type Experience = {
  company: string;
  companyUrl: string;
  location: string;
  logo: string;
  roles: ExperienceRole[];
};

export type SkillCategory = {
  category: string;
  color: string;
  items: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
};
