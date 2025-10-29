'use client'
import { useState, useEffect } from 'react'

export default function ScarcityCounter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 2 seconds
    setTimeout(() => setIsVisible(true), 2000)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 left-4 z-40 max-w-xs hidden md:block">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-2xl p-4 text-white animate-slideInLeft">
        <div className="text-center">
          <div className="text-lg font-bold mb-3">✨ Why Choose Us</div>
            
          <div className="space-y-3 text-left">
            <div className="bg-white/20 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-semibold text-sm">Trusted Partner</div>
                  <div className="text-xs opacity-90">CA-certified installers</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💼</span>
                <div>
                  <div className="font-semibold text-sm">Business First</div>
                  <div className="text-xs opacity-90">No upfront costs</div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-semibold text-sm">Quick Setup</div>
                  <div className="text-xs opacity-90">Simple qualification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 