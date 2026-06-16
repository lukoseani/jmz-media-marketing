import { ArrowUpRight } from "lucide-react"

const MARQUEE = [
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "AI Ads",
  "Ad Creative",
  "Branding",
  "UI / UX",
  "Video Production",
  "Social Media",
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="size-2 rounded-full bg-primary" />
          Performance &amp; Creative Studio
        </div>

        <h1 className="mt-6 max-w-5xl font-heading text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          We turn attention into <span className="text-primary">measurable</span> growth.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          JMZ Media&amp;Marketing is a full-service studio blending data-driven performance marketing with
          scroll-stopping creative. From Meta and Google Ads to branding, UI/UX and video production, we build
          campaigns that convert.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book a free strategy call
            <ArrowUpRight className="size-5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            See our work
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border/60 py-10">
          {[
            { value: "4.2x", label: "Avg. return on ad spend" },
            { value: "320+", label: "Campaigns launched" },
            { value: "98%", label: "Client retention" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-4 overflow-hidden border-y border-border/60 bg-secondary/40 py-4">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-heading text-lg font-semibold text-foreground/80">{item}</span>
              <span className="size-1.5 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
