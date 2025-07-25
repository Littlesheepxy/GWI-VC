"use client"

import { useState, useEffect, useCallback } from "react"

interface MousePosition {
  x: number
  y: number
}

interface UseMouseGlowOptions {
  enabled?: boolean
  glowSize?: number
  glowColor?: string
  intensity?: number
}

export function useMouseGlow({
  enabled = true,
  glowSize = 300,
  glowColor = "#00A651",
  intensity = 0.3
}: UseMouseGlowOptions = {}) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!enabled) return
    
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }, [enabled])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  useEffect(() => {
    if (!enabled) return

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove, enabled])

  const glowStyle = {
    position: 'fixed' as const,
    left: mousePosition.x - glowSize / 2,
    top: mousePosition.y - glowSize / 2,
    width: glowSize,
    height: glowSize,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${glowColor}${Math.round(intensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
    pointerEvents: 'none' as const,
    zIndex: 9999,
    opacity: isHovering ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
    mixBlendMode: 'screen' as const,
    willChange: 'transform, opacity'
  }

  return {
    mousePosition,
    glowStyle,
    isHovering,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  }
} 