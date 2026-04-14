/**
 * Utility function to merge classnames
 * Handles conditional classes and removes duplicates
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((c) => typeof c === "string")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
