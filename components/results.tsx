import { TrendingUp, Quote } from "lucide-react"

const RESULTS = [
  { value: "5.1x", label: "ROAS for Savoys Kitchen", detail: "Across Meta & Google in 90 days" },
  { value: "-38%", label: "Cost per lead", detail: "For Jogy Mathew real estate" },
  { value: "212%", label: "Organic traffic growth", detail: "12 months of SEO for Cabinet Planet" },
]

export function Results() {
  return (
    <section id="results" className="scroll-mt-24 border-t border-border/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <TrendingUp className="size-4" />
          The numbers
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
          {RESULTS.map((result) => (
            <div key={result.label} className="bg-card p-8">
              <p className="font-heading text-6xl font-bold tracking-tight text-primary">{result.value}</p>
              <p className="mt-4 font-heading text-lg font-semibold">{result.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{result.detail}</p>
            </div>
          ))}
        </div>

        <figure className="mt-14 rounded-2xl border border-border/60 bg-secondary/40 p-8 lg:p-12">
          <Quote className="size-8 text-primary" />
          <blockquote className="mt-6 max-w-3xl font-heading text-2xl font-semibold leading-snug tracking-tight text-balance sm:text-3xl">
            &ldquo;JMZ feels like an extension of our team. They obsess over the numbers but never lose the
            creative spark — our bookings have climbed every month since we partnered with them.&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
              SK
            </span>
            <span>
              <span className="block font-semibold text-foreground">Savoys South Indian Kitchen</span>
              <span className="block text-muted-foreground">Restaurant &amp; Hospitality</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
