import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming & Web",
    skills: [
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "WordPress", level: 92 },
      { name: "WooCommerce", level: 85 },
      { name: "TypeScript", level: 60 },
      { name: "Next.js", level: 55 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Git & GitHub", level: 75 },
      { name: "Vercel", level: 70 },
      { name: "Python (Basic)", level: 40 },
      { name: "React Native (Learning)", level: 30 },
      { name: "GSAP", level: 55 },
    ],
  },
  {
    id: "security",
    title: "Security & Best Practices",
    skills: [
      { name: "Secure Web Development", level: 70 },
      { name: "Authentication & Authorization", level: 65 },
      { name: "Role-Based Access Control", level: 60 },
      { name: "Input Validation & Sanitization", level: 75 },
      { name: "Database Security Fundamentals", level: 60 },
      { name: "API Security Fundamentals", level: 55 },
      { name: "Web Security Best Practices", level: 65 },
      { name: "Backup & Recovery Planning", level: 55 },
    ],
  },
  {
    id: "engineering",
    title: "Engineering Skills",
    skills: [
      { name: "Vehicle Diagnostics", level: 55 },
      { name: "Preventive Maintenance", level: 65 },
      { name: "Wheel Alignment", level: 60 },
      { name: "Wheel Balancing", level: 60 },
      { name: "Commercial Vehicle Maintenance", level: 55 },
      { name: "Assembly Plant Operations", level: 50 },
      { name: "Workshop Safety", level: 70 },
      { name: "Mechanical Inspection", level: 55 },
    ],
  },
];
