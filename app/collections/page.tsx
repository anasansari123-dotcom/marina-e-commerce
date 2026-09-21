import { collections } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-700">Worlds of brass</p>
      <h1 className="mt-2 font-serif text-5xl text-navy-900">Collections</h1>
      <p className="mt-3 max-w-2xl text-navy-600">
        The same families of pieces you saw on the studio board — instruments, décor, hospitality and trade.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="group relative min-h-[280px] overflow-hidden rounded-3xl"
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-cream-50">
              <p className="text-xs uppercase tracking-[0.28em] text-gold-300">{c.tagline}</p>
              <h2 className="mt-1 font-serif text-3xl">{c.name}</h2>
              <p className="mt-2 max-w-md text-sm text-cream-100/80">{c.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
