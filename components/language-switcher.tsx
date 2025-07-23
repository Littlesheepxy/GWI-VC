"use client"

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { ChevronDown, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { locales, localeConfig, type Locale } from '../i18n.config'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<Locale>('en')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  // 从URL路径中提取当前语言
  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean)
    const urlLocale = segments[0] as Locale
    
    // 检查URL中的第一个段是否是有效的语言代码
    if (locales.includes(urlLocale)) {
      setCurrentLocale(urlLocale)
    } else {
      // 如果URL中没有语言前缀，使用useLocale的值或默认语言
      setCurrentLocale(locale as Locale || 'en')
    }
  }, [pathname, locale])

  const handleLocaleChange = (newLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean)
    
    // 如果第一个段是当前语言，替换它
    if (segments[0] && locales.includes(segments[0] as Locale)) {
      segments[0] = newLocale
    } else {
      // 如果路径不包含语言前缀，添加新语言前缀
      segments.unshift(newLocale)
    }
    
    const newPath = '/' + segments.join('/')
    
    // 使用 window.location.href 来确保完全重新加载页面，这样所有组件都会重新渲染
    // 这样可以确保客户端组件获取到新的翻译内容
    window.location.href = newPath
    setIsOpen(false)
  }

  const currentLanguage = localeConfig[currentLocale]

  // 添加调试信息（可以在控制台查看）
  useEffect(() => {
    console.log('Language Switcher Debug:', {
      pathname,
      useLocaleValue: locale,
      currentLocale,
      urlSegments: pathname.split('/').filter(Boolean)
    })
  }, [pathname, locale, currentLocale])

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.name || 'Language'}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden min-w-[120px] z-50"
          >
            {locales.map((loc) => (
              <motion.button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors duration-200 ${
                  currentLocale === loc ? 'bg-[#00A651]/20 text-[#00A651]' : 'text-white'
                }`}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                {localeConfig[loc].name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}