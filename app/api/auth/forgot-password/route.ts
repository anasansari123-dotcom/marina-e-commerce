import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { findUserByEmail } from "@/lib/auth-helpers";
import { sendPasswordOtp } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const normalized = String(email ?? "").trim().toLowerCase();
    if (!normalized) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const user = await findUserByEmail(normalized);
    if (!user) {
      return NextResponse.json({
        ok: true,
        message: "If that email exists, a code has been sent.",
      });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    const db = await getDb();
    await db.collection("password_otps").updateOne(
      { email: normalized },
      { $set: { email: normalized, otp, expiresAt, createdAt: new Date() } },
      { upsert: true }
    );

    await sendPasswordOtp(normalized, otp);

    return NextResponse.json({
      ok: true,
      message: "If that email exists, a code has been sent.",
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Could not send reset code";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
