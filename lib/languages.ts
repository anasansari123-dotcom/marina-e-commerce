/** Supported storefront languages only. */
export const SITE_LOCALES = [
  { code: "en", name: "English (common)", native: "English" },
  { code: "en-GB", name: "Europe", native: "English" },
  { code: "ar", name: "Middle East", native: "العربية" },
  { code: "en-US", name: "US", native: "English (US)" },
  { code: "zh", name: "China", native: "中文" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
] as const;

export type SiteLanguage = {
  code: string;
  name: string;
  native: string;
};

export const languages: SiteLanguage[] = [...SITE_LOCALES];

export const LANGUAGE_STORAGE_KEY = "marina-muse-lang";
