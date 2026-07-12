import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, siteConfig } from "@/data/siteConfig";

const socials = [
  { label: "GitHub", href: siteConfig.github, icon: FiGithub },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: FiLinkedin },
  { label: "WhatsApp", href: siteConfig.whatsapp, icon: FaWhatsapp },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="#hero" className="font-display text-lg font-bold text-text">
              Justice<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-text">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-text">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-muted">{siteConfig.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js, Tailwind CSS & GSAP</p>
        </div>
      </div>
    </footer>
  );
}
