import { testimonialsData } from "../_data/testimonials-data"

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F9F6EE] py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="font-fraunces text-[#006b2f] text-[32px] sm:text-[40px] lg:text-[48px]">
          Nigerians are eating better
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-7 flex flex-col border-b border-[#FFCC00]"
            >
              <div className="text-[#FFCC00] text-[18px] tracking-[0.05em]">
                {"★★★★★"}
              </div>

              <p className="mt-4 font-dm-sans italic text-[16px] leading-[1.7] text-[#1A1A1A]">
                “{t.quote}”
              </p>

              <div className="mt-auto pt-6 flex items-center gap-3">
                <div className="flex flex-col">
                  <p className="font-dm-sans font-semibold text-[14px]">
                    {t.name}
                  </p>
                  <p className="font-dm-sans text-[#1A1A1A] text-[13px] opacity-80">
                    {t.city}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

