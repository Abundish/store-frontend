"use client"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useRef, useEffect, useState, useCallback } from "react"

function CategoryCard({
  category,
}: {
  category: HttpTypes.StoreProductCategory
}) {
  const imageUrl = `/category-images/${category.name}.png`

  return (
    <LocalizedClientLink
      href={`/categories/${category.handle}`}
      aria-label={`Shop ${category.name}`}
      className="group relative flex-none w-[260px] h-[160px] rounded-[18px] overflow-hidden block"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1.5">
        <p className="font-fraunces text-white text-[22px] leading-[1.1]">
          {category.name}
        </p>
        <div className="mt-2 flex items-center gap-1.5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <span className="font-dm-sans text-white text-[12px] font-medium">Shop now</span>
          <span className="text-[#FFCC00] text-[14px] leading-none">→</span>
        </div>
      </div>
    </LocalizedClientLink>
  )
}

export default function CategoriesScroller({
  categories,
}: {
  categories: HttpTypes.StoreProductCategory[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    const ro = new ResizeObserver(checkScroll)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      ro.disconnect()
    }
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === "left" ? -290 : 290, behavior: "smooth" })
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6">
      {/* Arrow row — sits right-aligned on same column as header */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={`
            w-9 h-9 rounded-full border flex items-center justify-center
            transition-all duration-150
            ${canScrollLeft
              ? "border-[#008528] text-[#008528] hover:bg-[#008528] hover:text-white"
              : "border-[#C8DEC2] text-[#C8DEC2] cursor-not-allowed"
            }
          `}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={`
            w-9 h-9 rounded-full border flex items-center justify-center
            transition-all duration-150
            ${canScrollRight
              ? "border-[#008528] text-[#008528] hover:bg-[#008528] hover:text-white"
              : "border-[#C8DEC2] text-[#C8DEC2] cursor-not-allowed"
            }
          `}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-3
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          snap-x snap-mandatory"
      >
        {categories.map((c) => (
          <div key={c.id} className="snap-start">
            <CategoryCard category={c} />
          </div>
        ))}
        <div className="flex-none w-2" aria-hidden />
      </div>
    </div>
  )
}