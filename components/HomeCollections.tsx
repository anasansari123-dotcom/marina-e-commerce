import { collections } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

function CollectionTile({
  slug,
  name,
  image,
}: {
  slug: string;
  name: string;
  image: string;
}) {
  return (
    <Link href={`/collections/${slug}`} className="group text-center">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#2a2118] shadow-[0_8px_24px_rgba(26,20,12,0.12)]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 18vw, 10vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <p className="mt-2.5 text-[12px] leading-tight text-navy-800 sm:text-[13px]">{name}</p>
    </Link>
  );
}

export function HomeCollections() {
  const items = collections.slice(0, 20);
  const firstRow = items.slice(0, 10);
  const secondRow = items.slice(10, 20);

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-3xl text-navy-900 md:text-[2.85rem]">
          Explore Our Collections
        </h2>
        <div className="mt-10 space-y-8">
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-5 lg:grid-cols-10">
            {firstRow.map((c) => (
              <CollectionTile key={c.slug} slug={c.slug} name={c.name} image={c.image} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-5 lg:grid-cols-10">
            {secondRow.map((c) => (
              <CollectionTile key={c.slug} slug={c.slug} name={c.name} image={c.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
