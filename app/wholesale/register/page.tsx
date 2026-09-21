import { WholesaleRegisterForm } from "@/components/WholesaleForms";

export default function WholesaleRegisterPage() {
  return (
    <div className="bg-[#FAF7F2] py-12">
      <div className="mx-auto max-w-[820px] px-5">
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(26,20,12,0.06)] md:p-10">
          <h1 className="font-serif text-[2.1rem] text-navy-900">Create Your Wholesale Account</h1>
          <p className="mt-2 text-sm text-navy-600">
            Gain access to exclusive wholesale pricing, bulk orders and private-label programmes.
          </p>
          <div className="mt-8">
            <WholesaleRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
