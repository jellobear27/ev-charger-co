'use client'
import { useState, useEffect } from 'react'

export default function ScrollingBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 59,
    seconds: 59
  })

  const [spotsLeft, setSpotsLeft] = useState(47)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Reset timer when it reaches zero
          return { hours: 7, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Randomly decrease spots left occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1 && spotsLeft > 1) { // 10% chance every few seconds
        setSpotsLeft(prev => prev - 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [spotsLeft])

  return (
    <div className="bg-gradient-to-r from-purple-700 via-blue-700 to-purple-700 text-white py-4 overflow-hidden whitespace-nowrap relative rounded-t-3xl">
      {/* Calming overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse rounded-t-3xl"></div>
      
      <div className="animate-scroll flex items-center relative z-10">
        {/* First set of messages */}
        <span className="text-lg font-bold mx-8 flex items-center">
          ✨ <span className="text-emerald-300 mx-2">JOIN US:</span> {spotsLeft} spots available in your area
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💚 <span className="text-emerald-300 mx-2">FREE INSTALLATION AVAILABLE</span> 
          <span className="text-emerald-300 mx-2">{spotsLeft} businesses can qualify today</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💰 <span className="text-emerald-300 mx-2">$0 SETUP COST</span> 
          <span className="text-emerald-300 mx-2">Start earning passive income</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          ⚡ <span className="text-emerald-300 mx-2">WELCOME:</span> {spotsLeft} spots available for free EV charger installation
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          🌟 <span className="text-emerald-300 mx-2">GREAT OPPORTUNITY:</span> Free installation available now 
        </span>
        {/* Second set for seamless loop */}
        <span className="text-lg font-bold mx-8 flex items-center">
          ✨ <span className="text-emerald-300 mx-2">JOIN US:</span> {spotsLeft} spots available in your area
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💚 <span className="text-emerald-300 mx-2">FREE INSTALLATION AVAILABLE</span> 
          <span className="text-emerald-300 mx-2">{spotsLeft} businesses can qualify today</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💰 <span className="text-emerald-300 mx-2">$0 SETUP COST</span> 
          <span className="text-emerald-300 mx-2">Start earning passive income</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          ⚡ <span className="text-emerald-300 mx-2">WELCOME:</span> {spotsLeft} spots available for free EV charger installation
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          🌟 <span className="text-emerald-300 mx-2">GREAT OPPORTUNITY:</span> Free installation available now 
        </span>
        {/* Third set for extra smoothness */}
        <span className="text-lg font-bold mx-8 flex items-center">
          ✨ <span className="text-emerald-300 mx-2">JOIN US:</span> {spotsLeft} spots available in your area
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💚 <span className="text-emerald-300 mx-2">FREE INSTALLATION AVAILABLE</span> 
          <span className="text-emerald-300 mx-2">{spotsLeft} businesses can qualify today</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💰 <span className="text-emerald-300 mx-2">$0 SETUP COST</span> 
          <span className="text-emerald-300 mx-2">Start earning passive income</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          ⚡ <span className="text-emerald-300 mx-2">WELCOME:</span> {spotsLeft} spots available for free EV charger installation
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          🌟 <span className="text-emerald-300 mx-2">GREAT OPPORTUNITY:</span> Free installation available now 
        </span>
        {/* Fourth set for perfect seamless loop */}
        <span className="text-lg font-bold mx-8 flex items-center">
          ✨ <span className="text-emerald-300 mx-2">JOIN US:</span> {spotsLeft} spots available in your area
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💚 <span className="text-emerald-300 mx-2">FREE INSTALLATION AVAILABLE</span> 
          <span className="text-emerald-300 mx-2">{spotsLeft} businesses can qualify today</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          💰 <span className="text-emerald-300 mx-2">$0 SETUP COST</span> 
          <span className="text-emerald-300 mx-2">Start earning passive income</span>
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          ⚡ <span className="text-emerald-300 mx-2">WELCOME:</span> {spotsLeft} spots available for free EV charger installation
        </span>
        <span className="text-lg font-bold mx-8 flex items-center">
          🌟 <span className="text-emerald-300 mx-2">GREAT OPPORTUNITY:</span> Free installation available now 
        </span>
      </div>
    </div>
  )
} 