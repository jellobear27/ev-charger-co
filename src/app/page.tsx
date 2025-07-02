import Link from 'next/link'
import BenefitCard from '@/components/BenefitCard'

export default function Home() {
  const benefits = [
    {
      title: "Zero Cost",
      description: "We install and maintain everything for free",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "bg-green-600",
      delay: 0
    },
    {
      title: "More Traffic",
      description: "EV drivers stay longer and spend more",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "bg-blue-600",
      delay: 1
    },
    {
      title: "10% Commission",
      description: "Earn money from every charge",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      color: "bg-purple-600",
      delay: 2
    },
    {
      title: "Eco-Friendly",
      description: "Position your business as green",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-emerald-600",
      delay: 3
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">EV-CALI</span>
            <div className="space-x-4">
              <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
              <Link href="/apply" className="bg-green-600 text-white px-4 py-2 rounded-lg">Apply Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Get Paid to Host an
          <span className="text-green-600 block">EV Charger</span>
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Earn passive income and bring more traffic to your business. 
          No cost to you - we handle everything.
        </p>
        <Link href="/apply">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
            Apply to Host a Station
          </button>
        </Link>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Host an EV Charger?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of businesses already earning passive income while supporting clean energy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join the clean energy revolution
          </p>
          <Link href="/apply">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
              Apply Now - It&apos;s Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
