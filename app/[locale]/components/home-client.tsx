"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
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
    impactTitle: string
    impactDescription: string
    ctaTitle: string
    ctaSubtitle: string
    ctaDescription: string
  }
}

export default function HomeClient({ translations: t }: HomeClientProps) {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              className="font-playfair text-6xl md:text-8xl font-light leading-tight tracking-wide text-white mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              {t.heroTitle}
              <span className="block text-[#00A651] italic font-light mt-4">{t.heroSubtitle}</span>
            </motion.h1>

            <motion.p
              className="font-playfair text-2xl md:text-3xl mb-16 max-w-5xl mx-auto leading-relaxed font-light text-gray-200 italic tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <CustomButton href="/contact" variant="solid" className="text-2xl py-6">
                {t.ctaContact} <ArrowRight className="ml-4 h-8 w-8" />
              </CustomButton>
              <CustomButton href="/incubator" variant="ghost" className="text-2xl py-6">
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

          {/* Focus Area Cards with Enhanced Animations */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "AI Applications",
                description: "Next-generation artificial intelligence solutions that enhance human capabilities and automate complex processes.",
                icon: "🤖",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Mobile Innovation",
                description: "Revolutionary mobile experiences that connect billions of users worldwide through intuitive interfaces.",
                icon: "📱",
                gradient: "from-green-500/20 to-teal-500/20"
              },
              {
                title: "Gaming Evolution",
                description: "Immersive gaming platforms that push the boundaries of entertainment and social interaction.",
                icon: "🎮",
                gradient: "from-red-500/20 to-orange-500/20"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${area.gradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 group`}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="font-playfair text-3xl font-light text-white mb-4 tracking-wide">
                  {area.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  {area.description}
                </p>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A651]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00A651]/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
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
            <h2 className="font-playfair text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">{t.impactTitle}</h2>
            <p className="font-playfair text-2xl text-gray-300 max-w-4xl mx-auto italic font-light tracking-wide">
              {t.impactDescription}
            </p>
          </motion.div>

          {/* Statistics with Animation */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: "50+", label: "Portfolio Companies", description: "Across AI, Mobile & Gaming" },
              { number: "$500M+", label: "Total Investment", description: "Supporting Innovation" },
              { number: "15+", label: "Successful Exits", description: "Creating Lasting Value" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="font-playfair text-6xl md:text-7xl font-light text-[#00A651] mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <h3 className="font-playfair text-2xl font-light text-white mb-2 tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-gray-400 font-light">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-full h-full opacity-10"
            style={{
              background: "radial-gradient(ellipse at center, #00A651 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
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
              <CustomButton href="/contact" variant="solid" className="text-2xl py-6">
                {t.ctaContact} <ArrowRight className="ml-4 h-8 w-8" />
              </CustomButton>
              <CustomButton href="/incubator" variant="ghost" className="text-2xl py-6">
                {t.ctaIncubator}
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}