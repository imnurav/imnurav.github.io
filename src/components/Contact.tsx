import { Mail, Phone, ArrowRight, Download, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { contactData } from "@/lib/data";
import { cn } from "@/lib/utils";
import AnimatedContainer, {
  StaggerContainer,
  StaggerItem,
} from "./AnimatedContainer";
import {
  LinkedinIcon,
  WhatsappIcon,
  GithubIcon,
  NpmIcon,
} from "@/components/Icons";
import {
  LINKEDIN_URL,
  WHATSAPP_URL,
  SITE_EMAIL,
  SITE_PHONE,
  GITHUB_URL,
  NPM_URL,
} from "@/lib/constants";

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
  IconComponent: React.ComponentType<{
    size?: number;
    className?: string;
    width?: number;
    height?: number;
  }>;
  style: {
    iconBg: string;
    iconBorder: string;
    iconColor: string;
    hoverBorder: string;
    hoverText: string;
  };
}

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Email",
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
    IconComponent: Mail,
    style: {
      iconBg: "bg-red-500/10",
      iconBorder: "border-red-500/20",
      iconColor: "text-red-500",
      hoverBorder: "hover:border-red-500/40",
      hoverText: "group-hover:text-red-500",
    },
  },
  {
    label: "Phone",
    value: SITE_PHONE,
    href: `tel:${SITE_PHONE}`,
    IconComponent: Phone,
    style: {
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/20",
      iconColor: "text-emerald-500",
      hoverBorder: "hover:border-emerald-500/40",
      hoverText: "group-hover:text-emerald-500",
    },
  },
  {
    label: "WhatsApp",
    value: "+91 98735 38514",
    href: WHATSAPP_URL,
    isExternal: true,
    IconComponent: WhatsappIcon,
    style: {
      iconBg: "bg-[#25D366]/10",
      iconBorder: "border-[#25D366]/25",
      iconColor: "text-[#25D366]",
      hoverBorder: "hover:border-[#25D366]/40",
      hoverText: "group-hover:text-[#25D366]",
    },
  },
  {
    label: "GitHub",
    value: "@imnurav",
    href: GITHUB_URL,
    isExternal: true,
    IconComponent: GithubIcon,
    style: {
      iconBg: "bg-foreground/5",
      iconBorder: "border-foreground/15",
      iconColor: "text-foreground",
      hoverBorder: "hover:border-foreground/30",
      hoverText: "group-hover:text-foreground",
    },
  },
  {
    label: "LinkedIn",
    value: "in/imnurav",
    href: LINKEDIN_URL,
    isExternal: true,
    IconComponent: LinkedinIcon,
    style: {
      iconBg: "bg-[#0A66C2]/10",
      iconBorder: "border-[#0A66C2]/25",
      iconColor: "text-[#0A66C2]",
      hoverBorder: "hover:border-[#0A66C2]/40",
      hoverText: "group-hover:text-[#0A66C2]",
    },
  },
  {
    label: "npm Registry",
    value: "~nurav",
    href: NPM_URL,
    isExternal: true,
    IconComponent: NpmIcon,
    style: {
      iconBg: "bg-[#CB3837]/10",
      iconBorder: "border-[#CB3837]/25",
      iconColor: "text-[#CB3837]",
      hoverBorder: "hover:border-[#CB3837]/40",
      hoverText: "group-hover:text-[#CB3837]",
    },
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background ambient lighting and architectural grid pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Fading architectural grid behind cards */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: `4rem 4rem`,
            maskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)`,
            WebkitMaskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)`,
          }}
        />

        {/* Ambient glow blobs */}
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40 dark:opacity-20" />
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none opacity-40 dark:opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get In"
          highlight="Touch"
          description={contactData.subheading}
          align="center"
        />

        {/* Main CTA card */}
        <AnimatedContainer variant="scale" className="mb-10">
          <div className="relative p-8 sm:p-12 rounded-3xl border border-border bg-card overflow-hidden text-center hover:border-primary/40 transition-all duration-300 group">
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[90px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

            <div className="relative">
              {/* Availability pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new opportunities
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl border border-primary/25 bg-primary/10 mx-auto mb-6 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-105">
                <Sparkles size={24} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                {contactData.heading}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Whether you have an engineering challenge, an open position, or
                just want to discuss backend systems, my inbox is always open.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
                <a
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  <Mail size={16} />
                  Say Hello
                  <ArrowRight size={16} />
                </a>
                <a
                  href={contactData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border bg-secondary/50 text-foreground text-sm font-semibold hover:bg-secondary transition-all hover:scale-[1.02]"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Contact & Developer Profiles grid (3x2 on desktop, 2x3 on tablet) */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTACT_CHANNELS.map((item) => (
            <StaggerItem key={item.label}>
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "relative flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:bg-secondary/40 transition-all duration-300 group hover:-translate-y-0.5 overflow-hidden",
                  item.style.hoverBorder,
                )}
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:scale-105",
                    item.style.iconBg,
                    item.style.iconBorder,
                    item.style.iconColor,
                  )}
                >
                  <item.IconComponent size={18} width={18} height={18} />
                </div>
                <div className="min-w-0 z-10">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div
                    className={cn(
                      "text-sm font-semibold truncate transition-colors text-foreground",
                      item.style.hoverText,
                    )}
                  >
                    {item.value}
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className={cn(
                    "ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all z-10",
                    item.style.hoverText,
                  )}
                />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
