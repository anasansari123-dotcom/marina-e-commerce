"use client";

import { CatalogCard } from "@/components/CatalogCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { useRef, useState } from "react";

const PAGE_SIZE = 8;
const PAGE_WINDOW = 10;
const MOBILE_WINDOW = 7;

export function HomeAllProducts() {
  const [mode, setMode] = useState<"b2c" | "b2b">("b2c");
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLElement>(null);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const items = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const start = Math.max(1, Math.min(page - Math.floor(PAGE_WINDOW / 2), totalPages - PAGE_WINDOW + 1));
  const pages = Array.from({ length: Math.min(PAGE_WINDOW, totalPages) }, (_, i) => start + i);
  const mobileStart = Math.max(1, Math.min(page - Math.floor(MOBILE_WINDOW / 2), totalPages - MOBILE_WINDOW + 1));
  const onMobile = (n: number) => n >= mobileStart && n < mobileStart + MOBILE_WINDOW;

  function go(next: number) {
    setPage(Math.min(totalPages, Math.max(1, next)));
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function switchMode(next: "b2c" | "b2b") {
    setMode(next);
    setPage(1);
  }

  return (
    <section ref={ref} className="scroll-mt-24 bg-white px-4 pb-10 pt-4 md:px-5 md:pb-14 md:pt-5">
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-[#C9A84C]" />
          <h2 className="font-serif text-[1.75rem] text-navy-900 md:text-5xl">All Products</h2>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full border border-[#031D38]/15 bg-[#FAF7F2] p-1">
            {(
              [
                ["b2c", "B2C · Retail"],
                ["b2b", "B2B · Wholesale"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => switchMode(key)}
                className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition sm:px-6 sm:text-xs ${
                  mode === key ? "bg-[#031D38] text-white" : "text-[#031D38] hover:text-[#3A6EA5]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 lg:grid-cols-4">
          {items.map((p) => (
            <CatalogCard key={`${mode}-${p.slug}`} product={p} wholesale={mode === "b2b"} />
          ))}
        </div>

        <nav aria-label="Pagination" className="mt-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm">
          {page > 1 && (
            <button type="button" onClick={() => go(page - 1)} className="px-2 py-1 text-[#1a0dab] hover:underline">
              Previous
            </button>
          )}
          {pages.map((n) =>
            n === page ? (
              <span key={n} aria-current="page" className="min-w-[1.75rem] px-1.5 py-1 text-center font-semibold text-[#222222]">
                {n}
              </span>
            ) : (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                className={`${onMobile(n) ? "" : "hidden sm:inline-block"} min-w-[1.75rem] px-1.5 py-1 text-center text-[#1a0dab] hover:underline`}
              >
                {n}
              </button>
            ),
          )}
          {page < totalPages && (
            <button type="button" onClick={() => go(page + 1)} className="px-2 py-1 text-[#1a0dab] hover:underline">
              Next
            </button>
          )}
        </nav>

        <div className="mt-6 text-center">
          <Link href={mode === "b2b" ? "/wholesale" : "/shop"} className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6EA5] hover:underline">
            View full {mode === "b2b" ? "wholesale" : "retail"} catalogue →
          </Link>
        </div>
      </div>
    </section>
  );
}
