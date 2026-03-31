import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

import FeaturedProductCard from "./featured-product-card"

function resolveProductImage(product: HttpTypes.StoreProduct): string | null {
  return (
    product.thumbnail ??
    product.images?.[0]?.url ??
    product.variants?.[0]?.images?.[0]?.url ??
    null
  )
}

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
        "title,handle,*variants.calculated_price,+variants.inventory_quantity,*variants.images,+metadata,+tags,*images,thumbnail",
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
            const { cheapestPrice } = getProductPrice({
              product,
            })

            const variantId = product.variants?.[0]?.id ?? null
            const isFresh = Boolean((product.metadata as any)?.isFresh)

            
            return (
              <FeaturedProductCard
                key={product.id}
                product={product}
                price={cheapestPrice?.calculated_price ?? null}
                imageUrl={resolveProductImage(product)}
                isFresh={isFresh}
                variantId={variantId}
              />
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

