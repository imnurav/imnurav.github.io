import { ProjectItem } from "@/lib/data/projectsData";
import { GithubIcon, NpmIcon } from "./Icons";
import {
  MessageSquare,
  ArrowUpRight,
  Calendar,
  Terminal,
  Layers,
  Globe,
  Video,
} from "lucide-react";

export const PROJECT_ICONS: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  playerkit: Video,
  botsphere: MessageSquare,
  "react-datekit": Calendar,
  envguard: Terminal,
};

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const Icon = PROJECT_ICONS[project.id] || Layers;

  return (
    <div
      className={`flex flex-col justify-between h-full rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group ${className || ""}`}
    >
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {project.tagline}
              </p>
            </div>
          </div>

          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground shrink-0">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-5 text-justify">
          {project.description}
        </p>

        {/* Dedicated Full-Width Tech Stack Row (Never Squeezed) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-[11px] font-medium text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer Row */}
      <div
        className={`pt-4 border-t border-border/60 flex items-center gap-2 mt-auto ${
          project.category === "Production Platform"
            ? "justify-between"
            : "justify-end"
        }`}
      >
        {project.category === "Production Platform" && (
          <span className="text-xs font-medium text-muted-foreground">
            Production • Khan Global Studies
          </span>
        )}

        <div className="flex items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all"
            >
              <Globe size={13} />
              Live Demo
              <ArrowUpRight size={13} />
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-xs font-semibold text-foreground hover:bg-secondary transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source
            </a>
          )}

          {project.links.npm && (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-xs font-semibold text-foreground hover:bg-secondary transition-all"
            >
              <NpmIcon className="w-3.5 h-3.5" />
              NPM
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
