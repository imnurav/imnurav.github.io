"use client";
import { Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const roleColors = [
  "from-violet-600 to-indigo-600",
  "from-indigo-600 to-sky-600",
  "from-sky-600 to-cyan-600",
];

const roleAccents = ["violet", "indigo", "sky"];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[600px] bg-violet-600/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-600/4 blur-[100px] rounded-full" />
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
              <div className="absolute left-[6px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-indigo-500/20 to-transparent" />

              <div className="space-y-6">
                {company.roles.map((role, ri) => {
                  const accent = roleAccents[ri];
                  const gradient = roleColors[ri];
                  return (
                    <AnimatedContainer
                      key={role.title}
                      variant="fadeUp"
                      delay={ri * 0.1}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <div
                        className={cn(
                          "absolute top-[22px] w-3 h-3 rounded-full border-2 border-background z-10",
                          `bg-gradient-to-br ${gradient}`
                        )}
                        style={{ left: "6px", transform: "translateX(-50%)" }}
                      />

                      {/* Card — no x-shift on hover, only subtle scale */}
                      <motion.div
                        whileHover={{ scale: 1.005 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative p-5 sm:p-6 rounded-2xl border border-border bg-card group overflow-hidden shadow-card"
                      >
                        {/* Subtle hover tint */}
                        <div
                          className={cn(
                            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            accent === "violet" && "bg-violet-500/[0.03]",
                            accent === "indigo" && "bg-indigo-500/[0.03]",
                            accent === "sky" && "bg-sky-500/[0.03]"
                          )}
                        />

                        <div className="relative">
                          {/* Role header */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Briefcase size={13} className="text-muted-foreground" />
                                <span
                                  className={cn(
                                    "text-[11px] font-semibold px-2 py-0.5 rounded-full border",
                                    accent === "violet" && "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400",
                                    accent === "indigo" && "bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400",
                                    accent === "sky" && "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400"
                                  )}
                                >
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

                          {/* Achievements — animated once as a group when card enters view */}
                          <motion.ul
                            className="space-y-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={{
                              hidden: {},
                              visible: {
                                transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                              },
                            }}
                          >
                            {role.achievements.map((achievement, ai) => (
                              <motion.li
                                key={ai}
                                variants={{
                                  hidden: { opacity: 0, y: 6 },
                                  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                                }}
                                className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                              >
                                <CheckCircle2
                                  size={13}
                                  className={cn(
                                    "mt-0.5 flex-shrink-0",
                                    accent === "violet" && "text-violet-500",
                                    accent === "indigo" && "text-indigo-500",
                                    accent === "sky" && "text-sky-500"
                                  )}
                                />
                                {achievement}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </motion.div>
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
