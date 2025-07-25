"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
  separator?: string
  delay?: number
}

export function AnimatedNumber({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0,
  separator = ",",
  delay = 0
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  
  const spring = useSpring(0, { 
    stiffness: 100, 
    damping: 30,
    restSpeed: 0.001
  })
  
  const display = useTransform(spring, (current) => {
    // 格式化数字
    const formatted = current.toFixed(decimals)
    const parts = formatted.split('.')
    
    // 添加千位分隔符
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    
    return prefix + parts.join('.') + suffix
  })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(value)
      }, delay * 1000)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, spring, value, delay])

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.span>{display}</motion.span>
    </motion.span>
  )
}

// 特殊的金融数字组件
export function FinancialNumber({
  value,
  currency = "$",
  scale = "M",
  ...props
}: Omit<AnimatedNumberProps, 'prefix' | 'suffix'> & {
  currency?: string
  scale?: string
}) {
  return (
    <AnimatedNumber
      {...props}
      value={value}
      prefix={currency}
      suffix={scale + "+"}
    />
  )
}

// 百分比数字组件
export function PercentageNumber({
  value,
  showSign = true,
  ...props
}: Omit<AnimatedNumberProps, 'suffix'> & {
  showSign?: boolean
}) {
  return (
    <AnimatedNumber
      {...props}
      value={value}
      suffix="%"
      prefix={showSign && value > 0 ? "+" : ""}
      decimals={1}
    />
  )
} 