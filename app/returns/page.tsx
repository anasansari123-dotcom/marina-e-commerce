import { company } from "@/lib/company";
import { ReturnRequestForm } from "@/components/ReturnRequestForm";

const sections: { title: string; body: string[]; list?: string[] }[] = [
  {
    title: "1. 14-Day Right to Return",
    body: [
      "For eligible standard products purchased online by EU consumers, you may have the right to withdraw from your purchase within 14 days from the date you receive the goods, without giving a specific reason.",
      "To exercise this right, please contact us within the applicable withdrawal period through our official customer-support contact.",
      "The product should be returned within the applicable legal period and should be handled with reasonable care. Where permitted by applicable law, the customer may be responsible for the direct cost of returning a product after a change-of-mind return.",
    ],
  },
  {
    title: "2. Damaged During Delivery",
    body: [
      "If your package arrives visibly damaged, please contact us as soon as possible and provide photographs of:",
    ],
    list: ["The outer packaging", "Shipping labels", "The damaged product", "Any damaged or missing components"],
  },
  {
    title: "3. Wrong or Incorrect Product",
    body: [
      "If you receive a product that is materially different from what you ordered, such as the wrong model, size, specification or quantity, please contact us promptly.",
      "We will investigate the issue and, where applicable, arrange an appropriate remedy such as replacement, repair or refund.",
    ],
  },
  {
    title: "4. Manufacturing Defects & Non-Conforming Products",
    body: [
      "Our products are inspected before shipment.",
      "If a product has a manufacturing defect or does not conform to the contract, description or agreed specifications, please contact us with photographs, videos and your order information.",
      "Where required by applicable law, we will provide the appropriate remedy, which may include repair, replacement, price reduction or refund.",
      "For EU consumers, statutory consumer guarantee rights apply in accordance with applicable EU and national law.",
    ],
  },
  {
    title: "5. Custom-Made & Personalised Products",
    body: [
      "Some MARINA MUSE INTERNATIONAL products may be manufactured specifically according to a customer's individual measurements, specifications, engraving, design, configuration or other personalised requirements.",
      "Certain personalised or custom-made goods may be excluded from the standard 14-day withdrawal right under applicable EU consumer law.",
      "However, this does not affect any mandatory legal rights relating to defective, damaged or non-conforming goods.",
      "Before production begins, we may confirm the customer's specifications to help avoid errors.",
    ],
  },
  {
    title: "6. Exchange Policy",
    body: [
      "For eligible standard products, an exchange may be available subject to product availability and applicable consumer law.",
      "If you receive an incorrect, damaged or defective product, please contact us before sending anything back. We will provide return instructions and determine the appropriate solution.",
      "Custom-made or personalised products may not be eligible for exchange simply because the customer changes their mind, where applicable law permits this.",
    ],
  },
  {
    title: "7. Refunds",
    body: [
      "Once a return or cancellation is accepted, any refund will be processed in accordance with applicable law.",
      "Where applicable, refunds will normally be made using the original payment method.",
      "Depending on the circumstances of the return, applicable law may determine which shipping costs are refundable and who is responsible for return shipping costs.",
      "We will not unlawfully withhold a refund where the customer has a mandatory statutory right to one.",
    ],
  },
  {
    title: "8. Product Condition for Change-of-Mind Returns",
    body: [
      "For a change-of-mind return, please keep the product in a condition that allows it to be inspected.",
      "Where permitted by applicable law, you may be responsible for any diminished value caused by handling beyond what is reasonably necessary to establish the nature, characteristics and functioning of the goods.",
      "Please return the product with its original accessories, components and packaging where reasonably possible.",
    ],
  },
  {
    title: "9. Return Procedure",
    body: ["To request a return, please provide:"],
    list: ["Order Number", "Customer Name", "Product Name", "Reason for Return", "Photographs or Video, where relevant"],
  },
  {
    title: "10. International Orders",
    body: [
      "For customers outside the European Union, return, refund, customs, duties and shipping arrangements may differ depending on the destination country and applicable law.",
      "Any mandatory consumer rights applicable to the customer's country remain unaffected.",
      "Import duties, taxes and customs charges may be treated according to the applicable destination-country rules and the terms displayed at the time of purchase.",
    ],
  },
  {
    title: "11. Handcrafted Products",
    body: [
      "Many MARINA MUSE INTERNATIONAL products are handcrafted.",
      "Minor variations in natural wood, brass finish, leather, colour, texture or handcrafted detailing may occur and can be part of the character of a handmade product.",
      "Such ordinary handcrafted variations are not automatically considered defects.",
      "However, this does not affect your statutory rights where a product is defective or does not conform to the agreed description or specifications.",
    ],
  },
  {
    title: "12. Contact Us",
    body: [
      "For any return, exchange, refund or product issue, please contact MARINA MUSE INTERNATIONAL through the customer-support contact details provided on our website.",
      "Please include your order number so that we can process your request efficiently.",
    ],
  },
];

export default function ReturnsPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <article className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-[860px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A84C]">Policy</p>
          <h1 className="mt-2 font-serif text-[1.65rem] text-navy-900 md:text-4xl">
            Return, Refund &amp; Exchange Policy
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#8C6E28]">{company.name}</p>
          <p className="mt-5 leading-relaxed text-navy-600">
            We want every customer to feel confident when purchasing from {company.name}. Every product is carefully
            inspected and securely packed before shipment.
          </p>
          <p className="mt-4 leading-relaxed text-navy-600">
            For customers in the European Union, mandatory consumer rights apply in addition to the policies below.
            Nothing in this policy limits any legal rights that cannot legally be excluded or restricted.
          </p>

          {sections.map((s) => (
            <section key={s.title} className="mt-9">
              <h2 className="font-serif text-xl text-navy-900 md:text-2xl">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 leading-relaxed text-navy-600">
                  {p}
                </p>
              ))}
              {s.list ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-navy-700">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {s.title.startsWith("2.") ? (
                <p className="mt-3 leading-relaxed text-navy-600">
                  We will review the case and provide an appropriate solution, which may include repair, replacement or
                  refund, subject to applicable consumer law.
                </p>
              ) : null}
              {s.title.startsWith("9.") ? (
                <>
                  <p className="mt-3 leading-relaxed text-navy-600">
                    Our customer-support team will provide the appropriate return instructions.
                  </p>
                  <p className="mt-3 leading-relaxed text-navy-600">
                    Please do not send a product to an address without first receiving return instructions from{" "}
                    {company.name.toUpperCase()}.
                  </p>
                </>
              ) : null}
            </section>
          ))}

          <div className="mt-12 border-t border-[#e6dfd2] pt-8 text-center">
            <p className="font-serif text-xl text-navy-900">{company.name}</p>
            <p className="mt-1 text-sm text-navy-600">Handcrafted Brass &amp; Heritage Products</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8C6E28]">
              Worldwide Shipping | International Customer Support
            </p>
          </div>

          <div className="mt-10">
            <ReturnRequestForm />
          </div>
        </div>
      </article>
    </div>
  );
}
