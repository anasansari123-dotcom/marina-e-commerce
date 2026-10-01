import Link from "next/link";
import Image from "next/image";

export type BannerHotspot = {
  href: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export type BannerAction = {
  href: string;
  label: string;
  variant?: "gold" | "outline";
  external?: boolean;
};

const actionCls = {
  gold: "bg-gradient-to-b from-[#E8C97A] to-[#C9A84C] text-[#0B1D36] shadow-[0_6px_18px_rgba(201,168,76,0.35)] hover:brightness-105",
  outline: "border border-[#C9A84C] bg-[#081525]/40 text-[#E8D5A3] backdrop-blur-sm hover:bg-[#C9A84C]/15",
};

function ActionLink({ a, className }: { a: BannerAction; className: string }) {
  const cls = `inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold uppercase transition ${actionCls[a.variant ?? "gold"]} ${className}`;
  if (a.external) {
    return (
      <a href={a.href} target="_blank" rel="noreferrer" className={cls}>
        {a.label}
      </a>
    );
  }
  return (
    <Link href={a.href} className={cls}>
      {a.label}
    </Link>
  );
}

export function BannerHero({
  src,
  alt,
  title,
  hotspots = [],
  actions = [],
  actionsAt,
}: {
  src: string;
  alt: string;
  title: string;
  hotspots?: BannerHotspot[];
  actions?: BannerAction[];
  actionsAt?: { left: number; top: number };
}) {
  return (
    <section className="bg-[#081525]">
      <h1 className="sr-only">{title}</h1>
      <div className="relative mx-auto aspect-[1600/633] w-full max-w-[1920px] overflow-hidden">
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
        {hotspots.map((h) => (
          <Link
            key={h.label}
            href={h.href}
            aria-label={h.label}
            className="absolute z-10 rounded-full transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D5A3]"
            style={{ left: `${h.left}%`, top: `${h.top}%`, width: `${h.width}%`, height: `${h.height}%` }}
          />
        ))}
        {actionsAt && actions.length > 0 && (
          <div
            className="absolute z-10 hidden items-center gap-3 md:flex"
            style={{ left: `${actionsAt.left}%`, top: `${actionsAt.top}%` }}
          >
            {actions.map((a) => (
              <ActionLink
                key={a.label}
                a={a}
                className="px-4 py-2 text-[10px] tracking-[0.1em] lg:px-6 lg:py-3 lg:text-[12px] 2xl:px-7 2xl:py-3.5 2xl:text-[13px]"
              />
            ))}
          </div>
        )}
      </div>
      {actions.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-3.5 md:hidden">
          {actions.map((a) => (
            <ActionLink key={a.label} a={a} className="flex-auto px-4 py-2.5 text-[11px] tracking-[0.08em]" />
          ))}
        </div>
      )}
    </section>
  );
}
