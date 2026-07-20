"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FOOTER_SOCIALS } from "@/lib/constants";
import { SITE_AUTHOR } from "@/lib/constants";
import { ArrowUp, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-border bg-background">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">V</span>
              </div>
              <span className="font-bold text-sm">
                {SITE_AUTHOR}
                <span className="text-gradient">.</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Crafted with{" "}
              <Heart size={11} className="text-rose-500 fill-rose-500" /> using
              Next.js & TypeScript
            </p>
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} {SITE_AUTHOR}. All rights reserved.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {FOOTER_SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl border border-border/60 bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary transition-all duration-200"
                aria-label={label}
              >
                <Icon size={16} className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["About", "Experience", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-110 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
