import Image from "next/image"
import { Search, ShoppingCart, User, Home, ShoppingBag, HelpCircle } from "lucide-react"

import { listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import MobileDrawer from "./mobile-drawer"
import NavScrollSync from "./nav-scroll-sync"
import DesktopCategoriesMenu from "./desktop-categories"

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

export default async function Nav({ cartCount = 0 }: { cartCount?: number }) {
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
        data-scrolled="false"
        className="group relative h-16 w-full bg-transparent text-[#1A1A1A] transition-[background-color,box-shadow] duration-[400ms] ease-[ease]"
      >
        <NavScrollSync />

        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between gap-4">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-4 min-w-0">
            <MobileDrawer categories={topLevelCategories} />

            <LocalizedClientLink
              href="/"
              className="inline-flex items-center min-w-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
              aria-label="Abundish home"
            >
              <Image
                src="/abundish-logo.png"
                alt="Abundish logo"
                width={140}
                height={44}
                className="logo-img h-8 w-auto transition-[filter] duration-300 group-data-[scrolled=true]:brightness-0 group-data-[scrolled=true]:invert"
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
              className="relative inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008528] after:transition-transform after:duration-200 hover:after:scale-x-100 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:after:bg-white"
            >
              <Home size={15} strokeWidth={2} />
              Home
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/store"
              className="relative inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFCC00] after:transition-transform after:duration-200 hover:text-[#006b2f] hover:after:scale-x-105 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:hover:text-white"
            >
              <ShoppingBag size={15} strokeWidth={2} />
              Shop Now
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/#faq"
              className="relative inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008528] after:transition-transform after:duration-200 hover:after:scale-x-100 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:after:bg-white"
            >
              <HelpCircle size={15} strokeWidth={2} />
              FAQs
            </LocalizedClientLink>

            <DesktopCategoriesMenu categories={topLevelCategories} />
          </nav>
          {/* Desktop right nav */}
          <div className="hidden md:flex items-center gap-x-6 font-dm-sans">
            <LocalizedClientLink
              href="/store"
              className="relative inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008528] after:transition-transform after:duration-200 hover:after:scale-x-100 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:after:bg-white"
              aria-label="Search"
            >
              <Search size={18} />
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account"
              className="relative inline-flex items-center text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008528] after:transition-transform after:duration-200 hover:after:scale-x-100 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:after:bg-white"
            >
              <User size={18} />
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/cart"
              className="relative inline-flex items-center text-[15px] font-medium tracking-[-0.01em] text-[#1A1A1A] transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#008528] after:transition-transform after:duration-200 hover:after:scale-x-100 group-data-[scrolled=true]:text-white group-data-[scrolled=true]:after:bg-white"
            >
              <span className="relative">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[17px] h-[17px] rounded-full bg-[#FFCC00] text-[#1A3B1A] font-dm-mono text-[10px] font-semibold flex items-center justify-center px-[3px] leading-none">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </span>
            </LocalizedClientLink>
          </div>
        </div>
      </header>
    </div>
  )
}