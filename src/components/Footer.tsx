"use client";

import { ArrowUp, Terminal, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  LINKEDIN_URL,
  WHATSAPP_URL,
  SITE_AUTHOR,
  GITHUB_URL,
  SITE_EMAIL,
  NPM_URL,
} from "@/lib/constants";
import {
  LinkedinIcon,
  WhatsappIcon,
  GithubIcon,
  NpmIcon,
} from "@/components/Icons";

const FOOTER_SOCIALS = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    Icon: GithubIcon,
    hoverClass: "hover:text-foreground",
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    Icon: LinkedinIcon,
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    label: "Email",
    href: `mailto:${SITE_EMAIL}`,
    Icon: Mail,
    hoverClass: "hover:text-red-500",
  },
  {
    label: "npm",
    href: NPM_URL,
    Icon: NpmIcon,
    hoverClass: "hover:text-[#CB3837]",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    Icon: WhatsappIcon,
    hoverClass: "hover:text-[#25D366]",
  },
];

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
            <div className="w-10 h-10 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
              <Terminal
                size={20}
                className="text-primary group-hover:text-primary-foreground transition-colors"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl tracking-tight mb-2">
              {SITE_AUTHOR}
            </h3>
            <p className="text-sm font-medium text-muted-foreground max-w-md mx-auto leading-relaxed">
              Backend-focused Full Stack Software Engineer architecting scalable
              backend platforms, microservices, and high-concurrency
              applications.
            </p>
          </div>
        </div>

        {/* Socials with authentic brand hover colors */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {FOOTER_SOCIALS.map(({ Icon, href, label, hoverClass }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border border-border/60 bg-secondary/30 text-muted-foreground hover:bg-secondary transition-all duration-200",
                hoverClass,
              )}
              aria-label={label}
            >
              <Icon size={18} width={16} height={16} className="w-4 h-4" />
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
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted-foreground flex flex-col sm:flex-row items-center gap-2">
          <p>© {new Date().getFullYear()} Varun Kumar. All rights reserved.</p>
          <span className="hidden sm:inline text-muted-foreground/40">•</span>
          <p className="text-muted-foreground/70">
            Crafted with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 shadow-lg",
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
