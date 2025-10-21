'use client'
import { useState, useEffect, useRef } from 'react'

interface ScrollZoomCardProps {
  children: React.ReactNode
}

export default function ScrollZoomCard({ children }: ScrollZoomCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set visible immediately on mount
    setIsVisible(true)

    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Keep animation active when card is visible
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      style={{
        transformOrigin: 'center center'
      }}
    >
      {children}
    </div>
  )
} 