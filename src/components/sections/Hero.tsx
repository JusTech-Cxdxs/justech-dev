"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";
import {
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiWordpress,
  SiWoocommerce,
} from "react-icons/si";
import { gsap } from "@/lib/gsap";
import { siteConfig } from "@/data/siteConfig";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const roles = [
  "Entrepreneur Building Digital Solutions",
  "Software Developer Creating Scalable Applications",
  "Full-Stack Developer & Technology Consultant",
  "Web Developer Specializing in Business Platforms",
  "WordPress & Custom CMS Solutions Expert",
  "E-commerce, SaaS & Automation Developer",
  "Digital Product Creator & Startup Builder",
];

const floatingIcons = [
  { Icon: SiPhp, className: "left-[6%] top-[22%]", delay: "0s" },
  { Icon: SiJavascript, className: "right-[10%] top-[18%]", delay: "1.2s" },
  { Icon: SiWordpress, className: "left-[10%] bottom-[20%]", delay: "2.1s" },
  { Icon: SiWoocommerce, className: "right-[6%] bottom-[26%]", delay: "0.6s" },
  { Icon: SiHtml5, className: "left-[22%] top-[8%]", delay: "1.8s" },
  { Icon: SiCss, className: "right-[20%] bottom-[10%]", delay: "0.3s" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Entrance animation. Guarded so a stalled/interrupted tween (backgrounded
  // tab, throttled rAF on mobile, low-power mode) can never leave the CTA
  // buttons or portrait stuck at the animation's opacity:0 starting value.
  useEffect(() => {
    const targets = [
      "[data-hero-eyebrow]",
      "[data-hero-name]",
      "[data-hero-sub]",
      "[data-hero-copy]",
      "[data-hero-cta] > *",
      "[data-hero-portrait]",
    ];

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // elements are already visible via their default CSS

    let ctx: gsap.Context | undefined;
    try {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => gsap.set(targets, { clearProps: "opacity,transform" }),
        });
        tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.6 })
          .from("[data-hero-name]", { opacity: 0, y: 24, duration: 0.8 }, "-=0.3")
          .from("[data-hero-sub]", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4")
          .from("[data-hero-copy]", { opacity: 0, y: 16, duration: 0.7 }, "-=0.5")
          .from("[data-hero-cta] > *", { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, "-=0.4")
          .from("[data-hero-portrait]", { opacity: 0, scale: 0.92, duration: 0.9 }, "-=0.9");
      }, headlineRef);
    } catch {
      // If GSAP fails to initialize for any reason, do nothing — elements
      // stay at their default (visible) CSS state instead of getting stuck.
    }

    // Hard fallback: whatever happens to the tween, force full visibility
    // shortly after mount. This is the actual guarantee — the line above
    // is best-effort polish, this is the safety net.
    const fallback = window.setTimeout(() => {
      gsap.set(targets, { clearProps: "opacity,transform" });
    }, 2500);

    return () => {
      window.clearTimeout(fallback);
      ctx?.revert();
    };
  }, []);

  // Typing animation across the role list
  useEffect(() => {
    const current = roles[roleIndex % roles.length] ?? roles[0] ?? "";
    let charIndex = 0;
    let deleting = false;
    const speed = 45;
    const pause = 1400;

    const interval = setInterval(() => {
      if (!deleting) {
        charIndex++;
        setDisplayText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          clearInterval(interval);
          setTimeout(() => setRoleIndex((i) => i + 1), pause);
        }
      }
    }, speed);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIndex]);

  return (
    <section
      id="hero"
      ref={headlineRef}
      className="section-offset relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <AnimatedBackground />

      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`animate-float-slow pointer-events-none absolute hidden text-2xl text-muted/40 md:block ${className}`}
          style={{ animationDelay: delay }}
          aria-hidden
        >
          <Icon />
        </div>
      ))}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <div data-hero-eyebrow className="mb-6 flex flex-wrap items-center gap-3">
            {siteConfig.availableForProjects && (
              <Badge tone="success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Available for Projects
              </Badge>
            )}
            <Badge>{siteConfig.location}</Badge>
          </div>

          <h1 data-hero-name className="font-display text-5xl font-bold leading-[1.05] text-text sm:text-6xl lg:text-7xl">
            Justice Enefola
          </h1>

          <div data-hero-sub className="mt-5 flex h-9 items-center font-mono text-lg text-accent sm:text-xl">
            <span aria-hidden className="mr-2 text-muted">&gt;</span>
            <span>{displayText}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent" aria-hidden />
          </div>

          <p data-hero-copy className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              Building secure business websites, e-commerce platforms, ERP concepts, and custom digital solutions with PHP, JavaScript, WordPress, Next.js, and modern web technologies. I'm also a Mechanical Engineering student, entrepreneur, and continuous learner passionate about secure software development, AI-assisted technologies, and solving real-world business challenges.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-muted">
            <span className="rounded-full border border-border px-3 py-1">PHP</span>
            <span className="rounded-full border border-border px-3 py-1">JavaScript</span>
            <span className="rounded-full border border-border px-3 py-1">HTML</span>
            <span className="rounded-full border border-border px-3 py-1">CSS</span>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent">
              React Native (Learning)
            </span>
          </div>

          <div data-hero-cta className="mt-9 flex flex-wrap gap-4">
            <Button href={siteConfig.cvUrl} external icon={<FiDownload />}>
              Download CV
            </Button>
            <Button href="#projects" variant="secondary" icon={<FiArrowRight />}>
              View Projects
            </Button>
            <Button href="#contact" variant="ghost" icon={<FiMail />}>
              Contact Me
            </Button>
          </div>
        </div>

        <div data-hero-portrait className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl">
            <Image
              src={siteConfig.profileImage}
              alt={`Portrait of ${siteConfig.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 384px, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>
          <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur">
            <p className="font-display text-2xl font-bold text-text">
              {siteConfig.yearsExperience}+
            </p>
            <p className="font-mono text-[11px] text-muted">Years Experience</p>
          </div>
          <div
            className="animate-float absolute -right-4 top-6 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="font-mono text-[11px] text-muted">Studying</p>
            <p className="text-sm font-semibold text-text">Mechanical Eng.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
