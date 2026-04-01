import React from "react"
import InteractiveLink from "@modules/common/components/interactive-link"
import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ customer, children }) => {
  return (
    <div className="min-h-screen bg-[#F9F6EE]" data-testid="account-page">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className={
          customer
            ? "grid grid-cols-1 small:grid-cols-[220px_1fr] gap-10"
            : "flex justify-center"
        }>
          {customer && (
            <div className="small:sticky small:top-12 self-start">
              <AccountNav customer={customer} />
            </div>
          )}
          <div className={customer ? "min-w-0" : "w-full max-w-[440px]"}>
            {children}
          </div>
        </div>
        {/* Footer strip */}
        <div className="mt-16 pt-8 border-t border-[#D8E8D0] flex flex-col small:flex-row items-start small:items-center justify-between gap-4">
          <div>
            <p className="font-fraunces text-[#1A3B1A] text-[18px] mb-1">Got questions?</p>
            <p className="font-dm-sans text-[#3D5A3D] text-[14px]">
              Our customer service team is here to help.
            </p>
          </div>
          <InteractiveLink href="/contact">
            Customer Service
          </InteractiveLink>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout