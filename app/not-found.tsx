import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-700">Off course</p>
      <h1 className="mt-3 font-serif text-3xl md:text-5xl">This chart is blank</h1>
      <p className="mt-3 text-navy-600">The page you asked for isn’t on our map.</p>
      <Link href="/" className="btn-gold mt-8">
        Return home
      </Link>
    </div>
  );
}
