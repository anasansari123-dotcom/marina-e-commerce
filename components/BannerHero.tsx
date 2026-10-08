import Link from "next/link";
import Image from "next/image";

export type BannerHotspot = {
  href: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  mobile?: { left: number; top: number; width: number; height: number };
  external?: boolean;
};

function HotspotLink({
  h,
  coords,
  className,
}: {
  h: BannerHotspot;
  coords: { left: number; top: number; width: number; height: number };
  className: string;
}) {
  const style = {
    left: `${coords.left}%`,
    top: `${coords.top}%`,
    width: `${coords.width}%`,
    height: `${coords.height}%`,
  };
  const cls = `absolute z-10 cursor-pointer rounded-full bg-transparent hover:bg-transparent focus-visible:outline-none ${className}`;
  if (h.external) {
    return (
      <a href={h.href} target="_blank" rel="noreferrer" aria-label={h.label} className={cls} style={style} />
    );
  }
  return <Link href={h.href} aria-label={h.label} className={cls} style={style} />;
}

export function BannerHero({
  src,
  mobileSrc,
  alt,
  title,
  hotspots = [],
  mobileFocus = "object-left",
  mobileAspect = "1374/1145",
}: {
  src: string;
  mobileSrc?: string;
  alt: string;
  title: string;
  hotspots?: BannerHotspot[];
  mobileFocus?: "object-left" | "object-center" | "object-[38%_center]";
  mobileAspect?: "1374/1145" | "1145/1374";
}) {
  const phoneSrc = mobileSrc ?? src;
  const hasMobileArt = Boolean(mobileSrc);

  return (
    <section className="bg-[#081525]">
      <h1 className="sr-only">{title}</h1>
      <div
        className={`relative mx-auto w-full max-w-[1920px] overflow-hidden sm:aspect-[1600/633] ${
          mobileAspect === "1145/1374" ? "aspect-[1145/1374]" : "aspect-[1374/1145]"
        }`}
      >
        <Image
          src={phoneSrc}
          alt={alt}
          fill
          priority
          quality={95}
          sizes="100vw"
          className={`sm:hidden ${
            hasMobileArt ? "object-contain object-center" : `${mobileFocus} object-cover`
          }`}
        />
        <Image
          src={src}
          alt=""
          fill
          aria-hidden
          quality={95}
          sizes="100vw"
          className="hidden object-cover object-center sm:block"
        />
        {hotspots.map((h) => (
          <HotspotLink
            key={`d-${h.label}`}
            h={h}
            coords={h}
            className="hidden sm:block"
          />
        ))}
        {hotspots.map((h) => (
          <HotspotLink
            key={`m-${h.label}`}
            h={h}
            coords={h.mobile ?? h}
            className="sm:hidden"
          />
        ))}
      </div>
    </section>
  );
}
