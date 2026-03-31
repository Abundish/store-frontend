"use client"

import { Dialog, Transition } from "@headlessui/react"
import { clx } from "@medusajs/ui"
import React, { Fragment, useMemo } from "react"

import useToggleState from "@lib/hooks/use-toggle-state"
import { getProductPrice } from "@lib/util/get-product-price"
import OptionSelect from "./option-select"
import { HttpTypes } from "@medusajs/types"
import { isSimpleProduct } from "@lib/util/product"

type MobileActionsProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  options: Record<string, string | undefined>
  updateOptions: (title: string, value: string) => void
  inStock?: boolean
  handleAddToCart: () => void
  isAdding?: boolean
  show: boolean
  optionsDisabled: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({
  product,
  variant,
  options,
  updateOptions,
  inStock,
  handleAddToCart,
  isAdding,
  show,
  optionsDisabled,
}) => {
  const { state, open, close } = useToggleState()

  const price = getProductPrice({ product, variantId: variant?.id })
  const selectedPrice = useMemo(() => {
    if (!price) return null
    return price.variantPrice || price.cheapestPrice || null
  }, [price])

  const isSimple = isSimpleProduct(product)

  return (
    <>
      {/* Sticky bottom bar */}
      <div
        className={clx(
          "lg:hidden fixed inset-x-0 bottom-0 z-50 transition-transform duration-300",
          show ? "translate-y-0" : "translate-y-full pointer-events-none"
        )}
        data-testid="mobile-actions"
      >
        <div className="bg-white border-t border-[#D8E8D0] px-4 pt-3 pb-6 flex flex-col gap-3">
          {/* Title + price row */}
          <div className="flex items-center justify-between">
            <span className="font-fraunces text-[#1A3B1A] text-[18px]" data-testid="mobile-title">
              {product.title}
            </span>
            {selectedPrice && (
              <div className="flex items-center gap-2">
                {selectedPrice.price_type === "sale" && (
                  <span className="font-dm-mono text-[13px] text-[#7A9B7A] line-through">
                    {selectedPrice.original_price}
                  </span>
                )}
                <span
                  className={clx("font-fraunces text-[20px]", {
                    "text-[#cc4400]": selectedPrice.price_type === "sale",
                    "text-[#006b2f]": selectedPrice.price_type !== "sale",
                  })}
                >
                  {selectedPrice.calculated_price}
                </span>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className={clx("grid gap-3", isSimple ? "grid-cols-1" : "grid-cols-2")}>
            {!isSimple && (
              <button
                onClick={open}
                data-testid="mobile-actions-button"
                className="h-[48px] rounded-full border border-[#C8DEC2] text-[#3D5A3D] font-dm-sans font-semibold text-[14px] flex items-center justify-between px-4 hover:border-[#008528] transition-colors"
              >
                <span>{variant ? Object.values(options).join(" / ") : "Select options"}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <button
              onClick={handleAddToCart}
              disabled={!inStock || !variant || isAdding}
              data-testid="mobile-cart-button"
              className={clx(
                "h-[48px] rounded-full font-dm-sans font-semibold text-[14px] transition-all duration-150 flex items-center justify-center gap-2",
                !inStock || !variant
                  ? "bg-[#D8E8D0] text-[#7A9B7A] cursor-not-allowed"
                  : "bg-[#006b2f] text-white hover:bg-[#008528]"
              )}
            >
              {isAdding ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Adding...
                </>
              ) : !variant
                ? "Select variant"
                : !inStock
                ? "Out of stock"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>

      {/* Options bottom sheet */}
      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#1A3B1A]/50 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-x-0 bottom-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Dialog.Panel
                className="bg-white rounded-t-[24px] px-6 pt-6 pb-10"
                data-testid="mobile-actions-modal"
              >
                {/* Handle + close */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-1 bg-[#D8E8D0] rounded-full mx-auto" />
                  <button
                    onClick={close}
                    className="ml-auto w-9 h-9 rounded-full bg-[#EEF3EC] flex items-center justify-center text-[#3D5A3D]"
                    data-testid="close-modal-button"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {(product.variants?.length ?? 0) > 1 && (
                  <div className="flex flex-col gap-6">
                    {(product.options || []).map((option) => (
                      <OptionSelect
                        key={option.id}
                        option={option}
                        current={options[option.id]}
                        updateOption={updateOptions}
                        title={option.title ?? ""}
                        disabled={optionsDisabled}
                      />
                    ))}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions