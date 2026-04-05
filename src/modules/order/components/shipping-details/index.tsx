import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type ShippingDetailsProps = {
  order: HttpTypes.StoreOrder
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  const addr = order.shipping_address
  const method = (order as any).shipping_methods?.[0]

  return (
    <div className="bg-white border border-[#D8E8D0] rounded-[18px] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#EEF3EC]">
        <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">
          Delivery details
        </p>
      </div>

      <div className="grid grid-cols-1 small:grid-cols-3 divide-y small:divide-y-0 small:divide-x divide-[#EEF3EC]">
        {/* Address */}
        <div className="px-5 py-4 flex flex-col gap-1" data-testid="shipping-address-summary">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em] mb-1">
            Ship to
          </p>
          <p className="font-dm-sans text-[#1A3B1A] text-[14px] font-semibold">
            {addr?.first_name} {addr?.last_name}
          </p>
          <p className="font-dm-sans text-[#3D5A3D] text-[13px]">
            {addr?.address_1}
            {addr?.address_2 ? `, ${addr.address_2}` : ""}
          </p>
          <p className="font-dm-sans text-[#3D5A3D] text-[13px]">
            {addr?.city}
            {addr?.postal_code ? `, ${addr.postal_code}` : ""}
          </p>
          {addr?.country_code && (
            <p className="font-dm-mono text-[#7A9B7A] text-[12px] uppercase">
              {addr.country_code}
            </p>
          )}
        </div>

        {/* Contact */}
        <div className="px-5 py-4 flex flex-col gap-1" data-testid="shipping-contact-summary">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em] mb-1">
            Contact
          </p>
          {addr?.phone && (
            <p className="font-dm-sans text-[#3D5A3D] text-[13px]">{addr.phone}</p>
          )}
          <p className="font-dm-sans text-[#3D5A3D] text-[13px]">{order.email}</p>
        </div>

        {/* Method */}
        <div className="px-5 py-4 flex flex-col gap-1" data-testid="shipping-method-summary">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em] mb-1">
            Method
          </p>
          {method ? (
            <>
              <p className="font-dm-sans text-[#1A3B1A] text-[14px] font-semibold">
                {method.name}
              </p>
              <p className="font-dm-mono text-[#006b2f] text-[13px] font-semibold">
                {convertToLocale({
                  amount: method.total ?? 0,
                  currency_code: order.currency_code,
                })}
              </p>
            </>
          ) : (
            <p className="font-dm-sans text-[#7A9B7A] text-[13px]">—</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails