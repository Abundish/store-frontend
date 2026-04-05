import LocalizedClientLink from "@modules/common/components/localized-client-link"

const sections = [
    { index: "01", id: "coverage", label: "Delivery Coverage" },
    { index: "02", id: "timeframes", label: "Timeframes & Cut-off" },
    { index: "03", id: "pricing", label: "Delivery Pricing" },
    { index: "04", id: "process", label: "Delivery Process" },
    { index: "05", id: "pickup", label: "Self-Collection" },
    { index: "06", id: "quality", label: "Quality Guarantee" },
    { index: "07", id: "bulk", label: "Bulk & B2B Orders" },
    { index: "08", id: "contact", label: "Contact Us" },
]

export default function DeliveryPolicyPage() {
    return (
        <div className="bg-[#F9F6EE] min-h-screen">

            {/* ── HERO ── */}
            <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-[#FFCC00]" />
                        <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
                            Legal
                        </p>
                    </div>

                    <h1 className="font-fraunces text-[#006b2f] text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.0] max-w-[820px]">
                        Delivery Policy
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-4 max-w-[900px]">
                        <p className="font-dm-sans text-[#3D5A3D] text-[17px] leading-[1.8] max-w-[480px]">
                            We deliver fresh, farm-sourced produce directly to your door across
                            Lagos. Here's everything you need to know about how we get your
                            order to you.
                        </p>
                        <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em] shrink-0">
                            Last updated: April 05, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="w-full h-px bg-[#D8E8D0]" />
            </div>

            {/* ── MAIN CONTENT ── */}
            <section className="max-w-[1100px] mx-auto px-6 py-20 lg:py-28">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

                    {/* Left sticky nav */}
                    <div className="lg:w-[220px] shrink-0 flex flex-col gap-6 lg:pt-2 lg:sticky lg:top-8">
                        <div className="flex flex-col gap-3">
                            <div className="w-8 h-px bg-[#FFCC00]" />
                            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
                                Sections
                            </p>
                        </div>
                        <nav className="flex flex-col gap-2">
                            {sections.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="font-dm-mono text-[#3D5A3D] text-[12px] uppercase tracking-[0.12em] hover:text-[#006b2f] transition-colors duration-200"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Right content */}
                    <div className="flex flex-col gap-16 max-w-[640px]">

                        {/* 01 — Coverage */}
                        <div id="coverage" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">01</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Delivery Coverage
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] flex flex-col gap-4">
                                <p>
                                    We currently deliver within <strong className="text-[#006b2f]">Lagos State</strong> only.
                                    Delivery fees are calculated based on the distance between our
                                    fulfilment point and your delivery address — you will see the
                                    exact fee at checkout before confirming your order.
                                </p>
                                <p>
                                    We are actively working to expand our coverage to other states
                                    across Nigeria. Stay tuned for updates.
                                </p>
                            </div>
                        </div>

                        {/* 02 — Timeframes */}
                        <div id="timeframes" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">02</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Timeframes & Cut-off
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] flex flex-col gap-4">
                                <p>
                                    Orders placed by <strong className="text-[#006b2f]">6:00 PM</strong> are
                                    eligible for same-day delivery. Orders placed after 6:00 PM will
                                    be delivered the following business day.
                                </p>
                                <p>
                                    We deliver <strong className="text-[#006b2f]">Monday to Saturday</strong>.
                                    Orders placed on Sundays or on public holidays will be processed
                                    and dispatched on the next available delivery day.
                                </p>
                            </div>

                            {/* Info tiles */}
                            <div className="grid grid-cols-2 gap-px bg-[#D8E8D0] mt-2">
                                <div className="bg-[#EEF3EC] p-6 flex flex-col gap-2">
                                    <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">Order by</p>
                                    <p className="font-fraunces text-[#006b2f] text-[28px] leading-none">6:00 PM</p>
                                    <p className="font-dm-sans text-[#3D5A3D] text-[13px] leading-[1.6]">for same-day delivery</p>
                                </div>
                                <div className="bg-[#EEF3EC] p-6 flex flex-col gap-2">
                                    <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">We deliver</p>
                                    <p className="font-fraunces text-[#006b2f] text-[28px] leading-none">Mon–Sat</p>
                                    <p className="font-dm-sans text-[#3D5A3D] text-[13px] leading-[1.6]">no Sunday deliveries</p>
                                </div>
                            </div>
                        </div>

                        {/* 03 — Pricing */}
                        <div id="pricing" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">03</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Delivery Pricing
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] flex flex-col gap-4">
                                <p>
                                    Delivery fees are <strong className="text-[#006b2f]">distance-based</strong> and
                                    are calculated dynamically at checkout based on your delivery
                                    address. There is no minimum order amount — you can order as
                                    much or as little as you need.
                                </p>
                                <p>
                                    The delivery fee shown at checkout is the final amount you will
                                    be charged. No hidden fees, no surprises.
                                </p>
                            </div>
                        </div>

                        {/* 04 — Process */}
                        <div id="process" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">04</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Delivery Process
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] flex flex-col gap-4">
                                <p>
                                    Before your order is dispatched, a member of our team will
                                    contact you by phone to confirm your availability and delivery
                                    address. We will only dispatch your order once we have confirmed
                                    that you are available to receive it.
                                </p>
                                <p>
                                    You will receive a second phone call when our delivery driver is
                                    on their way to you. All deliveries are made
                                    directly to your door.
                                </p>
                                <p>
                                    If we are unable to reach you at the time of dispatch, your
                                    order will be held and we will follow up to schedule a suitable
                                    time. We will not dispatch to an address where the customer is
                                    confirmed unavailable.
                                </p>
                            </div>
                        </div>

                        {/* 05 — Pickup */}
                        <div id="pickup" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">05</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Self-Collection
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8]">
                                <p>
                                    Prefer to collect your order yourself? We offer a self-collection
                                    option for customers who would like to pick up their produce
                                    directly. Please contact us at checkout or reach out via the
                                    details below to arrange a pickup time.
                                </p>
                            </div>
                        </div>

                        {/* 06 — Quality */}
                        <div id="quality" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">06</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Quality Guarantee
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] flex flex-col gap-4">
                                <p>
                                    Every order is quality-checked before it leaves us. Our team
                                    carefully inspects, sorts, and packages your produce to ensure
                                    it arrives in excellent condition.
                                </p>
                                <p>
                                    In the unlikely event that any item in your order arrives
                                    damaged or below our quality standard, please contact us
                                    immediately using the details below and we will make it right.
                                </p>
                            </div>

                            {/* Quality badge */}
                            <div className="bg-[#EEF3EC] border border-[#D8E8D0] rounded-sm p-6 flex items-start gap-4">
                                <div className="w-1 h-full min-h-[40px] bg-[#FFCC00] rounded-full shrink-0" />
                                <p className="font-dm-sans text-[#3D5A3D] text-[15px] leading-[1.75] italic">
                                    "Every item is inspected before dispatch. We don't send out
                                    anything we wouldn't be happy to receive ourselves."
                                </p>
                            </div>
                        </div>

                        {/* 07 — Bulk */}
                        <div id="bulk" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">07</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Bulk & B2B Orders
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] flex flex-col gap-4">
                                <p>
                                    Are you a restaurant, hotel, office, or business looking to
                                    order in bulk? We'd love to work with you. Bulk and business
                                    orders are handled separately with custom arrangements to suit
                                    your volume and schedule.
                                </p>
                            </div>
                            <LocalizedClientLink
                                href="/contact"
                                className="self-start inline-flex items-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] text-[#006b2f] border border-[#006b2f] rounded-full px-6 py-3 hover:bg-[#006b2f] hover:text-white transition-all duration-200"
                            >
                                Enquire about bulk orders →
                            </LocalizedClientLink>
                        </div>

                        {/* 08 — Contact */}
                        <div id="contact" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">08</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Questions?
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8]">
                                <p>
                                    If you have any questions about your delivery, please don't
                                    hesitate to reach out:
                                </p>
                            </div>

                            <div className="bg-[#EEF3EC] border border-[#D8E8D0] rounded-sm p-8 flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">Phone</p>
                                    <a
                                        href="tel:09127467870"
                                        className="font-fraunces text-[#006b2f] text-[22px] hover:text-[#008528] transition-colors duration-200"
                                    >
                                        0912 746 7870
                                    </a>
                                </div>
                                <div className="w-full h-px bg-[#D8E8D0]" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">Email</p>
                                    <a
                                        href="mailto:abundishappstores@gmail.com"
                                        className="font-fraunces text-[#006b2f] text-[22px] hover:text-[#008528] transition-colors duration-200 break-all"
                                    >
                                        abundishappstores@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="w-full h-px bg-[#D8E8D0]" />
            </div>

            {/* ── CLOSING CTA ── */}
            <section className="bg-[#FFCC00] py-16 lg:py-20">
                <div className="max-w-[1100px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="flex flex-col gap-4 max-w-[520px]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-px bg-[#006b2f]" />
                                <p className="font-dm-mono text-[#006b2f] text-[11px] uppercase tracking-[0.16em]">
                                    Ready to order?
                                </p>
                            </div>
                            <h2 className="font-fraunces text-[#0D3D20] text-[34px] lg:text-[44px] leading-[1.1]">
                                Fresh produce, at your door — today.
                            </h2>
                            <p className="font-dm-sans text-[#1A4A2A] text-[15px] leading-[1.75]">
                                Order before 6:00 PM for same-day delivery across Lagos.
                                No minimum order, no hidden fees.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <LocalizedClientLink
                                href="/store"
                                className="inline-flex items-center justify-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] bg-[#006b2f] text-white rounded-full px-7 py-4 hover:bg-[#0D3D20] transition-colors duration-200"
                            >
                                Shop now →
                            </LocalizedClientLink>
                            <LocalizedClientLink
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 font-dm-mono text-[12px] uppercase tracking-[0.14em] border border-[#006b2f] text-[#006b2f] rounded-full px-7 py-4 hover:bg-[#006b2f] hover:text-white transition-all duration-200"
                            >
                                Contact us
                            </LocalizedClientLink>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}