import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/mongodb";
import { findUserByEmail } from "@/lib/auth-helpers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const otp = String(body.otp ?? "").trim();
    const password = String(body.password ?? "");

    if (!email || !otp || password.length < 8) {
      return NextResponse.json({ error: "Email, code and new password (8+) are required." }, { status: 400 });
    }

    const db = await getDb();
    const record = await db.collection("password_otps").findOne({ email });
    if (!record || String(record.otp) !== otp) {
      return NextResponse.json({ error: "Invalid or expired code." }, { status: 400 });
    }
    if (new Date(record.expiresAt as Date) < new Date()) {
      return NextResponse.json({ error: "Code expired. Request a new one." }, { status: 400 });
    }

    const user = await findUserByEmail(email);
    if (!user?._id) {
      return NextResponse.json({ error: "Account not found." }, { status: 404 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await db.collection("users").updateOne(
      { _id: user._id },
      { $set: { passwordHash, updatedAt: new Date() } }
    );
    await db.collection("password_otps").deleteOne({ email });

    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Reset failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
