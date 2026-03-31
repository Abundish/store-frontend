import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) return notFound()

  return (
    <div className="bg-[#F9F6EE] min-h-screen">
      {/* Main product section */}
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-20">
        <div className="flex flex-col small:flex-row gap-10 small:gap-16 small:items-start">

          {/* LEFT — Image gallery */}
          <div className="w-full small:w-[55%] small:sticky small:top-10">
            <ImageGallery images={images} />
          </div>

          {/* RIGHT — Info + actions */}
          <div className="w-full small:w-[45%] flex flex-col gap-8 small:pt-2">

            {/* Collection breadcrumb */}
            {product.collection && (
              <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
                {product.collection.title}
              </p>
            )}

            {/* Title */}
            <div>
              <h1
                className="font-fraunces text-[#1A3B1A] text-[38px] small:text-[44px] leading-[1.1] mb-4"
                data-testid="product-title"
              >
                {product.title}
              </h1>

              {/* Gold rule */}
              <div className="w-10 h-[2px] bg-[#FFCC00] rounded-full" />
            </div>

            {/* Description */}
            {product.description && (
              <p
                className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.75] whitespace-pre-line"
                data-testid="product-description"
              >
                {product.description}
              </p>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="font-dm-mono text-[11px] uppercase tracking-wide text-[#4A7A4A] bg-[#EEF3EC] border border-[#C8DEC2] px-3 py-1.5 rounded-full"
                  >
                    {tag.value}
                  </span>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-[#D8E8D0]" />

            {/* Purchase actions */}
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>

          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24" data-testid="related-products-container">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate