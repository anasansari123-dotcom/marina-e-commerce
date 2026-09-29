import { ProductCard } from "@/components/ProductCard";
import { getCollection, productsByCollection } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CollectionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const list = productsByCollection(slug);

  return (
    <div>
      <section className="relative h-[32vh] min-h-[240px] overflow-hidden bg-navy-950">
        <Image src={collection.image} alt="" fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/20" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 text-cream-50">
          <Link href="/collections" className="text-xs uppercase tracking-[0.28em] text-gold-300">
            Collections
          </Link>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">{collection.name}</h1>
          <p className="mt-3 max-w-xl text-cream-100/80">{collection.description}</p>
        </div>
      </section>
      <div className="mx-auto max-w-[1320px] px-4 py-8 md:py-10">
        {list.length === 0 ? (
          <p className="text-navy-600">Pieces for this collection are made to order. Request a quote.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
