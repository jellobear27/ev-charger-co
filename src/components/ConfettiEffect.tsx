'use client'
import { useState, useEffect } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  speed: number
  opacity: number
  size: number
  zIndex: number
}

export default function ConfettiEffect() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isActive) return

    const createConfetti = () => {
      const newPiece: ConfettiPiece = {
        id: Date.now() + Math.random(),
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: -50,
        speed: 2 + Math.random() * 1,
        opacity: 0.7 + Math.random() * 0.3,
        size: 40 + Math.random() * 10,
        zIndex: Math.random() > 0.5 ? 10 : 100
      }

      setConfetti(prev => [...prev, newPiece])
    }

    const interval = setInterval(createConfetti, 300)

    const animate = () => {
      setConfetti(prev => 
        prev
          .map(piece => ({
            ...piece,
            y: piece.y + piece.speed
          }))
          .filter(piece => piece.y < (typeof window !== 'undefined' ? window.innerHeight : 800) + 100)
      )
    }

    const animationInterval = setInterval(animate, 50)

    return () => {
      clearInterval(interval)
      clearInterval(animationInterval)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            opacity: piece.opacity,
            zIndex: piece.zIndex
          }}
        >
          <div 
            style={{
              width: `${piece.size}px`,
              height: `${piece.size * 0.35}px`,
              background: 'linear-gradient(135deg, #6B8E23 0%, #7A9A2E 25%, #8BA446 50%, #7A9A2E 75%, #6B8E23 100%)',
              borderRadius: '2px',
              border: '0.5px solid #556B2F',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              position: 'relative'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#FFFFFF',
                fontSize: `${Math.max(6, piece.size * 0.25)}px`,
                fontWeight: 'bold',
                textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.4)',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '0.5px'
              }}
            >
              $
            </div>
            
            <div 
              style={{
                position: 'absolute',
                top: '1px',
                left: '1px',
                width: '2px',
                height: '2px',
                background: 'rgba(255,255,255,0.6)',
                borderRadius: '50%'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                bottom: '1px',
                right: '1px',
                width: '2px',
                height: '2px',
                background: 'rgba(255,255,255,0.6)',
                borderRadius: '50%'
              }}
            />
            
            <div 
              style={{
                position: 'absolute',
                top: '30%',
                left: '0',
                width: '100%',
                height: '0.5px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                bottom: '30%',
                left: '0',
                width: '100%',
                height: '0.5px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
} 