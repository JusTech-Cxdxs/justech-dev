// Shared TypeScript types used across data files and components.

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export type ExperienceType = "engineering" | "software";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface JourneyItem {
  id: string;
  emoji: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0–100, used for the animated progress indicator
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export interface NavLink {
  label: string;
  href: string;
}
