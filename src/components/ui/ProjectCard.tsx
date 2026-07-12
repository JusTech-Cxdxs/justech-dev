"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/types";
import GlassCard from "./GlassCard";
import Badge from "./Badge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/0 to-bg/0" />
        <Badge className="absolute left-4 top-4 bg-surface/90">{project.category}</Badge>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-xl font-semibold text-text">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-1 space-y-1.5">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-text transition-colors hover:border-accent hover:text-accent"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <FiGithub aria-hidden /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
              aria-label={`View live demo of ${project.title}`}
            >
              <FiExternalLink aria-hidden /> Live Demo
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
