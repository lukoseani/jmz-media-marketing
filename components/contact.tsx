"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Check } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Let&apos;s talk</p>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl">
              Ready to grow? Let&apos;s build something that performs.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              Tell us about your goals and we&apos;ll put together a tailored plan — no obligation, no jargon.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Free, no-pressure strategy session",
                "Custom channel & creative recommendations",
                "Transparent pricing and reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-sm text-muted-foreground">
              <p>
                Prefer email?{" "}
                <a href="mailto:hello@jmzmedia.com" className="font-medium text-primary hover:underline">
                  hello@jmzmedia.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold">Thanks — we&apos;ll be in touch!</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  A member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
                <Field label="Company" name="company" type="text" placeholder="Acme Inc." />
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Performance Marketing</option>
                    <option>Social Media Marketing</option>
                    <option>SEO</option>
                    <option>AI Ads</option>
                    <option>Meta &amp; Google Ads</option>
                    <option>Ad Creative</option>
                    <option>Branding &amp; UI/UX</option>
                    <option>Video Production</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Our goals, budget and timeline..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Send message
                  <ArrowUpRight className="size-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  )
}
