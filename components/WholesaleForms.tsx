"use client";

import { collections, products } from "@/lib/products";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function WholesaleRegisterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-[#C9A84C]" />
        <h3 className="mt-4 font-serif text-3xl">Application received</h3>
        <p className="mt-2 text-sm text-navy-600">We’ll review your trade account within one business day.</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      {[
        ["Company Name", "company", "text"],
        ["Contact Person", "contact", "text"],
        ["Company Email", "email", "email"],
        ["Phone", "phone", "tel"],
        ["Website", "website", "url"],
      ].map(([label, name, type]) => (
        <label key={name} className="block text-[13px]">
          <span className="mb-1.5 block text-navy-700">{label}</span>
          <input required={name !== "website"} name={name} type={type} className="input" />
        </label>
      ))}
      <label className="block text-[13px]">
        <span className="mb-1.5 block text-navy-700">Business Type</span>
        <select name="type" className="input" required>
          <option value="">Select</option>
          <option>Retailer</option>
          <option>Wholesaler / Importer</option>
          <option>Hotel & Hospitality</option>
          <option>E-commerce</option>
        </select>
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block text-navy-700">Tax ID / VAT / GST</span>
        <input name="tax" className="input" />
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block text-navy-700">Expected Quantity</span>
        <select name="qty" className="input" required>
          <option>50 – 200</option>
          <option>200 – 1,000</option>
          <option>1,000+</option>
          <option>Container programme</option>
        </select>
      </label>
      <label className="block text-[13px] md:col-span-2">
        <span className="mb-1.5 block text-navy-700">Products Interested In</span>
        <select name="interest" className="input">
          {collections.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn-gold mt-2 w-full md:col-span-2">
        Submit Application
      </button>
    </form>
  );
}

export function BulkQuoteForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-[#C9A84C]" />
        <h3 className="mt-4 font-serif text-3xl">Quote requested</h3>
        <p className="mt-2 text-sm text-navy-600">FOB / CIF options will arrive within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label className="block text-[13px]">
        <span className="mb-1.5 block">Product</span>
        <select className="input" required defaultValue="Antique Brass Nautical Compass">
          {products.map((p) => (
            <option key={p.slug}>{p.name}</option>
          ))}
        </select>
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block">Quantity</span>
        <input className="input" type="number" min={12} defaultValue={50} required />
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block">Logo / Engraving</span>
        <input className="input" placeholder="Company crest, coordinates, or none" />
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block">Packaging</span>
        <select className="input">
          <option>Standard gift box</option>
          <option>Magnetic branded box</option>
          <option>Your packaging</option>
          <option>Export only / bulk packed</option>
        </select>
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block">Destination Country</span>
        <input className="input" placeholder="United States" required />
      </label>
      <label className="block text-[13px]">
        <span className="mb-1.5 block">Required Delivery Date</span>
        <input className="input" type="date" />
      </label>
      <fieldset className="text-[13px]">
        <legend className="mb-2">Choose shipping</legend>
        <div className="flex flex-wrap gap-4">
          {["Ex Works", "FOB", "CIF", "DDP"].map((t) => (
            <label key={t} className="flex items-center gap-2">
              <input type="radio" name="incoterm" defaultChecked={t === "FOB"} /> {t}
            </label>
          ))}
        </div>
      </fieldset>
      <button className="btn-gold mt-2 w-full">Get Quote Now</button>
    </form>
  );
}

export function TradeFormsPair() {
  return (
    <section className="bg-[#FAF7F2] px-5 py-10 md:py-12">
      <div className="mx-auto grid max-w-[1320px] gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(26,20,12,0.06)] md:p-8">
          <h2 className="font-serif text-[1.85rem] text-navy-900">Create Your Wholesale Account</h2>
          <p className="mt-2 text-sm text-navy-600">
            Gain access to exclusive wholesale pricing, bulk orders and private-label programmes.
          </p>
          <div className="mt-6">
            <WholesaleRegisterForm />
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(26,20,12,0.06)] md:p-8">
          <h2 className="font-serif text-[1.85rem] text-navy-900">Request a Bulk Quote</h2>
          <p className="mt-2 text-sm text-navy-600">
            Tell us what you need. We’ll return landed-cost options for your destination.
          </p>
          <div className="mt-6">
            <BulkQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
