import Image from 'next/image'
import Link from 'next/link'

export default function CoffeeShopsRestaurantsEVPage() {
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
                Restaurant Strategy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Coffee Shops & Restaurants: The EV Charging Goldmine
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Why food service businesses are perfectly positioned to profit from EV charging and transform their revenue streams.
            </p>
            <div className="flex items-center justify-center mt-6 text-green-200">
              <span>February 8, 2024</span>
              <span className="mx-3">•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src="/coffee.jpeg"
            alt="Coffee shop with EV charging station"
            width={600}
            height={800}
            className="rounded-xl w-full max-w-md mx-auto"
          />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-900">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you own a coffee shop, restaurant, or any food service business in California, you're sitting on an untapped goldmine. EV charging partnerships are transforming how food businesses attract customers and generate revenue—and the timing has never been better.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Perfect Marriage: Food Service + EV Charging</h2>
            
            <p className="text-gray-700 mb-6">
              Think about it: EV charging takes 30-45 minutes. What do people want to do during that time? Exactly what your business offers—grab coffee, enjoy a meal, catch up with friends, or get some work done. It's a match made in heaven.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">The Numbers Don't Lie</h3>
              <ul className="text-blue-700 space-y-2">
                <li>📊 <strong>87% of EV drivers</strong> prefer to combine charging with dining or shopping</li>
                <li>📊 <strong>Average charge session:</strong> 35-45 minutes</li>
                <li>📊 <strong>Average additional spending:</strong> $15-25 per charging session</li>
                <li>📊 <strong>Customer loyalty increase:</strong> 40% for businesses with charging</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Food Businesses Are EV Charging Champions</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">☕ Coffee Shops: The Ultimate EV Charging Companion</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Perfect Timing Alignment:</h4>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• EV charging: 30-45 minutes</li>
                <li>• Coffee shop visit: 25-60 minutes</li>
                <li>• Remote work session: Perfect environment</li>
                <li>• Business meetings: Professional setting</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Revenue Multipliers:</h4>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• Higher-income EV drivers (average household income $100k+)</li>
                <li>• Tech-savvy customers who appreciate convenience</li>
                <li>• Longer stays = more purchases (pastries, lunch, second coffee)</li>
                <li>• Repeat customers who develop charging routines</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🍕 Restaurants: Captive Audience Advantage</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Fast-Casual Gold:</h4>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• Customers choose you over competitors for charging convenience</li>
                <li>• No rushing through meals—car is charging anyway</li>
                <li>• Higher average ticket sizes (appetizers, desserts, drinks)</li>
                <li>• Family dining becomes more attractive (kids can play while waiting)</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Fine Dining Benefits:</h4>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• Attract affluent EV drivers for special occasions</li>
                <li>• No parking stress or time pressure</li>
                <li>• Perfect for business lunches and dinners</li>
                <li>• Premium positioning as environmentally conscious</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Real Success Story: Blue Bottle Coffee, Oakland</h3>
              <p className="text-green-700 mb-3">
                "Adding EV chargers was a game-changer. Our weekday afternoon revenue increased 45% because remote workers started using us as their 'office' while their cars charged. We went from 2-hour peak periods to consistent all-day traffic. The charging commission is nice, but the increased food and beverage sales are where the real money is."
              </p>
              <p className="text-green-600 font-semibold">- Sarah Kim, Blue Bottle Coffee Oakland (Hypothetical example)</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Competitive Edge You Need</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🎯 Customer Acquisition</h3>
            <p className="text-gray-700 mb-6">
              EV drivers actively seek out charging locations on apps like PlugShare and ChargePoint. When your business appears on these maps, you're advertising to a targeted, affluent audience 24/7. It's like having a billboard that only shows to potential customers.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">🔒 Customer Retention</h3>
            <p className="text-gray-700 mb-6">
              Once EV drivers find a convenient charging spot they like, they become incredibly loyal. Many develop charging routines—same coffee shop every Tuesday, favorite lunch spot on Fridays. This predictable traffic helps with staffing and inventory planning.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">💰 Revenue Streams</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Direct Revenue</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• 10% commission on charging fees</li>
                  <li>• $500-2,000+ monthly passive income</li>
                  <li>• No overhead or maintenance costs</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Indirect Revenue</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• 25-40% increase in food/beverage sales</li>
                  <li>• Higher average transaction values</li>
                  <li>• Extended customer visit duration</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Food Businesses Perfect for EV Charging</h2>
            
            <div className="space-y-6 my-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">☕ Coffee Shops & Cafes</h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Daily commuters, remote workers, meeting spaces</p>
                <p className="text-gray-700"><strong>Revenue boost:</strong> 30-50% increase in weekday afternoon sales</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🥗 Fast-Casual Restaurants</h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Lunch crowds, family dining, takeout customers</p>
                <p className="text-gray-700"><strong>Revenue boost:</strong> 25-35% increase in average ticket size</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🍝 Full-Service Restaurants</h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Business dinners, date nights, special occasions</p>
                <p className="text-gray-700"><strong>Revenue boost:</strong> 20-30% increase in wine/appetizer/dessert sales</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🥐 Bakeries & Breakfast Spots</h3>
                <p className="text-gray-700 mb-2"><strong>Best for:</strong> Morning commuters, weekend families, catering orders</p>
                <p className="text-gray-700"><strong>Revenue boost:</strong> 40-60% increase in weekend traffic</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What About Competition?</h2>
            
            <p className="text-gray-700 mb-6">
              Here's the secret: <strong>Most restaurants don't know about this opportunity yet.</strong> The food service businesses that act now will lock in the best partnerships and highest-traffic locations. Once every restaurant has charging, the competitive advantage disappears.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚡ First-Mover Advantage</h3>
              <p className="text-yellow-700">
                EV Charge Partners is only working with one restaurant per geographic area to avoid direct competition. The first business to apply in each neighborhood gets priority placement and exclusive territory protection.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started: Easier Than You Think</h2>
            
            <div className="bg-green-50 p-8 rounded-lg my-8">
              <h3 className="font-semibold text-green-800 mb-6 text-xl">Simple 3-Step Process:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Quick Application (5 minutes)</h4>
                    <p className="text-green-700">Basic business info, parking details, and contact information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Free Site Assessment</h4>
                    <p className="text-green-700">We visit your location to design optimal charger placement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Professional Installation</h4>
                    <p className="text-green-700">Complete setup and you start earning immediately</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Requirements (Most restaurants qualify):</h3>
            <ul className="text-gray-700 space-y-2 ml-6 mb-8">
              <li>• 4+ parking spaces available</li>
              <li>• Located in California</li>
              <li>• Valid business license</li>
              <li>• Adequate electrical capacity (we assess for free)</li>
            </ul>

            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg text-center my-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Restaurant's Revenue?</h2>
              <p className="text-xl mb-6">Join the smart food business owners already profiting from California's EV boom</p>
              <Link href="/apply" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
                Apply for Partnership
              </Link>
              <p className="text-sm mt-4 opacity-90">Free application • No upfront costs • Start earning in 30-60 days</p>
            </div>

            <p className="text-gray-600 italic text-center text-lg">
              The restaurants that embrace EV charging today will dominate their markets tomorrow. Don't let your competitors get there first.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
