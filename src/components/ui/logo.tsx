"use client";

import { motion } from "motion/react";

const ANIMATION_CONFIG = {
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
};

export function Logo() {
  return (
    <motion.div
      {...ANIMATION_CONFIG}
      transition={{ ...ANIMATION_CONFIG.transition, delay: 0.3 }}
      className="px-8 overflow-hidden"
    >
      <h1 className="font-fairyTail text-2xl relative text-foreground">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--foreground))_50%,hsl(var(--foreground))_100%)] mask-animate" />
          <div className="relative">
            {["M", "O", "S", "S", "."].map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...ANIMATION_CONFIG.transition,
                  delay: 0.5 + index * 0.07,
                }}
                className="inline-block"
              >
                {char === "." ? (
                  <span className="text-primary text-3xl">{char}</span>
                ) : (
                  char
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </h1>
    </motion.div>
  );
}
