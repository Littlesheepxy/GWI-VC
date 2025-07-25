"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  enableGlow?: boolean
  glowColor?: string
  tiltAngle?: number
  perspective?: number
  hoverScale?: number
  duration?: number
}

export function Card3D({
  children,
  className = "",
  intensity = 1,
  enableGlow = true,
  glowColor = "#00A651",
  tiltAngle = 15,
  perspective = 1000,
  hoverScale = 1.05,
  duration = 0.6
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // 鼠标位置状态
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // 平滑的弹簧动画
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)
  const scale = useSpring(1, springConfig)

  // 光晕效果
  const glowOpacity = useTransform(scale, [1, hoverScale], [0, 0.6])
  const glowBlur = useTransform(scale, [1, hoverScale], [0, 30])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(deltaX)
    mouseY.set(deltaY)

    // 3D倾斜效果
    rotateY.set(deltaX * tiltAngle * intensity)
    rotateX.set(-deltaY * tiltAngle * intensity)
  }, [intensity, tiltAngle, mouseX, mouseY, rotateX, rotateY])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    scale.set(hoverScale)
  }, [scale, hoverScale])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    mouseX.set(0)
    mouseY.set(0)
  }, [scale, rotateX, rotateY, mouseX, mouseY])

  return (
    <motion.div
      ref={cardRef}
      className={`relative cursor-pointer ${className}`}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ duration }}
    >
      {/* 主卡片 */}
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
      >
        {/* 背景光晕 */}
        {enableGlow && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-lg"
            style={{
              background: `radial-gradient(circle at center, ${glowColor}40 0%, transparent 70%)`,
              opacity: glowOpacity,
              filter: `blur(${glowBlur}px)`,
              scale: 1.1
            }}
          />
        )}

        {/* 内容 */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>

        {/* 反光效果 */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg opacity-0"
          style={{
            background: `linear-gradient(135deg, 
              transparent 0%, 
              rgba(255,255,255,0.1) 45%, 
              rgba(255,255,255,0.2) 50%, 
              rgba(255,255,255,0.1) 55%, 
              transparent 100%
            )`,
            opacity: isHovered ? 0.3 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

// 特殊的投资组合卡片
export function PortfolioCard3D({
  children,
  ...props
}: Omit<Card3DProps, 'glowColor'>) {
  return (
    <Card3D
      {...props}
      glowColor="#00A651"
      tiltAngle={12}
      hoverScale={1.03}
      className="bg-transparent backdrop-blur-sm border border-gray-800 hover:border-[#00A651] transition-all duration-500 rounded-lg"
    >
      {children}
    </Card3D>
  )
}

// 特殊的统计卡片
export function StatCard3D({
  children,
  ...props
}: Omit<Card3DProps, 'glowColor'>) {
  return (
    <Card3D
      {...props}
      glowColor="#00A651"
      tiltAngle={8}
      hoverScale={1.02}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#00A651] transition-all duration-500 rounded-lg"
    >
      {children}
    </Card3D>
  )
} 