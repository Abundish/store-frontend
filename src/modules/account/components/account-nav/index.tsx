"use client"

import { clx } from "@medusajs/ui"
import { useParams, usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { signout } from "@lib/data/customer"

const AccountNav = ({ customer }: { customer: HttpTypes.StoreCustomer | null }) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signout(countryCode)
  }

  const navItems = [
    { href: "/account", label: "Overview", testId: "overview-link" },
    { href: "/account/profile", label: "Profile", testId: "profile-link" },
    { href: "/account/addresses", label: "Addresses", testId: "addresses-link" },
    { href: "/account/orders", label: "Orders", testId: "orders-link" },
  ]

  return (
    <>
      {/* Mobile nav — back link when on sub-pages */}
      <div className="small:hidden mb-6" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="flex items-center gap-2 font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.12em] hover:text-[#006b2f] transition-colors"
            data-testid="account-main-link"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Account
          </LocalizedClientLink>
        ) : (
          <div>
            <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em] mb-1">
              Welcome back
            </p>
            <p className="font-fraunces text-[#1A3B1A] text-[26px] leading-tight mb-5">
              {customer?.first_name}
            </p>
            <ul className="flex flex-col divide-y divide-[#D8E8D0]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <LocalizedClientLink
                    href={item.href}
                    className="flex items-center justify-between py-3.5"
                    data-testid={item.testId}
                  >
                    <span className="font-dm-sans text-[#3D5A3D] text-[15px]">{item.label}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#B5CEB5]">
                      <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </LocalizedClientLink>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center justify-between py-3.5 w-full"
                  data-testid="logout-button"
                >
                  <span className="font-dm-sans text-[#7A9B7A] text-[15px]">Log out</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#B5CEB5]">
                    <path d="M9 2h3v10H9M6 10l4-3-4-3M1 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden small:block" data-testid="account-nav">
        {/* Greeting */}
        <div className="mb-8">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em] mb-1">
            Welcome back
          </p>
          <p className="font-fraunces text-[#1A3B1A] text-[28px] leading-tight">
            {customer?.first_name}
          </p>
          {/* Gold accent */}
          <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full mt-3" />
        </div>

        {/* Nav links */}
        <nav>
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <AccountNavLink href={item.href} route={route} data-testid={item.testId}>
                  {item.label}
                </AccountNavLink>
              </li>
            ))}

            {/* Divider before logout */}
            <li className="pt-3 mt-2 border-t border-[#D8E8D0]">
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2.5 font-dm-mono text-[12px] uppercase tracking-[0.1em] text-[#7A9B7A] hover:text-[#cc4400] transition-colors duration-150 py-2"
                data-testid="logout-button"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2h3v10H9M6 10l4-3-4-3M1 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  "data-testid"?: string
}

const AccountNavLink = ({ href, route, children, "data-testid": dataTestId }: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()
  const active = route.split(countryCode)[1] === href

  return (
    <LocalizedClientLink
      href={href}
      data-testid={dataTestId}
      className={clx(
        "flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] font-dm-sans text-[14px] transition-all duration-150",
        active
          ? "bg-[#006b2f] text-white"
          : "text-[#3D5A3D] hover:bg-[#EEF3EC] hover:text-[#006b2f]"
      )}
    >
      {active && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
      )}
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav