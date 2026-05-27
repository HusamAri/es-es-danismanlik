/**
 * Internal link helper that respects Astro's base path.
 * - Absolute internal paths ("/foo", "/foo#bar") get the base prepended
 * - External URLs, mailto:, tel:, wa.me, "#anchor" pass through unchanged
 */
export function link(path: string): string {
  if (!path) return path;
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path; // mailto:, tel:, https://, wa.me handled via https
  if (path.startsWith("//")) return path;
  if (path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;

  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return base + path;
}
