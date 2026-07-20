"use client";
import AnimatedContainer from "./AnimatedContainer";
import { GithubIcon, NpmIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import { PROJECTS_COLOR_MAP } from "@/lib/constants";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Globe,
} from "lucide-react";



import { projectsData } from "@/lib/data";
import type { Project } from "@/types";

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
          description="A selection of projects I've built — from open-source libraries to full-stack applications."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(projectsData as Project[]).map((project, i) => {
            const colors = PROJECTS_COLOR_MAP[project.color] || PROJECTS_COLOR_MAP.violet;
            const hasPackages = !!project.packages?.length;
            return (
              <AnimatedContainer
                key={project.id}
                variant="fadeUp"
                delay={i * 0.1}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "group relative flex flex-col h-full p-5 rounded-2xl border bg-card overflow-hidden",
                    "transition-all duration-200 shadow-card hover:shadow-card-hover",
                    "border-border",
                    colors.border
                  )}
                >
                  {/* Top accent bar */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity",
                      colors.gradient
                    )}
                  />

                  <div className="relative flex flex-col h-full gap-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Status + type badges */}
                        <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", colors.badge)}>
                            {project.type}
                          </span>
                          <span className={cn(
                            "text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                            project.status === "Live"
                              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                              : "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400"
                          )}>
                            {project.status === "Live" ? "● Live" : "● Published"}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Arrow icon */}
                      <div className={cn(
                        "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border border-border text-muted-foreground",
                        "group-hover:border-transparent group-hover:text-white transition-all duration-200",
                        `group-hover:bg-gradient-to-br group-hover:${colors.gradient}`
                      )}>
                        <ArrowUpRight size={12} />
                      </div>
                    </div>

                    {/* Package names — compact mono pills, no desc */}
                    {hasPackages && project.packages && (
                      <div className="flex flex-col gap-1">
                        {project.packages.map((pkg) => (
                          <span
                            key={pkg.name}
                            className={cn(
                              "inline-flex items-center px-2 py-1 rounded-md border font-mono text-[10px] font-semibold w-fit",
                              colors.pkgBg, colors.icon
                            )}
                          >
                            {pkg.name}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Features — max 2, only if no packages */}
                    {!hasPackages && (
                      <ul className="space-y-1">
                        {project?.features!.slice(0, 2).map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                            <CheckCircle2 size={10} className={cn("mt-0.5 flex-shrink-0", colors.icon)} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-1.5 py-0.5 rounded border border-border bg-secondary/60 text-foreground/60 text-[10px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 mt-auto pt-1">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
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
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
                        >
                          <NpmIcon />
                          npm
                        </motion.a>
                      )}

                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className={cn(
                            "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-150",
                            `bg-gradient-to-r ${colors.gradient}`
                          )}
                        >
                          <Globe size={11} />
                          {project.id === "playerkit" ? "Docs" : "Live"}
                          <ExternalLink size={10} />
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
        <AnimatedContainer variant="fadeUp" delay={0.3} className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-3">More projects on GitHub</p>
          <motion.a
            href="https://github.com/imnurav"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-secondary/50 text-sm font-medium hover:bg-secondary transition-all duration-200"
          >
            <GithubIcon />
            View All Projects
            <ArrowUpRight size={13} />
          </motion.a>
        </AnimatedContainer>
      </div>
    </section>
  );
}
