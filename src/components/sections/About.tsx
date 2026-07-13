"use client";

import { FiCode, FiShield, FiBookOpen } from "react-icons/fi";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/data/siteConfig";

const highlights = [
  {
    icon: FiCode,
    title: "3+ Years Building for the Web",
    body: "Business websites, corporate sites, booking platforms, membership systems, ERP concepts, and e-commerce stores — with payment and API integrations along the way.",
  },
  {
    icon: FiShield,
    title: "Security-Conscious by Habit",
    body: "Beyond building functional websites, I approach every project with a security-first mindset — protecting user data, business information, and application workflows through secure development practices.",
  },
  {
    icon: FiBookOpen,
    title: "Engineering Mindset, Applied",
    body: "Currently pursuing a B.Tech in Mechanical Engineering at FUTMINNA. I enjoy combining that engineering discipline with software development to solve practical, real-world problems.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            A web developer who enjoys solving real business problems with code
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a web developer, entrepreneur, and Mechanical Engineering student with over three years of experience building business websites, corporate platforms, booking systems, membership platforms, ERP concepts, and e-commerce solutions. My work focuses on creating practical, scalable, and business-driven software using WordPress, PHP, JavaScript, modern web technologies, and secure development practices. I enjoy solving real-world business challenges by developing systems that streamline operations, remove unnecessary barriers, and improve efficiency through thoughtful design, payment gateway integrations, API connections, and custom functionality that makes websites and web applications genuinely useful for the businesses they serve.
              </p>
              <p>
               Beyond building functional websites, I'm passionate about developing secure, reliable, and scalable digital solutions. I believe security should never be an afterthought, so every project I build follows a security-first approach that prioritizes the protection of user information, business data, and application workflows through secure coding practices and modern web standards. I'm also a continuous learner who actively expands my knowledge through professional training, AI-assisted development technologies, cybersecurity best practices, and enterprise software architecture. Alongside my passion for technology, I have an entrepreneurial mindset that drives me to identify opportunities, solve practical problems, and develop innovative digital solutions capable of creating lasting value for businesses, organizations, and communities.
              </p>
              <p>
                Alongside my software development career, I'm currently pursuing a{" "}
                <strong className="text-text">{siteConfig.education.programme}</strong> at{" "}
                <strong className="text-text">{siteConfig.education.university}</strong> (
                {siteConfig.education.level}). In <b>2024,</b> I also undertook professional training in <b>Full-Stack Web Development</b> at <b>Artificial Intelligence Technology Ltd., Wuse, Abuja,</b> where I strengthened my practical knowledge of <b>HTML, CSS, Tailwind CSS, PHP, JavaScript, Django,</b> and modern web development practices. I continue to expand my expertise through <b>AI-assisted development tools, cybersecurity best practices,</b> and <b>enterprise software architecture</b>.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              <AnimatedCounter value={siteConfig.yearsExperience} suffix="+" label="Years Experience" />
              <AnimatedCounter value={9} suffix="+" label="Projects Delivered" />
              <AnimatedCounter value={400} suffix="L" label="Engineering Level" />
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.15 + i * 0.1}>
                <GlassCard className="flex gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="text-xl" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-text">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
