import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function ReturnPolicyPage() {
    return (
        <div className="bg-[#F9F6EE] min-h-screen">

            {/* ── HERO ── */}
            <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
                <div className="flex flex-col gap-6">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-[#FFCC00]" />
                        <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
                            Legal
                        </p>
                    </div>

                    {/* Headline */}
                    <h1 className="font-fraunces text-[#006b2f] text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.0] max-w-[820px]">
                        Return Policy
                    </h1>

                    {/* Subtext */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-4 max-w-[900px]">
                        <p className="font-dm-sans text-[#3D5A3D] text-[17px] leading-[1.8] max-w-[480px]">
                            We take the quality of every order seriously. Please read our return
                            policy carefully before placing your order.
                        </p>
                        <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em] shrink-0">
                            Last updated: April 01, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="w-full h-px bg-[#D8E8D0]" />
            </div>

            {/* ── POLICY CONTENT ── */}
            <section className="max-w-[1100px] mx-auto px-6 py-20 lg:py-28">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-start">

                    {/* Left nav / label */}
                    <div className="lg:w-[220px] shrink-0 flex flex-col gap-6 lg:pt-2 lg:sticky lg:top-8">
                        <div className="flex flex-col gap-3">
                            <div className="w-8 h-px bg-[#FFCC00]" />
                            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
                                Sections
                            </p>
                        </div>
                        <nav className="flex flex-col gap-2">
                            <a
                                href="#refunds"
                                className="font-dm-mono text-[#3D5A3D] text-[12px] uppercase tracking-[0.12em] hover:text-[#006b2f] transition-colors duration-200"
                            >
                                Refunds
                            </a>
                            <a
                                href="#questions"
                                className="font-dm-mono text-[#3D5A3D] text-[12px] uppercase tracking-[0.12em] hover:text-[#006b2f] transition-colors duration-200"
                            >
                                Questions
                            </a>
                        </nav>
                    </div>

                    {/* Right content */}
                    <div className="flex flex-col gap-16 max-w-[640px]">

                        {/* Refunds */}
                        <div id="refunds" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">01</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Refunds
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8]">
                                <p>
                                    All sales are final and no refund will be issued. We encourage you to
                                    review your order carefully before completing your purchase.
                                </p>
                                <p className="mt-4">
                                    Because we deal in fresh farm produce, the nature of perishable goods
                                    means we are unable to accept returns once an order has been
                                    dispatched. We take every precaution to ensure items are sorted,
                                    packaged, and delivered in excellent condition.
                                </p>
                                <p className="mt-4">
                                    If you receive an item that is damaged, spoiled, or incorrect, please
                                    reach out to us immediately using the contact details below and we
                                    will do our best to make it right.
                                </p>
                            </div>
                        </div>

                        {/* Questions */}
                        <div id="questions" className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <p className="font-dm-mono text-[#C8DEC2] text-[12px]">02</p>
                                <h2 className="font-fraunces text-[#006b2f] text-[28px] lg:text-[34px] leading-[1.15]">
                                    Questions
                                </h2>
                            </div>
                            <div className="w-full h-px bg-[#D8E8D0]" />
                            <div className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8]">
                                <p>
                                    If you have any questions concerning our return policy, please don't
                                    hesitate to get in touch with us:
                                </p>
                            </div>

                            {/* Contact card */}
                            <div className="bg-[#EEF3EC] border border-[#D8E8D0] rounded-sm p-8 flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:09127467870"
                                        className="font-fraunces text-[#006b2f] text-[22px] hover:text-[#008528] transition-colors duration-200"
                                    >
                                        0912 746 7870
                                    </a>
                                </div>
                                <div className="w-full h-px bg-[#D8E8D0]" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.14em]">
                                        Email
                                    </p>
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
                                    Ready to shop?
                                </p>
                            </div>
                            <h2 className="font-fraunces text-[#0D3D20] text-[34px] lg:text-[44px] leading-[1.1]">
                                Fresh produce, delivered with care.
                            </h2>
                            <p className="font-dm-sans text-[#1A4A2A] text-[15px] leading-[1.75]">
                                Every order is handled thoughtfully from farm to doorstep. Still have
                                questions? Our team is happy to help before you place an order.
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