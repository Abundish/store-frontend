import { Metadata } from "next"
import { notFound } from "next/navigation"
import AddressBook from "@modules/account/components/address-book"
import { getRegion } from "@lib/data/regions"
import { retrieveCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Addresses",
  description: "View your addresses",
}

export default async function Addresses(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const customer = await retrieveCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) notFound()

  return (
    <div className="w-full" data-testid="addresses-page-wrapper">
      <div className="mb-8">
        <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em] mb-1">
          Account
        </p>
        <h1 className="font-fraunces text-[#1A3B1A] text-[32px] leading-tight mb-1">
          Addresses
        </h1>
        <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full mb-3" />
        <p className="font-dm-sans text-[#3D5A3D] text-[14px]">
          Saved addresses are available at checkout for faster ordering.
        </p>
      </div>

      <AddressBook customer={customer} region={region} />
    </div>
  )
}