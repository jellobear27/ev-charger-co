'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileScarcityBanner from '@/components/MobileScarcityBanner'
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import confetti from 'canvas-confetti'
import Footer from '@/components/Footer'

function ApplyForm() {
  const { executeRecaptcha } = useGoogleReCaptcha()
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Check if reCAPTCHA is ready
    if (!executeRecaptcha) {
      console.log('reCAPTCHA not ready')
      setIsSubmitting(false)
      return
    }

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('submit_application')

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        
        // Trigger confetti celebration! 🎉
        // Big initial burst from center
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          zIndex: 9999
        })
        
        // Continuous celebration
        const duration = 3000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

        function randomInRange(min: number, max: number) {
          return Math.random() * (max - min) + min
        }

        const interval: NodeJS.Timeout = setInterval(function() {
          const timeLeft = animationEnd - Date.now()

          if (timeLeft <= 0) {
            return clearInterval(interval)
          }

          const particleCount = 50 * (timeLeft / duration)
          
          // Shoot confetti from two sides
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
          })
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
          })
        }, 250)
        
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      {/* Mobile Scarcity Banner */}
      <MobileScarcityBanner />
      
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo as clickable home button */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo-mobile.svg" alt="EV Charge Partners" className="h-8 sm:hidden" />
              <div className="hidden sm:flex items-center space-x-3">
                <img src="/logo.svg" alt="EV Charge Partners" className="h-10" />
                <div className="text-left">
                  <div className="text-lg font-bold text-white font-montserrat leading-tight">EV CHARGE</div>
                  <div className="text-lg font-bold text-white font-montserrat leading-tight text-center">PARTNERS</div>
                </div>
              </div>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden sm:flex space-x-4">
              <Link href="/about" className="text-white hover:text-green-400 transition-colors">About</Link>
              <Link href="/blog" className="text-white hover:text-green-400 transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Warm, Exciting Header */}
        <div className="text-center mb-8 sm:mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-9xl">🎉</div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                ✨ Almost There!
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-gelasio leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent animate-slideInLeft">
                You're Only 1 Step Away
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-gray-700">
                From Your New Income Stream! 💰
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join <span className="font-semibold text-green-600">hundreds of California business owners</span> earning extra recurring income right from their parking lots
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>100% Free Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Warm, Professional Form Container */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl p-6 sm:p-10 border-2 border-green-100 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-200/30 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
                >
                  <option value="" className="text-gray-500">Select business type</option>
                  <option value="restaurant" className="text-gray-900">Restaurant</option>
                  <option value="retail" className="text-gray-900">Retail Store</option>
                  <option value="office" className="text-gray-900">Office Building</option>
                  <option value="hotel" className="text-gray-900">Hotel/Motel</option>
                  <option value="shopping-center" className="text-gray-900">Shopping Center</option>
                  <option value="other" className="text-gray-900">Other</option>
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
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
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
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base bg-white text-gray-900"
                placeholder="Tell us about your foot traffic, proximity to freeways, customer demographics, or any other factors that make your location ideal for EV charging..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-green-800 font-bold text-xl mb-3">🎉 Congratulations! You're In! 🎉</div>
                <p className="text-green-700 text-base leading-relaxed">
                  <strong>Welcome to the EV Charge Partners family!</strong> We've sent a confirmation email to your inbox. 
                  Our team will reach out within 24-48 hours to get you started on your journey to passive income!
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <div className="text-blue-800 font-semibold mb-2">⚠️ We Need Your Help</div>
                <p className="text-blue-700 text-sm">
                  Something went wrong submitting your application. Please try again or reach out to us directly at janell@evchargepartners.com - we're here to help!
                </p>
              </div>
            )}

            <div className="text-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-10 py-4 sm:py-5 rounded-2xl text-xl sm:text-2xl font-bold transform transition-all duration-200 shadow-2xl ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 hover:shadow-green-500/50'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Your Application...
                  </span>
                ) : (
                  <>
                    🎯 Complete My Application
                    <span className="block text-sm font-normal mt-1">Join the EV Revolution Today!</span>
                  </>
                )}
              </button>
              <p className="text-sm text-gray-600 mt-4">
                🔒 <span className="font-semibold">Your information is secure</span> • We respect your privacy
              </p>
            </div>
          </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default function Apply() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
  
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ApplyForm />
    </GoogleReCaptchaProvider>
  )
} 