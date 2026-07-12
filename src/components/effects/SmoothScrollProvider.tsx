"use client";

import { useEffect, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";

// Keeps GSAP's ScrollTrigger measurements in sync after fonts/images load
// and on resize, so scroll-triggered animations don't drift out of place.
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    if ("fonts" in document) {
      document.fonts.ready.then(refresh);
    }

    return () => window.removeEventListener("load", refresh);
  }, []);

  return <>{children}</>;
}
