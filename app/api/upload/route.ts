import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

/** Upload product images — uses KVM2 remote URL when configured, else local public/uploads. */
export async function POST(req: Request) {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const kvmBase = process.env.KVM2_UPLOAD_URL?.replace(/\/$/, "");
  const kvmToken = process.env.KVM2_UPLOAD_TOKEN;

  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    const original = (file as File).name || "upload.jpg";
    const safe = original.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}-${safe}`;

    if (kvmBase) {
      const remote = new FormData();
      remote.append("file", new Blob([bytes]), filename);
      const headers: HeadersInit = {};
      if (kvmToken) headers.Authorization = `Bearer ${kvmToken}`;
      const res = await fetch(`${kvmBase}/upload`, { method: "POST", body: remote, headers });
      if (!res.ok) {
        const text = await res.text();
        return NextResponse.json({ error: `Remote upload failed: ${text}` }, { status: 502 });
      }
      const data = (await res.json()) as { url?: string };
      return NextResponse.json({ url: data.url ?? `${kvmBase}/files/${filename}` });
    }

    const dir = path.join(process.cwd(), "public", "uploads");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, filename), bytes);
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
