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
