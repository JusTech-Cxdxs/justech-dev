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
  image: "/images/projects/onutera_img.jpg",
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
  id: "safeweb-lithuania-website",
  title: "SafeWeb Lithuania",
  category: "Business Website",
  description:
    "A corporate website developed for SafeWeb, a Lithuania-based IT and cybersecurity company, showcasing enterprise technology services, cybersecurity solutions, cloud infrastructure, and secure digital platforms with a modern, performance-focused user experience.",
  image: "/images/projects/safeweb_img.jpg",
  technologies: [
    "WordPress",
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3"
  ],
  features: [
    "Enterprise IT & cybersecurity website",
    "Performance-optimized and SEO-ready",
    "Security-focused architecture & secure forms",
    "Fully responsive across desktop, tablet & mobile"
  ],
  githubUrl: "#",
  liveUrl: "https://safeweb.lt/",
  featured: true,
},
  {
  id: "gktv-media-platform",
  title: "GKTV Media Platform",
  category: "Business Website",
  description:
    "A campus media and community platform delivering trusted news, verified updates, student engagement, vendor services, and humanitarian fundraising in a secure, user-friendly digital ecosystem.",
  image: "/images/projects/gktv_img.jpg",
  technologies: [
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML5",
    "CSS3",
    "WordPress"
  ],
  features: [
    "Campus news & community engagement platform",
    "NGO & humanitarian fundraising integration",
    "Verified vendor directory & student services",
    "Mobile-responsive, SEO-ready & secure architecture"
  ],
  githubUrl: "#",
  liveUrl: "#",
  featured: true,
},
  {
  id: "nma-hair-beauty",
  title: "NMA Hair & Beauty",
  category: "E-Commerce",
  description:
    "A luxury multi-currency e-commerce platform built for premium hair products, delivering secure online shopping, elegant product presentation, and a seamless international checkout experience.",
  image: "/images/projects/nma_img.jpg",
  technologies: [
    "WordPress",
    "WooCommerce",
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3"
  ],
  features: [
    "Multi-currency shopping (GBP & USD)",
    "Secure payment & streamlined checkout",
    "Luxury product catalogue & order management",
    "Mobile-responsive, SEO-optimized & high-performance"
  ],
  githubUrl: "#",
  liveUrl: "#",
  featured: true,
},
  {
  id: "crypto-investment-platform",
  title: "Crypto Investment Platform",
  category: "Web Application",
  description:
    "A modern fintech investment platform built for managing cryptocurrency portfolios, secure deposits, investment plans, and real-time market tracking through a responsive user dashboard.",
  image: "/images/projects/inv_img.jpg",
  technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
  features: [
    "Secure investor dashboard & portfolio management",
    "Crypto, bank transfer & gift card deposit options",
    "Live cryptocurrency, stock & precious metal market tracking",
    "Investment plans, earnings tracking & responsive fintech UI"
  ],
  githubUrl: "#",
  liveUrl: "#",
},
  {
  id: "enterprise-erp-platform",
  title: "Enterprise ERP Platform (Ongoing)",
  category: "Web Application",
  description:
    "An enterprise ERP platform currently in development, designed to streamline business operations through integrated modules for HR, payroll, procurement, inventory, finance, CRM, sales, workshop management, and workflow automation. Built with scalability and future mobile support in mind.",
  image: "/images/projects/erp_img.jpg",
  technologies: [
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "React Native",
    "REST API"
  ],
  features: [
    "Role-based access control & secure authentication",
    "HR, payroll, CRM, inventory & procurement modules",
    "Workflow automation with real-time dashboards",
    "Currently in development with future mobile application support"
  ],
  githubUrl: "#",
  liveUrl: "#",
},
];
