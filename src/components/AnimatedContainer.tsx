"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const variantMap = {
  fadeUp: "animate-fade-up",
  scale: "animate-scale-in",
  slideLeft: "animate-slide-left",
  slideRight: "animate-slide-right",
  stagger: "animate-fade-in", // handled by stagger container
} as const;

type AnimationVariant = keyof typeof variantMap;

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AnimationVariant;
  delay?: number; // Delay in seconds (e.g. 0.15)
  once?: boolean;
}

export default function AnimatedContainer({
  variant = "fadeUp",
  delay = 0,
  once = true,
  className,
  children,
  ...rest
}: AnimatedContainerProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: "-50px 0px" },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const animationClass = variantMap[variant];
  // Convert delay to milliseconds string to match our utilities or just use style
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0-init", // hide initially before animation
        isInView ? animationClass : "",
        className,
      )}
      style={delayStyle}
      {...rest}
    >
      {children}
    </div>
  );
}

/* Stagger children wrapper */
export function StaggerContainer({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && currentRef) observer.unobserve(currentRef);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: "-40px 0px" },
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(className, isInView ? "stagger-active" : "opacity-0-init")}
      style={delay > 0 ? { animationDelay: `${delay}s` } : {}}
      data-inview={isInView}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("transition-all duration-500", className)}
      style={{
        opacity: "var(--stagger-opacity, 0)",
        transform: "var(--stagger-transform, translateY(20px))",
      }}
    >
      {children}
    </div>
  );
}
