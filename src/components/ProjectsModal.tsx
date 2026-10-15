"use client";

import { X, FolderOpen, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/lib/data/projectsData";
import { GITHUB_URL } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import { GithubIcon } from "./Icons";
import { useEffect } from "react";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
}

export default function ProjectsModal({
  isOpen,
  onClose,
  projects,
}: ProjectsModalProps) {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="projects-modal-title"
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
              <FolderOpen size={18} />
            </div>
            <div>
              <h2
                id="projects-modal-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                All Projects
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                A complete collection of open-source libraries, production
                systems, and developer tools.
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

        {/* Modal Body: Clean 2-column Grid of Project Cards */}
        <div className="p-6 sm:p-8 overflow-y-auto grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-border/80 bg-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Showing all {projects.length} repositories and applications.
          </p>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            Explore all on GitHub
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
