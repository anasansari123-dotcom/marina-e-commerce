/** Normalise AUTH_URL / NEXTAUTH_URL (must include http:// or https://). */
export function getAuthBaseUrl(): string {
  const raw = process.env.AUTH_URL ?? process.env.NEXTAUTH_URL ?? "";
  const trimmed = raw.trim();
  if (!trimmed) {
    return process.env.NODE_ENV === "production"
      ? "https://marinamuseinternational.com"
      : "http://localhost:3000";
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed.replace(/\/$/, "");
  }
  if (trimmed.startsWith("localhost")) {
    return `http://${trimmed.replace(/\/$/, "")}`;
  }
  return `https://${trimmed.replace(/\/$/, "")}`;
}

/** Call once at auth boot so NextAuth never sees a malformed URL (e.g. `localhost:3000` without scheme). */
export function ensureAuthEnv() {
  const base = getAuthBaseUrl();
  if (!process.env.AUTH_URL?.startsWith("http")) {
    process.env.AUTH_URL = base;
  }
  if (!process.env.NEXTAUTH_URL?.startsWith("http")) {
    process.env.NEXTAUTH_URL = base;
  }
}
