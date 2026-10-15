"use client";

import { X, Code2, ArrowUpRight } from "lucide-react";
import type { SkillCategory } from "@/types";
import { GITHUB_URL } from "@/lib/constants";
import { GithubIcon } from "./Icons";
import { useEffect } from "react";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skills: SkillCategory[];
}

export default function SkillsModal({
  isOpen,
  onClose,
  skills,
}: SkillsModalProps) {
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

  const totalSkillsCount = skills.reduce(
    (acc, category) => acc + category.items.length,
    0,
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="skills-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl border border-border bg-card shadow-2xl overflow-hidden animate-scale-in">
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-border/80 bg-card/60 backdrop-blur-sm shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-sm">
              <Code2 size={18} />
            </div>
            <div>
              <h2
                id="skills-modal-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                All Skills &amp; Technologies
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Complete breakdown across backend, cloud infrastructure,
                databases, and tooling.
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
        <div className="p-6 sm:p-8 overflow-y-auto grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-secondary/20 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-md border border-border bg-card text-foreground/80 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-border/80 bg-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Showing all {skills.length} categories ({totalSkillsCount} tools
            &amp; technologies).
          </p>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            View GitHub Profile
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
