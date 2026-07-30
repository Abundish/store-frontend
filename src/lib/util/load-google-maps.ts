import { importLibrary, setOptions } from "@googlemaps/js-api-loader"

let loadPromise: Promise<typeof google> | null = null
let optionsSet = false

export function getGoogleMapsApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
}

export function loadGoogleMaps(): Promise<typeof google> {
  const apiKey = getGoogleMapsApiKey()

  if (!apiKey) {
    return Promise.reject(
      new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not configured")
    )
  }

  if (!loadPromise) {
    if (!optionsSet) {
      setOptions({ key: apiKey, v: "weekly", region: "NG" })
      optionsSet = true
    }

    loadPromise = Promise.all([
      importLibrary("core"),
      importLibrary("places"),
    ]).then(() => google)
  }

  return loadPromise
}

export function getLagosBounds(googleMaps: typeof google) {
  return new googleMaps.maps.LatLngBounds(
    { lat: 6.3931, lng: 3.05 },
    { lat: 6.7028, lng: 3.64 }
  )
}
