import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Reels } from "@/components/reels"
import { Results } from "@/components/results"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Work />
        <Reels />
        <Results />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
