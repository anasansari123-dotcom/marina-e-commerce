import { canAccessWholesale } from "@/lib/wholesale-access";

const wholesaleLogin = (callbackUrl: string, register = false) => {
  const q = new URLSearchParams({ mode: "wholesale", callbackUrl });
  if (register) q.set("view", "register");
  return `/login?${q.toString()}`;
};

/** Where “Wholesale” / B2B entry points should go for the current user. */
export function wholesaleCatalogHref(user?: { role?: string } | null): string {
  if (canAccessWholesale(user)) return "/wholesale";
  return wholesaleLogin("/wholesale", true);
}

export function wholesaleQuoteHref(user?: { role?: string } | null): string {
  if (canAccessWholesale(user)) return "/wholesale/quote";
  return wholesaleLogin("/wholesale/quote");
}
