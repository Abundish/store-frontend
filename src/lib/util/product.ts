import { HttpTypes } from "@medusajs/types"

export const isSimpleProduct = (product: HttpTypes.StoreProduct): boolean => {
  return product.options?.length === 1 && product.options[0].values?.length === 1
}

export const isVariantInStock = (
  variant: HttpTypes.StoreProductVariant
): boolean => {
  if (!variant.manage_inventory) return true
  if (variant.allow_backorder) return true
  return (variant.inventory_quantity ?? 0) > 0
}

export const isProductInStock = (product: HttpTypes.StoreProduct): boolean => {
  const variants = product.variants ?? []
  if (variants.length === 0) return false
  return variants.some(isVariantInStock)
}

export const filterInStockProducts = (
  products: HttpTypes.StoreProduct[]
): HttpTypes.StoreProduct[] => products.filter(isProductInStock)