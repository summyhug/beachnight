"use client";

import HeroHome from "@/components/HeroHome";
import HeroVideoBackground from "@/components/HeroVideoBackground";

/**
 * Client-only hero (video + rotating copy). Keeps the rest of the home page
 * on the server for a smaller dev HMR surface and fewer webpack chunk issues.
 */
export default function HomeHeroClient() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <HeroVideoBackground />
      <div className="relative z-10 w-full min-w-0 max-w-4xl mx-auto px-4 text-center">
        <HeroHome />
      </div>
      <a
        href="#about-beachnight"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 -m-2 text-teal/70 hover:text-teal transition-colors animate-bounce min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Scroll to highlights"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
