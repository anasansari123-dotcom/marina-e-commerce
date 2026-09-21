import Link from "next/link";
import Image from "next/image";
import { featuredProducts, reviews, trustStats } from "@/lib/products";
import { HomeHero } from "@/components/HomeHero";
import { HomeCollections } from "@/components/HomeCollections";
import { ProductCard } from "@/components/ProductCard";
import { ShieldCheck } from "lucide-react";
import { heroImg, img } from "@/lib/images";

export default function HomePage() {
  const featured = featuredProducts();

  return (
    <div className="bg-[#FAF7F2]">
      <HomeHero />
      <HomeCollections />

      <section className="bg-[#F4F1EA] px-5 py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8C6E28]">Atelier selection</p>
              <h2 className="mt-2 font-serif text-4xl text-navy-900">Featured Pieces</h2>
            </div>
            <Link
              href="/shop"
              className="hidden text-sm tracking-widest text-navy-700 underline decoration-[#C9A84C] underline-offset-4 md:inline"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 8).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20 text-cream-50">
        <Image
          src={heroImg.harbor}
          alt="Harbour and working vessels"
          fill
          className="object-cover opacity-35"
        />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#C9A84C]">B2B / Wholesale</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Built for Businesses.
              <br />
              Priced for Volume.
            </h2>
            <p className="mt-5 max-w-lg text-cream-100/75">
              Partner with us for premium nautical & brass products. Competitive pricing, reliable supply and global logistics — from 50 pieces to container programmes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/wholesale/register" className="btn-gold">
                Create Wholesale Account
              </Link>
              <Link href="/login" className="btn-outline">
                Already a member? Login
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trustStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-navy-950/60 p-6 backdrop-blur">
                <p className="font-serif text-4xl text-[#C9A84C]">{s.value}</p>
                <p className="mt-2 text-sm text-cream-100/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] px-5 py-20">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={img.workshop}
              alt="Craftsman finishing brass"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8C6E28]">From Roorkee, Uttarakhand, India</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">The foundry behind the finish</h2>
            <p className="mt-5 leading-relaxed text-navy-700">
              Marina Muse works with master casters, engravers and polishers whose families have worked brass for generations. We age, assemble and inspect every compass, lantern and helm before it leaves the atelier.
            </p>
            <ul className="mt-6 space-y-3 text-navy-800">
              {[
                "Solid brass — not plated zinc",
                "Hand patina, not a spray antique",
                "OEM logos, packaging and private label",
                "Export documentation for 46 countries",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-[#C9A84C]" />
                  {line}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-navy mt-8">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EA] px-5 py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-px w-16 bg-[#C9A84C]" />
            <h2 className="font-serif text-4xl text-navy-900 md:text-5xl">Captains of taste</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <blockquote key={r.name} className="rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(26,20,12,0.06)]">
                <p className="font-serif text-2xl text-navy-900">“{r.title}”</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-700">{r.body}</p>
                <p className="mt-6 text-sm font-medium text-navy-900">
                  {r.name} · {r.location}
                </p>
                <p className="text-xs text-[#8C6E28]">{r.product}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
