'use client'
import { useState, useEffect, useRef } from 'react'

interface ScrollZoomCardProps {
  children: React.ReactNode
}

export default function ScrollZoomCard({ children }: ScrollZoomCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrollY(scrollPosition)

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Trigger animation when card is 20% visible
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getZoomScale = () => {
    if (!isVisible) return 0.7
    
    const baseScale = 0.7
    const maxScale = 1.0
    const scrollProgress = Math.min(scrollY / 200, 1) // Normalize scroll over 200px (faster)
    
    return baseScale + (maxScale - baseScale) * scrollProgress
  }

  const getOpacity = () => {
    if (!isVisible) return 0
    return Math.min(scrollY / 150, 1) // Fade in over 150px of scroll (faster)
  }

      return (
      <div 
        ref={cardRef}
        className="transition-all duration-500 ease-out"
        style={{
          transform: `scale(${getZoomScale()})`,
          opacity: getOpacity(),
          transformOrigin: 'center center'
        }}
      >
        {children}
      </div>
    )
} 