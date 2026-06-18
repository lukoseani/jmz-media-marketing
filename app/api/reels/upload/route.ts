import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { type NextRequest, NextResponse } from "next/server"

// Client-side uploads bypass the ~4.5MB serverless body limit, so large
// reel videos (tens of MB) stream directly from the browser to Blob.
export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Only allow video uploads into the reels/ folder.
        return {
          allowedContentTypes: [
            "video/mp4",
            "video/quicktime",
            "video/webm",
          ],
          addRandomSuffix: true,
          maximumSizeInBytes: 200 * 1024 * 1024, // 200MB ceiling
          tokenPayload: JSON.stringify({ pathname }),
        }
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("[v0] Reel upload completed:", blob.url)
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    )
  }
}
