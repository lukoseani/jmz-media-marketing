import { Camera, Briefcase, Send, Play } from "lucide-react"

const FOOTER_LINKS = [
  {
    heading: "Services",
    links: ["Performance Marketing", "SEO", "Ad Creative", "Video Production"],
  },
  {
    heading: "Company",
    links: ["About", "Work", "Process", "Careers"],
  },
  {
    heading: "Connect",
    links: ["Contact", "Newsletter", "Partnerships", "Press"],
  },
]

const SOCIALS = [Camera, Briefcase, Send, Play]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <a href="#top" className="flex items-baseline gap-1 font-heading text-2xl font-bold tracking-tight">
              JMZ<span className="text-primary">.</span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Media&amp;Marketing
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A performance-driven marketing and creative studio helping ambitious brands grow profitably.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} JMZ Media&amp;Marketing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
