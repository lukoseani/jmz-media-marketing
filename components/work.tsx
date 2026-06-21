import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const PROJECTS = [
  {
    image: "/client-savoys.png",
    client: "Savoys South Indian Kitchen",
    title: "Always-on social & ad creative that fills tables",
    tags: ["Social Media", "Ad Creative"],
    span: "lg:col-span-2",
  },
  {
<<<<<<< HEAD
    image: "/client-cabinet.png",
    client: "Cabinet Planet",
    title: "Social media ad campaigns that book more kitchen projects",
    tags: ["Social Media Ads", "Ad Creative"],
    span: "",
  },
  {
=======
>>>>>>> 59f8407310bed1a571eb8b09f75da78b332dbe25
    image: "/client-realtor.png",
    client: "Jogy Mathew — Edmonton Realtor",
    title: "Social media ads that drive qualified buyer & seller leads",
    tags: ["Social Media Ads", "Meta Ads"],
<<<<<<< HEAD
    span: "lg:col-span-2",
=======
    span: "",
  },
  {
    image: "/client-cabinet.png",
    client: "Cabinet Planet",
    title: "Social media ad campaigns that book more kitchen projects",
    tags: ["Social Media Ads", "Ad Creative"],
    span: "lg:col-span-3",
>>>>>>> 59f8407310bed1a571eb8b09f75da78b332dbe25
  },
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Selected work</p>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Campaigns that perform.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-foreground hover:text-primary"
          >
            Start your project
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.client}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 ${project.span}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.client} — ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {project.client}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-balance">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
