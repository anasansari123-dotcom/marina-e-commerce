"use client";

import { collections } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

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
      <p className="mt-2.5 text-[12px] font-medium leading-tight text-[#031D38] sm:text-[13px]">{name}</p>
    </Link>
  );
}

const arrowCls =
  "absolute z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-[#C9A84C]/60 bg-white/95 text-[#031D38] shadow-[0_4px_14px_rgba(11,29,54,0.22)] transition active:scale-95";

export function HomeCollections() {
  const items = collections.slice(0, 20);
  const firstRow = items.slice(0, 10);
  const secondRow = items.slice(10, 20);
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  function step(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const tile = el.querySelector<HTMLElement>("a");
    const by = tile ? tile.offsetWidth + 12 : el.clientWidth / 3;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: "smooth" });
    else el.scrollBy({ left: by * dir, behavior: "smooth" });
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) step(1);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  function pauseFor(ms: number) {
    paused.current = true;
    window.setTimeout(() => {
      paused.current = false;
    }, ms);
  }

  return (
    <section className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-serif text-3xl text-[#3A6EA5] md:text-[2.85rem]">
          Explore Our Collections
        </h2>

        <div className="relative -mx-5 mt-8 md:hidden">
          <div
            ref={track}
            onTouchStart={() => pauseFor(6000)}
            className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5"
          >
            {items.map((c) => (
              <CollectionTile
                key={c.slug}
                slug={c.slug}
                name={c.name}
                image={c.image}
                className="block w-[30vw] max-w-[132px] shrink-0 snap-start"
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous collections"
            onClick={() => {
              pauseFor(6000);
              step(-1);
            }}
            className={`${arrowCls} left-0`}
            style={{ top: "calc(min(30vw, 132px) / 2)" }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next collections"
            onClick={() => {
              pauseFor(6000);
              step(1);
            }}
            className={`${arrowCls} right-0`}
            style={{ top: "calc(min(30vw, 132px) / 2)" }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
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
