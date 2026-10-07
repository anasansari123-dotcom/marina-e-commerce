import { BannerHero } from "@/components/BannerHero";
import { ShopNowCatalog } from "@/components/ShopNowCatalog";

export default function WholesalePage() {
  return (
    <div className="bg-[#FAF7F2]">
      <BannerHero
        src="/b2b-banner.jpeg"
        alt="B2B / Wholesale — Built for Businesses, Priced for Volume. Cargo port at sunset."
        title="B2B Wholesale — Built for Businesses. Priced for Volume."
        hotspots={[
          {
            href: "/wholesale/register",
            label: "Create Wholesale Account",
            left: 4.2,
            top: 51,
            width: 26,
            height: 11,
            mobile: { left: 6, top: 48, width: 78, height: 13 },
          },
          {
            href: "/login",
            label: "Login",
            left: 3.8,
            top: 63,
            width: 20,
            height: 8,
            mobile: { left: 6, top: 62, width: 70, height: 11 },
          },
        ]}
      />

      <section className="border-t border-[#eee7db] bg-white">
        <ShopNowCatalog />
      </section>
    </div>
  );
}
