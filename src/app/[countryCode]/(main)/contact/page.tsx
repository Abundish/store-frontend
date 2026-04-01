import LocalizedClientLink from "@modules/common/components/localized-client-link"

const WHATSAPP_NUMBER = "2349127467870"
const PHONE_DISPLAY = "+234 912 746 7870"
const EMAIL = "abundishappstores@gmail.com"

export default function ContactPage() {
    return (
        <div className="bg-[#F9F6EE] min-h-screen">

            {/* HERO */}
            <section className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 lg:pt-24">
                <div className="flex flex-col gap-6 max-w-[640px]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-[#FFCC00]" />
                        <p className="font-dm-mono text-[#008528] text-[11px] uppercase tracking-[0.16em]">
                            Get in touch
                        </p>
                    </div>
                    <h1 className="font-fraunces text-[#006b2f] text-[48px] sm:text-[60px] leading-[1.05]">
                        We&apos;re just a message away.
                    </h1>
                    <p className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8]">
                        Have a question about an order, want to buy in bulk, or just want
                        to say hello? Reach us directly &mdash; a real person will respond.
                    </p>
                </div>
            </section>

            {/* CONTACT OPTIONS */}
            <section className="max-w-[1100px] mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8E8D0]">

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Abundish%2C%20I%27d%20like%20to%20place%20an%20order.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#F9F6EE] hover:bg-[#EEF3EC] transition-colors duration-200 p-10 flex flex-col gap-6"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#EEF3EC] group-hover:bg-[#D4E6CE] transition-colors duration-200 flex items-center justify-center">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path
                                    d="M11 1C5.477 1 1 5.477 1 11c0 1.763.463 3.414 1.27 4.847L1 21l5.302-1.253A9.954 9.954 0 0011 21c5.523 0 10-4.477 10-10S16.523 1 11 1z"
                                    stroke="#008528"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.5 10.5c.5 1 1.5 2.5 3 3.5 1 .667 2 .833 2.5.5l1-1c.167-.167.167-.5 0-.667L12.5 11.5c-.167-.167-.5-.167-.667 0l-.5.5C10.667 11.5 10 10.833 9.5 10l.5-.5c.167-.167.167-.5 0-.667L8.667 8c-.167-.167-.5-.167-.667 0L7.5 9c-.333.5-.167 1 0 1.5z"
                                    fill="#008528"
                                />
                            </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
                                WhatsApp
                            </p>
                            <h2 className="font-fraunces text-[#006b2f] text-[24px] leading-snug group-hover:underline">
                                Chat with us
                            </h2>
                            <p className="font-dm-sans text-[#3D5A3D] text-[14px] leading-[1.7]">
                                The fastest way to reach us. Send a message and we&apos;ll respond promptly.
                            </p>
                        </div>

                        <span className="font-dm-mono text-[12px] text-[#008528] uppercase tracking-[0.12em] mt-auto">
                            Open WhatsApp &rarr;
                        </span>
                    </a>

                    {/* Phone */}
                    <a
                        href={`tel:+${WHATSAPP_NUMBER}`}
                        className="group bg-[#F9F6EE] hover:bg-[#EEF3EC] transition-colors duration-200 p-10 flex flex-col gap-6"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#EEF3EC] group-hover:bg-[#D4E6CE] transition-colors duration-200 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M2 3a1 1 0 011-1h2.5a1 1 0 01.97.757l.75 3a1 1 0 01-.274.976L5.5 7.5c1.1 2.2 2.8 3.9 5 5l.767-.946a1 1 0 01.976-.274l3 .75A1 1 0 0116 13v2.5a1 1 0 01-1 1C7.163 16.5 2 11.337 2 5.5V3z"
                                    stroke="#008528"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
                                Phone
                            </p>
                            <h2 className="font-fraunces text-[#006b2f] text-[24px] leading-snug group-hover:underline">
                                Call us directly
                            </h2>
                            <p className="font-dm-sans text-[#3D5A3D] text-[14px] leading-[1.7]">
                                Prefer to talk? Give us a call during business hours and we&apos;ll sort you out.
                            </p>
                        </div>

                        <span className="font-dm-mono text-[#008528] text-[16px] tracking-wide mt-auto">
                            {PHONE_DISPLAY}
                        </span>
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${EMAIL}`}
                        className="group bg-[#F9F6EE] hover:bg-[#EEF3EC] transition-colors duration-200 p-10 flex flex-col gap-6"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#EEF3EC] group-hover:bg-[#D4E6CE] transition-colors duration-200 flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect x="2" y="4" width="16" height="12" rx="2" stroke="#008528" strokeWidth="1.5" />
                                <path d="M2 7l8 5 8-5" stroke="#008528" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-dm-mono text-[#7A9B7A] text-[11px] uppercase tracking-[0.14em]">
                                Email
                            </p>
                            <h2 className="font-fraunces text-[#006b2f] text-[24px] leading-snug group-hover:underline">
                                Send us a note
                            </h2>
                            <p className="font-dm-sans text-[#3D5A3D] text-[14px] leading-[1.7]">
                                For order enquiries, bulk purchases, or partnerships. We respond within 24 hours.
                            </p>
                        </div>

                        <span className="font-dm-mono text-[#008528] text-[13px] tracking-wide mt-auto break-all">
                            {EMAIL}
                        </span>
                    </a>
                </div>

                {/* Hours note */}
                <div className="flex items-start gap-4 mt-10 pt-8 border-t border-[#D8E8D0]">
                    <div className="w-8 h-px bg-[#FFCC00] mt-3 shrink-0" />
                    <p className="font-dm-sans text-[#7A9B7A] text-[14px] leading-[1.7]">
                        Our team is available{" "}
                        <span className="text-[#3D5A3D] font-semibold">
                            Monday &ndash; Saturday, 9am &ndash; 6pm WAT.
                        </span>{" "}
                        WhatsApp messages outside these hours will be responded to the next morning.
                    </p>
                </div>
            </section>

        </div>
    )
}