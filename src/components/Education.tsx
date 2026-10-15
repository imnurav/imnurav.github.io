import { GraduationCap, Sparkles, Calendar, MapPin, Award } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import { educationData } from "@/lib/data/educationData";
import SectionHeading from "./SectionHeading";

export default function Education() {
  if (!educationData || educationData.length === 0) return null;

  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Ambient glow blobs */}
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40 dark:opacity-20" />
        <div className="absolute bottom-[10%] left-[10%] w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none opacity-30 dark:opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education & Learning"
          title="Academic &"
          highlight="Continuous Learning"
          description="Formal computer science foundations paired with hands-on, self-driven systems exploration."
          align="center"
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mt-10">
          {educationData.map((edu) => {
            const isFormal = edu.category === "formal";

            return (
              <StaggerItem key={edu.degree}>
                <div className="relative p-7 sm:p-8 rounded-3xl border border-border bg-card hover:border-primary/40 transition-all duration-300 overflow-hidden group h-full flex flex-col justify-between">
                  {/* Subtle corner ambient glow on hover */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

                  <div className="relative flex flex-col h-full">
                    {/* Top Content */}
                    <div>
                      {/* Top Row: Icon + Category on Left, Status/Grade Tag on Right */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border ${
                              isFormal
                                ? "bg-primary/10 border-primary/20 text-primary"
                                : "bg-violet-500/10 border-violet-500/20 text-violet-500"
                            }`}
                          >
                            {isFormal ? (
                              <GraduationCap size={20} />
                            ) : (
                              <Sparkles size={18} />
                            )}
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {edu.categoryLabel}
                          </span>
                        </div>

                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 border ${
                            isFormal
                              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                              : "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400"
                          }`}
                        >
                          {isFormal ? (
                            <Award size={13} />
                          ) : (
                            <Sparkles size={13} />
                          )}
                          {edu.grade}
                        </div>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
                        {edu.degree}
                      </h3>
                      <div
                        className={`text-sm font-semibold mt-1 ${
                          isFormal ? "text-primary" : "text-violet-500"
                        }`}
                      >
                        {edu.institution}
                      </div>

                      {/* Location & Period */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} />
                          {edu.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={12} />
                          {edu.period}
                        </span>
                      </div>

                      {/* Narrative Description (Clean & Crisp) */}
                      <p className="text-sm text-muted-foreground leading-relaxed mt-4 text-justify">
                        {edu.description}
                      </p>
                    </div>

                    {/* Coursework / Focus Area Pills */}
                    {edu.coursework && (
                      <div className="pt-5 border-t border-border/50 mt-6">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2.5">
                          {edu.pillTitle}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-[11px] font-medium text-foreground/80"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
