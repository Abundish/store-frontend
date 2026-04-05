import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

import ProductPreview from "@modules/products/components/product-preview"

export default async function FeaturedProducts({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 8,
      fields:
        "title,handle,*variants.calculated_price,+variants.inventory_quantity,+variants.manage_inventory,+variants.allow_backorder,*variants.images,+metadata,+tags,*images,thumbnail,*variants.options",
    } as any,
  })

  return (
    <section className="w-full bg-[#F9F6EE] py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-dm-mono text-[#008528] uppercase tracking-[0.14em] text-xs">
              In Season Now
            </p>
            <h2 className="font-fraunces text-[#006b2f] text-[36px] lg:text-[48px] mt-4">
              What's fresh today
            </h2>
          </div>

          <div className="hidden md:block">
            <LocalizedClientLink
              href="/store"
              className="font-dm-sans text-[#008528] font-semibold hover:underline"
            >
              See everything →
            </LocalizedClientLink>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => {
            return (
              <ProductPreview key={product.id} product={product} region={region} />
            )
          })}
        </div>

        <div className="mt-8 md:hidden text-right">
          <LocalizedClientLink
            href="/store"
            className="font-dm-sans text-[#008528] font-semibold hover:underline"
          >
            See everything →
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

