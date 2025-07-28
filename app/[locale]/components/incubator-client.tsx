"use client"

import { motion } from "framer-motion"
import { Rocket, Users, TrendingUp, Target, Lightbulb, Globe, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useLocale } from 'next-intl'
import { CustomButton } from "@/components/ui/custom-button"

interface IncubatorClientProps {
  translations: {
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    heroDetail: string
    overviewTitle: string
    overviewDescription: string
    overviewDetail: string
    feature1: string
    feature2: string
    feature3: string
    feature4: string
    feature5: string
    offerTitle: string
    offerDescription: string
    capitalTitle: string
    capitalDesc: string
    mentorshipTitle: string
    mentorshipDesc: string
    marketingTitle: string
    marketingDesc: string
    productTitle: string
    productDesc: string
    networkTitle: string
    networkDesc: string
    scalingTitle: string
    scalingDesc: string
    processTitle: string
    processDescription: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
    processButton: string
    ctaTitle: string
    ctaSubtitle: string
    ctaDescription: string
    ctaStart: string
    ctaStories: string
  }
}

export default function IncubatorClient({ translations: t }: IncubatorClientProps) {
  const locale = useLocale()

  // 构建本地化链接
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 背景图片 - 火山 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-volcano.jpg"
            alt="Volcanic eruption representing explosive innovation and growth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
        </div>

        {/* 丝线效果 */}
        <div className="absolute inset-0 z-5">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`thread-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#00A651]/15 to-transparent"
              style={{
                height: Math.random() * 500 + 300,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 0.3, 0],
                scaleY: [0, 1, 0],
                x: [0, Math.random() * 150 - 75],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 12,
                ease: "easeInOut",
              }}
            />
          ))}
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
              className="font-playfair text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic tracking-wide max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t.heroDescription}
            </motion.p>
            <motion.p
              className="font-playfair text-xl text-gray-400 leading-relaxed font-light tracking-wide max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {t.heroDetail}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview - 自适应高度 */}
      <section className="min-h-screen py-20 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-3">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`silk-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.4, 1],
                opacity: [0.03, 0.15, 0.03],
              }}
              transition={{
                duration: Math.random() * 30 + 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-80 h-px bg-gradient-to-r from-transparent via-[#00A651] to-transparent transform rotate-45" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-playfair text-5xl md:text-6xl font-light text-white mb-8 tracking-wide">
                  {t.overviewTitle}
                </h2>
                <p className="font-playfair text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic tracking-wide mb-8">
                  {t.overviewDescription}
                </p>
                <p className="font-inter text-lg text-gray-400 leading-relaxed font-light tracking-wide">
                  {t.overviewDetail}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  t.feature1,
                  t.feature2,
                  t.feature3,
                  t.feature4,
                  t.feature5,
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <CheckCircle className="h-6 w-6 text-[#00A651] flex-shrink-0" />
                    <span className="font-inter text-lg text-gray-300 font-light tracking-wide">{feature}</span>
                  </motion.div>
                ))}
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
                  src="/placeholder.svg?height=600&width=500"
                  alt="TEST Foundry Workspace"
                  width={500}
                  height={600}
                  className="shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  className="absolute -top-6 -right-6 w-32 h-32 bg-[#00A651] flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Rocket className="h-12 w-12 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer - 自适应高度 */}
      <section className="min-h-screen py-20 bg-black flex items-center justify-center relative overflow-hidden">
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
              {t.offerTitle}
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              {t.offerDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: t.capitalTitle,
                description: t.capitalDesc,
              },
              {
                icon: Users,
                title: t.mentorshipTitle,
                description: t.mentorshipDesc,
              },
              {
                icon: TrendingUp,
                title: t.marketingTitle,
                description: t.marketingDesc,
              },
              {
                icon: Lightbulb,
                title: t.productTitle,
                description: t.productDesc,
              },
              {
                icon: Globe,
                title: t.networkTitle,
                description: t.networkDesc,
              },
              {
                icon: Rocket,
                title: t.scalingTitle,
                description: t.scalingDesc,
              },
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="bg-transparent backdrop-blur-sm p-8 h-full border-b border-gray-800 hover:border-[#00A651] transition-all duration-500 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-[#00A651]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <offering.icon className="h-10 w-10 text-[#00A651] group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>

                  <h3 className="font-playfair text-2xl font-light text-white mb-6 group-hover:text-[#00A651] transition-colors duration-300 tracking-wide">
                    {offering.title}
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300 font-light tracking-wide">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process - 自适应高度 */}
      <section className="min-h-screen py-20 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* 流动的丝带效果 */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(8)].map((_, i) => (
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
                opacity: [0, 0.3, 0],
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

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">
              {t.processTitle}
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              {t.processDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "01",
                title: t.step1Title,
                description: t.step1Desc,
              },
              {
                step: "02",
                title: t.step2Title,
                description: t.step2Desc,
              },
              {
                step: "03",
                title: t.step3Title,
                description: t.step3Desc,
              },
              {
                step: "04",
                title: t.step4Title,
                description: t.step4Desc,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="font-playfair text-2xl font-light text-[#00A651] tracking-wide">{step.step}</span>
                </motion.div>
                <h3 className="font-playfair text-2xl font-light text-white mb-4 tracking-wide">{step.title}</h3>
                <p className="font-inter text-gray-400 leading-relaxed font-light tracking-wide">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <CustomButton href={getLocalizedHref("/contact")} variant="solid" className="text-2xl py-6">
              {t.processButton} <ArrowRight className="ml-4 h-8 w-8" />
            </CustomButton>
          </motion.div>
        </div>
      </section>

      {/* Success Stories - 自适应高度 */}
      <section className="min-h-screen py-20 bg-black flex items-center justify-center relative overflow-hidden">
        {/* 优雅的云雾流动 */}
        <div className="absolute inset-0 opacity-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                x: [0, 250, -125, 0],
                y: [0, -125, 75, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.4, 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 40 + 35,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-96 h-48 bg-white rounded-full blur-2xl opacity-15" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
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
              className="font-playfair text-2xl mb-16 max-w-5xl mx-auto text-gray-300 leading-relaxed font-light italic tracking-wide"
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
                {t.ctaStart}
              </CustomButton>
              <CustomButton href={getLocalizedHref("/portfolio")} variant="ghost" className="text-2xl py-6">
                {t.ctaStories}
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 