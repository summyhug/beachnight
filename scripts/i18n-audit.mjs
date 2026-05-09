import path from "node:path";
import { pathToFileURL } from "node:url";
import { readdir } from "node:fs/promises";

const repoRoot = process.cwd();
const localesDir = path.join(repoRoot, "lib", "i18n", "locales");

function collectPaths(obj, prefix = "") {
  if (typeof obj === "function") return [prefix || "<root>"];
  if (obj === null || typeof obj !== "object") return [prefix || "<root>"];
  const out = [];
  for (const k of Object.keys(obj).sort()) {
    out.push(...collectPaths(obj[k], prefix ? `${prefix}.${k}` : k));
  }
  return out;
}

function getByPath(obj, p) {
  if (!p || p === "<root>") return obj;
  const parts = p.split(".");
  let cur = obj;
  for (const part of parts) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = cur[part];
  }
  return cur;
}

function extractPlaceholders(s) {
  // Supports {join} placeholders and #{tag1} style
  const braces = [...s.matchAll(/\{([a-zA-Z0-9_]+)\}/g)].map((m) => `{${m[1]}}`);
  const hashTags = [...s.matchAll(/#\{([a-zA-Z0-9_]+)\}/g)].map((m) => `#{${m[1]}}`);
  return new Set([...braces, ...hashTags]);
}

function comparePlaceholderSets(a, b) {
  const onlyA = [...a].filter((x) => !b.has(x));
  const onlyB = [...b].filter((x) => !a.has(x));
  return { onlyA, onlyB };
}

const files = (await readdir(localesDir))
  .filter((f) => f.endsWith(".ts"))
  .sort();

const dictByLocale = {};
for (const f of files) {
  const locale = f.replace(/\.ts$/, "");
  const mod = await import(pathToFileURL(path.join(localesDir, f)).href);
  dictByLocale[locale] = mod[locale];
  if (!dictByLocale[locale]) {
    throw new Error(`Expected export const ${locale} in ${f}`);
  }
}

const en = dictByLocale.en;
const enPaths = collectPaths(en).filter((p) => typeof getByPath(en, p) !== "function");
const fnPaths = collectPaths(en).filter((p) => typeof getByPath(en, p) === "function");

const report = {
  missingKeys: {},
  extraKeys: {},
  placeholderMismatches: [],
  typeMismatches: [],
  functionSignatureMismatches: [],
};

for (const [locale, dict] of Object.entries(dictByLocale)) {
  if (locale === "en") continue;
  const paths = collectPaths(dict);

  const missing = [];
  const extra = [];
  const pathSet = new Set(paths);
  const enPathSet = new Set([...enPaths, ...fnPaths]);

  for (const p of enPathSet) if (!pathSet.has(p)) missing.push(p);
  for (const p of pathSet) if (!enPathSet.has(p)) extra.push(p);

  if (missing.length) report.missingKeys[locale] = missing;
  if (extra.length) report.extraKeys[locale] = extra;

  // Type + placeholder checks for leaf strings
  for (const p of enPaths) {
    const enVal = getByPath(en, p);
    const val = getByPath(dict, p);
    if (typeof enVal !== typeof val) {
      report.typeMismatches.push({ locale, path: p, enType: typeof enVal, type: typeof val });
      continue;
    }
    if (typeof enVal === "string" && typeof val === "string") {
      const enPh = extractPlaceholders(enVal);
      const ph = extractPlaceholders(val);
      const { onlyA, onlyB } = comparePlaceholderSets(enPh, ph);
      if (onlyA.length || onlyB.length) {
        report.placeholderMismatches.push({
          locale,
          path: p,
          en: enVal,
          val,
          missing: onlyA,
          extra: onlyB,
        });
      }
    }
  }

  // Function checks (we only have hero.noWithout currently, but keep generic)
  for (const p of fnPaths) {
    const enFn = getByPath(en, p);
    const fn = getByPath(dict, p);
    if (typeof fn !== "function") {
      report.functionSignatureMismatches.push({ locale, path: p, issue: "not a function" });
      continue;
    }
    if (fn.length !== enFn.length) {
      report.functionSignatureMismatches.push({
        locale,
        path: p,
        issue: `arity mismatch (${fn.length} vs ${enFn.length})`,
      });
    }
  }
}

console.log(JSON.stringify(report, null, 2));

