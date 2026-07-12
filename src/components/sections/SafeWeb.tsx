"use client";

import { FiShield, FiExternalLink } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { safeWeb } from "@/data/siteConfig";

export default function SafeWeb() {
  return (
    <section id="safeweb" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Featured Collaboration</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard className="mt-6 overflow-hidden">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <FiShield className="text-4xl" aria-hidden />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-bold text-text sm:text-3xl">
                    {safeWeb.name}
                  </h2>
                  <Badge>{safeWeb.location}</Badge>
                </div>
                <p className="mt-1 font-mono text-sm text-accent">{safeWeb.tagline}</p>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
                  {safeWeb.description}
                </p>

                <div className="mt-5 rounded-xl border border-border bg-surface-2 p-5">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">My Role</p>
                  <p className="mt-2 text-sm leading-relaxed text-text">{safeWeb.contribution}</p>
                </div>

                <a
                  href={safeWeb.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Visit SafeWeb <FiExternalLink aria-hidden />
                </a>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
