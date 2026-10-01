import Image from "next/image";

const frames = {
  header: "h-12 max-w-[46vw] sm:h-14 sm:max-w-none lg:h-[52px] xl:h-16 2xl:h-[68px]",
  footer: "h-16 overflow-hidden rounded-lg sm:h-[4.5rem] md:h-20",
  hero: "mx-auto h-24 max-w-full overflow-hidden rounded-2xl sm:h-36 md:h-48",
  admin: "h-14 max-w-full overflow-hidden rounded-lg",
  auth: "mx-auto h-24 max-w-full overflow-hidden rounded-2xl shadow-soft sm:h-28",
};

export function BrandLogo({
  size = "header",
  priority = false,
}: {
  size?: keyof typeof frames;
  priority?: boolean;
}) {
  return (
    <span className={`relative inline-block leading-none ${frames[size]}`}>
      <Image
        src="/logo-navy.jpg"
        alt="Marina Muse International — Timeless Craftsmanship, Global Reach"
        width={1460}
        height={510}
        priority={priority}
        sizes={size === "hero" ? "(max-width: 768px) 90vw, 576px" : "240px"}
        className="h-full w-auto max-w-full object-contain"
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
