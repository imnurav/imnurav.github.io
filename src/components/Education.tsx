"use client";

import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import AnimatedContainer from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { educationData } from "@/lib/data";
import { motion } from "framer-motion";

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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-violet-500/50 via-emerald-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <AnimatedContainer key={i} variant="slideLeft" delay={i * 0.1}>
                <div className="relative sm:pl-20">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-[26px] top-8 w-5 h-5 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 border-2 border-background shadow-lg items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative p-7 sm:p-8 rounded-3xl border border-border/50 bg-background/60 backdrop-blur-sm hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-indigo-600 to-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                    {/* Background glow */}
                    <div className="absolute inset-0 bg-violet-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-wrap items-start gap-4 mb-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center shadow-lg">
                          <GraduationCap size={24} className="text-violet-500" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold leading-snug">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                            <span className="text-sm font-semibold text-violet-500">
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
                          <motion.li
                            key={hi}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: hi * 0.08 }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 flex-shrink-0 text-violet-500"
                            />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
