import { HttpTypes } from "@medusajs/types"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "Pending", color: "#854F0B", bg: "#FAEEDA" },
  completed: { label: "Completed", color: "#0F6E56", bg: "#E1F5EE" },
  cancelled: { label: "Cancelled", color: "#A32D2D", bg: "#FCEBEB" },
  not_fulfilled: { label: "Not fulfilled", color: "#854F0B", bg: "#FAEEDA" },
  fulfilled: { label: "Fulfilled", color: "#0F6E56", bg: "#E1F5EE" },
  partially_fulfilled: { label: "Partial", color: "#854F0B", bg: "#FAEEDA" },
  shipped: { label: "Shipped", color: "#185FA5", bg: "#E6F1FB" },
  partially_shipped: { label: "Partial ship", color: "#185FA5", bg: "#E6F1FB" },
  returned: { label: "Returned", color: "#5F5E5A", bg: "#F1EFE8" },
  captured: { label: "Paid", color: "#0F6E56", bg: "#E1F5EE" },
  awaiting: { label: "Awaiting payment", color: "#854F0B", bg: "#FAEEDA" },
  refunded: { label: "Refunded", color: "#5F5E5A", bg: "#F1EFE8" },
  requires_action: { label: "Action required", color: "#993C1D", bg: "#FAECE7" },
}

const StatusPill = ({ status }: { status: string }) => {
  const cfg = statusConfig[status] ?? { label: status, color: "#5F5E5A", bg: "#F1EFE8" }
  return (
    <span
      className="font-dm-mono text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full"
      style={{ color: cfg.color, backgroundColor: cfg.bg }}
    >
      {cfg.label}
    </span>
  )
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formattedDate = new Date(order.created_at).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="bg-white border border-[#D8E8D0] rounded-[18px] p-5 flex flex-col gap-4">
      {/* Top: email confirmation notice */}
      <p className="font-dm-sans text-[#3D5A3D] text-[14px] leading-relaxed">
        Confirmation sent to{" "}
        <span className="font-semibold text-[#1A3B1A]" data-testid="order-email">
          {order.email}
        </span>
      </p>

      {/* Meta grid */}
      <div className="grid grid-cols-2 small:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em]">
            Date placed
          </p>
          <p className="font-dm-sans text-[#1A3B1A] text-[14px]" data-testid="order-date">
            {formattedDate}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em]">
            Order number
          </p>
          <p className="font-fraunces text-[#006b2f] text-[16px]" data-testid="order-id">
            #{order.display_id}
          </p>
        </div>

        {showStatus && (
          <>
            <div className="flex flex-col gap-1.5">
              <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em]">
                Fulfilment
              </p>
              <StatusPill status={order.fulfillment_status} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em]">
                Payment
              </p>
              <StatusPill status={order.payment_status} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails