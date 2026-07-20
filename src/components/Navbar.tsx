"use client";
import { Menu, X, Command, Moon, Sun, Terminal } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onCommandOpen: () => void;
}

export default function Navbar({ onCommandOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Local state for mobile menu animation
  const [mobileRendered, setMobileRendered] = useState(false);

  // Derive mobileRendered from mobileOpen
  if (mobileOpen && !mobileRendered) {
    setMobileRendered(true);
  }

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!mobileOpen) {
      timer = setTimeout(() => setMobileRendered(false), 250);
    }
    return () => clearTimeout(timer);
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress for the progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) : 0;
      setScrollProgress(scrolled);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial states
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onCommandOpen();
      }
    },
    [onCommandOpen]
  );

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[1.5px] bg-gradient-to-r from-primary via-violet-500 to-indigo-500 z-[100] origin-left transition-transform duration-75 ease-linear"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <header
        onKeyDown={handleKeyDown}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 opacity-0-init animate-fade-in",
          isScrolled
            ? "py-3 bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group hover:scale-[1.02] active:scale-95 transition-transform"
              aria-label="Go to top"
            >
              <div className="relative w-8 h-8 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                <Terminal size={16} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-bold text-base tracking-tight hidden sm:block">
                Varun<span className="text-gradient"></span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm transition-colors duration-200 group",
                      isActive
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground font-medium"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Command palette trigger */}
              <button
                onClick={onCommandOpen}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-secondary/60 text-muted-foreground text-xs hover:text-foreground hover:bg-secondary hover:scale-[1.04] active:scale-[0.96] transition-all duration-200"
                aria-label="Open command menu"
              >
                <Command size={11} />
                <span className="font-medium">K</span>
              </button>

              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:scale-110 active:scale-95 transition-all duration-200 relative overflow-hidden"
                  aria-label="Toggle theme"
                >
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-300",
                      theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                    )}
                  >
                    <Sun size={15} />
                  </div>
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-all duration-300",
                      theme === "dark" ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                    )}
                  >
                    <Moon size={15} />
                  </div>
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:scale-110 active:scale-95 transition-all duration-200 relative overflow-hidden"
                aria-label="Toggle mobile menu"
              >
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-300",
                    mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  )}
                >
                  <X size={16} />
                </div>
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-300",
                    mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  )}
                >
                  <Menu size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileRendered && (
          <div
            className={cn(
              "md:hidden overflow-hidden border-t border-border/50 bg-background transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <nav className="max-w-7xl mx-auto px-4 pt-3 pb-6 flex flex-col gap-0.5">
              {NAV_LINKS.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all text-left duration-300",
                      mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
                      isActive
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary font-medium"
                    )}
                    style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms' }}
                  >
                    {link.label}
                  </button>
                );
              })}

              <div
                className={cn(
                  "pt-2 pb-1 border-t border-border/40 mt-1 transition-all duration-300",
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
                style={{ transitionDelay: mobileOpen ? `${NAV_LINKS.length * 40}ms` : '0ms' }}
              >
                <button
                  onClick={onCommandOpen}
                  className="flex items-center gap-2 px-4 py-2.5 w-full rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <Command size={14} />
                  <span>Command Menu</span>
                  <span className="ml-auto text-xs border border-border px-1.5 py-0.5 rounded font-mono">
                    ⌘K
                  </span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
