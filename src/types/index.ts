// Shared TypeScript types used across data files and components.

export interface Project {
  id: string;
  title: string;
  category: string;
  description?: string;
  image?: string;
  technologies?: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
