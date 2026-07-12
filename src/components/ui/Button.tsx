import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-white shadow-[0_0_0_0_rgba(76,141,255,0.5)] hover:shadow-[0_0_24px_4px_rgba(76,141,255,0.35)] hover:-translate-y-0.5",
    secondary:
      "border border-border bg-surface text-text hover:border-accent hover:text-accent hover:-translate-y-0.5",
    ghost: "text-text hover:text-accent",
  };

  const content = (
    <>
      {children}
      {icon && <span className="text-base">{icon}</span>}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
