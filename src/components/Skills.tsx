"use client";

import { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colorMap: Record<string, {
  pill: string;
  badge: string;
  heading: string;
  glow: string;
  dot: string;
}> = {
  violet: {
    pill: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400 hover:bg-violet-500/20 hover:border-violet-500/40",
    badge: "bg-violet-500/10 border-violet-500/20",
    heading: "text-violet-500",
    glow: "shadow-violet-500/10",
    dot: "bg-violet-500",
  },
  sky: {
    pill: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/40",
    badge: "bg-sky-500/10 border-sky-500/20",
    heading: "text-sky-500",
    glow: "shadow-sky-500/10",
    dot: "bg-sky-500",
  },
  emerald: {
    pill: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40",
    badge: "bg-emerald-500/10 border-emerald-500/20",
    heading: "text-emerald-500",
    glow: "shadow-emerald-500/10",
    dot: "bg-emerald-500",
  },
  amber: {
    pill: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/40",
    badge: "bg-amber-500/10 border-amber-500/20",
    heading: "text-amber-500",
    glow: "shadow-amber-500/10",
    dot: "bg-amber-500",
  },
  rose: {
    pill: "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/40",
    badge: "bg-rose-500/10 border-rose-500/20",
    heading: "text-rose-500",
    glow: "shadow-rose-500/10",
    dot: "bg-rose-500",
  },
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
            const colors = colorMap[group.color];
            return (
              <AnimatedContainer
                key={group.category}
                variant="fadeUp"
                delay={gi * 0.08}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "relative p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden group",
                    `shadow-xl ${colors.glow}`,
                    "hover:border-border transition-all duration-300"
                  )}
                >
                  {/* Subtle background gradient on hover */}
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500", colors.badge)} />

                  <div className="relative">
                    {/* Category header */}
                    <div className="flex items-center gap-2.5 mb-5">
                      <div className={cn("w-2 h-2 rounded-full", colors.dot)} />
                      <h3 className={cn("text-sm font-bold uppercase tracking-widest", colors.heading)}>
                        {group.category}
                      </h3>
                    </div>

                    {/* Skills pills */}
                    <StaggerContainer className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <StaggerItem key={skill}>
                          <motion.span
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className={cn(
                              "inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-default",
                              "transition-all duration-200",
                              colors.pill
                            )}
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

        {/* Bottom gradient marquee */}
        <AnimatedContainer variant="fadeUp" delay={0.4} className="mt-16 overflow-hidden">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-3 whitespace-nowrap w-max"
            >
              {[
                ...skillsData.flatMap((g) => g.items),
                ...skillsData.flatMap((g) => g.items),
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg border border-border/40 bg-secondary/30 text-muted-foreground text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
