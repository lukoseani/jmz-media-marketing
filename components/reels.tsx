import { list } from "@vercel/blob"
import { ReelPlayer } from "@/components/reel-player"

const LABELS = ["Social Media Reel", "Ad Creative", "Brand Content", "Video Production"]

async function getReels() {
  try {
    const { blobs } = await list({ prefix: "reels/" })
    return blobs
      .filter((b) => /\.(mp4|mov|webm)$/i.test(b.pathname))
      .sort((a, b) => (a.uploadedAt < b.uploadedAt ? -1 : 1))
      .map((b) => b.url)
  } catch {
    return []
  }
}

export async function Reels() {
  const reels = await getReels()

  return (
    <section id="reels" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Reels &amp; Content</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Scroll-stopping social content we&apos;ve produced
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A look at the short-form video and ad creative that drives reach, engagement and conversions for
            our clients.
          </p>
        </div>

        {reels.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border/60 bg-card/50 px-6 py-16 text-center">
            <p className="text-sm text-muted-foreground">
              No reels uploaded yet. Add your videos from the{" "}
              <a href="/admin/reels" className="font-medium text-primary hover:text-foreground">
                reel manager
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reels.map((url, i) => (
              <ReelPlayer key={url} src={url} label={LABELS[i] ?? "Reel"} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
