import Link from "next/link";
import { WholesaleRegisterForm } from "@/components/WholesaleForms";

export default function WholesaleRegisterPage() {
  return (
    <div className="bg-[#FAF7F2] py-8 md:py-10">
      <div className="mx-auto max-w-[820px] px-5">
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(26,20,12,0.06)] md:p-10">
          <h1 className="font-serif text-[1.75rem] md:text-[2.1rem] text-navy-900">Create Your Wholesale Account</h1>
          <p className="mt-2 text-sm text-navy-600">
            Same fields as wholesale registration on the login page. Use this form if you already signed in and need to
            submit or update your trade application.
          </p>
          <div className="mt-8">
            <WholesaleRegisterForm />
          </div>
          <p className="mt-6 text-center text-xs text-navy-500">
            Need a bulk quote instead?{" "}
            <Link href="/wholesale/quote" className="underline text-[#8C6E28]">
              Request a quote
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
