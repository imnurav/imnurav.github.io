

import AnimatedContainer, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedContainer";
import SectionHeading from "./SectionHeading";
import { contactData } from "@/lib/data";
import { CONTACT_COLOR_MAP, CONTACT_ITEMS, CONTACT_SOCIAL_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-zinc-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neutral-600/4 blur-[100px] rounded-full" />
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
          <div className="relative p-8 sm:p-12 rounded-3xl border border-border bg-card overflow-hidden text-center shadow-card">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-600/5 via-transparent to-neutral-600/5" />

            <div className="relative">
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl border border-primary/30 bg-primary/10 mx-auto mb-6 shadow-glow animate-float flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{contactData.heading}</h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-glow"
                >
                  Say Hello <ArrowRight size={18} />
                </a>
                <a
                  href={contactData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:bg-secondary/80 font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Contact items grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-4">
          {CONTACT_ITEMS.map((item) => (
            <StaggerItem key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-all duration-300 group shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.01]"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0",
                    CONTACT_COLOR_MAP[item.color]
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
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Social items grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {CONTACT_SOCIAL_ITEMS.map((item) => (
            <StaggerItem key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-all duration-300 group shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.01]"
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0",
                    CONTACT_COLOR_MAP[item.color]
                  )}
                >
                  <item.Icon width={18} height={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
                    {item.label} Profile
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
