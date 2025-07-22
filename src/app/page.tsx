import Link from 'next/link'
import BenefitCard from '@/components/BenefitCard'
import ScrollingBanner from '@/components/ScrollingBanner'
import Image from 'next/image'

export default function Home() {
  const benefits = [
    {
      title: "Zero Installation Cost",
      description: "We cover all installation costs. You just provide the space and start earning immediately.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "bg-green-500",
      delay: 0
    },
    {
      title: "Quick Setup",
      description: "From application to operational charging station in just 2-4 weeks.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-blue-500",
      delay: 1
    },
    {
      title: "High Dollar Commissions",
      description: "Earn substantial commissions on every charge. The more traffic, the more you earn.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-purple-500",
      delay: 2
    },
    {
      title: "24/7 Support",
      description: "Our team handles maintenance, customer service, and technical support around the clock.",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
        </svg>
      ),
      color: "bg-orange-500",
      delay: 3
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 lg:p-8">
      {/* Main Content Container with Rounded Edges */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-montserrat">
                  Join EV Charge Partners
                  <span className="text-green-400 block font-poppins">of California</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed font-medium drop-shadow-lg font-montserrat">
                  Transform your parking lot into a revenue-generating EV charging destination. 
                  Join the clean energy revolution while earning <span className="text-green-400 font-bold font-poppins">HIGH DOLLAR COMMISSIONS</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/apply">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-lg font-poppins bounce-hover elastic-button">
                      Apply to Host a Station
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold border border-white/30 font-montserrat bounce-hover elastic-button">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left font-montserrat">Why California Businesses Choose EV Charge Partners</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white font-poppins">$0</div>
                      <div className="text-gray-200 text-sm sm:text-base font-montserrat">Installation Cost</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white font-poppins">2-4 Weeks</div>
                      <div className="text-gray-200 text-sm sm:text-base font-montserrat">Setup Time</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white font-poppins">High Dollar</div>
                      <div className="text-gray-200 text-sm sm:text-base font-montserrat">Commissions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-montserrat">
                Why Join EV Charge Partners?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 font-poppins">
                Join hundreds of California businesses already earning high dollar commissions while supporting clean energy
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                  color={benefit.color}
                  delay={benefit.delay}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-montserrat">
              Ready to Start Earning?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 font-poppins">
              Join the clean energy revolution with EV Charge Partners
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
