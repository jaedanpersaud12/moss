"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

export const ANIMATION_CONFIG = {
  base: {
    y: 12,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 25,
    mass: 0.5,
    restDelta: 0.001,
  },
} as const;

interface AnimatedTextProps extends Omit<HTMLMotionProps<"div">, "children"> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "mask" | "slide" | "character";
  delay?: number;
  className?: string;
  characterDelay?: number;
  maskGradient?: string;
}

export function AnimatedText({
  text,
  as: Component = "p",
  variant = "slide",
  delay = 0,
  className,
  characterDelay = 0.07,
  maskGradient = "linear-gradient(180deg,transparent 0%,hsl(var(--foreground)) 50%,hsl(var(--foreground)) 100%)",
  ...props
}: AnimatedTextProps) {
  if (variant === "character") {
    return (
      <motion.div
        initial={ANIMATION_CONFIG.base}
        animate={ANIMATION_CONFIG.animate}
        transition={{ ...ANIMATION_CONFIG.transition, delay }}
        className={cn("overflow-hidden", className)}
        {...props}
      >
        <Component className="relative">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...ANIMATION_CONFIG.transition,
                delay: delay + index * characterDelay,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </Component>
      </motion.div>
    );
  }

  if (variant === "mask") {
    return (
      <motion.div
        initial={ANIMATION_CONFIG.base}
        animate={ANIMATION_CONFIG.animate}
        transition={{ ...ANIMATION_CONFIG.transition, delay }}
        className={cn("overflow-hidden", className)}
        {...props}
      >
        <Component className="relative">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 mask-animate"
              style={{ background: maskGradient }}
            />
            <motion.div
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ...ANIMATION_CONFIG.transition,
                delay: delay + 0.1,
              }}
            >
              {text}
            </motion.div>
          </div>
        </Component>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={ANIMATION_CONFIG.base}
      animate={ANIMATION_CONFIG.animate}
      transition={{ ...ANIMATION_CONFIG.transition, delay }}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <Component>{text}</Component>
    </motion.div>
  );
}
