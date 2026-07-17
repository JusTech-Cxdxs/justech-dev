"use client";

import { useState, type FormEvent } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "@/components/effects/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/siteConfig";

type Status = "idle" | "submitting" | "success" | "error";

const contactMethods = [
  { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FiPhone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: FaWhatsapp, label: "WhatsApp", value: "Chat on WhatsApp", href: siteConfig.whatsapp },
  { icon: FiMapPin, label: "Location", value: siteConfig.location, href: undefined },
  { icon: FiGithub, label: "GitHub", value: "View profile", href: siteConfig.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "Connect", href: siteConfig.linkedin },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-offset relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold text-text sm:text-4xl">
            Let&apos;s build something reliable
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Have a project in mind? Send a message and I&apos;ll get back to you — or reach out
            directly through any of the channels below.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Body = (
                    <GlassCard className="flex items-center gap-3 p-4 transition-colors duration-300 hover:border-accent/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <method.icon aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                          {method.label}
                        </p>
                        <p className="truncate text-sm font-medium text-text">{method.value}</p>
                      </div>
                    </GlassCard>
                  );
                  return method.href ? (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {Body}
                    </a>
                  ) : (
                    <div key={method.label}>{Body}</div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
  <div className="overflow-hidden rounded-2xl border border-border">
    <iframe
      src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
      width="100%"
      height="300"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0"
    />
  </div>
</ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-text">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={120}
                      className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-text">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-text">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={150}
                    className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={4000}
                    rows={5}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                    placeholder="Tell me a bit about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    <>
                      <FiCheck aria-hidden /> Sent
                    </>
                  ) : (
                    <>
                      <FiSend aria-hidden /> Send Message
                    </>
                  )}
                </button>

                <div role="status" aria-live="polite">
                  {status === "success" && (
                    <p className="text-sm text-success">Thanks — your message was received. I&apos;ll be in touch soon.</p>
                  )}
                  {status === "error" && <p className="text-sm text-signal">{error}</p>}
                </div>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
