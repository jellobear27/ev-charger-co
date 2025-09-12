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
              <Link href="/blog" className="bg-green-600 text-white px-4 py-2 rounded-lg">Blog</Link>
              <Link href="/apply" className="text-gray-700 hover:text-green-600">Apply Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-96">
            <Image
              src="/green-business-ev.jpg"
              alt="Small business owner with EV charging station"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Are You a Mom & Pop Business Looking to Make Free Extra Income?
                </h1>
                <p className="text-xl">Generate FREE foot traffic while earning passive income with EV charging</p>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                Business Opportunity
              </span>
              <span>February 5, 2024</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                If you're a small business owner in California, we have an incredible opportunity that could transform your parking lot into a revenue-generating asset—without any upfront costs or hassle on your part.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The EV Revolution is Here, and Your Business Can Profit</h2>
              
              <p className="mb-6">
                California is leading the charge in the electric vehicle revolution. With over 1.2 million EVs on California roads and growing by 50,000+ each quarter, EV drivers desperately need convenient charging locations. This creates a massive opportunity for smart business owners like you.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-green-800 mb-2">What's In It For You?</h3>
                <ul className="text-green-700 space-y-2">
                  <li>✅ <strong>Earn 10% commission</strong> on every charging session</li>
                  <li>✅ <strong>$0 upfront investment</strong> - we handle everything</li>
                  <li>✅ <strong>FREE installation and maintenance</strong></li>
                  <li>✅ <strong>Increased foot traffic</strong> - customers spend 30-45 minutes charging</li>
                  <li>✅ <strong>Attract eco-conscious customers</strong> who tend to spend more</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Perfect Business Types for EV Charging Partnerships</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">☕ Coffee Shops & Cafes</h3>
              <p className="mb-4">
                Perfect match! EV charging takes 30-45 minutes—exactly the time customers want to relax with coffee, work on laptops, or grab a meal. Coffee shops with charging stations see 25-40% increases in daily revenue.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">🍕 Restaurants (Especially Fast-Casual)</h3>
              <p className="mb-4">
                Turn your parking lot into a competitive advantage. While customers' cars charge, they're dining at your restaurant instead of your competitor down the street. Family restaurants and fast-casual spots see the biggest boost.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">⛪ Churches & Community Centers</h3>
              <p className="mb-4">
                Generate additional income for your ministry or community programs. Church parking lots are often underutilized during weekdays, making them perfect for commuter charging. Earn passive income while serving your community.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">🛍️ Shopping Centers & Strip Malls</h3>
              <p className="mb-4">
                Keep shoppers on your property longer. EV drivers will browse more stores, grab food, and make impulse purchases while their car charges. Property managers love the increased dwell time and tenant satisfaction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">🏪 Grocery Stores & Pharmacies</h3>
              <p className="mb-4">
                Perfect for weekly charging routines. Customers will choose your location over competitors because they can charge while shopping. Creates customer loyalty and increases average transaction sizes.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Real Success Story</h3>
                <p className="text-blue-700 italic">
                  "Installing EV chargers at our family restaurant was the best business decision we've made in years. We went from serving mostly local customers to attracting EV drivers from across the region. Our lunch revenue increased by 35% in just 6 months, and we're earning an extra $800-1,200 monthly from charging commissions alone." 
                </p>
                <p className="text-blue-600 font-semibold mt-2">- Maria Rodriguez, Casa Rodriguez Family Restaurant, San Jose</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Partner with EV Charge Partners?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🔧 Complete Turnkey Solution</h4>
                  <p className="text-gray-700">We handle permits, installation, maintenance, customer service, and billing. You just collect checks.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">📱 Smart Technology</h4>
                  <p className="text-gray-700">Our chargers include mobile apps, contactless payment, and real-time monitoring for maximum reliability.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Strategic Placement</h4>
                  <p className="text-gray-700">We analyze traffic patterns and customer behavior to optimize charger placement for maximum usage and revenue.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🤝 Local Partnership</h4>
                  <p className="text-gray-700">We're California-based and understand local businesses. You'll have a dedicated account manager who cares about your success.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started is Simple</h2>
              
              <div className="bg-green-50 p-6 rounded-lg my-8">
                <h3 className="font-semibold text-green-800 mb-4">3-Step Process:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <p className="text-green-700"><strong>Apply Online:</strong> Quick 5-minute application with basic business info</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <p className="text-green-700"><strong>Site Assessment:</strong> We visit your location (free) to design the perfect setup</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    <p className="text-green-700"><strong>Installation & Launch:</strong> Professional installation and you start earning immediately</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4 my-8">
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">Do I need to pay anything upfront?</h4>
                  <p className="text-gray-700">Absolutely not. We cover all costs including permits, installation, equipment, and ongoing maintenance.</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">How much space do I need?</h4>
                  <p className="text-gray-700">Just 2-4 standard parking spaces. We work with your existing layout to minimize impact on customer parking.</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">What if the chargers break down?</h4>
                  <p className="text-gray-700">We provide 24/7 monitoring and maintenance. Any issues are resolved quickly at no cost to you.</p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">How much can I earn?</h4>
                  <p className="text-gray-700">Most partners earn $500-2,000+ monthly depending on location and usage. High-traffic locations can earn even more.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg text-center my-12">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Earning Passive Income?</h2>
                <p className="text-lg mb-6">Join hundreds of California businesses already profiting from the EV revolution</p>
                <Link href="/apply" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
                  Apply Now - It's Free!
                </Link>
                <p className="text-sm mt-4 opacity-90">Application takes less than 5 minutes • No obligation</p>
              </div>

              <p className="text-gray-600 italic">
                The EV revolution is happening now. California businesses that act quickly will secure the best partnerships and highest-traffic locations. Don't wait—your competitors won't.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
