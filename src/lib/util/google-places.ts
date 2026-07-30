export const LAGOS_DELIVERY_ERROR =
  "We only deliver within Lagos State. Please enter a Lagos address."

export function isLagosProvince(province: string | null | undefined): boolean {
  if (!province) return false

  const normalized = province.trim().toLowerCase()
  return normalized === "lagos" || normalized === "lagos state"
}

export type ParsedGoogleAddress = {
  address_1: string
  city: string
  province: string
  postal_code: string
  country_code: string
}

export function parseGooglePlaceResult(
  place: google.maps.places.PlaceResult
): ParsedGoogleAddress {
  const components = place.address_components ?? []

  const get = (type: string) => {
    const component = components.find((c) => c.types.includes(type))
    return component?.long_name ?? ""
  }

  const getShort = (type: string) => {
    const component = components.find((c) => c.types.includes(type))
    return component?.short_name ?? ""
  }

  const streetNumber = get("street_number")
  const route = get("route")
  const address_1 =
    [streetNumber, route].filter(Boolean).join(" ") ||
    place.name ||
    place.formatted_address?.split(",")[0] ||
    ""

  return {
    address_1,
    city: get("locality") || get("administrative_area_level_2") || "",
    province: get("administrative_area_level_1"),
    postal_code: get("postal_code"),
    country_code: getShort("country").toLowerCase(),
  }
}
