import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import AnimatedBackground from "@/components/effects/AnimatedBackground";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <AnimatedBackground />
      <div className="relative">
        <p className="font-mono text-sm text-accent">Error 404</p>
        <h1 className="mt-3 font-display text-6xl font-bold text-text sm:text-7xl">
          Page not <span className="text-gradient">found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          <FiArrowLeft aria-hidden /> Back to home
        </Link>
      </div>
    </main>
  );
}
