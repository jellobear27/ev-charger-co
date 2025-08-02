'use client'
import { useState, useEffect } from 'react'

export default function MobileScarcityBanner() {
  const [spotsLeft, setSpotsLeft] = useState(47)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
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
      if (Math.random() < 0.1 && spotsLeft > 1) {
        setSpotsLeft(prev => prev - 1)
      }
    }, 5000)

    return () => {
      clearInterval(timer)
      clearInterval(spotsTimer)
    }
  }, [spotsLeft])

  return (
    <div className="md:hidden bg-gradient-to-r from-red-600 to-orange-600 text-white p-3 text-center">
      <div className="flex items-center justify-center space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-300 font-bold">{spotsLeft}</span>
          <span>spots left</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-300 font-bold">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span>left</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live</span>
        </div>
      </div>
    </div>
  )
} 