import Image from "next/image";

const frames = {
  header: "h-[52px] sm:h-16 md:h-[72px] xl:h-[80px]",
  footer: "h-16 sm:h-[4.5rem] md:h-20",
  hero: "mx-auto h-36 md:h-48",
  admin: "h-14",
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
        src="/newlogo.png"
        alt="Marina Muse International — Exporter, Manufacturer & Supplier"
        width={707}
        height={353}
        priority={priority}
        sizes={size === "hero" ? "(max-width: 768px) 90vw, 768px" : "420px"}
        className="h-full w-auto object-contain"
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
