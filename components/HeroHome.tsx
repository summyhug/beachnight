"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  beachPairings,
  buildTickerPairingsOrder,
  type BeachPairing,
} from "@/data/beachPairings";
import { useDictionary } from "@/components/LanguageProvider";
import { onSamePageHashClick } from "@/lib/hashNav";

const ROTATE_MS = 6000;

export default function HeroHome() {
  const pathname = usePathname();
  const t = useDictionary();
  // Deterministic initial order avoids hydration mismatch (SSR vs client `Math.random`).
  const [pairingOrder, setPairingOrder] = useState<BeachPairing[]>(() => [...beachPairings]);
  const [tick, setTick] = useState(0);
  const [mounted, setMounted] = useState(false);

  const lines = useMemo(
    () => pairingOrder.map((p) => t.hero.noWithout(p.region, p.beach)),
    [pairingOrder, t.hero]
  );

  const i = lines.length ? tick % lines.length : 0;
  const line = lines[i] ?? "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/geo-country")
      .then((r) => r.json())
      .then((data: { country: string | null }) => {
        if (cancelled) return;
        setPairingOrder(buildTickerPairingsOrder(beachPairings, data.country));
        setTick(0);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = window.setInterval(() => setTick((x) => x + 1), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [mounted]);

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center text-center">
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
        <span className="block text-white">{t.hero.title}</span>
        <span className="block text-gold mt-2 sm:mt-3">Copacabana</span>
      </h1>

      <div className="mt-8 sm:mt-10 flex w-full min-w-0 justify-center">
        <div
          className="inline-block max-w-full min-w-0 rounded-xl border border-teal/20 bg-ocean/50 px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(0,245,212,0.06)] backdrop-blur-sm sm:px-6 sm:py-5"
          aria-live="polite"
          aria-atomic="true"
        >
          <p
            key={tick}
            className="font-body text-base leading-snug text-teal/90 hyphens-auto break-words [overflow-wrap:anywhere] sm:text-lg animate-hero-line-reveal"
          >
            {line}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex min-w-0 flex-col gap-3 self-center w-[min(100%,16rem)] sm:w-full sm:max-w-md sm:flex-row sm:self-auto sm:gap-4">
        <Link
          href="/join"
          className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center rounded-lg bg-teal px-5 py-3.5 text-center text-sm font-semibold text-ocean shadow-lg shadow-teal/10 transition hover:bg-teal/90 sm:flex-1 sm:px-6"
        >
          {t.hero.join}
        </Link>
        <Link
          href="/#about-beachnight"
          onClick={(e) =>
            onSamePageHashClick(pathname, "/#about-beachnight", e)
          }
          className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center rounded-lg border border-teal/25 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-teal/40 hover:bg-white/10 sm:flex-1 sm:px-6"
        >
          {t.hero.learnMore}
        </Link>
      </div>
    </div>
  );
}
