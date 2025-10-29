'use client'
import { useState, useEffect } from 'react'

interface Notification {
  id: number
  message: string
  time: string
  location: string
}

export default function ScarcityNotification() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const locations = [
    'Los Angeles, CA', 'San Francisco, CA', 'San Diego, CA', 'Sacramento, CA',
    'Fresno, CA', 'Long Beach, CA', 'Oakland, CA', 'Bakersfield, CA',
    'Anaheim, CA', 'Santa Ana, CA', 'Riverside, CA', 'Stockton, CA'
  ]

  const notificationMessages = [
    'just applied for free EV charger installation',
    'qualified for $0 setup cost',
    'joined the program',
    'exploring EV charging opportunities',
    'scheduled consultation call',
    'qualified for free installation'
  ]

  useEffect(() => {
    // Show notification after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // Add new notifications every 12-18 seconds (less aggressive)
    const notificationTimer = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        message: notificationMessages[Math.floor(Math.random() * notificationMessages.length)],
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
        location: locations[Math.floor(Math.random() * locations.length)]
      }

      setNotifications(prev => {
        const updated = [newNotification, ...prev.slice(0, 4)] // Keep only 5 notifications
        return updated
      })
    }, Math.random() * 6000 + 12000) // Random interval between 12-18 seconds

    return () => {
      clearTimeout(showTimer)
      clearInterval(notificationTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs hidden md:block">
      <div className="bg-white rounded-lg shadow-2xl border-l-4 border-blue-500 p-3 animate-slideIn">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-1"></div>
            <span className="text-xs font-semibold text-gray-800">Recent Activity</span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="text-xs animate-fadeIn">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">
                  <span className="font-medium text-gray-800">{notification.location}</span>
                  {' '}{notification.message}
                </span>
              </div>
              <div className="text-xs text-gray-400 ml-2">{notification.time}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-2 pt-1 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            ⚡ <span className="font-medium text-blue-600">Accepting applications</span> statewide
          </div>
        </div>
      </div>
    </div>
  )
} 