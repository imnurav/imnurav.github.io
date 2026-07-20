
import { Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { experienceData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Colors removed to maintain project consistency

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
      { rootMargin: "0px 0px -10% 0px" }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isInView };
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[600px] bg-zinc-600/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neutral-600/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Career"
          title="Work"
          highlight="Experience"
          description="My professional journey building scalable software solutions."
          align="center"
        />

        {experienceData.map((company) => (
          <div key={company.company} className="relative">
            {/* Company header */}
            <AnimatedContainer variant="fadeUp" className="flex items-center gap-4 mb-10">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-card">
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
              <div className="absolute left-[7px] top-0 bottom-0 w-0 border-l-2 border-dashed border-primary/40" />

              <div className="space-y-6">
                {company.roles.map((role, ri) => {
                  return (
                    <AnimatedContainer
                      key={role.title}
                      variant="fadeUp"
                      delay={ri * 0.1}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <div className="absolute top-[22px] left-[8px] -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-violet-600 border-2 border-background shadow-lg flex items-center justify-center z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>

                      {/* Card — standard theme hover styling */}
                      <div
                        className="relative p-5 sm:p-6 rounded-2xl border border-border bg-card hover:bg-secondary/20 transition-all duration-300 group overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1"
                      >
                        <div className="relative">
                          {/* Role header */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Briefcase size={13} className="text-muted-foreground" />
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-border/50 bg-secondary/50 text-muted-foreground">
                                  {role.type}
                                </span>
                              </div>
                              <h4 className="text-base font-bold">{role.title}</h4>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-full border border-border/40">
                              <Calendar size={11} />
                              {role.period}
                            </div>
                          </div>

                          {/* Achievements */}
                          <RoleAchievements achievements={role.achievements} />

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
        ))}
      </div>
    </section>
  );
}

// Extracted component for role achievements to use intersection observer
function RoleAchievements({ achievements }: { achievements: string[] }) {
  const { ref, isInView } = useInView();
  
  return (
    <ul
      ref={ref}
      className={cn("space-y-2", isInView ? "stagger-active" : "")}
    >
      {achievements.map((achievement, ai) => (
        <li
          key={ai}
          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed opacity-0-init"
        >
          <CheckCircle2
            size={14}
            className="mt-1 flex-shrink-0 text-zinc-500"
          />
          {achievement}
        </li>
      ))}
    </ul>
  );
}
