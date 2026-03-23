import { listCategories } from "@lib/data/categories"
import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const defaultCategoryImage =
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80"

const categoryImageMap: Record<string, string> = {
  vegetables:
    "https://images.unsplash.com/photo-1547581314-8d2b8b3c3b5c?auto=format&fit=crop&w=1200&q=80",
  tomatoes:
    "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
  leafy_greens:
    "https://images.unsplash.com/photo-1524594154908-edd198179e22?auto=format&fit=crop&w=1200&q=80",
  roots:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  fruits:
    "https://images.unsplash.com/photo-1464965911861-746a04b4d8f4?auto=format&fit=crop&w=1200&q=80",
  grains:
    "https://images.unsplash.com/photo-1502741126161-b048400dbe5e?auto=format&fit=crop&w=1200&q=80",
}

function CategoryCard({
  category,
  imageUrl,
}: {
  category: HttpTypes.StoreProductCategory
  imageUrl: string
}) {
  return (
    <LocalizedClientLink
      href={`/categories/${category.handle}`}
      className="group relative aspect-square overflow-hidden rounded-[12px] transform transition-transform duration-300 hover:scale-[1.03]"
      aria-label={`Shop ${category.name}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-fraunces text-white text-[20px] leading-[1.1]">
          {category.name}
        </p>
      </div>
    </LocalizedClientLink>
  )
}

export default async function CategoriesShowcase() {
  const productCategories = await listCategories()

  const topLevelCategories =
    productCategories?.filter((c) => !c.parent_category) ?? []

  return (
    <section className="w-full bg-white py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-fraunces text-[#006b2f] text-[36px] sm:text-[48px]">
            Shop by category
          </h2>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="mt-10 md:hidden flex gap-4 overflow-x-auto pb-2 -mx-6 px-6">
          {topLevelCategories.map((c) => (
            <div key={c.id} className="min-w-[180px]">
              <CategoryCard
                category={c}
                imageUrl={categoryImageMap[c.handle] ?? defaultCategoryImage}
              />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid mt-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {topLevelCategories.map((c) => (
            <CategoryCard
              key={c.id}
              category={c}
              imageUrl={categoryImageMap[c.handle] ?? defaultCategoryImage}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

