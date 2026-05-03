"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDictionary, useLanguage } from "@/components/LanguageProvider";
import { onSamePageHashClick } from "@/lib/hashNav";
import type { Locale } from "@/lib/i18n";

const localeOptions: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
  { value: "pt", label: "PT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const t = useDictionary();
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#about-beachnight", label: t.nav.about },
    { href: "/join", label: t.nav.join },
  ];

  const linkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-ocean/95 backdrop-blur-md border-b border-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-widest text-teal hover:text-teal/80 transition-colors"
          >
            BEACHNIGHT
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => onSamePageHashClick(pathname, link.href, e)}
                className={`font-body text-sm font-medium transition-colors ${
                  linkIsActive(link.href) ? "text-teal" : "text-white/80 hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <label className="sr-only" htmlFor="language-select-desktop">
              {t.nav.language}
            </label>
            <select
              id="language-select-desktop"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="w-[74px] bg-white/5 border border-teal/30 text-white/90 text-xs font-semibold tracking-wide rounded px-2 py-1.5 focus:outline-none focus:border-teal"
            >
              {localeOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-ocean text-white"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-teal hover:text-teal/80 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-teal/20">
            <div className="px-4 pb-3">
              <label
                htmlFor="language-select-mobile"
                className="block font-body text-xs text-white/70 mb-2"
              >
                {t.nav.language}
              </label>
              <select
                id="language-select-mobile"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                className="w-full bg-white/5 border border-teal/30 text-white/90 text-sm rounded px-3 py-2 focus:outline-none focus:border-teal"
              >
                {localeOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-ocean text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      onSamePageHashClick(pathname, link.href, e);
                      setMobileOpen(false);
                    }}
                    className={`block py-3 px-4 rounded-lg font-body text-base font-medium min-h-[44px] flex items-center transition-colors ${
                      linkIsActive(link.href)
                        ? "text-teal bg-teal/10"
                        : "text-white/80 hover:text-teal hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
