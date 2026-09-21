"use client";

import { Check, ChevronDown, Globe, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { LANGUAGE_STORAGE_KEY, languages } from "@/lib/languages";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [code, setCode] = useState("en");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && languages.some((l) => l.code === saved)) setCode(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = code;
  }, [code]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    searchRef.current?.focus();
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = languages.find((l) => l.code === code) ?? languages[0];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.native.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
    );
  }, [query]);

  const select = (next: string) => {
    setCode(next);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-[#d9c9a3] hover:text-[#C9A84C]"
      >
        <Globe className="h-3 w-3 text-[#C9A84C]" />
        <span className="max-w-[7.5rem] truncate">{current.name}</span>
        <ChevronDown className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(20.5rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl border border-[#C9A84C]/25 bg-[#0B1D36] shadow-lg">
          <div className="border-b border-white/10 p-2">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#C9A84C]" />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search all languages"
                className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-8 pr-3 text-xs text-white outline-none placeholder:text-white/35 focus:border-[#C9A84C]/50"
              />
            </label>
          </div>
          <ul role="listbox" className="max-h-72 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-4 text-center text-xs text-white/50">No languages match</li>
            ) : (
              filtered.map((l) => {
                const active = l.code === code;
                return (
                  <li key={l.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => select(l.code)}
                      className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs hover:bg-white/5 ${
                        active ? "text-[#C9A84C]" : "text-white/90"
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate">{l.name}</span>
                        {l.native !== l.name ? (
                          <span className="block truncate text-[10px] text-white/45">{l.native}</span>
                        ) : null}
                      </span>
                      <span className="shrink-0 uppercase tracking-wider text-white/35">{l.code}</span>
                      {active ? <Check className="h-3.5 w-3.5 shrink-0" /> : <span className="w-3.5" />}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
