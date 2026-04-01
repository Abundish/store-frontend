import { Metadata } from "next"
import OrderOverview from "@modules/account/components/order-overview"
import { notFound } from "next/navigation"
import { listOrders } from "@lib/data/orders"
import TransferRequestForm from "@modules/account/components/transfer-request-form"

export const metadata: Metadata = {
  title: "Orders",
  description: "Overview of your previous orders.",
}

export default async function Orders() {
  const orders = await listOrders()
  if (!orders) notFound()

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8">
        <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em] mb-1">
          Account
        </p>
        <h1 className="font-fraunces text-[#1A3B1A] text-[32px] leading-tight mb-1">
          Orders
        </h1>
        <div className="w-8 h-[2px] bg-[#FFCC00] rounded-full" />
      </div>

      <OrderOverview orders={orders} />

      <div className="mt-12 pt-8 border-t border-[#D8E8D0]">
        <TransferRequestForm />
      </div>
    </div>
  )
}