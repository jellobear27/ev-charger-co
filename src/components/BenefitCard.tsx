'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface BenefitCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay: number
}

export default function BenefitCard({ title, description, icon, color, delay }: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Initial state - hidden and scaled down
    gsap.set(card, {
      opacity: 0,
      y: 50,
      scale: 0.8
    })

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Bouncing entrance animation
    tl.to(card, {
      opacity: 1,
      y: 0,
      scale: 1.1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: delay * 0.2
    })
    .to(card, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        y: -5,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center transform transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-${color}-200`}
      style={{ minHeight: '180px' }}
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}>
        <div className="w-8 h-8 sm:w-10 sm:h-10 text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{description}</p>
    </div>
  )
} 