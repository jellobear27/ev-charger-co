import Link from 'next/link'
import ScrollingBanner from '@/components/ScrollingBanner'
import ScarcityNotification from '@/components/ScarcityNotification'
import ScarcityCounter from '@/components/ScarcityCounter'
import MobileScarcityBanner from '@/components/MobileScarcityBanner'
import ScrollZoomCard from '@/components/ScrollZoomCard'
import ConfettiEffect from '@/components/ConfettiEffect'
import Image from 'next/image'

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Mobile Scarcity Banner */}
      <MobileScarcityBanner />
      
      {/* Scarcity Components - Fixed positioning with proper spacing */}
      <ScarcityNotification />
      
      {/* Main Content Container with Rounded Edges */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-4 sm:mt-6 lg:mt-8 mx-4 sm:mx-6 lg:mx-8">
        {/* Scrolling Banner */}
        <ScrollingBanner />

        {/* Hero Section with Image */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/evcharge.jpeg"
              alt="EV chargers in a warm-lit California parking lot"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Navigation - Now overlaying the image */}
          <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/20">
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
                  <Link href="/apply" className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="text-white text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-montserrat">
                  $0 Out-of-Pocket Install
                  <span className="text-green-400 block font-poppins">Earn Monthly Passive Income</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed font-medium drop-shadow-lg font-montserrat">
                  Boost customer traffic with on-site EV charging. We pay for all equipment & installation. 
                  <span className="text-green-400 font-bold font-poppins">No maintenance, no hassle — we handle everything</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/apply">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-lg font-poppins bounce-hover elastic-button animate-pulse">
                      🚨 SECURE YOUR SPOT NOW - FREE! 🚨
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold border border-white/30 font-montserrat bounce-hover elastic-button">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Stats Card with Scroll Zoom Animation */}
              <ScrollZoomCard>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left font-montserrat">Why California Businesses Are Installing EV Chargers — At Zero Cost</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white font-poppins">$0</div>
                        <div className="text-gray-200 text-xs sm:text-sm font-montserrat">Installation Cost</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white font-poppins">We Handle It All</div>
                        <div className="text-gray-200 text-xs sm:text-sm font-montserrat">Engineering & Permitting</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white font-poppins">Monthly Passive</div>
                        <div className="text-gray-200 text-xs sm:text-sm font-montserrat">Income</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollZoomCard>
            </div>
          </div>
        </section>

        {/* EV Wave Section with Confetti */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
          <ConfettiEffect />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-montserrat">
                The EV Wave Is Here:
                <br />
                <span className="text-green-600">Ride the Momentum or Risk Being Left Behind</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-poppins">
                The electric vehicle revolution is accelerating faster than anyone predicted. Don't miss your chance to profit from this massive shift.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {/* Card 1: Exponential Growth */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">Exponential Growth</h3>
                </div>
                <p className="text-gray-700 text-center font-poppins leading-relaxed">
                  <span className="font-bold text-blue-600">Global EV sales topped 14 million in 2023</span>, up from just 3 million in 2020. This represents a <span className="font-bold text-blue-600">367% increase</span> in just 3 years.
                </p>
              </div>

              {/* Card 2: Infrastructure Demand Spike */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">Infrastructure Demand Spike</h3>
                </div>
                <p className="text-gray-700 text-center font-poppins leading-relaxed">
                  The U.S. needs <span className="font-bold text-red-600">1.2 million public chargers by 2025</span>; only <span className="font-bold text-red-600">170,000 exist today</span>. That's a <span className="font-bold text-red-600">600% gap</span> that needs to be filled.
                </p>
              </div>

              {/* Card 3: Consumer Expectations */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">Consumer Expectations</h3>
                </div>
                <p className="text-gray-700 text-center font-poppins leading-relaxed">
                  <span className="font-bold text-green-600">EV owners plan routes based on charging availability</span> — visibility matters. Businesses with chargers become <span className="font-bold text-green-600">destination points</span> for millions of EV drivers.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-montserrat">
                  🚀 Don't Get Left Behind - Join the EV Revolution Today!
                </h3>
                <p className="text-lg text-green-100 mb-6 font-poppins">
                  Secure your spot now and start earning from the fastest-growing market in automotive history
                </p>
                <Link href="/apply">
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-xl text-xl font-bold shadow-2xl font-poppins transform hover:scale-105 transition-all duration-300">
                    🎯 CLAIM YOUR SPOT - FREE INSTALLATION!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">
                ⚠️ LIMITED TIME OFFER - DON&apos;T MISS OUT! ⚠️
              </h2>
              <p className="text-lg sm:text-xl text-yellow-200 mb-6 font-poppins">
                <span className="font-bold">Only 47 spots remaining</span> in your area for FREE EV charger installation
              </p>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-300">$0</div>
                    <div className="text-sm text-white">Installation Cost</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-300">Free</div>
                    <div className="text-sm text-white">Setup & Install</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-300">47</div>
                    <div className="text-sm text-white">Spots Left</div>
                  </div>
                </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white mb-6 font-poppins">
                <span className="font-bold text-yellow-300">Limited spots available!</span> 
                <br />Apply now to secure your free installation
              </p>
              <Link href="/apply">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-red-800 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-xl sm:text-2xl font-bold shadow-2xl font-poppins bounce-hover elastic-button transform hover:scale-105 transition-all duration-300">
                  🚨 SECURE YOUR SPOT NOW - FREE! 🚨
                </button>
              </Link>
              <p className="text-sm text-yellow-200 mt-4">
                ⚡ <span className="font-bold">Limited spots available</span> • No credit card required • Instant approval
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">
              Ready to Start Earning Monthly Passive Income?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 font-poppins">
              Increase foot traffic without spending a dime — we handle everything
            </p>
            <Link href="/apply">
              <button className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-lg font-poppins bounce-hover elastic-button">
                Apply Now - It&apos;s Free
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
