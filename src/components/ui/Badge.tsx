import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Badge({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "signal" | "success";
  className?: string;
}) {
  const tones: Record<string, string> = {
    default: "border-border bg-surface-2 text-muted",
    signal: "border-signal/40 bg-signal/10 text-signal",
    success: "border-success/40 bg-success/10 text-success",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
