"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from 'next-intl'
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const locale = useLocale()
  const tNav = useTranslations('navigation')
  const tFooter = useTranslations('footer')

  // 构建本地化链接
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  // 使用state来确保翻译文本能正确更新
  const [footerTexts, setFooterTexts] = useState({
    tagline: '',
    vision: '',
    company: '',
    contact: '',
    rights: ''
  })

  const [navTexts, setNavTexts] = useState({
    about: '',
    incubator: '',
    portfolio: '',
    contact: ''
  })

  useEffect(() => {
    setFooterTexts({
      tagline: tFooter('tagline'),
      vision: tFooter('vision'),
      company: tFooter('company'),
      contact: tFooter('contact'),
      rights: tFooter('rights')
    })
    
    setNavTexts({
      about: tNav('about'),
      incubator: tNav('incubator'),
      portfolio: tNav('portfolio'),
      contact: tNav('contact')
    })
  }, [locale, tFooter, tNav])

  return (
    <footer key={locale} className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href={getLocalizedHref("/")}>
                <Image
                  src="/GWI_white_text.png"
                  alt="GWI Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {footerTexts.tagline}
            </p>
            <p className="text-[#00A651] font-playfair italic text-lg mb-6">{footerTexts.vision}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-[#00A651] transition-colors duration-300 border-b border-transparent hover:border-[#00A651]"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#00A651] transition-colors duration-300 border-b border-transparent hover:border-[#00A651]"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[#00A651] transition-colors duration-300 border-b border-transparent hover:border-[#00A651]"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerTexts.company}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedHref("/about")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {navTexts.about}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/incubator")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {navTexts.incubator}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/portfolio")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {navTexts.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/contact")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {navTexts.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerTexts.contact}</h4>
            <div className="space-y-2 text-gray-400">
              <p>Singapore</p>
              <p>Hong Kong</p>
              <p>San Francisco</p>
              <p className="pt-2">
                <Link href="mailto:hello@gwi.vc" className="hover:text-white transition-colors">
                  hello@gwi.vc
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Global Wise Investments. {footerTexts.rights}.</p>
        </div>
      </div>
    </footer>
  )
}
