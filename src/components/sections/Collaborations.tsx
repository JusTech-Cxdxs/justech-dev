"use client";

import { FiGlobe } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { collaborations } from "@/data/siteConfig";

export default function Collaborations() {
  if (!collaborations?.length) return null;

  return (
    <section id="collaborations" className="section-offset relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Reach</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-2xl font-bold text-text sm:text-3xl">
            Working across borders
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {collaborations.map((c, i) => (
            <ScrollReveal key={c.region} delay={0.05 * i}>
              <GlassCard className="flex items-start gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FiGlobe aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-text">{c.region}</h3>
                  <p className="mt-1 text-sm text-muted">{c.description}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
