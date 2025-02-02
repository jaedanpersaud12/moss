import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        border: "hsl(var(--border))",
        star: {
          red: "var(--star-red)",
          pink: "var(--star-pink)",
          mint: "var(--star-mint)",
          purple: "var(--star-purple)",
          green: "var(--star-green)",
          rose: "var(--star-rose)",
          cyan: "var(--star-cyan)",
          lavender: "var(--star-lavender)",
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      fairyTail: ["FairyTail", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
