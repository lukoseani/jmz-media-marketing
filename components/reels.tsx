const REELS = [
  { code: "DYmoywJp7q5", label: "Social Media Reel" },
  { code: "DTJjIgkAX5B", label: "Ad Creative" },
  { code: "DPJuNeCEa8S", label: "Brand Content" },
]

export function Reels() {
  return (
    <section id="reels" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Reels & Content</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Scroll-stopping social content we&apos;ve produced
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A look at the short-form video and ad creative that drives reach, engagement and conversions for
            our clients.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((reel) => (
            <div
              key={reel.code}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-secondary">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.code}/embed`}
                  title={reel.label}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-4 py-3">
                <span className="text-sm font-medium text-foreground">{reel.label}</span>
                <a
                  href={`https://www.instagram.com/reel/${reel.code}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-primary transition-colors hover:text-foreground"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
