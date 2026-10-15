"use client";

import { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-125 h-100 bg-neutral-600/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Skills &"
          highlight="Technologies"
          description="Technologies and tools I use to build backend systems and web applications."
          align="center"
        />

        {/* Perfectly balanced 2x3 grid of 6 authentic categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, gi) => {
            return (
              <AnimatedContainer
                key={group.category}
                variant="fadeUp"
                delay={gi * 0.08}
              >
                <div className="relative p-6 rounded-2xl border bg-card overflow-hidden group cursor-default hover:-translate-y-1 border-border hover:border-foreground/20 transition-all duration-300 h-full">
                  {/* Hover tint — neutral */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/50" />

                  <div className="relative">
                    {/* Category header */}
                    <div className="mb-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {group.category}
                      </h3>
                    </div>

                    {/* Skills pills — clean neutral */}
                    <StaggerContainer className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <StaggerItem key={skill}>
                          <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-border bg-secondary/60 text-foreground/80 text-xs font-medium cursor-default transition-all duration-200 hover:bg-secondary hover:border-foreground/20 hover:text-foreground hover:scale-105 hover:-translate-y-px">
                            {skill}
                          </span>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </div>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
