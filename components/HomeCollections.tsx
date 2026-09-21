"use client";

import { collections } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export function HomeCollections() {
  const loop = [...collections, ...collections];

  return (
    <section className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-3xl text-navy-900 md:text-[2.85rem]">
          Explore Our Collections
        </h2>
        <div className="mt-10 overflow-hidden">
          <div className="collections-marquee flex w-max gap-4">
            {loop.map((c, i) => (
              <Link
                key={`${c.slug}-${i}`}
                href={`/collections/${c.slug}`}
                className="group w-[132px] shrink-0 text-center sm:w-[148px]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#2a2118] shadow-[0_8px_24px_rgba(26,20,12,0.12)]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-2.5 text-[13px] leading-tight text-navy-800">{c.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
