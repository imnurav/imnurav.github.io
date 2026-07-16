"use client";

import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Package,
  Globe,
} from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const colorMap: Record<string, {
  badge: string;
  border: string;
  pill: string;
  gradient: string;
  glow: string;
  icon: string;
}> = {
  violet: {
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-500",
    border: "hover:border-violet-500/30",
    pill: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
    gradient: "from-violet-600 to-indigo-600",
    glow: "hover:shadow-violet-500/10",
    icon: "text-violet-500",
  },
  sky: {
    badge: "bg-sky-500/10 border-sky-500/20 text-sky-500",
    border: "hover:border-sky-500/30",
    pill: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400",
    gradient: "from-sky-600 to-cyan-600",
    glow: "hover:shadow-sky-500/10",
    icon: "text-sky-500",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured"
          highlight="Projects"
          description="A selection of projects I've built — from developer tools to full-stack applications."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <AnimatedContainer
                key={project.id}
                variant="fadeUp"
                delay={i * 0.15}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "group relative flex flex-col h-full p-7 rounded-3xl border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden",
                    "transition-all duration-500",
                    "hover:shadow-2xl hover:bg-background/80",
                    colors.border,
                    colors.glow
                  )}
                >
                  {/* Top gradient bar */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity",
                      colors.gradient
                    )}
                  />

                  {/* Background shimmer */}
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative flex flex-col h-full gap-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span
                            className={cn(
                              "text-xs font-semibold px-2 py-0.5 rounded-full border",
                              colors.badge
                            )}
                          >
                            {project.type}
                          </span>
                          <span
                            className={cn(
                              "text-xs font-semibold px-2 py-0.5 rounded-full border",
                              project.status === "Live"
                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                                : "bg-amber-500/10 border-amber-500/20 text-amber-500"
                            )}
                          >
                            {project.status === "Live" ? "🟢" : "📦"}{" "}
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-gradient transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Hover arrow */}
                      <motion.div
                        className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border border-border/50 text-muted-foreground",
                          "group-hover:border-transparent group-hover:text-white group-hover:shadow-lg transition-all duration-300",
                          `group-hover:bg-gradient-to-br group-hover:${colors.gradient}`
                        )}
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, fi) => (
                        <li
                          key={fi}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2
                            size={13}
                            className={cn("mt-0.5 flex-shrink-0", colors.icon)}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            "inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-medium",
                            colors.pill
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 mt-auto pt-2">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-secondary/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary transition-all duration-200"
                        >
                          <GithubIcon />
                          GitHub
                        </motion.a>
                      )}

                      {project.links.npm && (
                        <motion.a
                          href={project.links.npm}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-secondary/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary transition-all duration-200"
                        >
                          <Package size={14} />
                          NPM
                        </motion.a>
                      )}

                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg transition-all duration-200",
                            `bg-gradient-to-r ${colors.gradient}`
                          )}
                        >
                          <Globe size={14} />
                          Live Demo
                          <ExternalLink size={12} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatedContainer>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedContainer variant="fadeUp" delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            More projects on GitHub
          </p>
          <motion.a
            href="https://github.com/varunsingh31000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/60 bg-secondary/50 text-sm font-medium hover:bg-secondary hover:border-border transition-all duration-200"
          >
            <GithubIcon />
            View All Projects
            <ArrowUpRight size={14} />
          </motion.a>
        </AnimatedContainer>
      </div>
    </section>
  );
}
