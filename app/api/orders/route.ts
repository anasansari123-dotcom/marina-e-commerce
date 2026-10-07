import { NextResponse } from "next/server";
import { getOrdersByEmail, publicOrder } from "@/lib/orders";

export async function GET(req: Request) {
  const email = new URL(req.url).searchParams.get("email") ?? "";
  if (!email.includes("@")) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  return NextResponse.json({
    orders: getOrdersByEmail(email).map(publicOrder),
  });
}
