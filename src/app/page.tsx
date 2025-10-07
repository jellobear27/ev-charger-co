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
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-0.5 sm:mt-1 lg:mt-1.5 mx-0.5 sm:mx-1 lg:mx-1.5">
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
                  <Link href="/blog" className="text-white hover:text-green-400 transition-colors">Blog</Link>
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-gelasio">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] font-extrabold">California</span> Businesses: Get <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] font-extrabold">Free</span> EV Fast Chargers Installed — No Cost to You
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed font-medium drop-shadow-lg font-montserrat">
                  We're rolling out our next wave of EV charger installations across California. If your property has strong foot traffic or freeway visibility, you could qualify to host high-speed chargers — <span className="text-green-400 font-bold font-poppins">completely free</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/apply">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-lg font-poppins bounce-hover elastic-button animate-pulse">
                      🚨 SECURE YOUR SPOT NOW! 🚨
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
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left font-montserrat">⚡ What You Get</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white font-poppins">180kW+ Fast Chargers</div>
                        <div className="text-gray-200 text-xs sm:text-sm font-montserrat">DC Fast Charging (Level 3)</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white font-poppins">100% Free Installation</div>
                        <div className="text-gray-200 text-xs sm:text-sm font-montserrat">Zero Upfront Costs</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-white font-poppins">Monthly Revenue Share</div>
                        <div className="text-gray-200 text-xs sm:text-sm font-montserrat">No Investment Required</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollZoomCard>
            </div>
          </div>
        </section>

        {/* EV Wave Section with Confetti */}
        <section className="py-12 sm:py-16 lg:py-20 bg-orange-50 relative overflow-hidden">
          <ConfettiEffect />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-gelasio">
                The EV Wave Is Here:
                <br />
                <span className="text-green-600">Ride the Momentum or Risk Being Left Behind</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-poppins">
                The electric vehicle revolution is accelerating faster than anyone predicted. Don't miss your chance to profit from this massive shift.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {/* Card 1: Exponential Growth - Green Theme */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-green-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:border-green-400">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-gelasio">Exponential Growth</h3>
                </div>
                              <p className="text-green-900 text-center font-poppins leading-relaxed">
                <span className="font-bold text-green-600">California has over 1.7 million EVs</span> — more than 37% of all EVs in the U.S. The state aims to install <span className="font-bold text-green-600">250,000 public chargers by 2026</span>.
              </p>
              </div>

              {/* Card 2: Infrastructure Demand Spike - Red Theme */}
              <div className="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-red-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:border-red-400">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2 font-gelasio">Infrastructure Demand Spike</h3>
                </div>
                <p className="text-red-900 text-center font-poppins leading-relaxed">
                  <span className="font-bold text-red-600">Demand is outpacing supply</span> — fast chargers are in highest demand. California needs <span className="font-bold text-red-600">thousands more DC fast chargers</span> to meet growing EV adoption.
                </p>
              </div>

              {/* Card 3: Consumer Expectations - Blue Theme */}
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:border-blue-400">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2 font-gelasio">Consumer Expectations</h3>
                </div>
                <p className="text-blue-900 text-center font-poppins leading-relaxed">
                  <span className="font-bold text-blue-600">EV owners plan routes based on charging availability</span> — visibility matters. Businesses with chargers become <span className="font-bold text-blue-600">destination points</span> for millions of EV drivers.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-gelasio">
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

                {/* Ideal Locations Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-gelasio">
                📍 Ideal Locations
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-poppins">
                We're looking for business owners with high foot traffic and strategic locations across California
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center font-gelasio">High Foot Traffic</h3>
                <p className="text-gray-600 text-center text-sm font-poppins">Gyms, grocery stores, retail, restaurants, etc.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center font-gelasio">Freeway Visibility</h3>
                <p className="text-gray-600 text-center text-sm font-poppins">Near major freeways or travel corridors</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center font-gelasio">Parking Available</h3>
                <p className="text-gray-600 text-center text-sm font-poppins">Minimum 4 parking spaces required</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center font-gelasio">Statewide Coverage</h3>
                <p className="text-gray-600 text-center text-sm font-poppins">From LA to Sacramento to San Diego</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-gelasio">
                🕒 Why Now?
              </h2>
              <p className="text-lg sm:text-xl text-yellow-200 mb-6 font-poppins">
                We're selecting only <span className="font-bold">47 new host sites</span> for our next deployment tranche — after that, this round closes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">180kW+</div>
                  <div className="text-sm text-white">DC Fast Chargers</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">2+</div>
                  <div className="text-sm text-white">Chargers Per Site</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">47</div>
                  <div className="text-sm text-white">Spots Left</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white mb-6 font-poppins">
                <span className="font-bold text-yellow-300">Don't miss out!</span> 
                <br />Apply now to check if your property qualifies
              </p>
              <Link href="/apply">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-red-800 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-xl sm:text-2xl font-bold shadow-2xl font-poppins bounce-hover elastic-button transform hover:scale-105 transition-all duration-300">
                  🚨 Apply Now — Check My Property 🚨
                </button>
              </Link>
              <p className="text-sm text-yellow-200 mt-4">
                ⚠️ <span className="font-bold">Limited offer</span> • Subject to site qualification • No upfront costs
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-gelasio">
              Ready to Host High-Speed EV Chargers?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 font-poppins">
              Get 180kW+ DC fast chargers installed at your property — completely free
            </p>
            <Link href="/apply">
              <button className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-lg font-poppins bounce-hover elastic-button">
                Apply Now — Check My Property
              </button>
            </Link>
            <p className="text-sm text-green-200 mt-4">
              ⚠️ Subject to site qualification and available grid capacity
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
