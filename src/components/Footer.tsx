"use client";
import { FOOTER_SOCIALS, SITE_AUTHOR } from "@/lib/constants";
import { ArrowUp, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background pt-20 pb-12 border-t border-border overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo & branding */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="w-10 h-10 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-300 group-hover:bg-primary">
              <Terminal
                size={20}
                className="text-primary group-hover:text-primary-foreground transition-colors"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl tracking-tight mb-2">
              {SITE_AUTHOR}
              {/* <span className="text-primary">.</span> */}
            </h3>
            <p className="text-base sm:text-lg font-medium text-muted-foreground max-w-md mx-auto leading-relaxed">
              Software Engineer crafting beautiful, dynamic, and
              high-performance digital experiences.
            </p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {FOOTER_SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-secondary/30 text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary transition-all duration-200"
              aria-label={label}
            >
              <Icon size={18} className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          {[
            "About",
            "Experience",
            "Skills",
            "Projects",
            "Education",
            "Contact",
          ].map((item) => (
            <button
              key={item}
              onClick={() => {
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs font-medium text-muted-foreground/50">
          © {new Date().getFullYear()} {SITE_AUTHOR}. All rights reserved.
        </p>
      </div>

      {/* Back to top */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out",
          showTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none",
        )}
      >
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-xl border border-primary/30 bg-primary/10 text-primary flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-90 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp
            size={18}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}
