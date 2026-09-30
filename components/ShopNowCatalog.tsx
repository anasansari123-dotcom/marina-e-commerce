"use client";

import { CatalogCard } from "@/components/CatalogCard";
import { getProductCategory } from "@/lib/catalog";
import { findShopNowLabel, shopNowTree } from "@/lib/shop-now-data";
import { products } from "@/lib/products";
import { ChevronDown, ChevronRight, LayoutGrid, LayoutList } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 24;

export function ShopNowCatalog({
  retail = false,
  defaultOpen = null,
}: {
  retail?: boolean;
  defaultOpen?: string | null;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen);
  const [parent, setParent] = useState<string | null>(null);
  const [sub, setSub] = useState<string | null>(null);
  const [sort, setSort] = useState("new");
  const [grid, setGrid] = useState(true);
  const [limit, setLimit] = useState(PAGE_SIZE);

  useEffect(() => {
    setLimit(PAGE_SIZE);
  }, [parent, sub, sort]);

  const list = useMemo(() => {
    let next = [...products];
    if (sub) next = next.filter((p) => p.subcategory === sub);
    else if (parent) next = next.filter((p) => getProductCategory(p) === parent);

    if (sort === "price-asc") next.sort((a, b) => (a.wholesaleFrom ?? a.price) - (b.wholesaleFrom ?? b.price));
    if (sort === "price-desc") next.sort((a, b) => b.price - a.price);
    if (sort === "rating") next.sort((a, b) => b.rating - a.rating);
    if (sort === "new") next.reverse();
    return next;
  }, [parent, sub, sort]);

  const filtered = Boolean(sub || parent);
  const title = filtered ? findShopNowLabel(sub || parent) : "All products";
  const Title = retail ? "h1" : "h2";

  function showAll() {
    setOpen(null);
    setParent(null);
    setSub(null);
  }

  function toggleParent(slug: string) {
    const node = shopNowTree.find((c) => c.slug === slug);
    setParent(slug);
    setSub(null);
    if (!node?.children.length) {
      setOpen(null);
      return;
    }
    setOpen(open === slug ? null : slug);
  }

  function pickChild(parentSlug: string, childSlug: string) {
    setOpen(parentSlug);
    setParent(parentSlug);
    setSub(childSlug);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-row">
        <aside className="w-[96px] shrink-0 border-r border-[#eee] bg-[#fcfbf8] sm:w-[140px] md:w-[300px] md:bg-white">
          <nav className="no-scrollbar sticky top-[var(--site-nav)] max-h-[calc(100dvh-var(--site-nav))] overflow-y-auto pb-6 md:py-2">
            <p className="px-2 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#b0893a] md:px-4 md:text-[15px] md:font-medium md:normal-case md:tracking-normal">
              <span className="md:hidden">Categories</span>
              <span className="hidden md:inline">Product categories</span>
            </p>
            <button
              type="button"
              onClick={showAll}
              className={`flex w-full items-center justify-between border-b border-l-[3px] border-b-[#f0f0f0] px-2 py-2.5 text-left text-[11px] leading-snug md:px-4 md:py-3 md:text-[14px] ${
                !filtered
                  ? "border-l-[#C9A84C] bg-white font-semibold text-[#b0893a] md:bg-[#faf7f2] md:font-medium"
                  : "border-l-transparent text-[#222] hover:bg-[#fafafa]"
              }`}
            >
              <span>All products</span>
              <span className="hidden text-[11px] text-[#999] md:inline">{products.length}</span>
            </button>
            {shopNowTree.map((c) => {
              const hasChildren = c.children.length > 0;
              const expanded = hasChildren && open === c.slug;
              const parentActive = parent === c.slug && !sub;
              const inBranch = parent === c.slug;
              return (
                <div key={c.slug} className="border-b border-[#f0f0f0]">
                  <button
                    type="button"
                    onClick={() => toggleParent(c.slug)}
                    className={`flex w-full items-center justify-between gap-1 border-l-[3px] px-2 py-2.5 text-left text-[11px] leading-snug md:px-4 md:py-3 md:text-[14px] ${
                      parentActive
                        ? "border-l-[#C9A84C] bg-white font-semibold text-[#b0893a] md:bg-[#faf7f2] md:font-medium"
                        : inBranch
                          ? "border-l-[#C9A84C]/40 font-medium text-[#222]"
                          : "border-l-transparent text-[#222] hover:bg-[#fafafa]"
                    }`}
                  >
                    <span className="min-w-0 break-words">{c.name}</span>
                    {hasChildren ? (
                      expanded ? (
                        <ChevronDown className="hidden h-4 w-4 shrink-0 text-[#bbb] md:block" />
                      ) : (
                        <ChevronRight className="hidden h-4 w-4 shrink-0 text-[#bbb] md:block" />
                      )
                    ) : null}
                  </button>
                  {expanded ? (
                    <div className="bg-white pb-1 md:bg-[#fcfcfc]">
                      {c.children.map((child) => (
                        <button
                          key={child.slug}
                          type="button"
                          onClick={() => pickChild(c.slug, child.slug)}
                          className={`w-full py-2 pl-3 pr-1.5 text-left text-[10.5px] leading-snug md:px-8 md:text-[13px] ${
                            sub === child.slug ? "font-semibold text-[#b0893a]" : "text-[#555] hover:text-[#b0893a]"
                          }`}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 px-2 py-4 sm:px-4 md:py-6 lg:px-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 md:mb-4 md:gap-3">
            <Title className="w-full font-serif text-base leading-tight text-navy-900 sm:w-auto sm:text-2xl">
              {title}
              <span className="ml-1.5 text-[11px] font-normal text-[#999] sm:ml-2 sm:text-[13px]">({list.length})</span>
            </Title>
            <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort products"
                className="min-w-0 flex-1 rounded-full border border-[#ddd] bg-white px-3 py-1 text-[12px] sm:flex-none sm:px-4 sm:py-1.5 sm:text-sm"
              >
                <option value="new">New</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="rating">Top rated</option>
              </select>
              <div className="flex shrink-0 items-center gap-1.5 text-[#888] sm:gap-2">
                <button
                  type="button"
                  aria-label="Grid view"
                  aria-pressed={grid}
                  onClick={() => setGrid(true)}
                  className={grid ? "text-[#222]" : ""}
                >
                  <LayoutGrid className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                </button>
                <button
                  type="button"
                  aria-label="List view"
                  aria-pressed={!grid}
                  onClick={() => setGrid(false)}
                  className={!grid ? "text-[#222]" : ""}
                >
                  <LayoutList className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={
              grid
                ? "grid grid-cols-2 gap-x-2 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-8"
                : "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            }
          >
            {list.slice(0, limit).map((p) => (
              <CatalogCard key={p.slug} product={p} freeShipping={retail} />
            ))}
          </div>
          {list.length === 0 ? (
            <p className="py-10 text-center text-sm text-[#666]">No products in this category yet.</p>
          ) : null}
          {list.length > limit ? (
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="text-xs text-[#888]">
                Showing {limit} of {list.length}
              </p>
              <button
                type="button"
                onClick={() => setLimit((n) => n + PAGE_SIZE)}
                className="rounded-full border border-[#222] px-6 py-2 text-[13px] font-medium text-[#222] transition hover:bg-[#222] hover:text-white sm:px-8 sm:py-2.5 sm:text-sm"
              >
                Load more
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
