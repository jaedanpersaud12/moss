"use client";

import { AnimatedText } from "./animated-text";

export function Logo() {
  return (
    <div className="px-8">
      <AnimatedText
        text="MOSS."
        as="h1"
        variant="character"
        delay={0.3}
        className="font-fairyTail text-2xl"
        characterDelay={0.07}
      />
    </div>
  );
}
