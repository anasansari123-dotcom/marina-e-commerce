import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getDb } from "@/lib/mongodb";
import type { DbUser, UserRole } from "@/lib/db/types";

export async function GET(req: Request) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const segment = searchParams.get("segment");
  const db = await getDb();
  const filter =
    segment === "wholesale"
      ? { role: "wholesale" as const }
      : segment === "customer"
        ? { role: "customer" as const }
        : { role: { $in: ["customer", "wholesale"] as UserRole[] } };

  const users = await db
    .collection<DbUser>("users")
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(200)
    .toArray();

  return NextResponse.json({
    items: users.map((u) => ({
      id: String(u._id),
      name: u.name,
      email: u.email,
      role: u.role,
      wholesaleProfileComplete: u.wholesaleProfileComplete,
      createdAt: u.createdAt.toISOString(),
    })),
  });
}
