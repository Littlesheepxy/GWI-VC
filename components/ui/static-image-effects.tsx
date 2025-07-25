"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion"
import Image from "next/image"

// 1. Ken Burns 效果组件
interface KenBurnsProps {
  src: string
  alt: string
  duration?: number
  scale?: number
  className?: string
}

export function KenBurnsImage({ 
  src, 
  alt, 
  duration = 20, 
  scale = 1.1,
  className = ""
}: KenBurnsProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{ 
          scale: scale,
          x: [0, -20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  )
}

// 2. 浮动动画组件
interface FloatingImageProps {
  src: string
  alt: string
  floatRange?: number
  duration?: number
  className?: string
}

export function FloatingImage({ 
  src, 
  alt, 
  floatRange = 10, 
  duration = 4,
  className = ""
}: FloatingImageProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [-floatRange, floatRange, -floatRange],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
      />
    </motion.div>
  )
}

// 3. 鼠标跟随3D倾斜
interface MouseFollow3DProps {
  src: string
  alt: string
  intensity?: number
  className?: string
}

export function MouseFollow3D({ 
  src, 
  alt, 
  intensity = 20,
  className = ""
}: MouseFollow3DProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    
    setMousePos({ x: x * intensity, y: y * intensity })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer ${className}`}
      style={{
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: mousePos.y,
        rotateY: mousePos.x
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
        style={{ transformStyle: "preserve-3d" }}
      />
    </motion.div>
  )
}

// 4. 光线扫过效果
interface SweepLightProps {
  src: string
  alt: string
  sweepDuration?: number
  pauseDuration?: number
  className?: string
}

export function SweepLightImage({ 
  src, 
  alt, 
  sweepDuration = 2, 
  pauseDuration = 3,
  className = ""
}: SweepLightProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image 
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: sweepDuration,
          repeat: Infinity,
          repeatDelay: pauseDuration,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// 5. 缩放脉冲效果
interface PulseScaleProps {
  src: string
  alt: string
  scaleRange?: number
  duration?: number
  className?: string
}

export function PulseScaleImage({ 
  src, 
  alt, 
  scaleRange = 0.05, 
  duration = 3,
  className = ""
}: PulseScaleProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        scale: [1, 1 + scaleRange, 1],
        filter: [
          "brightness(1) contrast(1)",
          "brightness(1.1) contrast(1.1)", 
          "brightness(1) contrast(1)"
        ]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
      />
    </motion.div>
  )
}

// 6. 色彩循环效果
interface ColorCycleProps {
  src: string
  alt: string
  duration?: number
  className?: string
}

export function ColorCycleImage({ 
  src, 
  alt, 
  duration = 5,
  className = ""
}: ColorCycleProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        filter: [
          "hue-rotate(0deg) saturate(1)",
          "hue-rotate(15deg) saturate(1.2)",
          "hue-rotate(0deg) saturate(1)"
        ]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
      />
    </motion.div>
  )
}

// 7. 财富闪烁效果（专门为创投基金设计）
interface WealthGlowProps {
  src: string
  alt: string
  glowColor?: string
  intensity?: number
  duration?: number
  className?: string
}

export function WealthGlowImage({ 
  src, 
  alt, 
  glowColor = "#00A651",
  intensity = 20,
  duration = 2,
  className = ""
}: WealthGlowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        filter: [
          `drop-shadow(0 0 0px ${glowColor})`,
          `drop-shadow(0 0 ${intensity}px ${glowColor})`,
          `drop-shadow(0 0 0px ${glowColor})`
        ]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
      />
    </motion.div>
  )
}

// 8. 粒子覆盖效果
interface ParticleOverlayProps {
  src: string
  alt: string
  particleCount?: number
  className?: string
}

export function ParticleOverlayImage({ 
  src, 
  alt, 
  particleCount = 15,
  className = ""
}: ParticleOverlayProps) {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }))

  return (
    <div className={`relative ${className}`}>
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
      />
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#00A651] rounded-full"
            style={{
              left: `${particle.startX}%`,
              top: `${particle.startY}%`
            }}
            animate={{
              x: [`0%`, `${particle.endX - particle.startX}%`],
              y: [`0%`, `${particle.endY - particle.startY}%`],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

// 9. 投资增长线条动画
interface GrowthLineProps {
  src: string
  alt: string
  lineColor?: string
  className?: string
}

export function GrowthLineImage({ 
  src, 
  alt, 
  lineColor = "#00A651",
  className = ""
}: GrowthLineProps) {
  return (
    <div className={`relative ${className}`}>
      <Image 
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="object-cover"
      />
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 50 250 Q 150 200 250 150 T 350 100"
          stroke={lineColor}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
        {/* 增长箭头 */}
        <motion.polygon
          points="340,90 350,100 340,110"
          fill={lineColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2
          }}
        />
      </svg>
    </div>
  )
}

// 10. 多层视差图片（针对视差滚动优化）
interface ParallaxLayersProps {
  backgroundSrc: string
  foregroundSrc?: string
  alt: string
  className?: string
}

export function ParallaxLayersImage({ 
  backgroundSrc, 
  foregroundSrc,
  alt,
  className = ""
}: ParallaxLayersProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.3 })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const backgroundX = useTransform(mouseX, [-100, 100], [-10, 10])
  const backgroundY = useTransform(mouseY, [-100, 100], [-5, 5])
  const foregroundX = useTransform(mouseX, [-100, 100], [-20, 20])
  const foregroundY = useTransform(mouseY, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    mouseX.set(x / 5)
    mouseY.set(y / 5)
  }

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      {/* 背景层 - 较慢移动 */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          x: backgroundX,
          y: backgroundY,
          scale: isInView ? 1.1 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <Image 
          src={backgroundSrc}
          alt={`${alt} background`}
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* 前景层 - 较快移动 */}
      {foregroundSrc && (
        <motion.div
          className="absolute inset-0"
          style={{ 
            x: foregroundX,
            y: foregroundY
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Image 
            src={foregroundSrc}
            alt={`${alt} foreground`}
            fill
            className="object-cover"
          />
        </motion.div>
      )}
    </div>
  )
} 