"use client";
import AnimatedContainer, { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import { User, TrendingUp, Zap, Search } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import { cn } from "@/lib/utils";

const highlightIcons = [User, TrendingUp, Zap, Search];

const highlightColors = [
  {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-500",
    glow: "shadow-violet-500/10",
  },
  {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-500",
    glow: "shadow-indigo-500/10",
  },
  {
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    text: "text-sky-500",
    glow: "shadow-sky-500/10",
  },
  {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
    glow: "shadow-emerald-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-600/3 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Crafting"
          highlight="Digital Experiences"
          description="A little about who I am, what I do, and what drives me."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Summary */}
          <AnimatedContainer variant="slideLeft" className="space-y-6">
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent rounded-full" />
              <div className="space-y-4 pl-4">
                {aboutData.summary.split("\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground text-base sm:text-lg leading-relaxed"
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Tech philosophy — terminal card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-card"
            >
              {/* Terminal chrome bar */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700/60">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] text-slate-500 font-mono">engineer.ts</span>
              </div>
              {/* Code body — always dark */}
              <div className="bg-slate-950 px-5 py-4">
                <p className="text-sm font-mono leading-7 select-none">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-sky-300">engineer</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                  <br />
                  <span className="text-slate-600">&nbsp;&nbsp;</span>
                  <span className="text-blue-300">passion</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">{'"Backend Systems"'}</span>
                  <span className="text-slate-500">,</span>
                  <br />
                  <span className="text-slate-600">&nbsp;&nbsp;</span>
                  <span className="text-blue-300">craft</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">{'"Clean Code"'}</span>
                  <span className="text-slate-500">,</span>
                  <br />
                  <span className="text-slate-600">&nbsp;&nbsp;</span>
                  <span className="text-blue-300">goal</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-amber-300">{'"Ship fast, iterate faster"'}</span>
                  <br />
                  <span className="text-slate-400">{"}"}</span>
                  <span className="text-slate-500">;</span>
                </p>
              </div>
            </motion.div>
          </AnimatedContainer>

          {/* Right — Highlight cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {aboutData.highlights.map((item, i) => {
              const Icon = highlightIcons[i];
              const color = highlightColors[i];
              return (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={cn(
                      "relative flex flex-col gap-3 p-6 rounded-2xl border backdrop-blur-sm overflow-hidden group cursor-default",
                      "bg-card border-border hover:border-border/80 shadow-card hover:shadow-card-hover",
                      "transition-all duration-250"
                    )}
                  >
                    {/* Background glow on hover */}
                    <div
                      className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        color.bg
                      )}
                    />

                    {/* Icon */}
                    <div
                      className={cn(
                        "relative w-10 h-10 rounded-xl flex items-center justify-center",
                        color.bg,
                        color.border,
                        "border"
                      )}
                    >
                      <Icon
                        size={18}
                        className={cn("relative z-10", color.text)}
                      />
                    </div>

                    {/* Value */}
                    <div className="relative">
                      <div
                        className={cn(
                          "text-3xl sm:text-4xl font-bold tracking-tight",
                          color.text
                        )}
                      >
                        {item.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground mt-0.5">
                        {item.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 leading-snug">
                        {item.description}
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5">
                      <div
                        className={cn(
                          "w-full h-full rounded-tl-full",
                          color.bg
                        )}
                      />
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
