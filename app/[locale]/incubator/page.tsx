"use client"

import { motion } from "framer-motion"
import { Rocket, Users, TrendingUp, Target, Lightbulb, Globe, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"

export default function IncubatorPage() {
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
              GWI
              <span className="block text-[#00A651] italic font-light">Foundry</span>
            </motion.h1>
            <motion.p
              className="font-playfair text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic tracking-wide max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              GWI Foundry is our incubation program designed for product-focused founders.
            </motion.p>
            <motion.p
              className="font-playfair text-xl text-gray-400 leading-relaxed font-light tracking-wide max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              We offer early capital, strategic guidance, and growth support in partnership with top marketing firms.
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
                  Empowering Product-Driven Founders
                </h2>
                <p className="font-playfair text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic tracking-wide mb-8">
                  GWI Foundry bridges the gap between innovative ideas and market success through our comprehensive
                  incubation program.
                </p>
                <p className="font-inter text-lg text-gray-400 leading-relaxed font-light tracking-wide">
                  We collaborate with top-tier marketing partners to provide founders with not just capital, but the
                  strategic expertise and resources needed to build breakthrough products and scale effectively.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Early-stage capital investment",
                  "Strategic product development guidance",
                  "Go-to-market expertise and support",
                  "Access to top marketing partnerships",
                  "Technical and business mentorship",
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
                  alt="GWI Foundry Workspace"
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
              What We Offer
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              Comprehensive support designed to accelerate your journey from concept to market success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Capital Investment",
                description:
                  "Early-stage funding to fuel product development and initial market validation, with follow-on support for growth.",
              },
              {
                icon: Users,
                title: "Strategic Mentorship",
                description:
                  "Access to experienced founders, industry experts, and technical advisors who guide product and business strategy.",
              },
              {
                icon: TrendingUp,
                title: "Growth Marketing",
                description:
                  "Partnership with top marketing firms to develop and execute go-to-market strategies that drive user acquisition.",
              },
              {
                icon: Lightbulb,
                title: "Product Development",
                description:
                  "Technical guidance and resources to build robust, scalable products that meet market demands.",
              },
              {
                icon: Globe,
                title: "Network Access",
                description:
                  "Connection to our extensive network of investors, partners, customers, and industry leaders.",
              },
              {
                icon: Rocket,
                title: "Scaling Support",
                description: "Operational guidance and resources to help startups scale efficiently and sustainably.",
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
              Join GWI Foundry
            </h2>
            <p className="font-playfair text-2xl text-gray-400 max-w-5xl mx-auto font-light italic tracking-wide">
              Ready to transform your innovative idea into a market-leading product? Apply to join our next cohort.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your application with product vision and team details",
              },
              {
                step: "02",
                title: "Review",
                description: "Our team evaluates your application and market potential",
              },
              {
                step: "03",
                title: "Interview",
                description: "Meet with our partners to discuss your vision and goals",
              },
              {
                step: "04",
                title: "Onboarding",
                description: "Join the program and begin your accelerated growth journey",
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
            <CustomButton href="/contact" variant="solid" className="text-2xl py-6">
              Apply to GWI Foundry <ArrowRight className="ml-4 h-8 w-8" />
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
              Building the
              <span className="block text-[#00A651] italic font-light">Next Generation</span>
            </motion.h2>
            <motion.p
              className="font-playfair text-2xl mb-16 max-w-5xl mx-auto text-gray-300 leading-relaxed font-light italic tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Join a community of innovative founders who are creating breakthrough products in AI, mobile, and gaming.
              Together, we're shaping the future of technology.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <CustomButton href="/contact" variant="solid" className="text-2xl py-6">
                Start Your Journey
              </CustomButton>
              <CustomButton href="/portfolio" variant="ghost" className="text-2xl py-6">
                View Success Stories
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
