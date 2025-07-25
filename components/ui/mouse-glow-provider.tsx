"use client"

import { createContext, useContext } from "react"
import { useMouseGlow } from "@/hooks/use-mouse-glow"

interface MouseGlowContextType {
  handlers: {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
}

const MouseGlowContext = createContext<MouseGlowContextType>({
  handlers: {
    onMouseEnter: () => {},
    onMouseLeave: () => {}
  }
})

export function useMouseGlowContext() {
  return useContext(MouseGlowContext)
}

interface MouseGlowProviderProps {
  children: React.ReactNode
  enabled?: boolean
}

export function MouseGlowProvider({ 
  children, 
  enabled = true 
}: MouseGlowProviderProps) {
  const { glowStyle, handlers } = useMouseGlow({
    enabled,
    glowSize: 400,
    glowColor: "#00A651",
    intensity: 0.15
  })

  return (
    <MouseGlowContext.Provider value={{ handlers }}>
      {children}
      {enabled && (
        <div
          style={glowStyle}
          className="pointer-events-none fixed z-50"
        />
      )}
    </MouseGlowContext.Provider>
  )
} 