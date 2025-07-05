'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page entrance animation with elastic bounce
      gsap.fromTo(pageRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          delay: 0.2
        }
      )

      // Smooth scroll animations for sections
      const sections = pageRef.current?.querySelectorAll('section, .animate-on-scroll')
      sections?.forEach((section, index) => {
        gsap.fromTo(section,
          {
            y: 80,
            opacity: 0,
            rotationX: 10,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Bouncy scroll indicator
      const scrollIndicator = document.createElement('div')
      scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #16a34a, #22c55e);
        transform: scaleX(0);
        transform-origin: left;
        z-index: 9999;
        pointer-events: none;
      `
      document.body.appendChild(scrollIndicator)

      // Animate scroll indicator based on scroll position
      const updateScrollIndicator = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.body.scrollHeight - window.innerHeight
        const scrollPercent = scrollTop / docHeight
        
        gsap.to(scrollIndicator, {
          scaleX: scrollPercent,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      window.addEventListener('scroll', updateScrollIndicator)

      // Smooth scroll behavior using native smooth scrolling
      const smoothScroll = (e: WheelEvent) => {
        e.preventDefault()
        const delta = e.deltaY
        const scrollSpeed = 1.5
        
        // Use native smooth scrolling instead of GSAP scrollTo
        window.scrollBy({
          top: delta * scrollSpeed,
          behavior: 'smooth'
        })
      }

      // Add smooth scroll on wheel events
      document.addEventListener('wheel', smoothScroll, { passive: false })

      return () => {
        document.removeEventListener('wheel', smoothScroll)
        window.removeEventListener('scroll', updateScrollIndicator)
        if (document.body.contains(scrollIndicator)) {
          document.body.removeChild(scrollIndicator)
        }
      }
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  )
} 