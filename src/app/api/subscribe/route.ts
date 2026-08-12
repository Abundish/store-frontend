import { NextResponse } from "next/server"

const MEDUSA_BACKEND_URL =
  process.env.MEDUSA_BACKEND_URL || "http://localhost:9000"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string }
    const email = body?.email?.trim()

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Missing email" },
        { status: 400 }
      )
    }

    const res = await fetch(`${MEDUSA_BACKEND_URL}/store/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-publishable-api-key":
          process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY ?? "",
      },
      body: JSON.stringify({ email, source: "storefront" }),
    })

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as {
        message?: string
      } | null
      return NextResponse.json(
        { ok: false, error: data?.message ?? "Subscription failed" },
        { status: res.status }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    )
  }
}
