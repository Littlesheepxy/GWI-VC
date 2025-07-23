"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CustomButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "solid" | "ghost" | "text"
  className?: string
  type?: "button" | "submit" | "reset"
}

export function CustomButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
}: CustomButtonProps) {
  const baseStyles =
    "font-inter font-light inline-flex items-center justify-center text-lg tracking-wide transition-all duration-300"

  const variantStyles = {
    solid: "bg-[#00A651] text-white hover:bg-[#00A651]/90 px-12 py-4",
    ghost: "bg-transparent border border-white/20 text-white hover:bg-white/5 px-12 py-4",
    text: "bg-transparent text-white hover:text-[#00A651] border-b border-transparent hover:border-[#00A651] pb-1 px-2",
  }

  const buttonContent = (
    <motion.span
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ y: variant === "text" ? 0 : -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return (
    <button type={type} onClick={onClick}>
      {buttonContent}
    </button>
  )
}
