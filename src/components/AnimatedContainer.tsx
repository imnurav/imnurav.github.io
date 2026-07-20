"use client";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const variantMap = {
  fadeUp: defaultVariants,
  scale: scaleVariants,
  slideLeft: slideLeftVariants,
  slideRight: slideRightVariants,
  stagger: staggerContainerVariants,
} as const;

type AnimationVariant = keyof typeof variantMap;

interface AnimatedContainerProps extends HTMLMotionProps<"div"> {
  variant?: AnimationVariant;
  delay?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>(
  (
    { variant = "fadeUp", delay = 0, once = true, className, children, ...rest },
    ref
  ) => {
    const variants = variantMap[variant];

    const adjustedVariants: Variants =
      delay > 0
        ? {
          hidden: variants.hidden,
          visible: {
            ...(variants.visible as object),
            transition: {
              ...((variants.visible as { transition?: object }).transition ?? {}),
              delay,
            },
          },
        }
        : variants;

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-80px" }}
        variants={adjustedVariants}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedContainer.displayName = "AnimatedContainer";

export default AnimatedContainer;

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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.07,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
