import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Standard shadcn-style class merge helper.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
