"use client";

import Image from "next/image";
import { FiAward, FiTrendingUp, FiUsers, FiHeart, FiBookOpen } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const secondaryAwards = [
  {
    id: "nuesa",
    title: "Entrepreneur of the Year",
    organization: "Nigerian Universities Engineering Students' Association (NUESA)",
    period: "2024/2025 Academic Session",
    description:
      "Recognised for entrepreneurial excellence, innovation, leadership and outstanding contribution to engineering students through technology-driven initiatives and practical problem solving.",
    image: "/images/awards/nuesa-award.jpg",
    icon: FiTrendingUp,
  },
  {
    id: "nimeche",
    title: "Entrepreneur of the Year",
    organization: "Nigerian Institution of Mechanical Engineers Students' Affiliate (NIMechE)",
    period: "2024/2025 Academic Session",
    description:
      "Awarded for demonstrating innovation, leadership and entrepreneurial excellence while contributing positively to the Mechanical Engineering community.",
    image: "/images/awards/nimeche-award.jpg",
    icon: FiAward,
  },
  {
    id: "best-graduating-student",
    title: "Best Graduating Student — Computer Science",
    organization: "Secondary School (Minor Seminary)",
    period: "Junior & Senior Secondary School",
    description:
      "The journey into technology started well before university — excelling in Computer Science at both Junior and Senior Secondary School, and graduating as the best graduating student in Computer Science overall.",
    image: "/images/awards/best-graduating-student.jpg",
    icon: FiBookOpen,
  },
];

const stats = [
  { value: 4, suffix: "", label: "Awards Received" },
  { value: 2, suffix: "", label: "Entrepreneurship Awards" },
  { value: 3, suffix: "", label: "Leadership Recognitions" },
  { value: 1, suffix: "", label: "Community Impact Project" },
];

export default function Awards() {
  return (
    <section id="awards" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Recognition</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            Awards &amp; Recognition
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A journey of leadership, innovation, entrepreneurship and humanitarian impact.
          </p>
        </ScrollReveal>

        {/* Featured award — Humanitarian */}
        <ScrollReveal delay={0.1}>
          <GlassCard className="mt-12 overflow-hidden">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-2 sm:col-span-1">
                  <Image
                    src="/images/awards/humanitarian-1.jpg"
                    alt="Humanitarian Award — photo one"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-2">
                  <Image
                    src="/images/awards/humanitarian-2.jpg"
                    alt="Humanitarian Award — photo two"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-2">
                  <Image
                    src="/images/awards/humanitarian-badge.png"
                    alt="Humanitarian Award badge"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone="signal">Featured Award</Badge>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <FiHeart aria-hidden />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-text">Humanitarian Award</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Recognised for outstanding humanitarian service and community impact through the
                  development of GKTV, a digital platform created to support student communication,
                  information sharing, peace-building initiatives, and community engagement within
                  student organisations. The award reflects a commitment to using technology to
                  create meaningful social impact.
                </p>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Other awards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {secondaryAwards.map((award, i) => (
            <ScrollReveal key={award.id} delay={0.08 * i}>
              <GlassCard className="flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-accent/50">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
                  <Image
                    src={award.image}
                    alt={`${award.title} — ${award.organization}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <award.icon aria-hidden />
                  </div>
                  <h3 className="font-display text-base font-semibold text-text">{award.title}</h3>
                  <p className="text-sm font-medium text-text">{award.organization}</p>
                  <p className="font-mono text-xs text-muted">{award.period}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{award.description}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-4 flex items-center justify-center gap-2 text-center font-mono text-[11px] text-muted">
          <FiUsers aria-hidden /> Award images pending — placeholders live in public/images/awards/
        </div>
      </div>
    </section>
  );
}
