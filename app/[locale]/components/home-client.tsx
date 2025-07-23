"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Brain, Smartphone, Gamepad2 } from "lucide-react"
import { useLocale } from 'next-intl'
import { CustomButton } from "@/components/ui/custom-button"

interface HomeClientProps {
  translations: {
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    ctaContact: string
    ctaIncubator: string
    focusTitle: string
    focusDescription: string
    focusAI: string
    focusAIDesc: string
    focusMobile: string
    focusMobileDesc: string
    focusGaming: string
    focusGamingDesc: string
    impactTitle: string
    impactDescription: string
    statsPortfolio: string
    statsCapital: string
    statsExits: string
    ctaTitle: string
    ctaSubtitle: string
    ctaDescription: string
  }
}

export default function HomeClient({ translations: t }: HomeClientProps) {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const locale = useLocale()

  // 构建本地化链接
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <div className="relative">
      {/* Hero Section - 与其他页面保持一致的样式 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 背景图片 - 使用与 about 页面相同的地球夜景 */}
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
            transition={{ duration: 1, delay: 0.5 }}
            style={{ opacity: heroOpacity }}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Title with Enhanced Typography */}
            <motion.h1
              className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 leading-tight tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, type: "spring", delay: 0.8 }}
            >
              {t.heroTitle}
              <motion.span 
                className="block text-[#00A651] italic font-light"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                {t.heroSubtitle}
              </motion.span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              className="font-playfair text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed italic font-light tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {t.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <CustomButton href={getLocalizedHref("/contact")} variant="solid" className="text-2xl py-6">
                {t.ctaContact} <ArrowRight className="ml-4 h-8 w-8" />
              </CustomButton>
              <CustomButton href={getLocalizedHref("/incubator")} variant="ghost" className="text-2xl py-6">
                {t.ctaIncubator}
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, white 1px, transparent 0)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-6">
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
            <p className="font-playfair text-2xl text-gray-400 max-w-4xl mx-auto italic font-light tracking-wide">
              {t.focusDescription}
            </p>
          </motion.div>

          {/* Focus Area Cards with About Page Style */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: t.focusAI,
                description: t.focusAIDesc
              },
              {
                icon: Smartphone,
                title: t.focusMobile,
                description: t.focusMobileDesc
              },
              {
                icon: Gamepad2,
                title: t.focusGaming,
                description: t.focusGamingDesc
              }
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

      {/* Impact Section */}
      <section className="h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00A651] rounded-full opacity-20"
              initial={{ 
                x: Math.random() * 1200, 
                y: Math.random() * 800,
                scale: 0 
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              className="font-playfair text-6xl md:text-8xl font-light text-white mb-12 tracking-wide"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {t.impactTitle}
            </motion.h2>

            <motion.p
              className="font-playfair text-2xl md:text-3xl text-gray-300 mb-16 leading-relaxed italic font-light tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t.impactDescription}
            </motion.p>

                         {/* Impact Stats with Animations */}
             <div className="grid md:grid-cols-3 gap-12 mb-16">
               {[
                 { number: "50+", label: t.statsPortfolio, delay: 0.1 },
                 { number: "$500M+", label: t.statsCapital, delay: 0.3 },
                 { number: "15+", label: t.statsExits, delay: 0.5 }
               ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: stat.delay, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="font-playfair text-5xl md:text-6xl font-light text-[#00A651] mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: stat.delay + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="font-inter text-xl text-gray-400 font-light tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div className="max-w-5xl mx-auto">
            <motion.h2
              className="font-playfair text-6xl md:text-8xl font-light mb-12 text-white tracking-wide"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: true }}
            >
              {t.ctaTitle}
              <span className="block text-[#00A651] italic font-light">{t.ctaSubtitle}</span>
            </motion.h2>

            <motion.p
              className="font-playfair text-2xl mb-16 max-w-4xl mx-auto text-gray-300 leading-relaxed italic font-light tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t.ctaDescription}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <CustomButton href={getLocalizedHref("/contact")} variant="solid" className="text-2xl py-6">
                {t.ctaContact} <ArrowRight className="ml-4 h-8 w-8" />
              </CustomButton>
              <CustomButton href={getLocalizedHref("/incubator")} variant="ghost" className="text-2xl py-6">
                {t.ctaIncubator}
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}