import { AnimatedText } from "@/components/ui/animated-text";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center px-7 gap-4">
      <div className="flex justify-start">
        <AnimatedText
          text="DESIGN"
          variant="character"
          delay={1}
          className="text-[clamp(3rem,10vw,120px)] text-muted-foreground font-bold tracking-tight"
        />
      </div>
      <div className="flex justify-center">
        <AnimatedText
          text="FOR"
          variant="character"
          delay={1.5}
          className="text-[clamp(2.5rem,8vw,100px)] text-muted-foreground font-bold tracking-tight"
        />
      </div>
      <div className="flex justify-end">
        <AnimatedText
          text="FUN"
          variant="character"
          delay={2}
          className="text-[clamp(3rem,10vw,120px)] text-muted-foreground font-bold tracking-tight"
        />
      </div>
    </main>
  );
}
