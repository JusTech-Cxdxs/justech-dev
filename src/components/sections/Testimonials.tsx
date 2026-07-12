"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  if (total === 0) return null;

  const current = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section id="testimonials" className="section-offset relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 text-center text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            What people say
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted">
            Placeholder quotes — swap in real client feedback in{" "}
            <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs">src/data/testimonials.ts</code>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard className="relative mt-12 p-8 sm:p-12">
            <FiMessageSquare className="mb-6 text-3xl text-accent/40" aria-hidden />

            <p key={current?.id} className="text-balance text-lg leading-relaxed text-text sm:text-xl">
              &ldquo;{current?.quote}&rdquo;
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                {current?.initials}
              </div>
              <div>
                <p className="font-semibold text-text">{current?.name}</p>
                <p className="text-sm text-muted">{current?.role}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === index ? "w-6 bg-accent" : "w-1.5 bg-border"
                    )}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text hover:border-accent hover:text-accent"
                >
                  <FiChevronLeft aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text hover:border-accent hover:text-accent"
                >
                  <FiChevronRight aria-hidden />
                </button>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
