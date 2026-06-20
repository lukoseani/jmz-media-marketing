import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "reels/" })

    const reels = blobs
      .filter((b) => /\.(mp4|mov|webm)$/i.test(b.pathname))
      .sort((a, b) => (a.uploadedAt < b.uploadedAt ? -1 : 1))
      .map((b) => ({
        url: b.url,
        pathname: b.pathname,
        size: b.size,
        uploadedAt: b.uploadedAt,
      }))

    return NextResponse.json({ reels })
  } catch (error) {
    console.error("[v0] Failed to list reels:", error)
    return NextResponse.json({ error: "Failed to list reels" }, { status: 500 })
  }
}
