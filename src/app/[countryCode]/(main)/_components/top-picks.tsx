import { getCollectionByHandle } from "@lib/data/collections"
import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

const RANK_LABELS = ["01", "02", "03", "04", "05", "06", "07", "08"]

export default async function TopPicks({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const collection = await getCollectionByHandle("top-picks")

  if (!collection) return null

  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 4,
      collection_id: [collection.id],
      fields:
        "title,handle,*variants.calculated_price,+variants.inventory_quantity,+variants.manage_inventory,+variants.allow_backorder,*variants.images,+metadata,+tags,*images,thumbnail,*variants.options",
    } as any,
  })

  if (!products?.length) return null

  return (
    <section className="w-full bg-[#F9F6EE] py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-dm-mono text-[#008528] uppercase tracking-[0.14em] text-xs">
              Customer Favourites
            </p>
            <h2 className="font-fraunces text-[#006b2f] text-[36px] lg:text-[48px] mt-4">
              Top selling this week
            </h2>
          </div>

          <div className="hidden md:block">
            <LocalizedClientLink
              href="/collections/top-picks"
              className="font-dm-sans text-[#008528] font-semibold hover:underline whitespace-nowrap"
            >
              See all →
            </LocalizedClientLink>
          </div>
        </div>

        {/* Product grid with rank badges */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="relative group">
              {/* Rank badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#006b2f] px-2 py-1 rounded-sm">
                <span className="font-dm-mono text-white text-[10px] font-bold leading-none">
                  #{RANK_LABELS[index]}
                </span>
              </div>

              <ProductPreview product={product} region={region} />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden text-right">
          <LocalizedClientLink
            href="/collections/top-picks"
            className="font-dm-sans text-[#008528] font-semibold hover:underline"
          >
            Shop all →
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}