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
          { href: "/wholesale/register", label: "Create Wholesale Account", left: 5.5, top: 53, width: 24.6, height: 10.4 },
          { href: "/login", label: "Login", left: 18.7, top: 65.2, width: 4.2, height: 5.6 },
        ]}
        actions={[
          { href: "/wholesale/register", label: "Create Wholesale Account" },
          { href: "/login", label: "Login", variant: "outline" },
        ]}
      />

      <section className="border-t border-[#eee7db] bg-white">
        <ShopNowCatalog />
      </section>
    </div>
  );
}
