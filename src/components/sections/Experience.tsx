"use client";

import { FiTool, FiCode } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-offset relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Experience</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            Two tracks, one way of working
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Software development experience built over three years, running alongside hands-on
            industrial training (SIWES) in vehicle engineering — both grounded in learning by doing,
            under supervision, and being honest about what stage I&apos;m at.
          </p>
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]" aria-hidden />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <ScrollReveal key={item.id} delay={0.05 * i}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent sm:h-12 sm:w-12">
                    {item.type === "engineering" ? (
                      <FiTool aria-hidden />
                    ) : (
                      <FiCode aria-hidden />
                    )}
                  </div>

                  <GlassCard className="flex-1 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge tone={item.type === "engineering" ? "signal" : "default"}>
                        {item.type === "engineering" ? "Industrial Training" : "Software Development"}
                      </Badge>
                      <span className="font-mono text-xs text-muted">{item.period}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold text-text">{item.title}</h3>
                    <p className="text-sm text-muted">
                      {item.organization}
                      {item.location ? ` — ${item.location}` : ""}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

                    {item.highlights && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
