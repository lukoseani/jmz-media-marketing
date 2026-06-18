"use client"

import { useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="group flex items-baseline gap-1 font-heading text-lg font-bold tracking-tight sm:text-xl"
        >
          <span className="animate-logo-pop">JMZ</span>
          <span className="animate-logo-blink text-primary">.</span>
          <span className="animate-logo-slide text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground sm:text-xs">
            Media&amp;Marketing
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Start a project
          <ArrowUpRight className="size-4" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-background md:hidden",
          open ? "max-h-96" : "max-h-0",
          "transition-all duration-300",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Start a project
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
