"use client";

import WaveDivider from "@/components/WaveDivider";
import { useDictionary } from "@/components/LanguageProvider";

export default function AboutPage() {
  const t = useDictionary();

  return (
    <>
      <section className="py-24 px-4 bg-ocean">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-teal mb-12 md:mb-16 text-center">
            {t.about.title}
          </h1>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-teal/30">
              <img
                src="/beach.png"
                alt="Moonlit beach coastline at night"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 via-transparent to-transparent" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-gold mb-6">
                {t.about.missionTitle}
              </h2>
              <p className="font-body text-white/90 leading-relaxed mb-4">
                {t.about.missionP1}
              </p>
              <p className="font-body text-white/90 leading-relaxed mb-4">
                {t.about.missionP2}
              </p>
              <p className="font-body text-white/90 leading-relaxed">
                {t.about.missionP3}
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="py-24 px-4 bg-ocean">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-teal mb-8 text-center">
            {t.about.participateTitle}
          </h2>
          <div className="space-y-4 mb-8">
            {[
              t.about.participate1,
              t.about.participate2,
              t.about.participate3,
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-teal/25 bg-ocean/80 px-5 py-4 text-white/90 font-body leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gold/30 bg-gold/10 px-5 py-4">
            <p className="font-body text-white/90 leading-relaxed">
              {t.about.dateNote}
            </p>
          </div>
        </div>
      </section>

      <WaveDivider />

      <section className="py-24 px-4 bg-ocean">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-teal mb-6 text-center">
            {t.about.aboutMeTitle}
          </h2>
          <div className="p-8 rounded-xl border border-teal/30 bg-ocean/80">
            <p className="font-body text-white/90 leading-relaxed mb-4">
              {t.about.aboutMeP1}
            </p>
            <p className="font-body text-white/90 leading-relaxed">
              {t.about.aboutMeP2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
