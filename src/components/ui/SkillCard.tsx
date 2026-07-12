"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type { SkillItem } from "@/types";

export default function SkillCard({ skill }: { skill: SkillItem }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: `${skill.level}%`,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        }
      );
    });

    return () => ctx.revert();
  }, [skill.level]);

  return (
    <div className="rounded-xl border border-border bg-surface p-4 transition-colors duration-300 hover:border-accent/50">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-text">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div ref={barRef} className="h-full rounded-full bg-gradient-to-r from-accent to-signal" />
      </div>
    </div>
  );
}
