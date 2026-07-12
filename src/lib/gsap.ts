// Central GSAP registration point — plugins get registered here once,
// keeping "use client" GSAP setup out of individual components.
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
