import Image from "next/image";

const frames = {
  header: "h-10 sm:h-11 md:h-12 xl:h-[52px]",
  footer: "h-14 sm:h-16",
  hero: "mx-auto h-36 md:h-48",
  admin: "h-14",
};

export function BrandLogo({
  size = "header",
  priority = false,
  onDark = true,
}: {
  size?: keyof typeof frames;
  priority?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center ${onDark ? "rounded-md bg-white px-2.5 py-1.5 shadow-sm" : ""}`}
    >
      <span className={`relative block ${frames[size]}`}>
        <Image
          src="/newlogo-removebg-preview.png"
          alt="Marina Muse International — Exporter, Manufacturer & Supplier"
          width={707}
          height={353}
          priority={priority}
          sizes={size === "hero" ? "(max-width: 768px) 90vw, 768px" : "420px"}
          className="h-full w-auto object-contain"
        />
      </span>
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
