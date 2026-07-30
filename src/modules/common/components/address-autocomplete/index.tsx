"use client"

import {
  isLagosProvince,
  LAGOS_DELIVERY_ERROR,
  parseGooglePlaceResult,
} from "@lib/util/google-places"
import { getLagosBounds, loadGoogleMaps } from "@lib/util/load-google-maps"
import Input from "@modules/common/components/input"
import React, { useEffect, useRef, useState } from "react"

type AddressAutocompleteProps = Omit<
  React.ComponentProps<typeof Input>,
  "onChange"
> & {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onPlaceSelected: (address: {
    address_1: string
    city: string
    province: string
    postal_code: string
    country_code: string
  }) => void
  onLagosError?: (message: string | null) => void
}

const AddressAutocomplete = ({
  onChange,
  onPlaceSelected,
  onLagosError,
  ...inputProps
}: AddressAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [autocompleteReady, setAutocompleteReady] = useState(false)

  useEffect(() => {
    let listener: google.maps.MapsEventListener | null = null
    let cancelled = false

    loadGoogleMaps()
      .then((googleMaps) => {
        if (cancelled || !inputRef.current) return

        const autocomplete = new googleMaps.maps.places.Autocomplete(
          inputRef.current,
          {
            componentRestrictions: { country: "ng" },
            bounds: getLagosBounds(googleMaps),
            fields: ["address_components", "formatted_address", "geometry", "name"],
            types: ["address"],
          }
        )

        listener = autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace()

          if (!place.address_components?.length) {
            return
          }

          const parsed = parseGooglePlaceResult(place)

          if (!isLagosProvince(parsed.province)) {
            onLagosError?.(LAGOS_DELIVERY_ERROR)
            return
          }

          onLagosError?.(null)
          onPlaceSelected(parsed)
        })

        autocompleteRef.current = autocomplete
        setAutocompleteReady(true)
      })
      .catch(() => {
        setAutocompleteReady(false)
      })

    return () => {
      cancelled = true
      listener?.remove()
      autocompleteRef.current = null
    }
  }, [onPlaceSelected, onLagosError])

  return (
    <div className="relative">
      <Input
        {...inputProps}
        ref={inputRef}
        onChange={onChange}
        autoComplete={autocompleteReady ? "off" : inputProps.autoComplete}
      />
    </div>
  )
}

export default AddressAutocomplete
