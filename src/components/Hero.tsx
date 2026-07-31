import { HERO_SOCIAL_ICONS, HERO_FLOATING_ICONS } from "@/lib/constants";
import { heroData } from "@/lib/data";
import {
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />

        {/* Premium Fading Grid */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`,
            maskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)`,
            WebkitMaskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)`
          }}
        />

        {/* Ambient Glow Blobs */}
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-normal animate-pulse-slow opacity-60 dark:opacity-40" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[130px] mix-blend-normal animate-pulse-slow opacity-60 dark:opacity-40" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating icons (using standard CSS float) */}
      {HERO_FLOATING_ICONS.map(({ Icon, delay, x, y, size }, i) => (
        <div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/80 border border-border/50 text-muted-foreground backdrop-blur-sm shadow-sm animate-float`}
          style={{ left: x, top: y, animationDelay: `${delay}s` }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <div
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground opacity-0-init animate-fade-up delay-100"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-foreground">{heroData.status}</span>
              </div>
              
              <span className="text-border/80">•</span>

              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                <span className="text-foreground">{heroData.location}</span>
              </div>
            </div>

            {/* Greeting */}
            <div
              className="space-y-2 opacity-0-init animate-fade-up delay-200"
            >
              <p className="text-muted-foreground font-medium text-lg">
                {heroData.greeting}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-gradient">{heroData.name}</span>
              </h1>
            </div>

            {/* Titles */}
            <div
              className="flex flex-wrap gap-3 opacity-0-init animate-fade-up delay-300"
            >
              {[heroData.title, heroData.subtitle].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/70 border border-border/50 text-sm font-semibold text-foreground/80"
                >
                  <Sparkles size={13} className="text-zinc-500" />
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl opacity-0-init animate-fade-up delay-400 text-justify"
            >
              {heroData.description}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-3 opacity-0-init animate-fade-up delay-500"
            >
              <a
                href={heroData.cta.primary.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-violet-600 text-white font-semibold text-sm shadow-primary hover:shadow-primary-hover hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                {heroData.cta.primary.label}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href={heroData.cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border/80 hover:scale-105 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                <Download size={15} />
                {heroData.cta.secondary.label}
              </a>
            </div>

            {/* Socials */}
            <div
              className="flex flex-wrap items-center gap-4 opacity-0-init animate-fade-up delay-[600ms]"
            >
              <span className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">
                Find me on
              </span>
              <div className="hidden sm:block h-px w-8 bg-border" />
              <div className="flex flex-wrap items-center gap-2">
                {heroData.socials.map((social) => {
                  const Icon =
                    HERO_SOCIAL_ICONS[social.icon as keyof typeof HERO_SOCIAL_ICONS];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.icon !== "mail" ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl border border-border/60 bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon === "mail" ? (
                        <Mail size={16} />
                      ) : (
                        <Icon />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column – Glassmorphic Code Window */}
          <div
            className="hidden lg:flex justify-center items-center relative opacity-0-init animate-scale-in delay-300"
          >
            {/* Glow behind the window */}
            <div className="absolute w-[80%] h-[80%] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

            {/* The Code Window */}
            <div className="relative w-full max-w-md rounded-2xl border border-border/50 bg-zinc-950 shadow-2xl overflow-hidden animate-float">
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-zinc-900">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="mx-auto text-xs font-mono text-muted-foreground/80 font-medium">developer.ts</div>
              </div>

              {/* Window Body (Code) */}
              <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                <div className="flex gap-4">
                  <div className="flex flex-col text-right text-zinc-600 select-none">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-pink-500">const <span className="text-blue-400">developer</span> <span className="text-zinc-300">=</span> <span className="text-zinc-300">{`{`}</span></span>
                    <span className="text-zinc-300 ml-4">name: <span className="text-amber-400">&quot;{heroData.name}&quot;</span>,</span>
                    <span className="text-zinc-300 ml-4">role: <span className="text-amber-400">&quot;Backend &amp; Full Stack Engineer&quot;</span>,</span>
                    <span className="text-zinc-300 ml-4">skills: <span className="text-zinc-300">[</span></span>
                    <span className="ml-8"><span className="text-amber-400">&quot;NestJS&quot;</span><span className="text-zinc-300">, </span><span className="text-amber-400">&quot;Next.js&quot;</span><span className="text-zinc-300">,</span></span>
                    <span className="ml-8"><span className="text-amber-400">&quot;Microservices&quot;</span><span className="text-zinc-300">, </span><span className="text-amber-400">&quot;AWS&quot;</span></span>
                    <span className="text-zinc-300 ml-4">],</span>
                    <span className="text-zinc-300 ml-4">focus: <span className="text-amber-400">&quot;High-Traffic Architecture&quot;</span>,</span>
                    <span className="text-zinc-300 ml-4">status: <span className="text-emerald-400">&quot;Shipping to Production&quot;</span></span>
                    <span className="text-zinc-300">{`}`};</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards (repositioned) */}
            <div
              className="absolute -left-10 top-20 bg-background border border-border/50 rounded-2xl px-5 py-3 shadow-xl animate-float-delayed"
            >
              <div className="text-2xl font-bold text-gradient">3+</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Years Exp.
              </div>
            </div>

            <div
              className="absolute -right-6 bottom-16 bg-background border border-border/50 rounded-2xl px-5 py-3 shadow-xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-2xl font-bold text-gradient">100%</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Self-Taught
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          className="flex justify-center mt-16 lg:mt-20 opacity-0-init animate-fade-in delay-[1000ms]"
        >
          <button
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest font-medium">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent" />
          </button>
        </div>
      </div>
    </section>
  );
}
