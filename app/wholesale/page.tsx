import { BannerHero } from "@/components/BannerHero";
import { ShopNowCatalog } from "@/components/ShopNowCatalog";

export default function WholesalePage() {
  return (
    <div className="bg-[#FAF7F2]">
      <BannerHero
        src="/b2bnew.jpeg"
        mobileSrc="/b2bmobile.jpeg"
        alt="B2B / Wholesale — Built for Businesses, Priced for Volume."
        title="B2B Wholesale — Built for Businesses. Priced for Volume."
        hotspots={[
          {
            href: "/wholesale/register",
            label: "Create Wholesale Account",
            left: 13.5,
            top: 57.6,
            width: 24.7,
            height: 10.2,
            mobile: { left: 13.8, top: 43.2, width: 30.8, height: 6.1 },
          },
          {
            href: "/login",
            label: "Login",
            left: 26.9,
            top: 71.8,
            width: 4.5,
            height: 3.7,
            mobile: { left: 31.5, top: 51.8, width: 5.4, height: 3.1 },
          },
        ]}
      />

      <section className="border-t border-[#eee7db] bg-white">
        <ShopNowCatalog />
      </section>
    </div>
  );
}
