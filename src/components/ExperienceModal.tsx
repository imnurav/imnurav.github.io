"use client";

import { RESUME_URL, LINKEDIN_URL } from "@/lib/constants";
import { experienceData } from "@/lib/data";
import { LinkedinIcon } from "./Icons";
import { useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Sparkles,
  Download,
  MapPin,
  X,
} from "lucide-react";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience: typeof experienceData;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  experience,
}: ExperienceModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalRoles = experience.reduce(
    (acc, company) => acc + company.roles.length,
    0,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-border bg-card shadow-2xl overflow-hidden animate-scale-in">
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-border/80 bg-card/60 backdrop-blur-sm shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
              <Briefcase size={18} />
            </div>
            <div>
              <h2
                id="experience-modal-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                Full Career History
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Complete progression across all {totalRoles} roles at Khan
                Global Studies.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl border border-border/70 bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto grow space-y-10">
          {experience.map((company) => (
            <div key={company.company} className="relative">
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-8">
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
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {company.company}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mt-0.5">
                    <MapPin size={13} />
                    {company.location}
                  </div>
                </div>
              </div>

              {/* Roles Timeline */}
              <div className="relative ml-2 sm:ml-7">
                {/* Timeline vertical dashed line connecting dots */}
                <div className="absolute left-[7px] top-6 bottom-6 w-0 border-l-2 border-dashed border-primary/40" />

                <div className="space-y-6">
                  {company.roles.map((role) => (
                    <div key={role.title} className="relative pl-8">
                      {/* Timeline dot */}
                      <div className="absolute top-[22px] left-[8px] -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-violet-600 border-2 border-background flex items-center justify-center z-10 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>

                      <div className="p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
                        {/* Role Header */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Briefcase
                                size={13}
                                className="text-muted-foreground"
                              />
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-border bg-secondary text-muted-foreground">
                                {role.type}
                              </span>
                            </div>
                            <h4 className="text-base font-bold text-foreground">
                              {role.title}
                            </h4>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-full border border-border/50">
                            <Calendar size={11} />
                            {role.period}
                          </div>
                        </div>

                        {/* Metrics */}
                        {role.metrics && role.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-3.5">
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
                        <ul className="space-y-2 mb-4">
                          {role.achievements.map((ach, ai) => (
                            <li
                              key={ai}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed text-justify"
                            >
                              <CheckCircle2
                                size={14}
                                className="mt-1 flex-shrink-0 text-zinc-500"
                              />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        {role.tech && role.tech.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                            {role.tech.map((t, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded-md bg-secondary/60 border border-border text-[11px] font-medium text-foreground/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-border/80 bg-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Need a detailed copy? Download the latest verified resume PDF.
          </p>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-sm cursor-pointer"
            >
              <Download size={13} />
              Download Resume
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-card text-xs font-semibold text-foreground hover:bg-secondary transition-all cursor-pointer"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
