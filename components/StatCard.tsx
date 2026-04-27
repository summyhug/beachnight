"use client";

import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  stat: string;
  label: string;
  index: number;
}

export default function StatCard({ stat, label, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl border border-teal/30 bg-ocean/80 backdrop-blur-sm transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="font-display text-3xl md:text-4xl font-bold text-teal mb-2">
        {stat}
      </p>
      <p className="font-body text-white/80 text-sm md:text-base">{label}</p>
    </div>
  );
}
