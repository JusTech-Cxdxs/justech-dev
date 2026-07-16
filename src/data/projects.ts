import type { Project } from "@/types";

// Image paths point to /public/images/projects/ — drop in real screenshots
// with matching filenames and they'll appear automatically.
export const projects: Project[] = [
  {
  id: "onutera-booking-platform",
  title: "OnuTera Booking Platform",
  category: "Booking Platform",
  description:
    "A premium multi-service booking platform for hotels, apartments, car rentals, airport transfers, and exclusive lifestyle experiences, built with a secure, mobile-first architecture and seamless online reservations.",
  image: "/images/projects/onutera-booking-platform.jpg",
  technologies: [
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Payment API"
  ],
  features: [
    "Hotel, apartment & car rental bookings",
    "Host & property management portal",
    "Secure online payments & booking system",
    "Airport transfers, premium add-ons & special packages"
  ],
  githubUrl: "#",
  liveUrl: "https://onutera.com",
  featured: true,
},
  {
    id: "vehicle-dealership-platform",
    title: "Vehicle Dealership Platform",
    category: "Business Website",
    description:
      "A dealership website for showcasing vehicle inventory with filtering, detailed listings, and inquiry forms for prospective buyers.",
    image: "/images/projects/vehicle-dealership-platform.jpg",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3"],
    features: [
      "Filterable vehicle inventory",
      "Detailed vehicle listing pages",
      "Inquiry & contact forms",
      "SEO-friendly structure",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "erp-concept-automotive",
    title: "ERP Concept for Automotive Company",
    category: "Web Application",
    description:
      "A concept ERP interface exploring how an automotive business could manage inventory, service records, and workflow in one system — built to demonstrate the approach, not a deployed production system.",
    image: "/images/projects/erp-automotive-concept.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Inventory & service record concepts",
      "Role-based access control design",
      "Dashboard-driven workflow",
      "Built with future scalability in mind",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "safeweb-lithuania-website",
    title: "SafeWeb Lithuania Website",
    category: "Business Website",
    description:
      "Website build for SafeWeb, a Lithuania-based IT and cybersecurity company, developed with a security-conscious approach to match the company's own positioning.",
    image: "/images/projects/safeweb-lithuania.jpg",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3"],
    features: [
      "Security-conscious build (hardened forms, safe data handling)",
      "Corporate service presentation",
      "Performance-optimized pages",
      "Responsive across devices",
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "gktv-foundation-website",
    title: "GKTV Foundation Website",
    category: "Business Website",
    description: "A website built for the GKTV Foundation to present its work and provide a clear point of contact online.",
    image: "/images/projects/gktv-foundation.jpg",
    technologies: ["WordPress", "PHP", "CSS3"],
    features: ["Content-managed pages", "Media presentation", "Contact & inquiry forms", "Mobile-first layout"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "crypto-investment-platform",
    title: "Crypto Investment Platform",
    category: "Web Application",
    description:
      "A front-end and dashboard build for a crypto investment platform concept, focused on clear presentation of plans, balances, and account activity.",
    image: "/images/projects/crypto-investment-platform.jpg",
    technologies: ["PHP", "JavaScript", "MySQL", "CSS3"],
    features: [
      "Account dashboard layout",
      "Investment plan presentation",
      "Secure form handling patterns",
      "Responsive dashboard UI",
    ],
    githubUrl: "#",
    liveUrl: "#",
  }, 
];
