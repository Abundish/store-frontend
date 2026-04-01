import { Metadata } from "next"
import ProfilePhone from "@modules/account//components/profile-phone"
import ProfileBillingAddress from "@modules/account/components/profile-billing-address"
import ProfileEmail from "@modules/account/components/profile-email"
import ProfileName from "@modules/account/components/profile-name"
import { notFound } from "next/navigation"
import { listRegions } from "@lib/data/regions"
import { retrieveCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your Abundish Store profile.",
}

export default async function Profile() {
  const customer = await retrieveCustomer()
  const regions = await listRegions()

  if (!customer || !regions) notFound()

  return (
    <div className="w-full" data-testid="profile-page-wrapper">
      {/* Page header */}
      <div className="mb-8">
        <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em] mb-1">
          Account
        </p>
        <h1 className="font-fraunces text-[#1A3B1A] text-[32px] leading-tight mb-1">
          Profile
        </h1>
        <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full" />
      </div>

      <div className="flex flex-col gap-y-4 w-full">
        <ProfileName customer={customer} />
        <ProfileEmail customer={customer} />
        <ProfilePhone customer={customer} />
        <ProfileBillingAddress customer={customer} regions={regions} />
      </div>
    </div>
  )
}