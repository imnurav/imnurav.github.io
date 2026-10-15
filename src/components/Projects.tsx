"use client";

import { projectsData } from "@/lib/data/projectsData";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { GITHUB_URL } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background ambient lighting and architectural grid pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Fading architectural grid behind cards */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`,
            maskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)`,
            WebkitMaskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)`,
          }}
        />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 blur-[120px] rounded-full opacity-40 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Featured Work"
          title="Projects &"
          highlight="Open Source"
          description="Tools, packages, and production applications built to solve real-world problems."
          align="center"
        />

        {/* 2x2 Clean Grid of Impactful Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projectsData.map((project, index) => (
            <AnimatedContainer
              key={project.id}
              variant="fadeUp"
              delay={index * 0.08}
            >
              <ProjectCard project={project} />
            </AnimatedContainer>
          ))}
        </div>

        {/* ── FOOTER CALL TO ACTION ── */}
        <AnimatedContainer
          variant="fadeUp"
          delay={0.2}
          className="text-center mt-12"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-secondary/50 text-sm font-semibold text-foreground hover:bg-secondary hover:scale-[1.02] transition-all cursor-pointer"
          >
            <GithubIcon className="w-4 h-4" />
            Explore More on GitHub
            <ArrowUpRight size={14} />
          </a>
        </AnimatedContainer>
      </div>
    </section>
  );
}
