import AnimatedContainer from "./AnimatedContainer";
import { GithubIcon, NpmIcon } from "./Icons";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";
import {
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
      <div className="absolute inset-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured"
          highlight="Projects"
          description="A selection of projects I've built — from open-source libraries to full-stack applications."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {(projectsData as Project[]).map((project, i) => {
            const hasPackages = !!project.packages?.length;
            
            return (
              <AnimatedContainer
                key={project.id}
                variant="fadeUp"
                delay={i * 0.15}
              >
                <div
                  className="group relative flex flex-col h-full p-6 lg:p-8 rounded-3xl bg-card overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative flex flex-col h-full gap-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Status + type badges */}
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/50">
                            {project.type}
                          </span>
                          <span className={cn(
                            "text-[11px] font-bold px-3 py-1 rounded-full border border-border/50",
                            project.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          )}>
                            {project.status === "Live" ? "● Live" : "● Published"}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Premium Arrow icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shadow-sm">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {project.description}
                    </p>

                    {/* Features or Packages */}
                    {hasPackages && project.packages ? (
                      <div className="flex flex-col gap-3 mt-2">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Architecture</div>
                        {project.packages.map((pkg) => (
                          <div key={pkg.name} className="flex flex-col gap-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-border bg-secondary/40 font-mono text-xs font-bold text-foreground w-fit">
                              {pkg.name}
                            </span>
                            <span className="text-sm text-muted-foreground pl-1">{pkg.desc}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 mt-2">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Key Features</div>
                        <ul className="space-y-2">
                          {project?.features!.map((feature, fi) => (
                            <li key={fi} className="flex items-start gap-3 text-sm text-foreground/80">
                              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary/70" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-lg border border-border bg-secondary/50 text-foreground/80 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-6 border-t border-border/50">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 justify-center items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary/30 text-sm font-semibold text-foreground hover:bg-secondary hover:border-border/80 transition-all duration-200"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Source
                        </a>
                      )}

                      {project.links.npm && (
                        <a
                          href={project.links.npm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 justify-center items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-secondary/30 text-sm font-semibold text-foreground hover:bg-secondary hover:border-border/80 transition-all duration-200"
                        >
                          <NpmIcon className="w-4 h-4" />
                          NPM
                        </a>
                      )}
                      
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-200"
                        >
                          <Globe className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedContainer variant="fadeUp" delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">Explore more repositories</p>
          <a
            href="https://github.com/imnurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/50 text-sm font-semibold hover:bg-secondary hover:scale-105 transition-all duration-200"
          >
            <GithubIcon />
            View All Projects
            <ArrowUpRight size={14} />
          </a>
        </AnimatedContainer>
      </div>
    </section>
  );
}
