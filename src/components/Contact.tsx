"use client";
import AnimatedContainer, { StaggerContainer, StaggerItem } from "./AnimatedContainer";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { contactData } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  ArrowRight,
  Download,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: "violet",
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactData.phone,
    href: `tel:${contactData.phone}`,
    color: "indigo",
  },
];

const socialItems = [
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: LINKEDIN_URL,
    href: contactData.linkedin,
    color: "sky",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: GITHUB_URL,
    href: contactData.github,
    color: "emerald",
  },
];

const colorMap: Record<string, string> = {
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-500",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
  sky: "bg-sky-500/10 border-sky-500/20 text-sky-500",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/4 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something"
          highlight="Amazing Together"
          description={contactData.subheading}
          align="center"
        />

        {/* Main CTA card */}
        <AnimatedContainer variant="scale" className="mb-10">
          <div className="relative p-8 sm:p-12 rounded-3xl border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden text-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-indigo-600/5" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

            <div className="relative">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 mb-6 shadow-xl shadow-violet-500/10"
              >
                <MessageSquare size={28} className="text-violet-500" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Ready to{" "}
                <span className="text-gradient">collaborate?</span>
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-md mx-auto">
                I&apos;m currently open to new opportunities. Whether it&apos;s a full-time role,
                freelance project, or just a chat — I&apos;d love to hear from you.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <motion.a
                  href={`mailto:${contactData.email}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
                >
                  <Sparkles size={15} />
                  Say Hello
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>

                <motion.a
                  href={contactData.resume}
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold text-sm hover:bg-secondary hover:border-border/80 transition-all duration-200"
                >
                  <Download size={15} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Contact items grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-4">
          {contactItems.map((item) => (
            <StaggerItem key={item.label}>
              <motion.a
                href={item.href}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-border hover:bg-background/80 transition-all duration-300 group"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0",
                    colorMap[item.color]
                  )}
                >
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {socialItems.map((item) => (
            <StaggerItem key={item.label}>
              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-border hover:bg-background/80 transition-all duration-300 group"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0",
                    colorMap[item.color]
                  )}
                >
                  <item.Icon />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
