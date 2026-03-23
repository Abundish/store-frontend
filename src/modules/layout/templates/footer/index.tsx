import Image from "next/image"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

import { listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const productCategories = await listCategories()
  const topLevelCategories =
    productCategories?.filter((c) => !c.parent_category) ?? []

  return (
    <footer className="w-full bg-[#1A1A1A] text-white">
      <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/abundish-logo.png"
                alt="Abundish logo"
                width={160}
                height={52}
                className="filter brightness(0) invert(1) w-[140px] h-auto"
                priority={false}
              />
            </div>
            <p className="font-dm-sans text-[14px] leading-[1.8] text-white/70 max-w-[260px]">
              Farm to table. Farmer to future.
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white hover:opacity-80 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter/X"
                className="text-white hover:opacity-80 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white hover:opacity-80 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:opacity-80 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4">
            <p className="font-dm-sans font-semibold text-[#FFCC00] text-[16px]">
              Categories
            </p>
            <ul className="flex flex-col gap-2">
              {topLevelCategories.slice(0, 8).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink
                    href={`/categories/${c.handle}`}
                    className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                  >
                    {c.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="font-dm-sans font-semibold text-[#FFCC00] text-[16px]">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <LocalizedClientLink
                  href="/about"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  About Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/contact"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  Contact Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/#faq"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  FAQs
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/careers"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  Careers
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p className="font-dm-sans font-semibold text-[#FFCC00] text-[16px]">
              Legal &amp; Policies
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <LocalizedClientLink
                  href="/return-policy"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  Return Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/delivery-policy"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  Delivery Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/terms"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  Terms &amp; Conditions
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  href="/privacy"
                  className="font-dm-sans text-[14px] text-white/70 hover:text-white transition"
                >
                  Privacy Policy
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-[1100px] mx-auto px-6 py-6 flex items-center justify-between gap-4 text-[13px] text-white/70">
          <span>© 2025 Abundish. All rights reserved.</span>
          <span>Made with 🌿 in Nigeria</span>
        </div>
      </div>
    </footer>
  )
}
