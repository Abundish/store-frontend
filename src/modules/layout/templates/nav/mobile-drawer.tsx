"use client"

import { useEffect, useMemo, useRef, useState } from "react"
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
  const drawerRef = useRef<HTMLElement | null>(null)

  const topLevelCategories = useMemo(() => categories ?? [], [categories])

  const close = () => {
    setIsOpen(false)
    setOpenCategoryId(null)
  }

  useEffect(() => {
    if (!isOpen) return

    const container = drawerRef.current
    if (!container) return

    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    focusable[0]?.focus()

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close()
        return
      }

      if (event.key !== "Tab" || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", onKeydown)
    return () => window.removeEventListener("keydown", onKeydown)
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        className="h-10 w-10 inline-flex items-center justify-center rounded-full text-[#1A1A1A] transition hover:bg-[#006b2f]/10 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:hover:bg-white/10"
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
          ref={drawerRef}
          className={`absolute left-0 top-0 h-screen w-[86vw] max-w-[360px] bg-[#006b2f] shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-5 overflow-y-auto transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 120 120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27 opacity=%271%27/%3E%3C/svg%3E")',
              }}
            />
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

            <nav className="relative mt-8 flex flex-col">
              <LocalizedClientLink
                href="/"
                onClick={close}
                className="border-b border-white/[0.12] py-3 font-dm-sans text-[18px] font-semibold text-white"
              >
                Home
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/store"
                onClick={close}
                className="mt-4 inline-flex h-[44px] items-center justify-center rounded-full bg-white px-6 font-dm-sans font-semibold text-[#006b2f]"
              >
                Shop Now
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/#faq"
                onClick={close}
                className="border-b border-white/[0.12] py-3 font-dm-sans text-[18px] font-semibold text-white/90"
              >
                FAQs
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/store"
                onClick={close}
                className="inline-flex items-center gap-2 border-b border-white/[0.12] py-3 font-dm-sans text-[18px] font-semibold text-white/90"
              >
                <Search size={18} />
                Search
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/account"
                onClick={close}
                className="border-b border-white/[0.12] py-3 font-dm-sans text-[18px] font-semibold text-white/90"
              >
                Account
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/cart"
                onClick={close}
                className="border-b border-white/[0.12] py-3 font-dm-sans text-[18px] font-semibold text-white/90"
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
                        className="w-full rounded-xl px-2 py-2 text-left text-[16px] font-semibold text-white/95 transition-colors duration-200 hover:bg-white/[0.08]"
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
                        className="overflow-hidden transition-[max-height] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
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

