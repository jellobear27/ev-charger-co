'use client'
import { useState, useEffect } from 'react'

export default function ScarcityCounter() {
  const [spotsLeft, setSpotsLeft] = useState(47)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show counter after 2 seconds
    setTimeout(() => setIsVisible(true), 2000)

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    // Randomly decrease spots
    const spotsTimer = setInterval(() => {
      if (Math.random() < 0.15 && spotsLeft > 1) { // 15% chance every few seconds
        setSpotsLeft(prev => prev - 1)
      }
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(spotsTimer)
    }
  }, [spotsLeft])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 left-4 z-40 max-w-xs hidden md:block">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-2xl p-3 text-white animate-slideInLeft">
        <div className="text-center">
                      <div className="text-lg font-bold mb-2">⚠️ LIMITED TIME</div>
            
            <div className="bg-white/20 rounded-lg p-2 mb-2">
              <div className="text-xs mb-1">Spots Left:</div>
              <div className="text-2xl font-bold text-yellow-300">{spotsLeft}</div>
            </div>

            <div className="bg-white/20 rounded-lg p-2 mb-2">
              <div className="text-xs mb-1">Expires In:</div>
              <div className="text-lg font-bold text-yellow-300">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>

                      <div className="text-xs opacity-90">
              <div className="flex items-center justify-center mb-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                <span>Live</span>
              </div>
              <div className="text-yellow-200 font-medium text-xs">
                Free install won't last!
              </div>
            </div>
        </div>
      </div>
    </div>
  )
} 