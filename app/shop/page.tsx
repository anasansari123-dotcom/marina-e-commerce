"use client";

import { CatalogCard } from "@/components/CatalogCard";
import { getProductCategory } from "@/lib/catalog";
import { findShopNowLabel, shopNowTree } from "@/lib/shop-now-data";
import { products } from "@/lib/products";
import { ChevronDown, ChevronRight, LayoutGrid, LayoutList } from "lucide-react";
import { useMemo, useState } from "react";

export default function ShopPage() {
  const [open, setOpen] = useState<string | null>("brass-telescope-tripod");
  const [parent, setParent] = useState<string | null>(null);
  const [sub, setSub] = useState<string | null>(null);
  const [sort, setSort] = useState("new");
  const [grid, setGrid] = useState(true);
  const [catsOpen, setCatsOpen] = useState(false);

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

  const title = sub || parent ? findShopNowLabel(sub || parent) : "All products";

  function showAll() {
    setOpen(null);
    setParent(null);
    setSub(null);
  }

  function toggleParent(slug: string) {
    if (open === slug) {
      setOpen(null);
      return;
    }
    setOpen(slug);
    setParent(slug);
    setSub(null);
  }

  function pickChild(parentSlug: string, childSlug: string) {
    setOpen(parentSlug);
    setParent(parentSlug);
    setSub(childSlug);
    setCatsOpen(false);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row">
        <aside className="w-full shrink-0 border-b border-[#eee] bg-white md:w-[300px] md:border-b-0 md:border-r">
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-3 text-left text-[14px] font-medium text-[#b0893a] md:hidden"
            onClick={() => setCatsOpen((v) => !v)}
            aria-expanded={catsOpen}
          >
            <span>Product categories</span>
            {catsOpen ? <ChevronDown className="h-4 w-4 text-[#bbb]" /> : <ChevronRight className="h-4 w-4 text-[#bbb]" />}
          </button>
            <nav className={`${catsOpen ? "block" : "hidden"} max-h-[min(55vh,28rem)] overflow-y-auto py-2 md:block md:sticky md:top-[var(--site-nav)] md:max-h-[calc(100vh-var(--site-nav))]`}>
            <p className="hidden px-4 pb-2 pt-3 text-[15px] font-medium text-[#b0893a] md:block">Product categories</p>
            <button
              type="button"
              onClick={showAll}
              className={`flex w-full items-center justify-between border-b border-[#f0f0f0] px-4 py-3 text-left text-[14px] ${
                !parent && !sub ? "bg-[#faf7f2] font-medium text-[#b0893a]" : "text-[#222] hover:bg-[#fafafa]"
              }`}
            >
              <span>All products</span>
              <span className="text-[11px] text-[#999]">{products.length}</span>
            </button>
            {shopNowTree.map((c) => {
              const expanded = open === c.slug;
              const parentActive = parent === c.slug && !sub;
              return (
                <div key={c.slug} className="border-b border-[#f0f0f0]">
                  <button
                    type="button"
                    onClick={() => toggleParent(c.slug)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-[14px] ${
                      parentActive ? "bg-[#faf7f2] font-medium text-[#b0893a]" : "text-[#222] hover:bg-[#fafafa]"
                    }`}
                  >
                    <span>{c.name}</span>
                    {expanded ? (
                      <ChevronDown className="h-4 w-4 shrink-0 text-[#bbb]" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#bbb]" />
                    )}
                  </button>
                  {expanded ? (
                    <div className="bg-[#fcfcfc] pb-1">
                      {c.children.map((child) => (
                        <button
                          key={child.slug}
                          type="button"
                          onClick={() => pickChild(c.slug, child.slug)}
                          className={`flex w-full items-center justify-between px-8 py-2 text-left text-[13px] ${
                            sub === child.slug
                              ? "font-medium text-[#b0893a]"
                              : "text-[#555] hover:text-[#b0893a]"
                          }`}
                        >
                          <span>{child.name}</span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#ccc]" />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 px-4 py-6 lg:px-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h1 className="font-serif text-2xl text-navy-900">{title}</h1>
            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-[#ddd] bg-white px-4 py-1.5 text-sm"
              >
                <option value="new">New</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="rating">Top rated</option>
              </select>
              <div className="flex items-center gap-2 text-[#888]">
                <button aria-label="Grid view" onClick={() => setGrid(true)} className={grid ? "text-[#222]" : ""}>
                  <LayoutGrid className="h-5 w-5" />
                </button>
                <button aria-label="List view" onClick={() => setGrid(false)} className={!grid ? "text-[#222]" : ""}>
                  <LayoutList className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={grid ? "grid grid-cols-2 gap-4 lg:grid-cols-4" : "grid grid-cols-1 gap-4"}>
            {list.map((p) => (
              <CatalogCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
