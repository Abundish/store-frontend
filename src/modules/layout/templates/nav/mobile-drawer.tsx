"use client"

import { useMemo, useState } from "react"
import { ChevronDown, Menu, Search, X } from "lucide-react"

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

export default function MobileDrawer({
  categories,
}: {
  categories: CategoryNavItem[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null)

  const topLevelCategories = useMemo(() => categories ?? [], [categories])

  const close = () => {
    setIsOpen(false)
    setOpenCategoryId(null)
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-white/10 transition text-white"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={22} />
      </button>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={close}
          aria-hidden
        />

        <aside
          className={`absolute left-0 top-0 h-screen w-[86vw] max-w-[360px] bg-[#006b2f] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-5 overflow-y-auto transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
            <div className="flex items-center justify-between">
              <div className="font-dm-mono text-[#FFCC00] uppercase text-xs tracking-[0.14em]">
                Menu
              </div>
              <button
                type="button"
                aria-label="Close menu"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-white/10 transition text-white"
                onClick={close}
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              <LocalizedClientLink
                href="/"
                onClick={close}
                className="font-dm-sans text-white text-[18px] font-semibold"
              >
                Home
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/store"
                onClick={close}
                className="h-[44px] rounded-full bg-[#FFCC00] text-[#1A1A1A] font-dm-sans font-semibold inline-flex items-center justify-center"
              >
                Shop Now
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/#faq"
                onClick={close}
                className="font-dm-sans text-white/90 text-[18px] font-semibold"
              >
                FAQs
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/store"
                onClick={close}
                className="font-dm-sans text-white/90 text-[18px] font-semibold inline-flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/account"
                onClick={close}
                className="font-dm-sans text-white/90 text-[18px] font-semibold"
              >
                Account
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/cart"
                onClick={close}
                className="font-dm-sans text-white/90 text-[18px] font-semibold"
              >
                Cart
              </LocalizedClientLink>
            </nav>

            <div className="mt-8">
              <p className="font-dm-mono text-[#FFCC00] uppercase tracking-[0.14em] text-xs mb-4">
                Categories
              </p>

              <div className="flex flex-col gap-2">
                {topLevelCategories.map((cat) => {
                  const isOpenCategory = openCategoryId === cat.id
                  const panelId = `mobile-cat-${cat.id}`

                  return (
                    <div key={cat.id} className="border-b border-white/10 pb-3">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-white/95 font-dm-sans text-[16px] font-semibold py-2"
                        aria-expanded={isOpenCategory}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenCategoryId((prev) =>
                            prev === cat.id ? null : cat.id
                          )
                        }
                      >
                        <span>{cat.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${isOpenCategory ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-label={`${cat.name} subcategories`}
                        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                        style={{ maxHeight: isOpenCategory ? 240 : 0 }}
                      >
                        <div className="flex flex-col gap-2 pb-2">
                          {(cat.children ?? []).map((child) => (
                            <LocalizedClientLink
                              key={child.id}
                              href={`/categories/${child.handle}`}
                              onClick={close}
                              className="font-dm-sans text-white/80 hover:text-white transition text-[15px] pl-2"
                            >
                              {child.name}
                            </LocalizedClientLink>
                          ))}

                          {(cat.children?.length ?? 0) === 0 && (
                            <LocalizedClientLink
                              href={`/categories/${cat.handle}`}
                              onClick={close}
                              className="font-dm-sans text-white/80 hover:text-white transition text-[15px] pl-2"
                            >
                              View all
                            </LocalizedClientLink>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
        </aside>
      </div>
    </div>
  )
}

