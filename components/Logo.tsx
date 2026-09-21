import Image from "next/image";

const frames = {
  header:
    "relative h-11 w-[200px] overflow-hidden sm:h-12 sm:w-[240px] xl:h-[50px] xl:w-[260px]",
  footer: "relative h-12 w-[240px] overflow-hidden",
  hero: "relative mx-auto h-32 w-full max-w-3xl overflow-hidden md:h-44",
  admin: "relative h-10 w-full max-w-[190px] overflow-hidden",
};

export function BrandLogo({
  size = "header",
  priority = false,
}: {
  size?: keyof typeof frames;
  priority?: boolean;
}) {
  return (
    <span className={`block ${frames[size]}`}>
      <Image
        src="/logo1.png"
        alt="Marina Muse International — Exporter, Manufacturer & Supplier"
        fill
        priority={priority}
        sizes={
          size === "hero"
            ? "(max-width: 768px) 90vw, 768px"
            : size === "header"
              ? "320px"
              : "280px"
        }
        className={
          size === "hero" ? "object-contain object-center" : "object-contain object-left"
        }
      />
    </span>
  );
}

export function BrandWordmark({
  stacked = false,
  light = true,
}: {
  stacked?: boolean;
  light?: boolean;
}) {
  return (
    <BrandLogo
      size={stacked ? "hero" : light ? "header" : "footer"}
      priority={stacked || light}
    />
  );
}
