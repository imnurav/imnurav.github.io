"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { HERO_SOCIAL_ICONS, HERO_FLOATING_ICONS } from "@/lib/constants";
import { heroData } from "@/lib/data";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  Server,
  Layers,
  Code2,
  Mail,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const glowX = useTransform(springX, (v) => `${v}px`);
  const glowY = useTransform(springY, (v) => `${v}px`);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
    const handleMouse = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

        {/* Ambient blobs — subtle, not distracting */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-500/6 dark:bg-violet-500/5 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.95, 1.05, 1],
            x: [0, -20, 30, 0],
            y: [0, 30, -10, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-[-5%] right-[-5%] w-[550px] h-[550px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/4 blur-[110px]"
        />

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Mouse glow — subtle */}
      {isMounted && (
        <motion.div
          className="pointer-events-none absolute -z-[1] w-[400px] h-[400px] rounded-full"
          style={{
            left: glowX,
            top: glowY,
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Floating icons */}
      {HERO_FLOATING_ICONS.map(({ Icon, delay, x, y, size }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/80 border border-border/50 text-muted-foreground backdrop-blur-sm shadow-sm"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -3, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5 + i,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {heroData.status}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/50 text-muted-foreground text-xs">
                <MapPin size={11} />
                {heroData.location}
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-muted-foreground font-medium text-lg">
                {heroData.greeting}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-gradient">{heroData.name}</span>
              </h1>
            </motion.div>

            {/* Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              {[heroData.title, heroData.subtitle].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/70 border border-border/50 text-sm font-semibold text-foreground/80"
                >
                  <Sparkles size={13} className="text-violet-500" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {heroData.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href={heroData.cta.primary.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-primary hover:shadow-primary-hover transition-all duration-250"
              >
                {heroData.cta.primary.label}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <motion.a
                href={heroData.cta.secondary.href}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border/80 transition-all duration-200 backdrop-blur-sm"
              >
                <Download size={15} />
                {heroData.cta.secondary.label}
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">
                Find me on
              </span>
              <div className="h-px w-8 bg-border" />
              <div className="flex items-center gap-2">
                {heroData.socials.map((social) => {
                  const Icon =
                    HERO_SOCIAL_ICONS[social.icon as keyof typeof HERO_SOCIAL_ICONS];
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={
                        social.icon !== "mail" ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-xl border border-border/60 bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary transition-all duration-200"
                      aria-label={social.label}
                    >
                      {social.icon === "mail" ? (
                        <Mail size={16} />
                      ) : (
                        <Icon />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right column – Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Rotating ring */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-violet-500/20 animate-spin-slow" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-indigo-500/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

            {/* Glow rings */}
            <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-[40px] animate-pulse-glow" />

            {/* Image container */}
            <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden border-2 border-violet-500/25 shadow-card">
              <Image
                src="/profile.png"
                alt="Varun Kumar — Software Engineer"
                fill
                className="object-cover"
                priority
                sizes="240px"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-12 bg-background border border-border rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-2xl font-bold text-gradient">3+</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Years Exp.
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-6 bottom-16 bg-background border border-border rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-2xl font-bold text-gradient">1K+</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Jobs Processed
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <motion.button
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest font-medium">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
