"use client";

import { GITHUB_URL, LINKEDIN_URL, SITE_EMAIL } from "@/lib/constants";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  ExternalLink,
  FolderOpen,
  Briefcase,
  Download,
  Search,
  Code2,
  User,
  Mail,
  Moon,
  Home,
  Sun,
  X,
} from "lucide-react";

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  group: string;
  shortcut?: string;
}

export default function CommandMenu({ open, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const { theme, setTheme } = useTheme();

  const navigateTo = useCallback(
    (id: string) => {
      onClose();
      setTimeout(() => {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    },
    [onClose]
  );

  const commands: CommandItem[] = [
    {
      id: "home",
      label: "Go to Top",
      description: "Return to the hero section",
      icon: <Home size={16} />,
      action: () => navigateTo("top"),
      group: "Navigation",
      shortcut: "H",
    },
    {
      id: "about",
      label: "About Me",
      description: "Learn more about Varun",
      icon: <User size={16} />,
      action: () => navigateTo("about"),
      group: "Navigation",
    },
    {
      id: "experience",
      label: "Experience",
      description: "Work history & achievements",
      icon: <Briefcase size={16} />,
      action: () => navigateTo("experience"),
      group: "Navigation",
    },
    {
      id: "skills",
      label: "Skills",
      description: "Technologies & tools",
      icon: <Code2 size={16} />,
      action: () => navigateTo("skills"),
      group: "Navigation",
    },
    {
      id: "projects",
      label: "Projects",
      description: "Featured work & side projects",
      icon: <FolderOpen size={16} />,
      action: () => navigateTo("projects"),
      group: "Navigation",
    },
    {
      id: "education",
      label: "Education",
      description: "Academic background",
      icon: <GraduationCap size={16} />,
      action: () => navigateTo("education"),
      group: "Navigation",
    },
    {
      id: "contact",
      label: "Contact",
      description: "Get in touch",
      icon: <Mail size={16} />,
      action: () => navigateTo("contact"),
      group: "Navigation",
    },
    {
      id: "resume",
      label: "Download Resume",
      description: "Get a copy of my resume",
      icon: <Download size={16} />,
      action: () => {
        window.open("/resume.pdf", "_blank");
        onClose();
      },
      group: "Actions",
    },
    {
      id: "github",
      label: "GitHub Profile",
      description: GITHUB_URL,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      action: () => {
        window.open(GITHUB_URL, "_blank");
        onClose();
      },
      group: "Links",
    },
    {
      id: "linkedin",
      label: "LinkedIn Profile",
      description: LINKEDIN_URL,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      action: () => {
        window.open(LINKEDIN_URL, "_blank");
        onClose();
      },
      group: "Links",
    },
    {
      id: "email",
      label: "Send Email",
      description: SITE_EMAIL,
      icon: <ExternalLink size={16} />,
      action: () => {
        window.open(`mailto:${SITE_EMAIL}`, "_self");
        onClose();
      },
      group: "Links",
    },
    {
      id: "theme",
      label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      description: "Toggle color scheme",
      icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        onClose();
      },
      group: "Settings",
    },
  ];

  const filtered = query
    ? commands.filter(
      (c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.description?.toLowerCase().includes(query.toLowerCase()) ||
        c.group.toLowerCase().includes(query.toLowerCase())
    )
    : commands;

  const groups = Array.from(new Set(filtered.map((c) => c.group)));

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter") {
        filtered[selected]?.action();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, selected, filtered, onClose]);

  useEffect(() => {
    if (open) {
      queueMicrotask(() => {
        setQuery("");
        setSelected(0);
      });
    }
  }, [open]);

  let itemIndex = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[998] bg-background/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg bg-background/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-border/50 p-3">
                <label
                  htmlFor="command-menu-search"
                  className="group flex min-h-12 flex-1 items-center gap-3 rounded-xl border border-border/70 bg-secondary/45 px-3 shadow-inner shadow-background/20 transition-colors focus-within:border-border focus-within:bg-background/85 focus-within:shadow-sm"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-background/70 text-muted-foreground transition-colors group-focus-within:bg-primary/10 group-focus-within:text-primary">
                    <Search size={15} />
                  </span>
                  <input
                    id="command-menu-search"
                    autoFocus
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelected(0);
                    }}
                    placeholder="Type a command..."
                    className="h-12 min-w-0 flex-1 rounded-none border-0 bg-transparent text-[15px] font-medium text-foreground caret-primary outline-none placeholder:text-muted-foreground/45 focus:!outline-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!shadow-none"
                  />
                </label>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close command menu"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border/60 bg-secondary/60 text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Commands list */}
              <div className="max-h-[60vh] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    No results for &quot;{query}&quot;
                  </div>
                ) : (
                  groups.map((group) => {
                    const groupItems = filtered.filter((c) => c.group === group);
                    return (
                      <div key={group} className="mb-1">
                        <div className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                          {group}
                        </div>
                        {groupItems.map((item) => {
                          const idx = itemIndex++;
                          const isSelected = idx === selected;
                          return (
                            <button
                              key={item.id}
                              onClick={item.action}
                              onMouseEnter={() => setSelected(idx)}
                              className={cn(
                                "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                                isSelected
                                  ? "bg-secondary text-foreground"
                                  : "text-foreground hover:bg-secondary/50"
                              )}
                            >
                              <div
                                className={cn(
                                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-muted-foreground",
                                  isSelected &&
                                  "bg-primary/10 text-primary border border-primary/20"
                                )}
                              >
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium">
                                  {item.label}
                                </div>
                                {item.description && (
                                  <div className="text-xs text-muted-foreground truncate">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              {item.shortcut && (
                                <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] text-muted-foreground border border-border/60 rounded px-1.5 py-0.5 bg-background">
                                  {item.shortcut}
                                </kbd>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-border/40 px-4 py-2.5 flex items-center gap-4 text-[10px] text-muted-foreground/50">
                <span className="flex items-center gap-1">
                  <kbd className="border border-border/60 rounded px-1 py-0.5 bg-background text-muted-foreground">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="border border-border/60 rounded px-1 py-0.5 bg-background text-muted-foreground">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="border border-border/60 rounded px-1 py-0.5 bg-background text-muted-foreground">Esc</kbd>
                  Close
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
