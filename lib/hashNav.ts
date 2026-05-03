import type { MouseEvent } from "react";

/**
 * Next.js `<Link>` does not reliably scroll to a hash when you're already on
 * the target pathname (e.g. Home → `/#section`). Handle that case manually.
 */
export function onSamePageHashClick(
  pathname: string,
  href: string,
  e: MouseEvent<HTMLAnchorElement>
) {
  if (!href.startsWith("/#")) return;
  const id = href.slice(2);
  if (!id) return;

  const [path] = href.split("#");
  if (path !== "/" || pathname !== "/") return;

  e.preventDefault();
  window.history.replaceState(null, "", href);
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
