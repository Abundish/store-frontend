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
    <section className="w-full bg-[#0D3D20] py-16 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

          {/* Left — copy */}
          <div className="flex flex-col gap-4 max-w-[480px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#FFCC00]" />
              <p className="font-dm-mono text-[#FFCC00] text-[11px] uppercase tracking-[0.16em]">
                Stay in the loop
              </p>
            </div>

            <h2 className="font-fraunces text-white text-[36px] lg:text-[48px] leading-[1.08]">
              Eat fresh.<br />Stay informed.
            </h2>

            <p className="font-dm-sans text-[#A8C8A8] text-[15px] leading-[1.75]">
              Weekly harvest updates, seasonal recipes,<br className="hidden sm:block" /> and exclusive deals — straight to your inbox.
            </p>
          </div>

          {/* Right — form */}
          <div className="w-full lg:w-[420px]">
            {submitted ? (
              <div className="flex flex-col gap-3">
                <div className="w-8 h-px bg-[#FFCC00]" />
                <p className="font-fraunces text-white text-[22px] leading-snug">
                  You're on the list.
                </p>
                <p className="font-dm-sans text-[#A8C8A8] text-[14px]">
                  Watch your inbox for your first harvest update.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} aria-label="Newsletter subscribe form">
                {/* Underline input row */}
                <div className="flex items-end gap-4 border-b border-[#2E6640] pb-3 focus-within:border-[#FFCC00] transition-colors duration-200">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Your email address"
                    className="
                      flex-1 bg-transparent outline-none
                      font-dm-sans text-white text-[16px] placeholder:text-[#4A7A5A]
                      pb-1
                    "
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      shrink-0 font-dm-mono text-[11px] uppercase tracking-[0.14em]
                      text-[#FFCC00] hover:text-white transition-colors duration-150
                      disabled:opacity-50 pb-1 whitespace-nowrap
                    "
                  >
                    {isSubmitting ? "Sending..." : "Subscribe →"}
                  </button>
                </div>

                {error && (
                  <p className="mt-3 font-dm-sans text-[13px] text-[#F08080]">
                    {error}
                  </p>
                )}

                <p className="mt-4 font-dm-mono text-[#4A7A5A] text-[11px] uppercase tracking-wide">
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