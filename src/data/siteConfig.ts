/**
 * Single source of truth for site-wide content.
 * Edit this file (and the other files in /data) to update copy without
 * touching component code. Fields marked "placeholder" should be swapped
 * for real values before going live.
 */

export const siteConfig = {
  name: "Justice Enefola",
  title: "Web Developer | WordPress Specialist | Custom Website & E-commerce Solutions",
  shortTitle: "Web Developer & WordPress Specialist",
  url: "https://justiceenefola.dev", // placeholder — swap for the real domain
  ogImage: "/og-image.png",
  description:
    "Portfolio of Justice Enefola, a Lagos-based web developer specializing in WordPress, custom PHP, and e-commerce solutions, building with a security-first approach.",
  keywords: [
    "Justice Enefola",
    "WordPress Developer",
    "Web Developer Lagos Nigeria",
    "PHP Developer",
    "E-commerce Development",
    "WooCommerce",
    "SafeWeb",
    "Secure Web Development",
  ],
  location: "Lagos, Nigeria",
  email: "justice.enefola@example.com", // placeholder
  phone: "+234 000 000 0000", // placeholder
  whatsapp: "https://wa.me/234000000000", // placeholder
  github: "https://github.com/justiceenefola", // placeholder
  linkedin: "https://linkedin.com/in/justiceenefola", // placeholder
  cvUrl: "/cv/justice-enefola-cv.pdf", // placeholder — add the real file to public/cv
  profileImage: "/images/profile.jpg", // placeholder — add the real photo to public/images
  availableForProjects: true,
  yearsExperience: 3,
  education: {
    university: "Federal University of Technology Minna (FUTMINNA)",
    programme: "B.Tech. Mechanical Engineering",
    level: "400 Level",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/**
 * "Security-First Development" philosophy section.
 * Presents Justice as a developer who builds with security best practices,
 * not as a credentialed cybersecurity engineer or pentester.
 */
export const securityFocus = {
  eyebrow: "Development Philosophy",
  title: "Security-First Development",
  summary:
    "Every modern website or web application should be designed with security, reliability, and performance in mind — not as an afterthought bolted on at the end.",
  description:
    "Whenever I develop a website or application, I prioritize secure coding practices, protection of user information, and reliable system architecture. I continuously study modern cybersecurity concepts and best practices so that the solutions I build stay secure, maintainable, and trustworthy.",
  pillars: [
    {
      title: "Secure Coding Practices",
      description: "Input validation, sanitization, and defensive coding across PHP and JavaScript.",
    },
    {
      title: "Data & Database Security",
      description: "Careful handling of user information and database access, minimizing what's exposed.",
    },
    {
      title: "Authentication & Access",
      description: "Sound authentication and authorization patterns, including role-based access control.",
    },
    {
      title: "Protection Against Common Vulnerabilities",
      description: "Building with awareness of common web vulnerabilities from the start of a project.",
    },
    {
      title: "Performance & Scalability",
      description: "Systems designed to stay fast and reliable as usage and data grow.",
    },
    {
      title: "Reliable Architecture",
      description: "Structuring applications so they're maintainable, testable, and resilient over time.",
    },
  ],
  disclaimer:
    "I'm a developer who builds with security best practices at the core of my process — not a credentialed cybersecurity engineer or penetration tester.",
};

/**
 * SafeWeb — Lithuania-based IT & cybersecurity company Justice
 * collaborated with as a developer.
 */
export const safeWeb = {
  name: "SafeWeb",
  role: "Web Developer (Project Collaboration)",
  tagline: "Secure. Scalable. Enterprise-Ready.",
  location: "Lithuania, EU",
  description:
    "SafeWeb is a technology and cybersecurity company delivering secure digital infrastructure for businesses across Europe and worldwide, covering websites, applications, servers, and online platforms.",
  contribution:
    "I worked on the SafeWeb website build, contributing front-end implementation and applying the same security-conscious development approach — careful data handling, secure forms, and a hardened, performance-minded setup — that I bring to every project.",
  website: "#", // placeholder
};

/**
 * International collaboration highlights — kept general and factual;
 * add specific project names once you're ready to credit them.
 */
export const collaborations = [
  { region: "Ukraine", description: "Collaborative project work with partners based in Ukraine." },
  { region: "United States", description: "Collaborative project work with partners based in the USA." },
  { region: "European Union", description: "Collaborative project work with partners across the EU, including SafeWeb in Lithuania." },
];
