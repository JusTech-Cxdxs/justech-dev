import { cn } from "@/lib/utils";

// Ambient gradient-blob background used behind the Hero (and reused,
// dimmer, behind other sections). Pure CSS animation — cheap to render,
// no JS needed, respects prefers-reduced-motion via globals.css.
export default function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="animate-blob absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[110px]" />
      <div className="animate-blob absolute -right-24 top-1/3 h-[24rem] w-[24rem] rounded-full bg-signal/15 blur-[110px] [animation-delay:-6s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/15 blur-[110px] [animation-delay:-3s]" />
    </div>
  );
}
