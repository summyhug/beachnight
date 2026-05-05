import type { Dict } from "./types";
import { ar } from "./locales/ar";
import { de } from "./locales/de";
import { el } from "./locales/el";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { hi } from "./locales/hi";
import { id } from "./locales/id";
import { it } from "./locales/it";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { pt } from "./locales/pt";
import { th } from "./locales/th";
import { tr } from "./locales/tr";
import { vi } from "./locales/vi";
import { zhHans } from "./locales/zhHans";
import { zhHant } from "./locales/zhHant";

export type { Dict } from "./types";

export type Locale =
  | "en"
  | "es"
  | "pt"
  | "fr"
  | "zh-Hans"
  | "zh-Hant"
  | "ja"
  | "ar"
  | "hi"
  | "th"
  | "id"
  | "vi"
  | "ko"
  | "de"
  | "it"
  | "el"
  | "tr";

export const SUPPORTED_LOCALES: Locale[] = [
  "en",
  "es",
  "pt",
  "fr",
  "de",
  "it",
  "el",
  "tr",
  "zh-Hans",
  "zh-Hant",
  "ja",
  "ko",
  "vi",
  "th",
  "id",
  "hi",
  "ar",
];

export const DEFAULT_LOCALE: Locale = "en";

/** BCP 47 tags for <html lang> */
export const LOCALE_BCP47: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt",
  fr: "fr",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  ar: "ar",
  hi: "hi",
  th: "th",
  id: "id",
  vi: "vi",
  ko: "ko",
  de: "de",
  it: "it",
  el: "el",
  tr: "tr",
};

export function isRtlLocale(locale: Locale): boolean {
  return locale === "ar";
}

const SPANISH_COUNTRIES = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

const PORTUGUESE_COUNTRIES = new Set([
  "AO",
  "BR",
  "CV",
  "GW",
  "MZ",
  "PT",
  "ST",
  "TL",
]);

const ARABIC_COUNTRIES = new Set([
  "AE",
  "BH",
  "DZ",
  "EG",
  "IQ",
  "JO",
  "KW",
  "LB",
  "LY",
  "MA",
  "MR",
  "OM",
  "PS",
  "QA",
  "SA",
  "SD",
  "SY",
  "TN",
  "YE",
  "EH",
  "DJ",
  "KM",
  "SO",
]);

const FRENCH_COUNTRIES = new Set([
  "FR",
  "LU",
  "MC",
  "SN",
  "CI",
  "ML",
  "NE",
  "TG",
  "BF",
  "BJ",
  "CM",
  "CF",
  "TD",
  "CD",
  "CG",
  "GA",
  "GN",
  "MG",
  "NC",
  "PF",
  "RE",
  "PM",
  "WF",
  "YT",
  "GP",
  "MQ",
  "GF",
  "BL",
  "MF",
  "HT",
  "RW",
  "BI",
  "SC",
  "VU",
]);

const GERMAN_COUNTRIES = new Set(["DE", "AT", "LI"]);

const ITALIAN_COUNTRIES = new Set(["IT", "SM", "VA"]);

export function localeFromCountry(country: string | null | undefined): Locale {
  if (!country) return DEFAULT_LOCALE;
  const cc = country.toUpperCase();

  if (SPANISH_COUNTRIES.has(cc)) return "es";
  if (PORTUGUESE_COUNTRIES.has(cc)) return "pt";
  if (cc === "JP") return "ja";
  if (cc === "KR") return "ko";
  if (cc === "TH") return "th";
  if (cc === "VN") return "vi";
  if (cc === "ID") return "id";
  if (cc === "TW" || cc === "HK" || cc === "MO") return "zh-Hant";
  if (cc === "CN" || cc === "SG") return "zh-Hans";
  if (cc === "IN") return "hi";
  if (ARABIC_COUNTRIES.has(cc)) return "ar";
  if (GERMAN_COUNTRIES.has(cc)) return "de";
  if (ITALIAN_COUNTRIES.has(cc)) return "it";
  if (cc === "GR" || cc === "CY") return "el";
  if (cc === "TR") return "tr";
  if (FRENCH_COUNTRIES.has(cc)) return "fr";

  return DEFAULT_LOCALE;
}

export const dict: Record<Locale, Dict> = {
  en,
  es,
  pt,
  fr,
  de,
  it,
  el,
  tr,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
  ko,
  vi,
  th,
  id,
  hi,
  ar,
};
