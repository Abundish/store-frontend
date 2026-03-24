"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

type CategoryChild = {
  id: string
  name: string
  handle: string
}

type CategoryNavItem = {
  id: string
  name: string
  handle: string
  children?: CategoryChild[] | null
}

export default function DesktopCategoriesMenu({
  categories,
}: {
  categories: CategoryNavItem[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        role="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="relative inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008528] after:transition-transform after:duration-200 hover:after:scale-x-100 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:after:bg-white"
      >
        <span>Categories</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Browse categories"
          className="categories-dropdown absolute left-0 top-[calc(100%+8px)] z-40 min-w-[480px] max-w-[600px] rounded-2xl border border-[#E8F0E4] bg-white px-8 py-7 text-[#1A1A1A] shadow-[0_20px_60px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.08)]"
        >
          <p className="font-dm-mono text-[11px] uppercase tracking-[0.12em] text-[#006b2f]">
            Browse Categories
          </p>
          <div className="my-4 h-px bg-[#E8F0E4]" />

          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
            {categories.map((cat) => {
              const hasChildren = (cat.children?.length ?? 0) > 0

              return (
                <LocalizedClientLink
                  key={cat.id}
                  href={`/categories/${cat.handle}`}
                  role="menuitem"
                  className="group inline-flex h-10 items-center justify-between rounded-full bg-[#F3F8F1] px-4 text-[14px] font-semibold text-[#1A1A1A] transition-all duration-150 ease-out hover:bg-[#006b2f] hover:text-white"
                >
                  <span className="truncate">{cat.name}</span>
                  {hasChildren ? (
                    <span className="ml-2 text-[#4B8D64] transition-colors duration-150 ease-out group-hover:text-white">
                      ›
                    </span>
                  ) : null}
                </LocalizedClientLink>
              )
            })}
          </div>

          <div className="mt-4 h-px bg-[#E8F0E4]" />
          <LocalizedClientLink
            href="/store"
            role="menuitem"
            className="mt-3 flex w-full justify-end text-[13px] font-medium text-[#008528] transition-colors duration-150 hover:text-[#006b2f]"
          >
            View all categories →
          </LocalizedClientLink>
        </div>
      )}

      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .categories-dropdown {
            animation: dropdown-in 200ms ease forwards;
          }
        }

        @keyframes dropdown-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
