"use client";

import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "../ui/nav-link";
import { Logo } from "../ui/logo";
import { useState } from "react";

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

const MenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative h-12 w-12 md:hidden flex justify-center items-center rounded-full hover:bg-muted/80 transition-all"
    aria-label="Toggle menu"
  >
    {isOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )}
  </button>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-[1fr_auto_1fr] px-4 sm:px-6 md:px-8 py-4 items-center"
        >
          {/* Left Navigation - Hidden on Mobile */}
          <motion.div
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <NavLink href="/">ABOUT</NavLink>
              <div className="h-2 w-2 bg-primary rounded-full" />
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

          {/* Mobile Menu Button - Visible only on Mobile */}
          <div className="flex md:hidden">
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          {/* Center Logo */}
          <Logo />

          {/* Right Navigation - Hidden on Mobile */}
          <motion.div
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
            className="hidden md:flex items-center justify-end"
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

          {/* Mobile Menu Button - Right Side */}
          <div className="flex md:hidden justify-end">
            <div className="w-6" /> {/* Spacer to maintain grid alignment */}
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-12 px-4"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-3xl font-bold relative group"
              >
                <NavLink href="/">ABOUT</NavLink>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-3xl font-bold relative group"
              >
                <NavLink href="/">PROJECTS</NavLink>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                    },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-3xl font-bold relative group"
              >
                <NavLink href="/">CONTACT</NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
