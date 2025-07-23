"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Eye, Brain, Smartphone, Gamepad2 } from "lucide-react"
import Image from "next/image"
import { useLocale } from 'next-intl'
import { CustomButton } from "@/components/ui/custom-button"

interface AboutClientProps {
  translations: {
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    missionTitle: string
    missionDescription: string
    missionDetail: string
    approachTitle: string
    approachDescription: string
    focusTitle: string
    focusDescription: string
    focusAI: string
    focusAIDesc: string
    focusMobile: string
    focusMobileDesc: string
    focusGaming: string
    focusGamingDesc: string
    foundryTitle: string
    foundryDescription: string
    foundryDetail: string
    foundryButton: string
  }
}

export default function AboutClient({ translations: t }: AboutClientProps) {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const locale = useLocale()

  // 构建本地化链接
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 背景图片 - 地球夜景 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/earth-night-lights.jpg"
            alt="Earth at night showing city lights from space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 leading-tight tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              {t.heroTitle}
              <span className="block text-[#00A651] italic font-light">{t.heroSubtitle}</span>
            </motion.h1>
            <motion.p
              className="font-playfair text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic tracking-wide max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t.heroDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - 全屏 */}
      <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-4">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`silk-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#00A651] to-transparent transform rotate-45" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                <div className="flex items-center mb-8">
                  <Target className="h-12 w-12 text-[#00A651] mr-6" />
                  <h2 className="font-playfair text-4xl md:text-5xl font-light text-white tracking-wide">
                    {t.missionTitle}
                  </h2>
                </div>
                <p className="font-playfair text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic tracking-wide mb-6">
                  {t.missionDescription}
                </p>
                <p className="font-playfair text-lg text-gray-400 leading-relaxed font-light tracking-wide">
                  {t.missionDetail}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-8">
                  <Eye className="h-12 w-12 text-[#00A651] mr-6" />
                  <h2 className="font-playfair text-4xl md:text-5xl font-light text-white tracking-wide">
                    {t.approachTitle}
                  </h2>
                </div>
                <p className="font-playfair text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic tracking-wide">
                  {t.approachDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/images/gwi-office.jpg"
                  alt="GWI Team - Climbing new heights and achieving excellence"
                  width={600}
                  height={700}
                  className="shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  className="absolute -top-6 -right-6 w-32 h-32 bg-[#00A651] flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <span className="font-playfair text-white font-light text-2xl tracking-wide">GWI</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 云雾效果 */}
        <div className="absolute inset-0 opacity-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`mist-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                x: [0, 150, -75, 0],
                y: [0, -75, 150, 0],
                scale: [1, 1.4, 0.9, 1],
                opacity: [0.05, 0.2, 0.05, 0.1],
              }}
              transition={{
                duration: Math.random() * 35 + 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-96 h-96 bg-white rounded-full blur-3xl" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">
              {t.focusTitle}
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              {t.focusDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: t.focusAI,
                description: t.focusAIDesc,
              },
              {
                icon: Smartphone,
                title: t.focusMobile,
                description: t.focusMobileDesc,
              },
              {
                icon: Gamepad2,
                title: t.focusGaming,
                description: t.focusGamingDesc,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="bg-transparent backdrop-blur-sm p-8 h-full border-b border-gray-800 hover:border-gray-600 transition-all duration-500 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-[#00A651]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <item.icon className="h-10 w-10 text-[#00A651] group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>

                  <h3 className="font-playfair text-2xl font-light text-white mb-6 group-hover:text-[#00A651] transition-colors duration-300 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300 font-light tracking-wide">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubator Section - 全屏 */}
      <section className="h-screen bg-gradient-to-t from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* 流动的丝带效果 */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`ribbon-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#00A651] to-transparent"
              style={{
                width: "200%",
                left: "-50%",
                top: Math.random() * 100 + "%",
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
              animate={{
                x: ["0%", "50%"],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 10,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">{t.foundryTitle}</h2>
            <p className="font-playfair text-2xl text-gray-300 max-w-5xl mx-auto font-light italic tracking-wide mb-12">
              {t.foundryDescription}
            </p>
            <p className="font-playfair text-xl text-gray-400 max-w-4xl mx-auto font-light tracking-wide">
              {t.foundryDetail}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <CustomButton href={getLocalizedHref("/incubator")} variant="solid" className="text-2xl py-6">
              {t.foundryButton}
            </CustomButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 