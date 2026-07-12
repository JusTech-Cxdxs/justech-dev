// Small helpers for building per-page metadata on top of siteConfig.
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    ...overrides,
  };
}
