"use client";

import { useState } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "");
  const activeCategory = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Skills</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            Tools I build with
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeId === cat.id
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent hover:text-accent"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {activeCategory && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.skills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={0.03 * i}>
                <SkillCard skill={skill} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
