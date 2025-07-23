"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from "next/navigation"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const locale = useLocale()
  const pathname = usePathname()
  const tNav = useTranslations('navigation')
  const tFooter = useTranslations('footer')

  // 强制组件在语言变化时重新渲染
  useEffect(() => {
    // 当locale或pathname变化时，组件会重新渲染并获取新的翻译
  }, [locale, pathname])

  // 构建本地化链接
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
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
              {tFooter('tagline')}
            </p>
            <p className="text-[#00A651] font-playfair italic text-lg mb-6">{tFooter('vision')}</p>
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
            <h4 className="text-lg font-semibold mb-4 text-white">{tFooter('company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedHref("/about")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/incubator")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {tNav('incubator')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/portfolio")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {tNav('portfolio')}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref("/contact")}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:border-b hover:border-[#00A651] pb-1"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{tFooter('contact')}</h4>
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
          <p>&copy; {new Date().getFullYear()} Global Wise Investments. {tFooter('rights')}.</p>
        </div>
      </div>
    </footer>
  )
}
