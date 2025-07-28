"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"

interface ContactClientProps {
  translations: {
    heroTitle: string
    heroSubtitle1: string
    heroSubtitle2: string
    heroDescription: string
    formTitle: string
    formName: string
    formEmail: string
    formCompany: string
    formMessage: string
    formMessagePlaceholder: string
    formSubmit: string
    contactTitle: string
    singaporeOffice: string
    singaporeAddress: string
    hongkongOffice: string
    hongkongAddress: string
    emailLabel: string
    ctaTitle: string
    ctaSubtitle: string
    ctaDescription: string
    ctaFounders: string
    ctaInvestors: string
  }
}

export default function ContactClient({ translations: t }: ContactClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 背景图片 - 山脉 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mountains.jpg"
            alt="Majestic mountain range at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
        </div>

        {/* 丝线效果 */}
        <div className="absolute inset-0 z-5">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`thread-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#00A651]/10 to-transparent"
              style={{
                height: Math.random() * 700 + 500,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 0.2, 0],
                scaleY: [0, 1, 0],
                x: [0, Math.random() * 250 - 125],
              }}
              transition={{
                duration: Math.random() * 15 + 12,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 18,
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
              <span className="block text-[#00A651] italic font-light">{t.heroSubtitle1}</span>
              <span className="block font-light">{t.heroSubtitle2}</span>
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

      {/* Contact Section - 全屏 */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-24 relative overflow-hidden">
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
                scale: [1, 1.6, 1],
                opacity: [0.02, 0.1, 0.02],
              }}
              transition={{
                duration: Math.random() * 40 + 35,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="w-128 h-px bg-gradient-to-r from-transparent via-[#00A651] to-transparent transform rotate-45" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-white mb-12 tracking-wide">
                {t.formTitle}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter text-lg font-light text-gray-300 mb-3 tracking-wide"
                    >
                      {t.formName}
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-700 text-white font-inter font-light text-lg py-4 px-0 focus:border-[#00A651] transition-colors duration-300 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-inter text-lg font-light text-gray-300 mb-3 tracking-wide"
                    >
                      {t.formEmail}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-700 text-white font-inter font-light text-lg py-4 px-0 focus:border-[#00A651] transition-colors duration-300 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block font-inter text-lg font-light text-gray-300 mb-3 tracking-wide"
                  >
                    {t.formCompany}
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 text-white font-inter font-light text-lg py-4 px-0 focus:border-[#00A651] transition-colors duration-300 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-inter text-lg font-light text-gray-300 mb-3 tracking-wide"
                  >
                    {t.formMessage}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full bg-transparent border-b border-gray-700 text-white font-inter font-light text-lg py-4 px-0 focus:border-[#00A651] transition-colors duration-300 resize-none focus:ring-0 focus:outline-none"
                    placeholder={t.formMessagePlaceholder}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <CustomButton type="submit" variant="solid" className="w-full text-xl py-6">
                    {t.formSubmit} <Send className="ml-3 h-6 w-6" />
                  </CustomButton>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="relative">
                <Image
                  src="/images/TEST-office.jpg"
                  alt="TEST Team - Reaching new summits in venture capital"
                  width={700}
                  height={500}
                  className="shadow-2xl object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              </div>

              <div className="space-y-8">
                <h3 className="font-playfair text-3xl font-light text-white tracking-wide">{t.contactTitle}</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <MapPin className="h-8 w-8 text-[#00A651] mt-2" />
                    <div>
                      <h4 className="font-playfair text-xl font-light text-white mb-2 tracking-wide">
                        {t.singaporeOffice}
                      </h4>
                      <p className="font-inter text-gray-400 font-light tracking-wide text-lg">
                        {t.singaporeAddress.split('\\n').map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < t.singaporeAddress.split('\\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Phone className="h-8 w-8 text-[#00A651] mt-2" />
                    <div>
                      <h4 className="font-playfair text-xl font-light text-white mb-2 tracking-wide">
                        {t.hongkongOffice}
                      </h4>
                      <p className="font-inter text-gray-400 font-light tracking-wide text-lg">
                        {t.hongkongAddress.split('\\n').map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < t.hongkongAddress.split('\\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <Mail className="h-8 w-8 text-[#00A651] mt-2" />
                    <div>
                      <h4 className="font-playfair text-xl font-light text-white mb-2 tracking-wide">{t.emailLabel}</h4>
                      <p className="font-inter text-gray-400 font-light tracking-wide text-lg">
                        <a href="mailto:hello@TEST.vc" className="hover:text-white transition-colors">
                          hello@TEST.vc
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 优雅的云雾流动 */}
        <div className="absolute inset-0 opacity-4">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                x: [0, 300, -150, 0],
                y: [0, -150, 100, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.5, 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 50 + 45,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-112 h-56 bg-white rounded-full blur-2xl opacity-12" />
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CustomButton href="mailto:founders@TEST.vc" variant="solid" className="text-2xl py-6">
                  {t.ctaFounders}
                </CustomButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <CustomButton href="mailto:investors@TEST.vc" variant="ghost" className="text-2xl py-6">
                  {t.ctaInvestors}
                </CustomButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 