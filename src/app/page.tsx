"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { FloatingElement } from "@/components/ui/floating-element";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-[90vh] flex flex-col justify-center px-7 gap-4 relative overflow-hidden">
        {/* Content */}
        <FloatingElement
          amount={0.02}
          className="flex justify-start relative z-20"
        >
          <AnimatedText
            text="DESIGN"
            variant="character"
            delay={1}
            className="text-[clamp(3rem,10vw,120px)] text-muted-foreground font-bold tracking-tight"
          />
        </FloatingElement>

        <FloatingElement
          amount={0.03}
          className="flex justify-center relative z-20"
        >
          <AnimatedText
            text="FOR"
            variant="character"
            delay={1.5}
            className="text-[clamp(2.5rem,8vw,100px)] text-muted-foreground font-bold tracking-tight"
          />
        </FloatingElement>

        <FloatingElement
          amount={0.04}
          className="flex justify-end relative z-20"
        >
          <AnimatedText
            text="FUN"
            variant="character"
            delay={2}
            className="text-[clamp(3rem,10vw,120px)] text-muted-foreground font-bold tracking-tight"
          />
        </FloatingElement>

        {/* Background shapes evenly distributed */}
        <FloatingElement
          amount={0.05}
          className="absolute top-[40%] left-[2%] w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw] opacity-0 animate-fade-in [animation-delay:2.5s] [animation-fill-mode:forwards] z-0"
        >
          <div className="w-full aspect-[7/4] relative rounded-3xl overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/74/13/44/741344844a50c2ec35b0cb192f5049be.jpg"
              alt="Abstract design element"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw"
              priority
            />
          </div>
        </FloatingElement>

        <FloatingElement
          amount={0.06}
          className="absolute top-[15%] right-[2%] w-full max-w-[80vw] md:max-w-[50vw] lg:max-w-[40vw] opacity-0 animate-fade-in [animation-delay:2.8s] [animation-fill-mode:forwards] z-0"
        >
          <div className="w-full aspect-[10/7] relative rounded-3xl overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/32/ee/92/32ee92bf845ceaa0b9bad5163b604541.jpg"
              alt="Abstract design element"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
        </FloatingElement>
      </main>
      <div className="h-[1000px]">
        <div className="h-[1000px]">
          <div className="h-[1000px]"></div>
        </div>
      </div>
    </div>
  );
}
