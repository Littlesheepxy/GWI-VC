"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Technology", "Healthcare", "Fintech", "Sustainability", "Consumer"]

  const portfolioCompanies = [
    {
      name: "NeuralTech",
      category: "Technology",
      description: "AI-powered automation platform for enterprise workflows",
      stage: "Series B",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "BioGenesis",
      category: "Healthcare",
      description: "Gene therapy solutions for rare diseases",
      stage: "Series A",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "GreenEnergy",
      category: "Sustainability",
      description: "Next-generation solar panel technology",
      stage: "Series C",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "PayFlow",
      category: "Fintech",
      description: "Cross-border payment infrastructure for emerging markets",
      stage: "Series B",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "FoodTech",
      category: "Consumer",
      description: "Plant-based protein alternatives",
      stage: "Series A",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "MedAI",
      category: "Healthcare",
      description: "AI-powered diagnostic imaging platform",
      stage: "Series B",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "CyberShield",
      category: "Technology",
      description: "Advanced cybersecurity for cloud infrastructure",
      stage: "Series A",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "CleanWater",
      category: "Sustainability",
      description: "Water purification technology for developing regions",
      stage: "Seed",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
    {
      name: "CryptoVault",
      category: "Fintech",
      description: "Institutional cryptocurrency custody solutions",
      stage: "Series B",
      logo: "/placeholder.svg?height=100&width=100",
      website: "#",
    },
  ]

  const filteredCompanies =
    activeFilter === "All"
      ? portfolioCompanies
      : portfolioCompanies.filter((company) => company.category === activeFilter)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 背景图片 - 登山者 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-portfolio.jpg"
            alt="Mountain climber standing above the clouds representing achievement and success"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40" />
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
              Our
              <span className="block text-[#00A651] italic font-light">Portfolio</span>
            </motion.h1>
            <motion.p
              className="font-playfair text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic tracking-wide max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We're proud to partner with exceptional companies that are transforming industries and creating lasting
              impact across global markets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-900/50 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center font-inter font-light text-lg tracking-wide transition-all duration-300 px-8 py-3 ${
                  activeFilter === filter
                    ? "text-[#00A651] border-b border-[#00A651]"
                    : "text-gray-300 border-b border-transparent hover:border-gray-600"
                }`}
              >
                <Filter className="w-5 h-5 mr-3" />
                {filter}
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
                className="group cursor-pointer"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="bg-transparent p-10 border-b border-gray-800 hover:border-[#00A651] transition-all duration-500 relative overflow-hidden h-full">
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

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">
              Success Stories
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              Celebrating the achievements of our portfolio companies and the impact they're making in their respective
              industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                metric: "25x",
                description: "Average return multiple across successful exits",
              },
              {
                metric: "$50B+",
                description: "Combined valuation of portfolio companies",
              },
              {
                metric: "15",
                description: "IPOs and strategic acquisitions to date",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm p-12 border border-gray-800 hover:border-[#00A651] transition-all duration-500 text-center relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-[#00A651]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="font-playfair text-5xl md:text-7xl font-light text-[#00A651] mb-6 tracking-wide"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.metric}
                  </motion.div>
                  <p className="font-inter text-gray-400 font-light tracking-wide text-lg">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
