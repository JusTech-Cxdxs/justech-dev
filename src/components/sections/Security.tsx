"use client";

import { FiShield } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { securityFocus } from "@/data/siteConfig";

export default function Security() {
  return (
    <section id="security" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <FiShield className="text-xl" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {securityFocus.eyebrow}
              </p>
              <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
                {securityFocus.title}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-text">
            {securityFocus.summary}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {securityFocus.description}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityFocus.pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.05 * i}>
              <GlassCard className="h-full p-6 transition-colors duration-300 hover:border-accent/50">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-text">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mt-10 max-w-3xl border-l-2 border-signal/60 pl-4 text-sm italic leading-relaxed text-muted">
            {securityFocus.disclaimer}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
