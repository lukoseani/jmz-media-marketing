import Image from "next/image"
import {
  BarChart3,
  Share2,
  Search,
  Sparkles,
  Megaphone,
  Palette,
  Layout,
  Video,
} from "lucide-react"

const SHOWCASE = [
  { image: "/work-campaign.png", label: "Ad Creative" },
  { image: "/work-social.png", label: "Social Media" },
  { image: "/work-brand.png", label: "Branding & UI/UX" },
  { image: "/work-video.png", label: "Video Production" },
]

const SERVICES = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Full-funnel paid media built to scale profitably. We optimize for revenue, not vanity metrics.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Organic and paid social strategy that grows communities and drives consistent engagement.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical, on-page and content SEO that compounds traffic and lowers your cost per lead over time.",
  },
  {
    icon: Sparkles,
    title: "AI Ads",
    description:
      "AI-powered creative testing and audience modeling to find winning variations faster than ever.",
  },
  {
    icon: Megaphone,
    title: "Meta & Google Ads",
    description:
      "Expert management across Meta, Google, YouTube and TikTok with transparent reporting.",
  },
  {
    icon: Palette,
    title: "Ad Creative",
    description:
      "Thumb-stopping static, motion and UGC creative engineered to convert across every platform.",
  },
  {
    icon: Layout,
    title: "Branding & UI/UX",
    description:
      "Brand identity, design systems and conversion-focused interfaces that feel unmistakably yours.",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "End-to-end production — from concept and shoot to edit — for ads, brand films and social.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 max-w-2xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              One studio for every growth channel.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
            Strategy, media buying, creative and production under one roof — so your campaigns stay aligned and
            move fast.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWCASE.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`${item.label} sample work`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
