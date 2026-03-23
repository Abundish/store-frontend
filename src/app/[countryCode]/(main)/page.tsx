import { Metadata } from "next"

import { getRegion } from "@lib/data/regions"
import BrandStory from "./_components/brand-story"
import CategoriesShowcase from "./_components/categories-showcase"
import FAQ from "./_components/faq"
import FarmerSpotlight from "./_components/farmer-spotlight"
import FeaturedProducts from "./_components/featured-products"
import Hero from "./_components/hero"
import HowItWorks from "./_components/how-it-works"
import Newsletter from "./_components/newsletter"
import Testimonials from "./_components/testimonials"
import TrustBar from "./_components/trust-bar"

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
      <HowItWorks />
      <FeaturedProducts region={region} />
      <BrandStory />
      <CategoriesShowcase />
      <FarmerSpotlight />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  )
}
