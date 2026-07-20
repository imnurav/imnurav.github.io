"use client";
import { GITHUB_URL, LINKEDIN_URL, SITE_EMAIL } from "@/lib/constants";
import { useEffect, useState, useCallback } from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";
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
  
  const [isRendered, setIsRendered] = useState(open);
  const [isVisible, setIsVisible] = useState(open);

  // Derive isRendered state from open prop to avoid setting state in effect
  if (open && !isRendered) {
    setIsRendered(true);
  }
  // Derive isVisible false from open prop during render
  if (!open && isVisible) {
    setIsVisible(false);
  }

  useEffect(() => {
    let raf: number;
    let timer: NodeJS.Timeout;

    if (open) {
      // Small delay to allow DOM to render before applying visible state
      raf = requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      timer = setTimeout(() => setIsRendered(false), 200);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [open, isVisible]);

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
      icon: <GithubIcon />,
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
      icon: <LinkedinIcon />,
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

  if (!isRendered) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[998] bg-background/60 backdrop-blur-md transition-opacity duration-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
        <div
          className={cn(
            "w-full max-w-lg bg-card backdrop-blur-xl border border-border rounded-2xl shadow-card overflow-hidden transition-all duration-200 ease-out pointer-events-auto",
            isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5"
          )}
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
        </div>
      </div>
    </>
  );
}
