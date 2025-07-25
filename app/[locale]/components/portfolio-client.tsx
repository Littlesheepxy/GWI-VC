"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, ExternalLink } from "lucide-react"
import Image from "next/image"
import { VideoHero } from "@/components/ui/video-hero"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { PortfolioCard3D, StatCard3D } from "@/components/ui/card-3d"
import { useMouseGlowContext } from "@/components/ui/mouse-glow-provider"

interface PortfolioClientProps {
  translations: {
    heroTitle: string
    heroSubtitle: string
    heroDescription: string
    filterAll: string
    filterAI: string
    filterMobile: string
    filterGaming: string
    successTitle: string
    successDescription: string
    stat1Number: string
    stat1Label: string
    stat2Number: string
    stat2Label: string
    stat3Number: string
    stat3Label: string
  }
}

export default function PortfolioClient({ translations: t }: PortfolioClientProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const { handlers } = useMouseGlowContext()

  const filters = [
    { key: "All", label: t.filterAll },
    { key: "AI", label: t.filterAI },
    { key: "Mobile", label: t.filterMobile },
    { key: "Gaming", label: t.filterGaming }
  ]

  const portfolioCompanies = [
          // AI应用类别 (3个项目)
      {
        name: "AI_COMPANY_1_NAME",
        category: "AI",
        description: "AI_COMPANY_1_DESCRIPTION",
        stage: "Series A",
        logo: "/images/portfolio/ai-company-1-logo.svg",
        website: "https://ai-company-1.com",
      },
      {
        name: "AI_COMPANY_2_NAME", 
        category: "AI",
        description: "AI_COMPANY_2_DESCRIPTION",
        stage: "Seed",
        logo: "/images/portfolio/ai-company-2-logo.svg",
        website: "https://ai-company-2.com",
      },
      {
        name: "AI_COMPANY_3_NAME",
        category: "AI", 
        description: "AI_COMPANY_3_DESCRIPTION",
        stage: "Pre-A",
        logo: "/images/portfolio/ai-company-3-logo.svg",
        website: "https://ai-company-3.com",
      },
    // 移动应用类别 (3个项目)
    {
      name: "brave",
      category: "Mobile",
      description: "Secure, Fast & Private Web Browser with Adblocker", 
      stage: "Series A",
              logo: "/images/portfolio/brave-logo.svg",
      website: "https://brave.com/",
    },
    {
      name: "Kiavi",
      category: "Mobile",
      description: "Financing built for the speed of real estate investing",
      stage: "Series A",
              logo: "/images/portfolio/kiavi-logo.svg", 
      website: "https://mobile-company-2.com",
    },
    {
      name: "STRYD",
      category: "Mobile",
      description: "Stryd is a wearable device that clips onto your shoe, and communicates with your running watch or phone. Stryd helps you run the right intensity to balance your training, recovery, and performance by alerting you to slow down or speed up.",
      stage: "Pre-A",
              logo: "/images/portfolio/stryd-logo.svg",
      website: "https://www.stryd.com",
    },
    // 游戏类别 (2个项目)
    {
      name: "stori",
      category: "Mobile",
      description: "Stori is a fast‑growing Mexican fintech unicorn that provides near‑universal approval digital credit cards and high‑yield savings accounts to Mexico’s underserved consumers through a mobile-first platform, with over 3 million clients and recent funding exceeding US $212 million to fuel LatAm expansion",
      stage: "Series D", 
              logo: "/images/portfolio/stori-logo.svg",
      website: "https://www.storicard.com",
    },
          {
        name: "GAMING_COMPANY_2_NAME",
        category: "Gaming",
        description: "GAMING_COMPANY_2_DESCRIPTION",
        stage: "Seed",
        logo: "/images/portfolio/gaming-company-2-logo.svg",
        website: "https://gaming-company-2.com", 
      },
  ]

  const filteredCompanies =
    activeFilter === "All"
      ? portfolioCompanies
      : portfolioCompanies.filter((company) => company.category === activeFilter)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 使用VideoHero组件 */}
      <VideoHero
        videoSrc="/videos/hero-portfolio"
        posterSrc="/images/hero-portfolio.jpg"
        fallbackSrc="/images/hero-portfolio.jpg"
            alt="Mountain climber standing above the clouds representing achievement and success"
        overlayOpacity={0.5}
        enableParallax={true}
      >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          {...handlers}
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
      </VideoHero>

      {/* Filter Section */}
      <section className="py-16 bg-gray-900/50 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`inline-flex items-center font-inter font-light text-lg tracking-wide transition-all duration-300 px-8 py-3 ${
                  activeFilter === filter.key
                    ? "text-[#00A651] border-b border-[#00A651]"
                    : "text-gray-300 border-b border-transparent hover:border-gray-600"
                }`}
                {...handlers}
              >
                <Filter className="w-5 h-5 mr-3" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-24 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-3">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`silk-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.02, 0.12, 0.02],
              }}
              transition={{
                duration: Math.random() * 35 + 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-96 h-px bg-gradient-to-r from-transparent via-[#00A651] to-transparent transform rotate-45" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateX: -30 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <PortfolioCard3D {...handlers}>
                  <div className="p-10 h-full">
                  <motion.div className="absolute inset-0 bg-[#00A651]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center justify-between mb-8">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <motion.a
                      href={company.website}
                      className="w-14 h-14 bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#00A651] hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>

                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-[#00A651]/20 text-[#00A651] text-sm font-inter font-light tracking-wide">
                      {company.category}
                    </span>
                    <h3 className="font-playfair text-3xl font-light text-white mb-4 tracking-wide">{company.name}</h3>
                    <p className="font-inter text-gray-400 leading-relaxed mb-6 font-light tracking-wide text-lg">
                      {company.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-sm text-gray-500 font-light tracking-wide">{company.stage}</span>
                    </div>
                  </div>
                </div>
                </PortfolioCard3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 流动的丝带效果 */}
        <div className="absolute inset-0 opacity-6">
          {[...Array(12)].map((_, i) => (
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
                duration: Math.random() * 18 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 12,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10" {...handlers}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">
              {t.successTitle}
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              {t.successDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                metric: t.stat1Number,
                description: t.stat1Label,
                number: 250
              },
              {
                metric: t.stat2Number,
                description: t.stat2Label,
                number: 85
              },
              {
                metric: t.stat3Number,
                description: t.stat3Label,
                number: 15
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <StatCard3D {...handlers}>
                  <div className="p-12 text-center relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-[#00A651]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <AnimatedNumber
                      value={stat.number}
                      suffix={stat.metric.includes('%') ? '%' : stat.metric.includes('+') ? '+' : ''}
                      delay={index * 0.3 + 0.5}
                      className="font-playfair text-5xl md:text-7xl font-light text-[#00A651] mb-6 tracking-wide block"
                    />
                    
                  <p className="font-inter text-gray-400 font-light tracking-wide text-lg">{stat.description}</p>
                </div>
                </StatCard3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 