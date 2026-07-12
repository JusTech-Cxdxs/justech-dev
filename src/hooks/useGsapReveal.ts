"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface RevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
}

// Generic scroll-triggered fade/slide-up reveal for a single element.
export function useGsapReveal<T extends HTMLElement>({
  y = 32,
  duration = 0.8,
  delay = 0,
  start = "top 85%",
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start },
        }
      );
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export { ScrollTrigger };
