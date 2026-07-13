"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  Home,
  ShoppingBag,
  HelpCircle,
  User,
  X,
  Menu,
  ArrowRight,
  Leaf,
  Mail,
  BookOpen,
} from "lucide-react"
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

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/store", label: "Shop", icon: ShoppingBag },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/#faq", label: "FAQs", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/account", label: "Account", icon: User },
]

export default function MobileDrawer({
  categories,
}: {
  categories: CategoryNavItem[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLElement | null>(null)

  const allCategoryLinks = useMemo(() => {
    const links: { id: string; name: string; handle: string }[] = []
    for (const cat of categories ?? []) {
      if (cat.children && cat.children.length > 0) {
        for (const child of cat.children) {
          links.push(child)
        }
      } else {
        links.push({ id: cat.id, name: cat.name, handle: cat.handle })
      }
    }
    return links
  }, [categories])

  const close = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return
    const container = drawerRef.current
    if (!container) return

    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    focusable[0]?.focus()

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return }
      if (e.key !== "Tab" || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey && active === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus() }
    }

    window.addEventListener("keydown", onKeydown)
    return () => window.removeEventListener("keydown", onKeydown)
  }, [isOpen])

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        className="h-10 w-10 inline-flex items-center justify-center rounded-full text-[#1A1A1A] transition hover:bg-[#006b2f]/10"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={22} />
      </button>

      {/* Overlay + Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={close}
          aria-hidden
        />

        {/* Drawer panel */}
        <aside
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          className={`absolute left-0 top-0 h-screen w-[88vw] max-w-[340px] bg-[#006b2f] flex flex-col overflow-hidden shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Subtle noise texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.035] z-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 120 120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27 opacity=%271%27/%3E%3C/svg%3E")',
            }}
          />

          <div className="relative z-10 flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Leaf size={16} className="text-[#FFCC00]" />
                <span className="font-dm-mono text-[#FFCC00] uppercase tracking-[0.16em] text-[11px]">
                  Abundish
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-white/10 transition text-white"
                onClick={close}
              >
                <X size={20} />
              </button>
            </div>

            {/* Main nav links — icons + labels */}
            <nav className="px-4 pt-5 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.filter(link => link.label !== "Shop").map(({ href, label, icon: Icon }) => (
                  <LocalizedClientLink
                    key={label}
                    href={href}
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-150 font-dm-sans font-semibold text-[15px] text-white/90 hover:bg-white/10 bg-white/[0.06]"
                  >
                    <Icon size={18} strokeWidth={2} className="text-[#FFCC00]" />
                    {label}
                  </LocalizedClientLink>
                ))}
                
              </div>

              {/* Shop button below the 2-column grid */}
              <div className="mt-4">
                {NAV_LINKS.filter(link => link.label === "Shop").map(({ href, label, icon: Icon }) => (
                  <LocalizedClientLink
                    key={label}
                    href={href}
                    onClick={close}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-150 font-dm-sans font-semibold text-[15px] bg-[#FFCC00] text-[#1A1A1A] hover:bg-[#f0bf00]"
                  >
                    <Icon size={18} strokeWidth={2} className="text-[#1A1A1A]" />
                    {label}
                    <ArrowRight size={16} className="ml-auto" />
                  </LocalizedClientLink>
                ))}
              </div>
            </nav>

            {/* Divider */}
            <div className="mx-5 border-t border-white/10" />

            {/* Categories — flat list */}
            {allCategoryLinks.length > 0 && (
              <div className="px-5 pt-5 pb-8">
                <p className="font-dm-mono text-[#FFCC00] uppercase tracking-[0.16em] text-[11px] mb-4">
                  Categories
                </p>
                <div className="flex flex-col">
                  {allCategoryLinks.map((cat) => (
                    <LocalizedClientLink
                      key={cat.id}
                      href={`/categories/${cat.handle}`}
                      onClick={close}
                      className="flex items-center justify-between py-3 border-b border-white/[0.08] font-dm-sans text-[15px] text-white/85 hover:text-white transition-colors duration-150 last:border-0"
                    >
                      <span>{cat.name}</span>
                      <ArrowRight size={14} className="text-white/30" />
                    </LocalizedClientLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}