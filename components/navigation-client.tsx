"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import LanguageSwitcher from "@/components/language-switcher"

interface NavigationClientProps {
  translations: {
    home: string
    about: string
    incubator: string
    portfolio: string
    contact: string
    getStarted: string
  }
  locale: string
}

export default function NavigationClient({ translations: t, locale }: NavigationClientProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()

  // 页面是否有 hero 背景图片 - 修复国际化路由判断
  const hasHeroBackground = 
    pathname === "/" || 
    pathname.match(/^\/[a-z]{2}$/) || // 匹配 /zh, /en 等首页路径
    pathname.endsWith("/about") || 
    pathname.endsWith("/incubator") || 
    pathname.endsWith("/portfolio") || 
    pathname.endsWith("/contact")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 使用当前语言前缀构建导航链接
  const getLocalizedHref = (path: string) => {
    return path === "/" ? `/${locale}` : `/${locale}${path}`
  }

  const navItems = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/incubator", label: t.incubator },
    { href: "/portfolio", label: t.portfolio },
    { href: "/contact", label: t.contact },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${hasHeroBackground ? (isScrolled ? 0.95 : 0) : 0.95})`,
        backdropFilter: hasHeroBackground ? (isScrolled ? "blur(20px)" : "none") : "blur(20px)",
        borderBottom: hasHeroBackground ? (isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none") : "1px solid rgba(255, 255, 255, 0.1)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href={getLocalizedHref("/")} className="block">
              <motion.div
                whileHover={{ filter: "drop-shadow(0 0 20px rgba(0, 166, 81, 0.5))" }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/GWI_white_text.png"
                  alt="GWI Logo"
                  width={160}
                  height={53}
                  className="h-12 w-auto"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const localizedHref = getLocalizedHref(item.href)
              const isActive = pathname === localizedHref
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={localizedHref}
                    className={`font-inter font-light text-xl transition-all duration-300 relative tracking-wide ${
                      isActive ? "text-[#00A651]" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#00A651]"
                        layoutId="activeTab"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-px bg-white/0 group-hover:bg-white/20"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CustomButton href={getLocalizedHref("/contact")} variant="solid">
                {t.getStarted}
              </CustomButton>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-6 pt-8 pb-4 border-t border-gray-800 mt-6">
            {navItems.map((item, index) => {
              const localizedHref = getLocalizedHref(item.href)
              const isActive = pathname === localizedHref
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={localizedHref}
                    className={`font-inter font-light text-2xl transition-colors duration-300 hover:text-[#00A651] tracking-wide ${
                      isActive ? "text-[#00A651]" : "text-gray-300"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
            
            {/* Mobile Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <LanguageSwitcher />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <CustomButton href={getLocalizedHref("/contact")} variant="solid" className="w-fit">
                {t.getStarted}
              </CustomButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 