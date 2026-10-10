import { pingDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function TestDbPage() {
  const result = await pingDatabase();

  return (
    <div className="mx-auto max-w-lg px-5 py-16">
      <h1 className="font-serif text-3xl text-navy-900">Database connection test</h1>
      <p className="mt-4 text-navy-600">
        This route checks whether the app can reach MongoDB Atlas using <code className="text-sm">MONGODB_URI</code>.
      </p>
      <div
        className={`mt-8 rounded-2xl border px-6 py-5 ${
          result.ok ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-red-200 bg-red-50 text-red-900"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-wider">{result.ok ? "Connected" : "Not connected"}</p>
        <p className="mt-2 text-sm">{result.message}</p>
      </div>
    </div>
  );
}
