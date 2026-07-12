"use client";

import {
  FiGlobe,
  FiBriefcase,
  FiShoppingCart,
  FiTool,
  FiZap,
  FiLayout,
  FiCalendar,
  FiUsers,
  FiRefreshCw,
  FiLink,
  FiShield,
  FiCode,
} from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/services";

const iconMap: Record<string, typeof FiGlobe> = {
  "business-websites": FiGlobe,
  "corporate-websites": FiBriefcase,
  "wordpress-development": FiLayout,
  "ecommerce-development": FiShoppingCart,
  "secure-web-development": FiShield,
  "website-maintenance": FiTool,
  "website-optimization": FiZap,
  "custom-php-development": FiCode,
  "landing-pages": FiLayout,
  "booking-systems": FiCalendar,
  "membership-platforms": FiUsers,
  "website-redesign": FiRefreshCw,
  "api-integration": FiLink,
};

export default function Services() {
  return (
    <section id="services" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Services</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            What I can build for your business
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.id] ?? FiGlobe;
            return (
              <ScrollReveal key={service.id} delay={0.04 * i}>
                <GlassCard className="h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="text-xl" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
