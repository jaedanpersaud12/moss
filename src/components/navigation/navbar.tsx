"use client";

import { motion } from "motion/react";
import { NavLink } from "../ui/nav-link";
import { Logo } from "../ui/logo";

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

export function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-[1fr_auto_1fr] px-4 sm:px-6 md:px-8 py-4 items-center"
    >
      {/* Left Navigation */}
      <motion.div
        {...ANIMATION_CONFIG}
        transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
        className="flex items-center gap-4"
      >
        <div className="flex items-center gap-4">
          <NavLink href="/">ABOUT</NavLink>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              ...ANIMATION_CONFIG.transition,
              delay: 0.8,
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
          <NavLink href="/">PROJECTS</NavLink>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            ...ANIMATION_CONFIG.transition,
            delay: 0.4,
          }}
          className="h-px bg-border flex-grow ml-4 origin-left"
        />
      </motion.div>

      {/* Center Logo */}
      <Logo />

      {/* Right Navigation */}
      <motion.div
        {...ANIMATION_CONFIG}
        transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
        className="flex items-center justify-end"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            ...ANIMATION_CONFIG.transition,
            delay: 0.4,
          }}
          className="h-px bg-border flex-grow mr-4 origin-right"
        />
        <div className="flex items-center">
          <NavLink href="/">CONTACT</NavLink>
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              ...ANIMATION_CONFIG.transition,
              delay: 0.8,
            }}
            className="ml-4 text-primary"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 37 37"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5 37C18.463 26.7953 10.1945 18.5343 0 18.5343C10.2173 18.5343 18.5 10.2361 18.5 0C18.5368 10.2047 26.8055 18.4657 37 18.4657C26.7826 18.4657 18.5 26.7639 18.5 37Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
