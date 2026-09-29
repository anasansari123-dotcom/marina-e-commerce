import { BulkQuoteForm } from "@/components/WholesaleForms";

export default function QuotePage() {
  return (
    <div className="bg-[#FAF7F2] py-8 md:py-10">
      <div className="mx-auto max-w-[640px] px-5">
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(26,20,12,0.06)] md:p-10">
          <h1 className="font-serif text-[2.1rem] text-navy-900">Request a Bulk Quote</h1>
          <p className="mt-2 text-sm text-navy-600">
            Tell us what you need. We’ll return landed-cost options for your destination.
          </p>
          <div className="mt-8">
            <BulkQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
