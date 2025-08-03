'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileScarcityBanner from '@/components/MobileScarcityBanner'

export default function Apply() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    businessType: '',
    parkingSpaces: '',
    message: ''
  })

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
    }, 4000)

    return () => {
      clearInterval(timer)
      clearInterval(spotsTimer)
    }
  }, [spotsLeft])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your application! We\'ll be in touch soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Mobile Scarcity Banner */}
      <MobileScarcityBanner />
      
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src="/logo-mobile.svg" alt="EV Charge Partners" className="h-8 sm:hidden" />
              <div className="hidden sm:flex items-center space-x-3">
                <img src="/logo.svg" alt="EV Charge Partners" className="h-10" />
                <div className="text-left">
                  <div className="text-lg font-bold text-white font-montserrat">EV CHARGE PARTNERS</div>
                  <div className="text-sm text-gray-200 font-poppins">of California</div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex space-x-4">
              <Link href="/" className="text-white hover:text-green-400 transition-colors">Home</Link>
              <Link href="/about" className="text-white hover:text-green-400 transition-colors">About</Link>
              <Link href="/apply" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Apply Now</Link>
            </div>
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <Link href="/" className="text-white hover:text-green-400 transition-colors text-sm">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 mb-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-gelasio">
            ⚠️ LIMITED TIME OFFER - ACT FAST! ⚠️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">{spotsLeft}</div>
              <div className="text-sm">Spots Left</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">Free</div>
              <div className="text-sm">Installation</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">$0</div>
              <div className="text-sm">Setup Cost</div>
            </div>
          </div>
          <p className="text-lg font-medium">
            <span className="text-yellow-300 font-bold">Limited spots available!</span> 
            <br />Complete your application now to secure your free installation
          </p>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-gelasio">
            Apply to Join EV Charge Partners
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Join hundreds of California businesses earning passive income from EV charging
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="123 Main Street"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="Los Angeles"
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="90210"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                >
                  <option value="">Select business type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="retail">Retail Store</option>
                  <option value="office">Office Building</option>
                  <option value="hotel">Hotel/Motel</option>
                  <option value="shopping-center">Shopping Center</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="parkingSpaces" className="block text-sm font-medium text-gray-700 mb-2">
                  Available Parking Spaces *
                </label>
                <input
                  type="number"
                  id="parkingSpaces"
                  name="parkingSpaces"
                  required
                  value={formData.parkingSpaces}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                  placeholder="10"
                  min="1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                placeholder="Tell us about your business and why you'd like to host an EV charger..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg animate-pulse"
              >
                🚨 SECURE MY SPOT NOW - FREE! 🚨
              </button>
              <p className="text-sm text-gray-500 mt-2">
                ⚡ <span className="font-bold">Limited spots available</span> • Only {spotsLeft} spots left
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 