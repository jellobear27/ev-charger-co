import Image from 'next/image'
import Link from 'next/link'

export default function MomAndPopEVChargingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">EV Charge Partner</Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>
              <Link href="/apply" className="bg-green-600 text-white px-4 py-2 rounded-lg">Apply Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-white">
            <div className="mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Small Business Strategy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mom & Pop Businesses: Your Path to Free Extra Income
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              How small family businesses are generating $500-2,000+ monthly in passive income with EV charging stations—without any upfront costs.
            </p>
            <div className="flex items-center justify-center mt-6 text-green-200">
              <span>February 5, 2024</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none text-gray-900">
          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/mompop.jpeg"
              alt="Small business owner with EV charging station"
              width={600}
              height={800}
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            If you're a small business owner in California, we have an incredible opportunity that could transform your parking lot into a revenue-generating asset—without any upfront costs or hassle on your part.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The EV Revolution is Here, and Your Business Can Profit</h2>
          
          <p className="text-gray-700 mb-6">
            California is leading the charge in the electric vehicle revolution. With over 1.2 million EVs on California roads and growing by 50,000+ each quarter, EV drivers desperately need convenient charging locations. This creates a massive opportunity for smart business owners like you.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3">The Perfect Partnership</h3>
            <p className="text-green-700">
              We handle everything—installation, maintenance, customer service, and billing. You simply provide parking spaces and collect 10% commission on every charge. It's that simple.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Businesses Perfect for EV Charging</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">☕ Coffee Shops & Cafes</h3>
              <p className="text-gray-700 mb-2">Perfect timing alignment—EV charging takes 30-45 minutes, perfect for coffee and work.</p>
              <p className="text-green-600 font-semibold">Average boost: $800-1,500/month</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🍕 Restaurants</h3>
              <p className="text-gray-700 mb-2">Customers dine while their car charges—no rushing, higher average tickets.</p>
              <p className="text-green-600 font-semibold">Average boost: $600-1,200/month</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🛒 Retail Stores</h3>
              <p className="text-gray-700 mb-2">Extended shopping time leads to higher sales and customer satisfaction.</p>
              <p className="text-green-600 font-semibold">Average boost: $500-1,000/month</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">⛪ Churches</h3>
              <p className="text-gray-700 mb-2">Weekday charging generates income while serving your community.</p>
              <p className="text-green-600 font-semibold">Average boost: $400-800/month</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real Success Stories</h2>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Maria's Family Restaurant, San Jose</h3>
            <p className="text-blue-700 mb-3">
              "We installed 2 charging stations in our parking lot 6 months ago. Not only do we earn $650 in monthly commission, but our dinner revenue has increased 30% because customers stay longer and order more while their cars charge. It's been a complete game-changer for our family business."
            </p>
            <p className="text-blue-600 font-semibold">Monthly benefit: $650 commission + $800 increased food sales = $1,450 total</p>
          </div>

          <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Tom's Auto Repair, Sacramento</h3>
            <p className="text-green-700 mb-3">
              "I was skeptical at first, but this has been the easiest money I've ever made. EV owners charge while getting their cars serviced, and many become regular customers. The charging station basically pays for itself while bringing in new business."
            </p>
            <p className="text-green-600 font-semibold">Monthly benefit: $920 commission + new customers = $1,200+ total value</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why This is Perfect for Small Businesses</h2>
          
          <div className="space-y-6 my-8">
            <div className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Zero Upfront Investment</h3>
                <p className="text-gray-700">We handle all equipment, installation, and ongoing maintenance costs.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Passive Income Stream</h3>
                <p className="text-gray-700">Earn 10% commission on every charge—money comes in 24/7 with no effort from you.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Attract Premium Customers</h3>
                <p className="text-gray-700">EV drivers typically have higher incomes and spend more per visit.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Advantage</h3>
                <p className="text-gray-700">Be the only business in your area with charging—customers will choose you over competitors.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Numbers That Matter</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Average Small Business Benefits:</h3>
            <ul className="text-yellow-700 space-y-2">
              <li>💰 <strong>$500-2,000+ monthly commission</strong> (based on location traffic)</li>
              <li>📈 <strong>25-40% increase</strong> in customer dwell time</li>
              <li>🎯 <strong>30% of EV drivers</strong> become repeat customers</li>
              <li>💳 <strong>$15-25 higher</strong> average spending per visit</li>
              <li>⭐ <strong>Improved reputation</strong> as environmentally conscious business</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Simple Requirements</h2>
          
          <p className="text-gray-700 mb-6">Most small businesses already qualify:</p>
          
          <ul className="text-gray-700 space-y-2 ml-6 mb-8">
            <li>• 4+ parking spaces available for charging stations</li>
            <li>• Located in California (where the demand is highest)</li>
            <li>• Valid business license and insurance</li>
            <li>• Adequate electrical capacity (we assess this for free)</li>
            <li>• Business open to public during normal hours</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How It Works</h2>
          
          <div className="bg-gray-50 p-8 rounded-lg my-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Application (5 minutes)</h3>
                  <p className="text-gray-700">Tell us about your business and available parking spaces.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Free Site Assessment</h3>
                  <p className="text-gray-700">We visit your location to plan optimal charger placement and electrical needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Installation</h3>
                  <p className="text-gray-700">Our certified technicians handle everything—you don't lift a finger.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Start Earning</h3>
                  <p className="text-gray-700">Customers start charging, you start earning. Monthly commission checks begin immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Don't Wait—The Early Bird Gets the Worm</h2>
          
          <p className="text-gray-700 mb-6">
            The small businesses that partner with us now will lock in the best territories before their competitors catch on. We're only working with one business per geographic area to ensure you don't compete directly with other charging locations.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Limited Opportunity</h3>
            <p className="text-red-700">
              We're only accepting 50 new partners in California this quarter. Once we reach capacity, there will be a waiting list. The businesses that apply first get priority placement in the highest-traffic areas.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg text-center my-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Add a New Revenue Stream?</h2>
            <p className="text-xl mb-6">Join the smart small business owners already earning with EV charging</p>
            <Link href="/apply" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
              Apply for Partnership
            </Link>
            <p className="text-sm mt-4 opacity-90">Free application • No upfront costs • Start earning in 30-60 days</p>
          </div>

          <p className="text-gray-600 italic text-center text-lg">
            The mom and pop businesses that embrace this opportunity today will be the market leaders tomorrow. Don't let the big corporations beat you to it.
          </p>
        </div>
      </div>
    </div>
  )
}
