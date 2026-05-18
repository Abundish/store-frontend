"use client"

import { applyPromotions } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"

const PENDING_PROMO_KEY = "pendingPromo"

type PromoCaptureProps = {
  cart: HttpTypes.StoreCart | null
}

export default function PromoCapture({ cart }: PromoCaptureProps) {
  const params = useSearchParams()
  const router = useRouter()
  const applyingRef = useRef(false)

  useEffect(() => {
    const promo = params.get("promo")
    if (promo) {
      sessionStorage.setItem(PENDING_PROMO_KEY, promo.toUpperCase())
    }
  }, [params])

  useEffect(() => {
    const pending = sessionStorage.getItem(PENDING_PROMO_KEY)
    if (!pending || !cart?.id || applyingRef.current) {
      return
    }

    const alreadyApplied = cart.promotions?.some(
      (p) => p.code?.toUpperCase() === pending
    )
    if (alreadyApplied) {
      sessionStorage.removeItem(PENDING_PROMO_KEY)
      return
    }

    const existingCodes = (cart.promotions ?? [])
      .filter((p) => p.code)
      .map((p) => p.code!)

    applyingRef.current = true

    applyPromotions([...existingCodes, pending])
      .then(() => {
        sessionStorage.removeItem(PENDING_PROMO_KEY)
        router.refresh()
      })
      .catch(() => {
        applyingRef.current = false
      })
  }, [cart?.id, cart?.promotions, router])

  return null
}
