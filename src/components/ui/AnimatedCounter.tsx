"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => setDisplay(Math.round(counter.val)),
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <div className="text-center">
      <span ref={ref} className="font-display text-4xl font-bold text-text sm:text-5xl">
        {display}
        <span className="text-accent">{suffix}</span>
      </span>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
