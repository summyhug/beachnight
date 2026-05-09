"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WaveDivider from "@/components/WaveDivider";
import StatCard from "@/components/StatCard";
import HomeHeroClient from "@/components/HomeHeroClient";
import { beachnightEvent } from "@/data/beachnightEvent";
import { useDictionary } from "@/components/LanguageProvider";
import { onSamePageHashClick } from "@/lib/hashNav";

const dateDisplayClassName =
  "block font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3";

// Toggle to bring the hero stat cards back without re-wiring the section.
const SHOW_HERO_STATS = false;

export default function Home() {
  const pathname = usePathname();
  const t = useDictionary();
  const stats = [
    { stat: t.home.statThreatenedHeadline, label: t.home.statThreatened },
    { stat: t.home.statCoastlineHeadline, label: t.home.statCoastlineCountries },
    { stat: t.home.statOneNightHeadline, label: t.home.statOneNight },
  ];

  return (
    <>
      <HomeHeroClient />

      <WaveDivider />

      {SHOW_HERO_STATS ? (
        <>
          <section
            id="stats"
            className="pt-14 pb-10 sm:pt-20 sm:pb-14 px-4 bg-ocean"
            aria-labelledby="stats-heading"
          >
            <h2 id="stats-heading" className="sr-only">
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
        </>
      ) : null}

      <section
        id="about-beachnight"
        className="scroll-mt-24 pt-10 pb-14 sm:pt-14 sm:pb-20 px-4 bg-ocean"
        aria-labelledby="about-beachnight-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="about-beachnight-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-teal text-center mb-10"
          >
            {t.about.title}
          </h2>

          <div className="space-y-4 text-center lg:text-left">
            {t.about.missionP1 ? (
              <p className="font-body text-lg text-white/85 leading-relaxed">{t.about.missionP1}</p>
            ) : null}
            {t.about.missionP2 ? (
              <p className="font-body text-white/85 leading-relaxed">{t.about.missionP2}</p>
            ) : null}
            {t.about.missionP3 ? (
              <p className="font-body text-white/85 leading-relaxed">{t.about.missionP3}</p>
            ) : null}
            {t.about.missionP4 ? (
              <p className="font-body text-white/85 leading-relaxed">{t.about.missionP4}</p>
            ) : null}
            {t.about.missionP5 ? (
              <p className="font-body text-white/70 leading-relaxed">{t.about.missionP5}</p>
            ) : null}
            {t.about.missionP6 ? (
              <p className="font-body text-white/70 leading-relaxed">{t.about.missionP6}</p>
            ) : null}
          </div>
        </div>
      </section>

      <WaveDivider />

      <section
        id="participate"
        className="scroll-mt-24 pt-10 pb-14 sm:pt-14 sm:pb-20 px-4 bg-ocean"
        aria-labelledby="participate-heading"
      >
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <h2
            id="participate-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-teal text-center mb-6"
          >
            {t.about.participateTitle}
          </h2>
          <p className="font-body text-lg text-white/85 leading-relaxed mb-4">{t.about.participate1}</p>
          <p className="font-body text-white/85 leading-relaxed mb-4">
            {t.about.participate2BeforeLink}
            <Link href="/join" className="text-teal underline underline-offset-4 hover:text-teal/90">
              {t.about.participate2LinkText}
            </Link>
            {t.about.participate2AfterLink}
          </p>
          <p className="font-body text-white/85 leading-relaxed">{t.about.participate3}</p>
        </div>
      </section>

      <WaveDivider />

      <section
        id="when-beachnight"
        className="scroll-mt-24 pt-10 pb-14 sm:pt-14 sm:pb-20 px-4 bg-ocean"
        aria-labelledby="when-beachnight-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2 id="when-beachnight-heading" className="sr-only">
            {t.home.whenLabel}
          </h2>
          <div className="rounded-2xl border border-teal/25 bg-ocean/80 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 text-center shadow-[inset_0_1px_0_rgba(0,245,212,0.08)]">
            <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.28em] text-teal/60 font-semibold mb-4">
              {t.home.whenLabel}
            </p>
            {beachnightEvent.dateTimeIso ? (
              <time dateTime={beachnightEvent.dateTimeIso} className={dateDisplayClassName}>
                {beachnightEvent.dateLabel}
              </time>
            ) : (
              <span className={dateDisplayClassName}>{t.home.whenDateTbd}</span>
            )}
            <p className="font-display text-xl sm:text-2xl text-gold font-semibold mb-2">
              {t.home.whenTimeLabel}
            </p>
            <p className="font-body text-sm text-white/65 max-w-md mx-auto leading-relaxed">
              {t.home.whenTimeNote}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-ocean hover:bg-teal/90 transition-colors min-h-[44px]"
              >
                {t.home.register}
              </Link>
              <Link
                href="/#about-beachnight"
                onClick={(e) => onSamePageHashClick(pathname, "/#about-beachnight", e)}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors min-h-[44px]"
              >
                {t.home.readStory}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section
        id="about-me"
        className="scroll-mt-24 pt-10 pb-16 sm:pt-14 sm:pb-24 px-4 bg-ocean"
        aria-labelledby="about-me-heading"
      >
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <h2
            id="about-me-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-teal text-center mb-6"
          >
            {t.about.aboutMeTitle}
          </h2>
          <p className="font-body text-lg text-white/85 leading-relaxed">{t.about.aboutMe}</p>
        </div>
      </section>

      <WaveDivider />
    </>
  );
}
