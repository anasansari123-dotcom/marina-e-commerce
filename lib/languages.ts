/** ISO 639-1 language codes — the complete two-letter set. */
export const ISO_639_1 = [
  "aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az",
  "ba", "be", "bg", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch",
  "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el",
  "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy",
  "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht",
  "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it",
  "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko",
  "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo",
  "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt",
  "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny",
  "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm",
  "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl",
  "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te",
  "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty",
  "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo",
  "za", "zh", "zu",
] as const;

const PINNED = [
  "en", "es", "fr", "de", "zh", "ar", "hi", "pt", "ja", "ko", "it", "ru",
  "nl", "tr", "pl", "vi", "th", "id", "ur", "bn", "pa", "ta", "te", "mr",
  "gu", "fa", "he", "sv", "uk", "ms",
] as const;

export type SiteLanguage = {
  code: string;
  name: string;
  native: string;
};

function displayName(code: string, locale: string) {
  try {
    return new Intl.DisplayNames([locale], { type: "language" }).of(code) ?? code;
  } catch {
    return code;
  }
}

function buildLanguages(): SiteLanguage[] {
  const pinned = new Set<string>(PINNED);
  const all = ISO_639_1.map((code) => ({
    code,
    name: displayName(code, "en"),
    native: displayName(code, code),
  }));
  const head = PINNED.map((code) => all.find((l) => l.code === code)).filter(
    (l): l is (typeof all)[number] => Boolean(l)
  );
  const rest = all
    .filter((l) => !pinned.has(l.code))
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
  return [...head, ...rest];
}

export const languages = buildLanguages();

export const LANGUAGE_STORAGE_KEY = "marina-muse-lang";
