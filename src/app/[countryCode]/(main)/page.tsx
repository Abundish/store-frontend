import { Metadata } from "next"
import { getRegion } from "@lib/data/regions"
import BrandStory from "./_components/brand-story"
import CategoriesShowcase from "./_components/categories-showcase"
import FAQ from "./_components/faq"
import InSeason from "./_components/in-season"
import TopPicks from "./_components/top-picks"
import HowItWorks from "./_components/how-it-works"
import Newsletter from "./_components/newsletter"
import Testimonials from "./_components/testimonials"
import TrustBar from "./_components/trust-bar"
import Hero from "./_components/hero"

export const metadata: Metadata = {
  title: "Abundish — Farm Direct Produce",
  description:
    "Fresh farm-to-table produce connected directly to verified Nigerian farmers.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  if (!region) return null

  return (
    <>
      <Hero />
      <TrustBar />
      <InSeason region={region} />
      <TopPicks region={region} />
      <HowItWorks />
      <CategoriesShowcase />
      <BrandStory />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  )
}
