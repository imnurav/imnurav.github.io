
import AnimatedContainer, { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import { User, TrendingUp, Zap, Search } from "lucide-react";
import SectionHeading from "./SectionHeading";
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
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-500",
    glow: "shadow-amber-500/10",
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-zinc-600/3 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Architecting"
          highlight="Scalable Systems"
          description="A little about who I am, what I do, and what drives me."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Summary */}
          <AnimatedContainer variant="slideLeft" className="space-y-6">
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-primary to-transparent rounded-full" />
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

          </AnimatedContainer>

          {/* Right — Highlight cards */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {aboutData.highlights.map((item, i) => {
              const Icon = highlightIcons[i];
              const color = highlightColors[i];
              return (
                <StaggerItem key={i}>
                  <div
                    className={cn(
                      "relative flex flex-col gap-3 p-6 rounded-2xl border backdrop-blur-sm overflow-hidden group cursor-default",
                      "bg-card border-border hover:border-border/80 shadow-card hover:shadow-card-hover",
                      "hover:-translate-y-1 hover:scale-105 transition-all duration-300"
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
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
