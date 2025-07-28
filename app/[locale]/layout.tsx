import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { MouseGlowProvider } from '@/components/ui/mouse-glow-provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import "../globals.css"
import NavigationWrapper from "@/components/navigation-wrapper"
import FooterWrapper from "@/components/footer-wrapper"
import { locales, localeConfig, type Locale } from "../../i18n.config"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "TEST - Building the Future",
  description:
    "TEST partners with visionary entrepreneurs to transform industries and create lasting impact across global markets.",
    generator: 'v0.dev'
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ 
  children, 
  params: { locale } 
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages()
  
  const direction = localeConfig[locale as Locale]?.direction || 'ltr'

  return (
      <html lang={locale} dir={direction} suppressHydrationWarning>
        <body className={`${inter.variable} ${playfair.variable}`}>
        <NextIntlClientProvider messages={messages}>
            <MouseGlowProvider enabled={true}>
          <NavigationWrapper locale={locale} />
              <main>
          {children}
              </main>
          <FooterWrapper locale={locale} />
            </MouseGlowProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
