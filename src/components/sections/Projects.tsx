"use client";

import { useState, useMemo } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Projects</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            A mix of client work and personal builds — booking platforms, dealership sites, e-commerce,
            and custom WordPress solutions. Swap in real screenshots and links in{" "}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === cat
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent hover:text-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={0.04 * i}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
