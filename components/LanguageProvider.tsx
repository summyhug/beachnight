"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  dict,
  type Locale,
  localeFromCountry,
  SUPPORTED_LOCALES,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "beachnight-locale";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LOCALES.includes(saved as Locale)) {
      setLocaleState(saved as Locale);
      return;
    }

    let cancelled = false;
    fetch("/api/geo-country")
      .then((r) => r.json())
      .then((data: { country: string | null }) => {
        if (cancelled) return;
        setLocaleState(localeFromCountry(data.country));
      })
      .catch(() => {
        if (!cancelled) setLocaleState(DEFAULT_LOCALE);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function useDictionary() {
  const { locale } = useLanguage();
  return dict[locale] ?? dict[DEFAULT_LOCALE];
}
