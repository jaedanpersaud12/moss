import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion, useSpring } from "motion/react";
import { useState, useEffect } from "react";

const Star = ({
  baseTop,
  baseLeft,
  size,
  opacity,
  delay,
  intensity,
  color,
  blur,
}: {
  baseTop: number;
  baseLeft: number;
  size: number;
  opacity: number;
  delay: number;
  intensity: number;
  color: string;
  blur: string;
}) => {
  const mouse = useMousePosition();
  const x = useSpring(0, {
    stiffness: 150,
    damping: 15,
  });
  const y = useSpring(0, {
    stiffness: 150,
    damping: 15,
  });

  const [position, setPosition] = useState({ top: baseTop, left: baseLeft });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (mouse.x !== null && mouse.y !== null && typeof window !== "undefined") {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (mouse.x - centerX) * intensity;
      const deltaY = (mouse.y - centerY) * intensity;
      x.set(deltaX);
      y.set(deltaY);
    }
  }, [mouse.x, mouse.y, intensity, x, y]);

  const generateNewPosition = () => {
    const angle = Math.random() * Math.PI * 2;

    // Exponential radius based on size
    let radius;
    if (size >= 16) {
      radius = 60 + Math.random() * 60; // Largest stars: 60-120%
    } else if (size >= 12) {
      radius = 40 + Math.random() * 40; // Medium stars: 40-80%
    } else if (size >= 9) {
      radius = 20 + Math.random() * 30; // Small stars: 20-50%
    } else {
      radius = 10 + Math.random() * 20; // Tiny stars: 10-30%
    }

    return {
      top: 50 + Math.sin(angle) * radius,
      left: 50 + Math.cos(angle) * radius,
    };
  };

  return (
    <div
      className="absolute z-[-1]"
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <motion.svg
        key={key}
        width={size}
        height={size}
        viewBox="0 0 37 37"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color, opacity, filter: blur }}
        initial={{ scale: 0, rotate: -45 }}
        animate={{
          scale: [0, 1, 1, 1, 0],
          rotate: [-45, 0, 0, 0, -45],
        }}
        transition={{
          duration: 2,
          times: [0, 0.2, 0.4, 0.8, 1],
          repeat: 1,
          delay: delay,
        }}
        onAnimationComplete={() => {
          setPosition(generateNewPosition());
          setKey((prev) => prev + 1);
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5 37C18.463 26.7953 10.1945 18.5343 0 18.5343C10.2173 18.5343 18.5 10.2361 18.5 0C18.5368 10.2047 26.8055 18.4657 37 18.4657C26.7826 18.4657 18.5 26.7639 18.5 37Z"
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
};

export function StarBackground() {
  const colors = [
    "var(--star-red)",
    "var(--star-pink)",
    "var(--star-mint)",
    "var(--star-purple)",
    "var(--star-green)",
    "var(--star-rose)",
    "var(--star-cyan)",
    "var(--star-lavender)",
  ];

  interface StarConfig {
    baseTop: number;
    baseLeft: number;
    size: number;
    opacity: number;
    delay: number;
    intensity: number;
    color: string;
    blur: string;
  }

  const generateStarPosition = (size: number) => {
    const angle = Math.random() * Math.PI * 2;

    // Exponential radius based on size
    let radius;
    if (size >= 16) {
      radius = 60 + Math.random() * 60; // Largest stars: 60-120%
    } else if (size >= 12) {
      radius = 40 + Math.random() * 40; // Medium stars: 40-80%
    } else if (size >= 9) {
      radius = 20 + Math.random() * 30; // Small stars: 20-50%
    } else {
      radius = 10 + Math.random() * 20; // Tiny stars: 10-30%
    }

    return {
      top: 50 + Math.sin(angle) * radius,
      left: 50 + Math.cos(angle) * radius,
    };
  };

  // Calculate distance between two points
  const getDistance = (
    p1: { top: number; left: number },
    p2: { top: number; left: number }
  ) => {
    const dx = p1.left - p2.left;
    const dy = p1.top - p2.top;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const generateStarConfigs = () => {
    const configs: StarConfig[] = [];
    let attempts = 0;
    const minDistance = 8;

    while (configs.length < 150 && attempts < 500) {
      // Generate a random size first
      const size = 6 + Math.random() * 14; // 6-20px range

      // Generate position based on size
      const pos = generateStarPosition(size);

      // Check distance from all existing stars
      const tooClose = configs.some(
        (existing) =>
          getDistance(pos, { top: existing.baseTop, left: existing.baseLeft }) <
          minDistance
      );

      if (!tooClose) {
        // Calculate opacity and blur based on size for more dramatic depth effect
        const opacity =
          size >= 16 ? 1 : size >= 12 ? 0.9 : size >= 9 ? 0.5 : 0.2;
        const blur =
          size >= 12 ? "none" : size >= 9 ? "blur(0.8px)" : "blur(1.5px)";

        const config: StarConfig = {
          baseTop: pos.top,
          baseLeft: pos.left,
          size,
          opacity,
          delay: 1.8 + configs.length * 0.1,
          intensity:
            size >= 16
              ? 0.05 // Foreground stars move the most
              : size >= 12
              ? 0.03 // Middle stars move moderately
              : size >= 9
              ? 0.015 // Background stars move less
              : 0.008, // Far background stars barely move
          color: colors[configs.length % colors.length],
          blur,
        };

        configs.push(config);
      }
      attempts++;
    }
    return configs;
  };

  const starConfigs = generateStarConfigs();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="opacity-0 animate-fade-in [animation-delay:0.5s] [animation-fill-mode:forwards]">
        {starConfigs.map((config, i) => (
          <Star key={i} {...config} />
        ))}
      </div>
    </div>
  );
}
