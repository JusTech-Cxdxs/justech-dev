import type { ExperienceItem } from "@/types";

// Ordered newest → oldest for the timeline component.
export const experience: ExperienceItem[] = [
  {
    id: "assembly-plant",
    type: "engineering",
    title: "Assembly Plant Training",
    organization: "Kewalram Chanrai Group",
    location: "Lagos, Nigeria",
    period: "July 2026 – Present",
    description:
      "Currently undergoing practical industrial training within the vehicle assembly plant, learning how a production line runs end to end under the supervision of experienced engineers.",
    highlights: [
      "Vehicle assembly processes",
      "Production workflow",
      "Quality control",
      "Manufacturing standards",
      "Assembly line operations",
      "Heavy vehicle manufacturing",
      "Industrial safety",
      "Team collaboration",
    ],
  },
  {
    id: "wheel-alignment-diagnostics",
    type: "engineering",
    title: "Wheel Alignment, Balancing & Vehicle Diagnostics",
    organization: "Kewalram Chanrai Group",
    location: "Lagos, Nigeria",
    period: "June 2026 – July 2026",
    description:
      "Performed computerized wheel alignment and balancing, and assisted with mechanical and electronic diagnostics using professional diagnostic equipment under supervision.",
    highlights: [
      "Computerized wheel alignment",
      "Computerized wheel balancing",
      "Improved vehicle stability & steering performance",
      "Diagnostic equipment for fault troubleshooting",
    ],
  },
  {
    id: "commercial-heavy-vehicle",
    type: "engineering",
    title: "Commercial, Light & Heavy Vehicle Engineering",
    organization: "Kewalram Chanrai Group",
    location: "Lagos, Nigeria",
    period: "June 2026 – July 2026",
    description:
      "Performed servicing, maintenance, and repairs on commercial, light-duty, and heavy-duty vehicles, gaining hands-on exposure across a wider vehicle range.",
    highlights: ["Isuzu", "Foton TM", "Foton Tunland", "Commercial vehicles", "Light duty vehicles", "Heavy duty vehicles"],
  },
  {
    id: "passenger-vehicle-engineering",
    type: "engineering",
    title: "Passenger Vehicle Engineering",
    organization: "Kewalram Chanrai Group",
    location: "Lagos, Nigeria",
    period: "May 2026 – June 2026",
    description:
      "Performed servicing, preventive maintenance, and repairs on passenger vehicles as part of the SIWES industrial training programme.",
    highlights: ["Jeep", "Dodge", "Chevrolet", "Mitsubishi", "Soueast", "Chery"],
  },
  {
    id: "siwes",
    type: "engineering",
    title: "Students Industrial Work Experience Scheme (SIWES)",
    organization: "Kewalram Chanrai Group",
    location: "Lagos, Nigeria",
    period: "May 2026 – Present",
    description:
      "Undertaking mandatory industrial training under experienced engineers, gaining practical, supervised knowledge of vehicle servicing, diagnostics, maintenance, repairs, workshop operations, and assembly processes. This is industrial training, not professional engineering practice — a continuous learning experience.",
  },
  {
    id: "software-development",
    type: "software",
    title: "Web Developer — Freelance & Personal Projects",
    organization: "Self-Employed",
    period: "3+ Years",
    description:
      "Building custom WordPress and PHP-based websites for real clients and personal projects — business and corporate sites, e-commerce stores, booking platforms, and membership systems — with API and payment integrations along the way.",
    highlights: [
      "Custom WordPress & PHP development",
      "WooCommerce e-commerce builds",
      "Booking & membership platforms",
      "API & payment integrations",
      "Git, GitHub & Vercel workflows",
    ],
  },
];
