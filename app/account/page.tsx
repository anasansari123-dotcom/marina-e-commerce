import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
      <h1 className="font-serif text-4xl">Your account</h1>
      <p className="mt-2 text-navy-600">Demo customer / wholesale portal.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          ["Orders", "No live orders yet — place a demo checkout.", "/cart"],
          ["Quotes", "Open a bulk quote for trade pricing.", "/wholesale/quote"],
          ["Wishlist", "Pieces you saved with the heart icon.", "/wishlist"],
          ["Trade desk", "Wholesale home and account application.", "/wholesale"],
        ].map(([t, d, href]) => (
          <Link key={t} href={href} className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-serif text-2xl">{t}</h2>
            <p className="mt-2 text-sm text-navy-600">{d}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
