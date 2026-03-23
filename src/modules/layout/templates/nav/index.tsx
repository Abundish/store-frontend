import Image from "next/image"
import { ChevronDown, Search } from "lucide-react"

import { listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import MobileDrawer from "./mobile-drawer"
import NavScrollSync from "./nav-scroll-sync"

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

export default async function Nav() {
  const productCategories = await listCategories()
  const topLevelCategories: CategoryNavItem[] =
    productCategories
      ?.filter((c) => !c.parent_category)
      .map((c) => ({
        id: c.id,
        name: c.name,
        handle: c.handle,
        children:
          c.category_children?.map((child) => ({
            id: child.id,
            name: child.name,
            handle: child.handle,
          })) ?? [],
      })) ?? []

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header
        id="abundish-nav"
        className="relative h-16 w-full transition-colors duration-300 bg-transparent text-white"
      >
        <NavScrollSync />

        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between gap-4">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-4 min-w-0">
            <MobileDrawer categories={topLevelCategories} />

            <LocalizedClientLink
              href="/"
              className="inline-flex items-center min-w-0"
              aria-label="Abundish home"
            >
              <Image
                src="/abundish-logo.png"
                alt="Abundish logo"
                width={140}
                height={44}
                className="h-8 w-auto"
                priority={false}
              />
            </LocalizedClientLink>
          </div>

          {/* Desktop center nav */}
          <nav
            className="hidden md:flex items-center justify-center gap-x-7 font-dm-sans"
            aria-label="Primary navigation"
          >
            <LocalizedClientLink
              href="/"
              className="font-semibold hover:opacity-90 transition"
            >
              Home
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/store"
              className="h-[44px] px-6 rounded-full bg-[#FFCC00] text-[#1A1A1A] font-semibold inline-flex items-center justify-center transition hover:brightness-95"
            >
              Shop Now
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/#faq"
              className="font-semibold hover:opacity-90 transition"
            >
              FAQs
            </LocalizedClientLink>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 font-semibold hover:opacity-90 transition focus:outline-none"
              >
                <span>Categories</span>
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-[calc(100%+12px)] hidden group-hover:block group-focus-within:block w-[620px] max-w-[84vw] bg-white text-[#1A1A1A] border border-[#D6E8D0] shadow-[0_22px_60px_rgba(0,0,0,0.18)] px-6 py-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {topLevelCategories.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-3">
                      <p className="font-dm-sans font-semibold text-[#006b2f]">
                        {cat.name}
                      </p>
                      {(cat.children ?? []).length ? (
                        <div className="flex flex-col gap-2">
                          {cat.children.slice(0, 6).map((child) => (
                            <LocalizedClientLink
                              key={child.id}
                              href={`/categories/${child.handle}`}
                              className="font-dm-sans text-[14px] text-[#1A1A1A]/70 hover:text-[#008528] transition"
                            >
                              {child.name}
                            </LocalizedClientLink>
                          ))}
                        </div>
                      ) : (
                        <LocalizedClientLink
                          href={`/categories/${cat.handle}`}
                          className="font-dm-sans text-[14px] text-[#1A1A1A]/70 hover:text-[#008528] transition"
                        >
                          View all
                        </LocalizedClientLink>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop right nav */}
          <div className="hidden md:flex items-center gap-x-6 font-dm-sans">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center gap-2 font-semibold hover:opacity-90 transition"
              aria-label="Search"
            >
              <Search size={18} />
              <span>Search</span>
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account"
              className="font-semibold hover:opacity-90 transition"
            >
              Account
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/cart"
              className="font-semibold hover:opacity-90 transition"
            >
              Cart
            </LocalizedClientLink>
          </div>
        </div>
      </header>
    </div>
  )
}
