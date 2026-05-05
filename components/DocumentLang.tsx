"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { isRtlLocale, LOCALE_BCP47 } from "@/lib/i18n";

export default function DocumentLang() {
  const { locale } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    html.lang = LOCALE_BCP47[locale] ?? "en";
    html.dir = isRtlLocale(locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
