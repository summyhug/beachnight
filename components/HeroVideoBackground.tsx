"use client";

import { useEffect, useRef } from "react";

/** Supabase Storage (public bucket) — Beachnight hero loop */
export const HERO_VIDEO_MP4 =
  "https://loqdjipsghjcifukbtie.supabase.co/storage/v1/object/public/Web%20Assets/Beachnight.mp4";

export default function HeroVideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const v = ref.current;
    if (!v) return;

    const sync = () => {
      if (mq.matches) {
        v.pause();
        v.removeAttribute("autoplay");
      } else {
        v.play().catch(() => {});
      }
    };

    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ocean">
      <video
        ref={ref}
        className="absolute min-h-full min-w-full top-1/2 left-1/2 h-auto w-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src={HERO_VIDEO_MP4} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-ocean/55"
        aria-hidden
      />
    </div>
  );
}
