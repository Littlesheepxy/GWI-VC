"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Managing Partner",
      bio: "Former Goldman Sachs MD with 15+ years in tech investments. Led Series A rounds in 3 unicorns.",
      image: "/placeholder.svg?height=500&width=400",
      linkedin: "#",
      twitter: "#",
      email: "sarah@gwi.vc",
    },
    {
      name: "Michael Rodriguez",
      role: "General Partner",
      bio: "Ex-McKinsey partner and serial entrepreneur. Founded 2 successful startups before joining GWI.",
      image: "/placeholder.svg?height=500&width=400",
      linkedin: "#",
      twitter: "#",
      email: "michael@gwi.vc",
    },
    {
      name: "Dr. Priya Patel",
      role: "Partner, Healthcare",
      bio: "Former Chief Medical Officer at leading biotech. PhD in Molecular Biology from Stanford.",
      image: "/placeholder.svg?height=500&width=400",
      linkedin: "#",
      twitter: "#",
      email: "priya@gwi.vc",
    },
    {
      name: "James Thompson",
      role: "Partner, Technology",
      bio: "Former CTO at major tech companies. Expert in AI, blockchain, and enterprise software.",
      image: "/placeholder.svg?height=500&width=400",
      linkedin: "#",
      twitter: "#",
      email: "james@gwi.vc",
    },
    {
      name: "Lisa Wang",
      role: "Principal",
      bio: "Former product manager at Google. MBA from Wharton. Focuses on consumer tech and fintech.",
      image: "/placeholder.svg?height=500&width=400",
      linkedin: "#",
      twitter: "#",
      email: "lisa@gwi.vc",
    },
    {
      name: "David Kim",
      role: "Principal",
      bio: "Investment banking background at JP Morgan. Specializes in growth-stage investments.",
      image: "/placeholder.svg?height=500&width=400",
      linkedin: "#",
      twitter: "#",
      email: "david@gwi.vc",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* 背景动效 - 云彩飘动 */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-6"
              initial={{
                x: -200,
                y: Math.random() * 800,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: 1400,
                y: Math.random() * 800,
              }}
              transition={{
                duration: Math.random() * 35 + 30,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 15,
                ease: "linear",
              }}
            >
              <div className="w-40 h-20 bg-white/8 rounded-full blur-xl transform rotate-12" />
              <div className="w-32 h-16 bg-white/6 rounded-full blur-lg transform -rotate-6 -mt-10 ml-10" />
            </motion.div>
          ))}
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
              Meet Our
              <span className="block text-[#00A651] italic font-light">Team</span>
            </motion.h1>
            <motion.p
              className="font-playfair text-2xl md:text-3xl text-gray-300 leading-relaxed font-light italic tracking-wide max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              World-class investors and operators with deep expertise across technology, healthcare, and emerging
              markets. United by a shared passion for building the future.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid - 全屏 */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="bg-transparent overflow-hidden border-b border-gray-800 hover:border-[#00A651] transition-all duration-500 relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Social Links Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.a
                        href={member.linkedin}
                        className="w-12 h-12 bg-white/90 flex items-center justify-center text-gray-900 hover:bg-[#00A651] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={20} />
                      </motion.a>
                      <motion.a
                        href={member.twitter}
                        className="w-12 h-12 bg-white/90 flex items-center justify-center text-gray-900 hover:bg-[#00A651] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter size={20} />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="w-12 h-12 bg-white/90 flex items-center justify-center text-gray-900 hover:bg-[#00A651] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-playfair text-3xl font-light text-white mb-2 tracking-wide">{member.name}</h3>
                    <p className="text-[#00A651] font-inter font-light text-lg mb-6 tracking-wide">{member.role}</p>
                    <p className="font-inter text-gray-400 leading-relaxed font-light tracking-wide">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section - 全屏 */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
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
              Join Our
              <span className="block text-[#00A651] italic font-light">Team</span>
            </motion.h2>
            <motion.p
              className="font-playfair text-2xl mb-16 max-w-5xl mx-auto text-gray-300 leading-relaxed font-light italic tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We're always looking for exceptional talent to join our mission of building the future. If you're
              passionate about innovation and want to work with world-class entrepreneurs, we'd love to hear from you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <CustomButton href="mailto:careers@gwi.vc" variant="solid" className="text-2xl py-6">
                View Open Positions
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
