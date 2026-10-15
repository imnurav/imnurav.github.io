"use client";

import AnimatedContainer from "./AnimatedContainer";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { experienceData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  CheckCircle2,
  Briefcase,
  Calendar,
  Sparkles,
  MapPin,
} from "lucide-react";
import ExperienceModal from "./ExperienceModal";

const FEATURED_ROLES_LIMIT = 2;

// Custom hook for simple intersection observer for lists
function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isInView };
}

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalRoles = experienceData.reduce(
    (acc, company) => acc + company.roles.length,
    0,
  );

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background ambient lighting and fading grid pattern behind cards */}
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

        <div className="absolute top-1/4 right-0 w-[500px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-40 dark:opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full opacity-30 dark:opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Career"
          title="Work"
          highlight="Experience"
          description="My track record building software in production."
          align="center"
        />

        {experienceData.map((company) => {
          const displayRoles = company.roles.slice(0, FEATURED_ROLES_LIMIT);

          return (
            <div key={company.company} className="relative">
              {/* Company header */}
              <AnimatedContainer
                variant="fadeUp"
                className="flex items-center gap-4 mb-10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card">
                  <Image
                    src={company.logo}
                    alt={`${company.company} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain p-1.5"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{company.company}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
                    <MapPin size={13} />
                    {company.location}
                  </div>
                </div>
              </AnimatedContainer>

              {/* Vertical timeline */}
              <div className="relative ml-2 sm:ml-7">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-6 bottom-6 w-0 border-l-2 border-dashed border-primary/40" />

                <div className="space-y-6">
                  {displayRoles.map((role, ri) => {
                    return (
                      <AnimatedContainer
                        key={role.title}
                        variant="fadeUp"
                        delay={ri * 0.1}
                        className="relative pl-8"
                      >
                        {/* Timeline dot */}
                        <div className="absolute top-[22px] left-[8px] -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-violet-600 border-2 border-background flex items-center justify-center z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>

                        {/* Card */}
                        <div className="relative p-5 sm:p-6 rounded-2xl border border-border bg-card hover:bg-secondary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden hover:-translate-y-1">
                          <div className="relative">
                            {/* Role header */}
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Briefcase
                                    size={13}
                                    className="text-muted-foreground"
                                  />
                                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-border/50 bg-secondary/50 text-muted-foreground">
                                    {role.type}
                                  </span>
                                </div>
                                <h4 className="text-base font-bold">
                                  {role.title}
                                </h4>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-full border border-border/40">
                                <Calendar size={11} />
                                {role.period}
                              </div>
                            </div>

                            {/* Key Impact Metrics */}
                            {role.metrics && role.metrics.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {role.metrics.map((metric, mi) => (
                                  <span
                                    key={mi}
                                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold"
                                  >
                                    <Sparkles size={10} />
                                    {metric}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Achievements (text-justify) */}
                            <RoleAchievements
                              achievements={role.achievements}
                            />

                            {/* Tech Stack */}
                            {role.tech && role.tech.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/50">
                                {role.tech.map((t, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary/50 border border-border text-[11px] font-semibold text-muted-foreground"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </AnimatedContainer>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Full Career Timeline Trigger */}
        <AnimatedContainer
          variant="fadeUp"
          delay={0.25}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary/60 text-sm font-semibold text-foreground hover:border-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm group cursor-pointer"
          >
            <Briefcase
              size={15}
              className="text-primary group-hover:rotate-12 transition-transform duration-200"
            />
            <span>View Full Career Timeline</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {totalRoles} roles
            </span>
          </button>
        </AnimatedContainer>

        {/* Experience Modal */}
        <ExperienceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          experience={experienceData}
        />
      </div>
    </section>
  );
}

// Extracted component for role achievements with text-justify
function RoleAchievements({ achievements }: { achievements: string[] }) {
  const { ref, isInView } = useInView();

  return (
    <ul ref={ref} className={cn("space-y-2", isInView ? "stagger-active" : "")}>
      {achievements.map((achievement, ai) => (
        <li
          key={ai}
          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed text-justify opacity-0-init"
        >
          <CheckCircle2
            size={14}
            className="mt-1 flex-shrink-0 text-zinc-500"
          />
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  );
}
