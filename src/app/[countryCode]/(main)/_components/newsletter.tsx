"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-[#FFCC00] py-16 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

          {/* Left — copy */}
          <div className="flex flex-col gap-4 max-w-[480px]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#006b2f]" />
              <p className="font-dm-mono text-[#006b2f] text-[11px] uppercase tracking-[0.16em]">
                Stay in the loop
              </p>
            </div>

            <h2 className="font-fraunces text-[#0D3D20] text-[36px] lg:text-[48px] leading-[1.08]">
              Eat fresh.<br />Stay informed.
            </h2>

            <p className="font-dm-sans text-[#1A4A2A] text-[15px] leading-[1.75]">
              Weekly harvest updates, seasonal recipes,<br className="hidden sm:block" /> and exclusive deals — straight to your inbox.
            </p>
          </div>

          {/* Right — form */}
          <div className="w-full lg:w-[420px]">
            {submitted ? (
              <div className="flex flex-col gap-3">
                <div className="w-8 h-px bg-[#006b2f]" />
                <p className="font-fraunces text-[#0D3D20] text-[22px] leading-snug">
                  You're on the list.
                </p>
                <p className="font-dm-sans text-[#1A4A2A] text-[14px]">
                  Watch your inbox for your first harvest update.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} aria-label="Newsletter subscribe form">
                <div className="flex items-end gap-4 border-b border-[#C8A000] pb-3 focus-within:border-[#006b2f] transition-colors duration-200">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Your email address"
                    className="
                      flex-1 bg-transparent outline-none
                      font-dm-sans text-[#0D3D20] text-[16px] placeholder:text-[#7A6A00]
                      pb-1
                    "
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      shrink-0 font-dm-mono text-[11px] uppercase tracking-[0.14em]
                      text-[#006b2f] hover:text-[#0D3D20] transition-colors duration-150
                      disabled:opacity-50 pb-1 whitespace-nowrap
                    "
                  >
                    {isSubmitting ? "Sending..." : "Subscribe →"}
                  </button>
                </div>

                {error && (
                  <p className="mt-3 font-dm-sans text-[13px] text-[#7A2000]">
                    {error}
                  </p>
                )}

                <p className="mt-4 font-dm-mono text-[#7A6A00] text-[11px] uppercase tracking-wide">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}