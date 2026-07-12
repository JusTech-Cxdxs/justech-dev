"use client";

import type { ReactNode } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/lib/utils";

// Generic scroll-triggered reveal wrapper — used to fade/slide sections
// and cards into view as the user scrolls, without repeating GSAP setup
// in every section component.
export default function ScrollReveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useGsapReveal<HTMLDivElement>({ delay });
  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}
