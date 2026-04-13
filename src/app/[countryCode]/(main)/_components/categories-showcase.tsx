import { listCategories } from "@lib/data/categories"
import CategoriesScroller from "./categories-scroller"

export default async function CategoriesShowcase() {
  const productCategories = await listCategories()
  const topLevelCategories =
    productCategories?.filter((c) => !c.parent_category) ?? []

  return (
    <section className="w-full bg-[#F9F6EE] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="font-dm-mono text-[#008528] uppercase tracking-[0.14em] text-xs mb-3">
              Browse the market
            </p>
            <h2 className="font-fraunces text-[#006b2f] text-[36px] sm:text-[48px] leading-tight">
              Shop by category
            </h2>
          </div>
        </div>
      </div>

      <CategoriesScroller categories={topLevelCategories} />
    </section>
  )
}