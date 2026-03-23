"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage(null)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        throw new Error("Subscription failed")
      }

      setMessage("Thanks! Watch your inbox for weekly harvest updates.")
      setEmail("")
    } catch (err) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-[#FFCC00] py-12 lg:py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-fraunces text-[#006b2f] text-[32px] lg:text-[36px] leading-[1.1]">
              Eat fresh. Stay informed.
            </h2>
            <p className="font-dm-sans text-[16px] leading-[1.7] text-[#1A1A1A] mt-3">
              Get weekly harvest updates, seasonal recipes, and exclusive deals.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full lg:w-[520px]"
            aria-label="Newsletter subscribe form"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Your email address"
                className="h-[48px] flex-1 rounded-l-full bg-white px-5 outline-none border border-[#006b2f]/10 font-dm-sans text-[#1A1A1A]"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[48px] sm:w-[180px] rounded-r-full bg-[#006b2f] text-white font-dm-sans font-semibold hover:brightness-95 transition disabled:opacity-60"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {message && (
              <p className="mt-3 font-dm-sans text-[14px] text-[#1A1A1A]/80">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

