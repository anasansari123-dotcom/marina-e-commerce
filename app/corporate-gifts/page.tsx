import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { heroImg } from "@/lib/images";

export default function CorporateGiftsPage() {
  const gifts = products.filter((p) => p.collection === "corporate-gifts" || p.slug.includes("compass"));

  return (
    <div>
      <section className="relative overflow-hidden bg-navy-950 text-cream-50">
        <Image
          src={heroImg.gift}
          alt="Premium gift presentation"
          fill
          className="object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <p className="text-xs uppercase tracking-[0.32em] text-gold-300">Board-level gifting</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl">Corporate Gifts</h1>
          <p className="mt-5 max-w-xl text-cream-100/80">
            Compasses, desk sets and presentation boxes that feel like an heirloom — with your crest on the lid.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/wholesale/quote" className="btn-gold">
              Brief a gift programme
            </Link>
            <Link href="/shop" className="btn-outline">
              Browse pieces
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Minimum 25", "Smaller runs than most factories will entertain."],
            ["Proof in 48h", "Logo placement on brass, wood or the box."],
            ["Ships globally", "Namedrop-ready, with a gift note if you wish."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-navy-600">{d}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-16 font-serif text-4xl">Gift-ready pieces</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gifts.slice(0, 8).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
