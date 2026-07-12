import { cn } from "@/lib/utils";

export default function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-surface-2", className)}
      role="status"
      aria-label="Loading"
    />
  );
}
