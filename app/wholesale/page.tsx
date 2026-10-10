import { ShopNowCatalog } from "@/components/ShopNowCatalog";
import { WholesalePageBanner } from "@/components/WholesalePageBanner";

export default function WholesalePage() {
  return (
    <div className="bg-[#FAF7F2]">
      <WholesalePageBanner />

      <section className="border-t border-[#eee7db] bg-white">
        <ShopNowCatalog />
      </section>
    </div>
  );
}
