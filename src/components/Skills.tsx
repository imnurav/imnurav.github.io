"use client";
import { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Only the dot uses a unique color per category
const accentDot: Record<string, string> = {
  violet: "bg-violet-500",
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-indigo-600/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Tech Stack"
          title="Skills &"
          highlight="Technologies"
          description="A curated set of tools and technologies I use to ship production-grade applications."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, gi) => {
            const dot = accentDot[group.color] ?? "bg-foreground";
            return (
              <AnimatedContainer
                key={group.category}
                variant="fadeUp"
                delay={gi * 0.08}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative p-6 rounded-2xl border bg-card overflow-hidden group cursor-default shadow-card hover:shadow-card-hover border-border hover:border-foreground/10 transition-all duration-200 h-full"
                >
                  {/* Hover tint — neutral */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary/50" />

                  <div className="relative">
                    {/* Category header */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className={cn("w-2 h-2 rounded-full flex-shrink-0", dot)} />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {group.category}
                      </h3>
                    </div>

                    {/* Skills pills — clean neutral */}
                    <StaggerContainer className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <StaggerItem key={skill}>
                          <motion.span
                            whileHover={{ scale: 1.04, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center px-3 py-1.5 rounded-md border border-border bg-secondary/60 text-foreground/80 text-xs font-medium cursor-default transition-all duration-150 hover:bg-secondary hover:border-foreground/20 hover:text-foreground"
                          >
                            {skill}
                          </motion.span>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </motion.div>
              </AnimatedContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
