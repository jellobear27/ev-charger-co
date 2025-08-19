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
    locationBenefits: '',
    photoUpload: null as File | null
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          zipCode: '',
          businessType: '',
          parkingSpaces: '',
          locationBenefits: '',
          photoUpload: null
        })
      } else {
        setSubmitStatus('error')
        console.error('Submission error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        photoUpload: e.target.files[0]
      })
    }
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
            🕒 Why Now?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">{spotsLeft}</div>
              <div className="text-sm">Spots Left</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">180kW+</div>
              <div className="text-sm">DC Fast Chargers</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">Free</div>
              <div className="text-sm">Installation</div>
            </div>
          </div>
          <p className="text-lg font-medium">
            <span className="text-yellow-300 font-bold">We're selecting only 47 new host sites</span> 
            <br />for our next deployment tranche — after that, this round closes
          </p>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-gelasio">
            Check If Your Property Qualifies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Get 180kW+ DC fast chargers installed at your property — completely free
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
                  min="4"
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 4 spaces required</p>
              </div>
            </div>

            <div>
              <label htmlFor="photoUpload" className="block text-sm font-medium text-gray-700 mb-2">
                Property Photo (Optional)
              </label>
              <input
                type="file"
                id="photoUpload"
                name="photoUpload"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
              />
              <p className="text-xs text-gray-500 mt-1">Upload a photo of your parking area or property</p>
            </div>

            <div>
              <label htmlFor="locationBenefits" className="block text-sm font-medium text-gray-700 mb-2">
                Why Your Location Matters
              </label>
              <textarea
                id="locationBenefits"
                name="locationBenefits"
                rows={4}
                value={formData.locationBenefits}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50"
                placeholder="Tell us about your foot traffic, proximity to freeways, customer demographics, or any other factors that make your location ideal for EV charging..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-green-800 font-semibold mb-2">✅ Application Submitted Successfully!</div>
                <p className="text-green-700 text-sm">
                  Thank you for your application! We've sent you a confirmation email and will be in touch within 24-48 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div className="text-red-800 font-semibold mb-2">❌ Submission Failed</div>
                <p className="text-red-700 text-sm">
                  There was an error submitting your application. Please try again or contact us directly at janell@evchargepartners.com
                </p>
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold transform transition-all duration-200 shadow-lg ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700 hover:scale-105 animate-pulse'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  '🚨 SECURE MY SPOT NOW - FREE! 🚨'
                )}
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