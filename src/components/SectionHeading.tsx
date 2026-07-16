"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col gap-4 mb-16",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {label && (
        <div className="inline-flex items-center gap-2">
          <div className="h-px w-6 bg-violet-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-violet-500">
            {label}
          </span>
          <div className="h-px w-6 bg-violet-500" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg text-muted-foreground leading-relaxed",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
