import {
  isLagosProvince,
  LAGOS_DELIVERY_ERROR,
} from "@lib/util/google-places"
import { HttpTypes } from "@medusajs/types"
import AddressAutocomplete from "@modules/common/components/address-autocomplete"
import Input from "@modules/common/components/input"
import React, { useCallback, useState } from "react"
import CountrySelect from "../country-select"
import ErrorMessage from "../error-message"

const BillingAddress = ({ cart }: { cart: HttpTypes.StoreCart | null }) => {
  const [lagosError, setLagosError] = useState<string | null>(null)

  const [formData, setFormData] = useState<any>({
    "billing_address.first_name": cart?.billing_address?.first_name || "",
    "billing_address.last_name": cart?.billing_address?.last_name || "",
    "billing_address.address_1": cart?.billing_address?.address_1 || "",
    "billing_address.company": cart?.billing_address?.company || "",
    "billing_address.postal_code": cart?.billing_address?.postal_code || "",
    "billing_address.city": cart?.billing_address?.city || "",
    "billing_address.country_code": cart?.billing_address?.country_code || "",
    "billing_address.province": cart?.billing_address?.province || "",
    "billing_address.phone": cart?.billing_address?.phone || "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    if (name === "billing_address.province") {
      setLagosError(
        value && !isLagosProvince(value) ? LAGOS_DELIVERY_ERROR : null
      )
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePlaceSelected = useCallback(
    (address: {
      address_1: string
      city: string
      province: string
      postal_code: string
      country_code: string
    }) => {
      setFormData((prevState: Record<string, string>) => ({
        ...prevState,
        "billing_address.address_1": address.address_1,
        "billing_address.city": address.city || prevState["billing_address.city"],
        "billing_address.province": address.province,
        "billing_address.postal_code":
          address.postal_code || prevState["billing_address.postal_code"],
        "billing_address.country_code":
          address.country_code || prevState["billing_address.country_code"],
      }))
      setLagosError(null)
    },
    []
  )

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First name"
          name="billing_address.first_name"
          autoComplete="given-name"
          value={formData["billing_address.first_name"]}
          onChange={handleChange}
          required
          data-testid="billing-first-name-input"
        />
        <Input
          label="Last name"
          name="billing_address.last_name"
          autoComplete="family-name"
          value={formData["billing_address.last_name"]}
          onChange={handleChange}
          required
          data-testid="billing-last-name-input"
        />
        <AddressAutocomplete
          label="Address"
          name="billing_address.address_1"
          autoComplete="address-line1"
          value={formData["billing_address.address_1"]}
          onChange={handleChange}
          onPlaceSelected={handlePlaceSelected}
          onLagosError={setLagosError}
          required
          data-testid="billing-address-input"
        />
        <Input
          label="Company"
          name="billing_address.company"
          value={formData["billing_address.company"]}
          onChange={handleChange}
          autoComplete="organization"
          data-testid="billing-company-input"
        />
        <Input
          label="Postal code"
          name="billing_address.postal_code"
          autoComplete="postal-code"
          value={formData["billing_address.postal_code"]}
          onChange={handleChange}
          required
          data-testid="billing-postal-input"
        />
        <Input
          label="City"
          name="billing_address.city"
          autoComplete="address-level2"
          value={formData["billing_address.city"]}
          onChange={handleChange}
        />
        <CountrySelect
          name="billing_address.country_code"
          autoComplete="country"
          region={cart?.region}
          value={formData["billing_address.country_code"]}
          onChange={handleChange}
          required
          data-testid="billing-country-select"
        />
        <Input
          label="State"
          name="billing_address.province"
          autoComplete="address-level1"
          value={formData["billing_address.province"]}
          onChange={handleChange}
          required
          data-testid="billing-province-input"
        />
        <Input
          label="Phone"
          name="billing_address.phone"
          autoComplete="tel"
          value={formData["billing_address.phone"]}
          onChange={handleChange}
          data-testid="billing-phone-input"
        />
      </div>
      <ErrorMessage error={lagosError} data-testid="billing-lagos-validation-error" />
    </>
  )
}

export default BillingAddress
