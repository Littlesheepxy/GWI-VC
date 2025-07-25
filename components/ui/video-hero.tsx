"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface VideoHeroProps {
  videoSrc?: string
  posterSrc: string
  fallbackSrc: string
  alt: string
  className?: string
  overlayOpacity?: number
  enableParallax?: boolean
  children: React.ReactNode
}

export function VideoHero({
  videoSrc,
  posterSrc,
  fallbackSrc,
  alt,
  className = "",
  overlayOpacity = 0.4,
  enableParallax = true,
  children
}: VideoHeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // 视差效果
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  // 检测客户端和设备性能
  useEffect(() => {
    setIsClient(true)
    
    const checkDeviceCapability = () => {
      const isLowEnd = 
        navigator.hardwareConcurrency < 4 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsLowEndDevice(isLowEnd)
    }
    
    checkDeviceCapability()
  }, [])

  // 视频加载处理
  useEffect(() => {
    if (!videoSrc || isLowEndDevice) return

    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setVideoLoaded(true)
      video.play().catch(() => {
        setVideoError(true)
      })
    }

    const handleError = () => {
      setVideoError(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [videoSrc, isLowEndDevice])

  // 决定使用视频还是图片
  const shouldUseVideo = videoSrc && !isLowEndDevice && !videoError

  return (
    <section 
      ref={containerRef}
      className={`h-screen bg-black flex items-center justify-center relative overflow-hidden ${className}`}
    >
      {/* 背景媒体层 */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={enableParallax ? { y: backgroundY } : {}}
      >
        {shouldUseVideo ? (
          <>
            {/* 视频背景 */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ willChange: 'transform' }}
            >
              <source src={`${videoSrc}.webm`} type="video/webm" />
              <source src={`${videoSrc}.mp4`} type="video/mp4" />
            </video>
            
            {/* Fallback 图片 */}
            <Image
              src={fallbackSrc}
              alt={alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
          </>
        ) : (
          /* 静态图片 */
          <Image
            src={fallbackSrc}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        )}

        {/* 渐变遮罩层 */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-black"
          style={{ 
            opacity: overlayOpacity,
            ...(enableParallax ? { y: overlayY } : {})
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
          style={enableParallax ? { y: overlayY } : {}}
        />
      </motion.div>

      {/* 内容层 */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {children}
      </div>

      {/* 装饰性粒子效果 - 仅在高性能设备上显示 */}
      {!isLowEndDevice && isClient && (
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00A651] rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight - 100
                ]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
} 