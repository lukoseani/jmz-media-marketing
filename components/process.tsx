const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your funnel, analytics and creative to find the biggest opportunities for growth.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A clear channel mix, messaging framework and KPI targets mapped to your revenue goals.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We produce the creative, build the campaigns and go live with rigorous tracking in place.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Continuous testing and optimization to scale what works and compound results month over month.",
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-border/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">How we work</p>
        <h2 className="mt-3 max-w-2xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          A proven process, built for momentum.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-5 bg-card p-8">
              <span className="font-heading text-5xl font-bold text-primary">{step.number}</span>
              <h3 className="font-heading text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
