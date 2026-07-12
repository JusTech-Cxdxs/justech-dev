"use client";

import { FiCode, FiShield, FiBookOpen } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/data/siteConfig";

const highlights = [
  {
    icon: FiCode,
    title: "3+ Years Building for the Web",
    body: "Business websites, corporate sites, booking platforms, membership systems, ERP concepts, and e-commerce stores — with payment and API integrations along the way.",
  },
  {
    icon: FiShield,
    title: "Security-Conscious by Habit",
    body: "Beyond building functional websites, I approach every project with a security-first mindset — protecting user data, business information, and application workflows through secure development practices.",
  },
  {
    icon: FiBookOpen,
    title: "Engineering Mindset, Applied",
    body: "Currently pursuing a B.Tech in Mechanical Engineering at FUTMINNA. I enjoy combining that engineering discipline with software development to solve practical, real-world problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            A web developer who enjoys solving real business problems with code
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a web developer with over three years of experience building business
                websites, corporate websites, booking platforms, membership systems, ERP concepts,
                and e-commerce websites. My work centers on custom WordPress solutions, PHP
                development, and JavaScript — usually with payment and API integrations woven in
                to make the site actually useful for the business behind it.
              </p>
              <p>
                Beyond building functional websites, I&apos;m passionate about developing secure,
                reliable, and scalable digital solutions. I believe security should never be an
                afterthought — every project I build is approached with a security-first mindset,
                so user data, business information, and application workflows are protected through
                secure development practices and modern web standards. I continuously expand my
                knowledge of cybersecurity to strengthen the quality and resilience of what I build.
              </p>
              <p>
                Alongside development work, I&apos;m currently pursuing a{" "}
                <strong className="text-text">{siteConfig.education.programme}</strong> at{" "}
                <strong className="text-text">{siteConfig.education.university}</strong> (
                {siteConfig.education.level}). I enjoy combining that engineering knowledge with
                software development — it shapes how I think about structure, tolerances, and
                getting things reliably right, whether that&apos;s a gearbox or a checkout flow.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <AnimatedCounter value={siteConfig.yearsExperience} suffix="+" label="Years Experience" />
              <AnimatedCounter value={9} suffix="+" label="Projects Delivered" />
              <AnimatedCounter value={400} suffix="L" label="Engineering Level" />
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.15 + i * 0.1}>
                <GlassCard className="flex gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="text-xl" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-text">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
