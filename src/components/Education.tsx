
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { educationData } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-emerald-600/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic"
          highlight="Background"
          description="The foundation that shaped my engineering mindset."
          align="center"
        />

        <div className="relative ml-2 sm:ml-7">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <AnimatedContainer key={i} variant="slideLeft" delay={i * 0.1}>
                <div className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute flex left-[8px] -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-violet-600 border-2 border-background shadow-lg items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div
                    className="relative p-7 sm:p-8 rounded-3xl border border-border bg-card hover:bg-secondary/20 transition-all duration-300 group overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1"
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-zinc-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-wrap items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center shadow-card">
                          <GraduationCap size={24} className="text-zinc-500" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold leading-snug">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                            <span className="text-sm font-semibold text-zinc-500">
                              {edu.institution}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <MapPin size={12} />
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar size={12} />
                              {edu.period}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold">
                          <Award size={12} />
                          {edu.grade}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-border/50 mb-5" />

                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {edu.highlights.map((highlight, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 flex-shrink-0 text-zinc-500"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
