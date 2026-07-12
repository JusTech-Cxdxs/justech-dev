"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="section-offset relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">My Journey</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-2xl font-bold text-text sm:text-3xl">
            Steady growth, one step at a time
          </h2>
        </ScrollReveal>

        <ol className="mt-10 space-y-4">
          {journey.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.04 * i} as="li">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-colors duration-300 hover:border-accent/40">
                <span className="text-xl" aria-hidden>{item.emoji}</span>
                <p className="text-sm leading-relaxed text-text">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
