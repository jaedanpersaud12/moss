"use client";

import { motion, useSpring } from "motion/react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useRef } from "react";

interface FloatingElementProps {
  children: React.ReactNode;
  amount?: number;
  className?: string;
}

export function FloatingElement({
  children,
  amount = 0.1,
  className,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Update spring values based on mouse position relative to element center
  const handleMouseMove = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = mouse.x - centerX;
    const distanceY = mouse.y - centerY;

    x.set(distanceX * amount);
    y.set(distanceY * amount);
  };

  // Update position whenever mouse moves
  if (typeof window !== "undefined") {
    handleMouseMove();
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
