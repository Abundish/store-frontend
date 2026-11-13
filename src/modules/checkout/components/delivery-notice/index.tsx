"use client"

import { getDeliveryNotice } from "@lib/util/delivery-notice"
import { useEffect, useState } from "react"

const DeliveryNotice = () => {
  const [message, setMessage] = useState(() => getDeliveryNotice())

  useEffect(() => {
    const update = () => setMessage(getDeliveryNotice())
    update()

    const intervalId = window.setInterval(update, 15_000)
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        update()
      }
    }

    document.addEventListener("visibilitychange", onVisible)

    return () => {
      window.clearInterval(intervalId)
      document.removeEventListener("visibilitychange", onVisible)
    }
  }, [])

  return (
    <div
      className="rounded-rounded border border-[#C8DEC2] bg-[#F4F8F2] px-4 py-3.5"
      data-testid="delivery-notice"
      role="status"
    >
      <p
        className="txt-medium text-[#1F4D2B]"
        suppressHydrationWarning
      >
        {message}
      </p>
    </div>
  )
}

export default DeliveryNotice
