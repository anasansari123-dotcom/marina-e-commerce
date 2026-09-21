"use client";

import { CatalogCard } from "@/components/CatalogCard";
import { getProductCategory } from "@/lib/catalog";
import { findShopNowLabel, shopNowTree } from "@/lib/shop-now-data";
import { products, type Product } from "@/lib/products";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const featuredSlugs = [
  "pocket-brass-compass-wholesale",
  "brass-nautical-binocular-officer",
  "brass-shoe-horn-walking-set",
  "polished-brass-ship-bell",
];

export function ShopNowCatalog() {
  const [open, setOpen] = useState<string | null>("armor-breast-plate");
  const [parent, setParent] = useState<string | null>("armor-breast-plate");
  const [sub, setSub] = useState<string | null>(null);
  const [catsOpen, setCatsOpen] = useState(false);

  const list = useMemo(() => {
    if (sub) {
      return products.filter((p) => p.subcategory === sub).slice(0, 4);
    }
    if (parent) {
      return products.filter((p) => getProductCategory(p) === parent).slice(0, 4);
    }
    return featuredSlugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter((p): p is Product => Boolean(p));
  }, [parent, sub]);

  const title = findShopNowLabel(sub || parent);

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
          <h2 className="mb-5 font-serif text-2xl text-navy-900">{title}</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {list.map((p) => (
              <CatalogCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
