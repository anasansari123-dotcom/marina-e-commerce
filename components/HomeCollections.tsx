import { collections } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

function CollectionTile({
  slug,
  name,
  image,
  className = "",
}: {
  slug: string;
  name: string;
  image: string;
  className?: string;
}) {
  return (
    <Link href={`/collections/${slug}`} className={`group text-center ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#2a2118] shadow-[0_8px_24px_rgba(26,20,12,0.12)]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 30vw, (max-width: 1024px) 18vw, 10vw"
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
  const marquee = [...items, ...items];

  return (
    <section className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-3xl text-navy-900 md:text-[2.85rem]">
          Explore Our Collections
        </h2>

        <div className="-mx-5 mt-8 overflow-hidden md:hidden">
          <div className="flex w-max animate-marquee gap-3 px-5 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marquee.map((c, i) => (
              <CollectionTile
                key={`${c.slug}-${i}`}
                slug={c.slug}
                name={c.name}
                image={c.image}
                className="block w-[30vw] max-w-[132px] shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 hidden space-y-6 md:block">
          <div className="grid grid-cols-5 gap-x-3 gap-y-6 lg:grid-cols-10">
            {firstRow.map((c) => (
              <CollectionTile key={c.slug} slug={c.slug} name={c.name} image={c.image} />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-x-3 gap-y-6 lg:grid-cols-10">
            {secondRow.map((c) => (
              <CollectionTile key={`b-${c.slug}`} slug={c.slug} name={c.name} image={c.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
