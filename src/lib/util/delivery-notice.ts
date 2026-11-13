const LAGOS_TIME_ZONE = "Africa/Lagos"
const SAME_DAY_CUTOFF_MINUTES = 13 * 60

export const SAME_DAY_DELIVERY_NOTICE = "Your order will be delivered today."
export const NEXT_DAY_DELIVERY_NOTICE = "Your order will be delivered tomorrow."

function lagosMinutes(date: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: LAGOS_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date)

  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? "0")

  let hour = read("hour")
  if (hour === 24) {
    hour = 0
  }

  return hour * 60 + read("minute")
}

export function getDeliveryNotice(date = new Date()): string {
  return lagosMinutes(date) < SAME_DAY_CUTOFF_MINUTES
    ? SAME_DAY_DELIVERY_NOTICE
    : NEXT_DAY_DELIVERY_NOTICE
}
