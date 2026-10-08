"use client";

import { getProductCategory, shopCategories } from "@/lib/catalog";
import { collections, formatPrice, products } from "@/lib/products";
import { BrandLogo } from "@/components/Logo";
import {
  BarChart3,
  Bell,
  ExternalLink,
  FileText,
  Layers,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Tab = "overview" | "orders" | "quotes" | "customers" | "products" | "catalog" | "analytics";

const nav: { id: Tab; icon: typeof LayoutDashboard; label: string }[] = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "orders", icon: ShoppingCart, label: "Orders" },
  { id: "quotes", icon: FileText, label: "Quotes" },
  { id: "customers", icon: Users, label: "Customers" },
  { id: "products", icon: Package, label: "Products" },
  { id: "catalog", icon: Layers, label: "Catalog" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
];

const orders = [
  { id: "MM-2041", customer: "James W.", item: "Antique Brass Compass × 2", total: 78, status: "Paid", country: "United Kingdom" },
  { id: "MM-2040", customer: "Harbour Hotels", item: 'Ship Wheel 24"', total: 189, status: "Packed", country: "United Arab Emirates" },
  { id: "MM-2039", customer: "Priya S.", item: "Officer Brass Binoculars × 50", total: 1300, status: "B2B", country: "India" },
  { id: "MM-2038", customer: "Marco D.", item: "Ship Lantern × 12", total: 1020, status: "Shipped", country: "Spain" },
  { id: "MM-2037", customer: "Elena K.", item: "Officer Brass Binoculars", total: 129, status: "Pending", country: "Germany" },
  { id: "MM-2036", customer: "North Star Retail", item: "Pocket Compass × 80", total: 256, status: "Paid", country: "United States" },
];

const quotes = [
  { id: "Q-118", company: "Harbour Hotels", brief: "Lanterns & porthole mirrors, 40 rooms", value: 4200, status: "New" },
  { id: "Q-117", company: "Atlantic Gifts Co.", brief: "OEM compass, logo on lid, MOQ 200", value: 3800, status: "Sample" },
  { id: "Q-116", company: "Club Nautique", brief: "36\" helm for lobby", value: 1116, status: "Quoted" },
  { id: "Q-115", company: "Weston & Co.", brief: "Walking canes, mixed handles × 60", value: 1920, status: "Won" },
];

const customers = [
  { name: "James W.", type: "Retail", location: "London", orders: 4, spent: 312 },
  { name: "Harbour Hotels", type: "Wholesale", location: "Dubai", orders: 3, spent: 8640 },
  { name: "Priya S.", type: "Wholesale", location: "Mumbai", orders: 2, spent: 2600 },
  { name: "Marco D.", type: "Wholesale", location: "Barcelona", orders: 5, spent: 4180 },
  { name: "North Star Retail", type: "Wholesale", location: "New York", orders: 6, spent: 1920 },
  { name: "Elena K.", type: "Retail", location: "Berlin", orders: 1, spent: 129 },
];

const countries = [
  { name: "United States", pct: 34, flag: "🇺🇸" },
  { name: "United Kingdom", pct: 18, flag: "🇬🇧" },
  { name: "United Arab Emirates", pct: 14, flag: "🇦🇪" },
  { name: "Germany", pct: 11, flag: "🇩🇪" },
  { name: "Australia", pct: 9, flag: "🇦🇺" },
  { name: "India", pct: 8, flag: "🇮🇳" },
];

function statusClass(status: string) {
  if (status === "Paid" || status === "Won" || status === "Shipped") return "bg-emerald-50 text-emerald-800";
  if (status === "Pending" || status === "New") return "bg-amber-50 text-amber-800";
  if (status === "B2B" || status === "Quoted" || status === "Sample") return "bg-[#F4EBD2] text-[#7A5C12]";
  if (status === "Packed") return "bg-sky-50 text-sky-800";
  return "bg-navy-100 text-navy-700";
}

function Badge({ children }: { children: string }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${statusClass(children)}`}>
      {children}
    </span>
  );
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const top = products.filter((p) => p.featured).slice(0, 5);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 16);
    return products
      .filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
      .slice(0, 16);
  }, [query]);

  const title = nav.find((n) => n.id === tab)?.label ?? "Dashboard";

  return (
    <div className="flex min-h-screen bg-[#F4F1EA]">
      {open && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[236px] flex-col bg-[#031D38] text-white transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-white/10 px-5 py-5">
          <Link href="/" className="block" onClick={() => setOpen(false)}>
            <BrandLogo size="admin" priority />
          </Link>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C9A84C]">
            Admin Dashboard
          </p>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {nav.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setTab(item.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm ${
                  active ? "bg-white/10 text-[#C9A84C]" : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-4 text-xs text-white/60">
          <Link href="/" className="inline-flex items-center gap-1.5 hover:text-[#C9A84C]">
            <ExternalLink className="h-3.5 w-3.5" />
            View storefront
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex flex-wrap items-center gap-3 border-b border-[#e6dfd2] bg-[#FAF7F2]/95 px-4 py-3 backdrop-blur md:px-8">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[#e6dfd2] bg-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#8C6E28]">Marina Muse</p>
            <h1 className="truncate font-serif text-2xl text-navy-900 md:text-[1.85rem]">{title}</h1>
          </div>
          <button type="button" className="relative order-3 grid h-9 w-9 place-items-center rounded-full border border-[#e6dfd2] bg-white lg:order-4" aria-label="Notifications">
            <Bell className="h-4 w-4 text-navy-700" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
          </button>
          <div className="order-4 hidden items-center gap-2 rounded-full border border-[#e6dfd2] bg-white py-1 pl-1 pr-3 sm:flex lg:order-5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0B1D36] text-[10px] font-semibold text-[#C9A84C]">
              MM
            </span>
            <span className="text-xs font-medium text-navy-800">Admin</span>
          </div>
          <div className="relative order-5 w-full min-w-0 lg:order-3 lg:max-w-sm lg:flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-500" />
            <input
              className="w-full rounded-lg border border-[#e6dfd2] bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 outline-none placeholder:text-navy-500/40 focus:ring-2 focus:ring-[#C9A84C]/30"
              placeholder="Search SKU, order, customer…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">
          {tab === "overview" && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["$8,420", "Revenue", "Last 30 days"],
                  ["24", "Orders", "6 awaiting pack"],
                  ["6", "B2B Quotes", "2 need a sample"],
                ].map(([v, l, s]) => (
                  <div key={l} className="rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(26,20,12,0.05)]">
                    <p className="font-serif text-4xl text-navy-900">{v}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-navy-500">{l}</p>
                    <p className="mt-2 text-sm text-navy-600">{s}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["15", "Pending"],
                  ["12", "Returns"],
                  ["8", "Abandoned carts"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-white px-5 py-4 shadow-[0_8px_30px_rgba(26,20,12,0.04)]">
                    <p className="font-serif text-2xl">{v}</p>
                    <p className="text-sm text-navy-600">{l}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-6 xl:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(26,20,12,0.04)]">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-2xl">Recent orders</h2>
                    <button type="button" className="text-sm text-[#8C6E28] underline" onClick={() => setTab("orders")}>
                      View all
                    </button>
                  </div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[480px] text-left text-sm">
                      <thead className="text-[11px] uppercase tracking-wider text-navy-500">
                        <tr>
                          <th className="pb-2 font-medium">Order</th>
                          <th className="pb-2 font-medium">Item</th>
                          <th className="pb-2 font-medium">Total</th>
                          <th className="pb-2 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.slice(0, 5).map((o) => (
                          <tr key={o.id} className="border-t border-[#f0ebe3]">
                            <td className="py-3 font-medium">{o.id}</td>
                            <td className="py-3 text-navy-700">{o.item}</td>
                            <td className="py-3">{formatPrice(o.total)}</td>
                            <td className="py-3">
                              <Badge>{o.status}</Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="grid gap-6">
                  <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(26,20,12,0.04)]">
                    <h2 className="font-serif text-2xl">Top products</h2>
                    <ul className="mt-4 space-y-3">
                      {top.map((p) => (
                        <li key={p.slug} className="flex items-center gap-3">
                          <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-[#2a2118]">
                            <Image src={p.image} alt="" fill className="object-cover" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">{p.name}</p>
                            <p className="text-xs text-navy-500">
                              {p.sku} · {p.reviews} sold
                            </p>
                          </div>
                          <p className="text-sm font-medium">{formatPrice(p.price)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(26,20,12,0.04)]">
                    <h2 className="font-serif text-2xl">Countries</h2>
                    <ul className="mt-4 space-y-3">
                      {countries.map((c) => (
                        <li key={c.name}>
                          <div className="mb-1 flex justify-between text-xs">
                            <span>
                              {c.flag} {c.name}
                            </span>
                            <span>{c.pct}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-[#eee7db]">
                            <div className="h-full bg-[#C9A84C]" style={{ width: `${c.pct}%` }} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "orders" && (
            <Panel title="Orders" subtitle="Retail and wholesale shipments">
              <AdminTable
                headers={["Order", "Customer", "Item", "Country", "Total", "Status"]}
                rows={orders.map((o) => [
                  o.id,
                  o.customer,
                  o.item,
                  o.country,
                  formatPrice(o.total),
                  <Badge key={o.id}>{o.status}</Badge>,
                ])}
              />
            </Panel>
          )}

          {tab === "quotes" && (
            <Panel title="B2B quotes" subtitle="Trade desk pipeline">
              <AdminTable
                headers={["Quote", "Company", "Brief", "Value", "Status"]}
                rows={quotes.map((q) => [
                  q.id,
                  q.company,
                  q.brief,
                  formatPrice(q.value),
                  <Badge key={q.id}>{q.status}</Badge>,
                ])}
              />
            </Panel>
          )}

          {tab === "customers" && (
            <Panel title="Customers" subtitle="Retail buyers and wholesale accounts">
              <AdminTable
                headers={["Name", "Type", "Location", "Orders", "Spent"]}
                rows={customers.map((c) => [
                  c.name,
                  c.type,
                  c.location,
                  String(c.orders),
                  formatPrice(c.spent),
                ])}
              />
            </Panel>
          )}

          {tab === "products" && (
            <Panel title="Products" subtitle={`${products.length} SKUs in the live catalogue`}>
              <div className="mb-4 md:hidden">
                <input
                  className="input"
                  placeholder="Search SKU or name"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <ul className="divide-y divide-[#f0ebe3]">
                {filteredProducts.map((p) => (
                  <li key={p.slug} className="flex items-center gap-4 py-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#2a2118]">
                      <Image src={p.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{p.name}</p>
                      <p className="text-xs text-navy-500">
                        {p.sku} · {shopCategories.find((c) => c.slug === getProductCategory(p))?.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{formatPrice(p.price)}</p>
                      <p className="text-xs capitalize text-navy-500">{p.stock.replace("-", " ")}</p>
                    </div>
                    <Link href={`/product/${p.slug}`} className="hidden text-xs text-[#8C6E28] underline sm:inline">
                      View
                    </Link>
                  </li>
                ))}
              </ul>
            </Panel>
          )}

          {tab === "catalog" && (
            <Panel title="Catalog" subtitle="Shop categories and storefront collections">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-navy-500">Shop categories</h3>
                  <ul className="mt-3 space-y-2">
                    {shopCategories.map((c) => {
                      const count = products.filter((p) => getProductCategory(p) === c.slug).length;
                      return (
                        <li key={c.slug} className="flex items-center justify-between rounded-lg bg-[#FAF7F2] px-3 py-2 text-sm">
                          <span>{c.name}</span>
                          <span className="text-navy-500">{count}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-navy-500">Collections</h3>
                  <ul className="mt-3 space-y-2">
                    {collections.map((c) => (
                      <li key={c.slug} className="flex items-center gap-3 rounded-lg bg-[#FAF7F2] px-3 py-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-md bg-[#2a2118]">
                          <Image src={c.image} alt="" fill className="object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">{c.name}</p>
                          <p className="text-xs text-navy-500">{c.tagline}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Panel>
          )}

          {tab === "analytics" && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  ["30+", "Countries shipped"],
                  ["50+", "B2B partners"],
                  ["2K+", "Pieces / year"],
                  ["16+", "Years of craft"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(26,20,12,0.04)]">
                    <p className="font-serif text-3xl">{v}</p>
                    <p className="mt-1 text-sm text-navy-600">{l}</p>
                  </div>
                ))}
              </div>
              <Panel title="Sales by country" subtitle="Share of last 30 days">
                <ul className="space-y-4">
                  {countries.map((c) => (
                    <li key={c.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>
                          {c.flag} {c.name}
                        </span>
                        <span className="text-navy-600">{c.pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#eee7db]">
                        <div className="h-full bg-[#C9A84C]" style={{ width: `${c.pct}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(26,20,12,0.04)]">
      <h2 className="font-serif text-2xl">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-navy-600">{subtitle}</p> : null}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function AdminTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="text-[11px] uppercase tracking-wider text-navy-500">
          <tr>
            {headers.map((h) => (
              <th key={h} className="pb-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#f0ebe3]">
              {row.map((cell, j) => (
                <td key={j} className="py-3 text-navy-800">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
