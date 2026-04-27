"use client";

import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import StatCard from "@/components/StatCard";
import HomeHeroClient from "@/components/HomeHeroClient";
import { beachnightEvent } from "@/data/beachnightEvent";
import { useDictionary } from "@/components/LanguageProvider";

const dateDisplayClassName =
  "block font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3";

export default function Home() {
  const t = useDictionary();
  const stats = [
    { stat: "30%", label: t.home.statThreatened },
    { stat: "190+", label: t.home.statCoastlineCountries },
    { stat: "1 night", label: t.home.statOneNight },
  ];

  return (
    <>
      <HomeHeroClient />

      <WaveDivider />

      <section
        id="stats"
        className="pt-14 pb-10 sm:pt-20 sm:pb-14 px-4 bg-ocean"
        aria-labelledby="stats-heading"
      >
        <h2
          id="stats-heading"
          className="sr-only"
        >
          {t.home.statsHeading}
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <StatCard
                key={s.label}
                stat={s.stat}
                label={s.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      <section
        id="what-beachnight"
        className="pt-10 pb-14 sm:pt-14 sm:pb-20 px-4 bg-ocean"
        aria-labelledby="what-beachnight-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="what-beachnight-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-teal text-center mb-6"
          >
            {t.home.whatTitle}
          </h2>
          <p className="font-body text-lg text-white/85 text-center leading-relaxed mb-4">
            {t.home.whatBody1}
          </p>
          <p className="font-body text-white/70 text-center leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.home.whatBody2}
          </p>

          <div className="rounded-2xl border border-teal/25 bg-ocean/80 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 text-center shadow-[inset_0_1px_0_rgba(0,245,212,0.08)]">
            <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.28em] text-teal/60 font-semibold mb-4">
              {t.home.whenLabel}
            </p>
            {beachnightEvent.dateTimeIso ? (
              <time
                dateTime={beachnightEvent.dateTimeIso}
                className={dateDisplayClassName}
              >
                {beachnightEvent.dateLabel}
              </time>
            ) : (
              <span className={dateDisplayClassName}>
                {beachnightEvent.dateLabel}
              </span>
            )}
            <p className="font-display text-xl sm:text-2xl text-gold font-semibold mb-2">
              {beachnightEvent.timeLabel}
            </p>
            <p className="font-body text-sm text-white/65 max-w-md mx-auto leading-relaxed">
              {beachnightEvent.timeNote}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-ocean hover:bg-teal/90 transition-colors min-h-[44px]"
              >
                {t.home.register}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors min-h-[44px]"
              >
                {t.home.readStory}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />
    </>
  );
}
