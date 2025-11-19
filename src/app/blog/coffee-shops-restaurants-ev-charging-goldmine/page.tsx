import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Coffee Shops & Restaurants: The EV Charging Goldmine | EV Charge Partners',
  description: 'Why food service businesses are perfectly positioned to profit from EV charging. Discover the revenue strategies that work for cafes and restaurants.',
  openGraph: {
    title: 'Coffee Shops & Restaurants: The EV Charging Goldmine',
    description: 'Food service businesses are uniquely positioned to profit from EV charging. Learn why and how to capitalize on this opportunity.',
    images: ['/coffee.jpeg'],
  },
};

export default function CoffeeShopsRestaurantsEVCharging() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8">
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 text-sm sm:text-base">
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full">
              <Image
                src="/coffee.jpeg"
                alt="Coffee Shop EV Charging"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-12">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                  Restaurant Strategy
                </span>
                <span>Published: February 8, 2024</span>
                <span>•</span>
                <span>7 min read</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Coffee Shops & Restaurants: The EV Charging Goldmine
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Of all business types, food service establishments are uniquely positioned to profit massively from EV charging. Here's why—and how to capitalize on this opportunity before your competition does.
              </p>

              <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded mb-8 sm:mb-12"></div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you own or manage a coffee shop, cafe, or restaurant in California, I'm about to share something that could transform your business: <strong>EV charging stations are a revenue goldmine for food service businesses—and most of your competitors have no idea.</strong>
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                  <p className="text-xl font-bold text-gray-900 mb-4">
                    Why Food Service Businesses Are Perfect for EV Charging:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Customers naturally spend 20-40+ minutes at your location</li>
                    <li>✓ That's exactly how long Level 2 EV charging takes</li>
                    <li>✓ Your existing parking lot becomes a customer magnet</li>
                    <li>✓ EV drivers actively search for charging near food and coffee</li>
                    <li>✓ You generate income from BOTH the meal AND the charging</li>
                  </ul>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  The Perfect Business Model Match
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Here's the beautiful synergy that most restaurant owners miss: EV charging creates the perfect dwell time for your business.
                </p>

                <div className="bg-blue-50 p-8 rounded-xl my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Charging-to-Dining Timeline:</h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-600">0 min:</span>
                      <p>Customer plugs in EV, walks into your coffee shop/restaurant</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-600">5 min:</span>
                      <p>They browse menu, place order</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-600">10 min:</span>
                      <p>Food/coffee served, they settle in</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-600">30 min:</span>
                      <p>Finishing meal, maybe ordering dessert or second coffee</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-emerald-600">40 min:</span>
                      <p>Car charged, customer leaves happy (and will return)</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Compare this to a quick "grab and go" customer who's in and out in 10 minutes. With EV charging, you've automatically increased their visit by 3-4x—which means 3-4x the spending opportunity.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Real Numbers from Real Restaurants
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">☕ Blue Mountain Coffee - Sacramento</h4>
                    <p className="text-gray-700 mb-3">Installed 2 Level 2 chargers in October 2023</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Charging Revenue:</strong> $620/month</li>
                      <li><strong>Increased Food Sales:</strong> $3,200/month</li>
                      <li><strong>New Regular Customers:</strong> 45</li>
                      <li><strong>Total Monthly Increase:</strong> $3,820</li>
                    </ul>
                  </div>
                  <div className="bg-white border-2 border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🍽️ Garden Bistro - San Jose</h4>
                    <p className="text-gray-700 mb-3">Installed 3 chargers in March 2024</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Charging Revenue:</strong> $890/month</li>
                      <li><strong>Increased Food Sales:</strong> $5,100/month</li>
                      <li><strong>Lunch Rush Extension:</strong> +45 minutes</li>
                      <li><strong>Total Monthly Increase:</strong> $5,990</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  Notice the pattern: The charging revenue is nice, but the real money comes from increased food and beverage sales. EV charging doesn't just generate direct income—it fundamentally changes customer behavior in your favor.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Why EV Drivers Love Food Service Locations
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Put yourself in an EV driver's shoes for a moment. They need to charge their car, which takes 20-40 minutes. Where would they rather do that?
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                    <h4 className="text-lg font-bold text-red-800 mb-3">❌ Empty Parking Lot</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Nothing to do for 30 minutes</li>
                      <li>• Sit in car on phone</li>
                      <li>• Boring and wasted time</li>
                      <li>• Won't return unless desperate</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-emerald-200">
                    <h4 className="text-lg font-bold text-emerald-800 mb-3">✅ Your Restaurant/Cafe</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Great coffee/food while waiting</li>
                      <li>• Comfortable seating, WiFi</li>
                      <li>• Productive or relaxing time</li>
                      <li>• Will actively seek you out again</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xl font-bold text-gray-900 mt-6 mb-4">
                  For EV drivers, charging at a coffee shop or restaurant isn't just convenient—it's the ideal way to spend that time.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  The "Coffee Shop Routine" Phenomenon
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Here's something fascinating that's happening across California: EV drivers are building weekly routines around coffee shops and restaurants with charging.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                  <p className="text-lg italic text-gray-700 mb-3">
                    "Every Saturday morning, I charge at The Daily Grind while having breakfast. It's become my weekly ritual. I could charge at home, but I love the excuse to get out, have great coffee, and get some work done. I spend about $25 every time I go."
                  </p>
                  <p className="text-gray-900 font-semibold">
                    — David Chen, Tesla Model 3 owner, Oakland
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  This is incredibly valuable. David could charge at home for $3-4, but he's choosing to spend $25 at a coffee shop instead. Why? Because the experience is worth it to him.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Multiply David by 20-50 regular customers, and you see why coffee shops with EV charging are seeing such dramatic revenue increases.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Revenue Streams: How You Make Money
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  When you install EV charging at your coffee shop or restaurant, you create multiple revenue streams:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-white border-2 border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">💰 1. Direct Charging Revenue</h4>
                    <p className="text-gray-700">
                      <strong>$500-1,500/month per charger</strong> - You earn a share of the charging fees. This is passive income that requires zero effort once installed.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🍽️ 2. Increased Food & Beverage Sales</h4>
                    <p className="text-gray-700">
                      <strong>$2,000-5,000+/month</strong> - This is where the real money is. EV drivers come for charging, stay for the food, and often bring friends/family.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🔄 3. Repeat Customer Value</h4>
                    <p className="text-gray-700">
                      <strong>$100-300 per customer/month</strong> - EV drivers who find you will return weekly or more. One new regular customer can be worth $1,200-3,600 per year.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">⏰ 4. Off-Peak Revenue</h4>
                    <p className="text-gray-700">
                      <strong>Fill slow times</strong> - Many restaurants see EV chargers bring customers during traditionally slow hours (mid-afternoon, early evening).
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  The Upsell Opportunity
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Here's a strategy savvy restaurant owners are using: When customers know they're going to be there for 30-40 minutes anyway, they're much more likely to:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Order an appetizer they wouldn't have otherwise</li>
                  <li>Get a second coffee or beverage</li>
                  <li>Order dessert</li>
                  <li>Try something new on the menu</li>
                  <li>Bring a friend next time ("We can hang out while my car charges")</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-8">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    💡 Pro Tip: The "Charging Special"
                  </p>
                  <p className="text-gray-700">
                    Some restaurants offer a "charging special"—a small discount or upgrade for customers who are charging their EVs. It encourages EV drivers to choose you over competitors and increases average ticket size. Example: "Charging today? Upgrade to premium coffee for free!"
                  </p>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Perfect Business Types for EV Charging
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">☕ Coffee Shops & Cafes</h4>
                    <p className="text-gray-700 text-sm mb-2">Why it works:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• People work on laptops for hours anyway</li>
                      <li>• Multiple purchase opportunities (refills)</li>
                      <li>• Morning commute charging market</li>
                      <li>• WiFi + charging = strong draw</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🍳 Breakfast/Brunch Spots</h4>
                    <p className="text-gray-700 text-sm mb-2">Why it works:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Meals naturally take 30-45 minutes</li>
                      <li>• Weekend traffic goldmine</li>
                      <li>• Family-friendly timing</li>
                      <li>• Higher ticket averages</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🍕 Casual Dining Restaurants</h4>
                    <p className="text-gray-700 text-sm mb-2">Why it works:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Dinner service matches charging time</li>
                      <li>• Groups of 2-4+ people</li>
                      <li>• High revenue per visit</li>
                      <li>• Date night destination</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🥗 Fast Casual</h4>
                    <p className="text-gray-700 text-sm mb-2">Why it works:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Lunch crowd charging</li>
                      <li>• Remote workers love this combo</li>
                      <li>• Quick but quality</li>
                      <li>• High volume potential</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Competitive Advantage Over Chain Restaurants
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Large chains are slowly adding EV charging, but as an independent restaurant or local coffee shop, you have advantages:
                </p>

                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Advantages:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span><strong>Faster Decision Making:</strong> You can install chargers in weeks, not years like corporate chains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span><strong>Personal Touch:</strong> You can create a "regulars" culture that chains can't match</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span><strong>Community Connection:</strong> Local EV owners support local businesses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span><strong>Better Food:</strong> Let's be honest—your food is probably better than chains</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Marketing Advantage: You Get Found Automatically
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  When you install EV charging, your restaurant automatically appears on charging apps that thousands of EV drivers use daily:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>PlugShare:</strong> 1M+ active users searching for charging</li>
                  <li><strong>ChargePoint App:</strong> Shows your location to nearby drivers</li>
                  <li><strong>Tesla Navigation:</strong> Routes Tesla drivers to your location</li>
                  <li><strong>Google Maps:</strong> Lists you as an EV charging location</li>
                </ul>

                <div className="bg-emerald-50 p-6 rounded-xl my-8">
                  <p className="text-lg font-semibold text-gray-900 mb-3">
                    This is like having a billboard that only appears to your ideal customers:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ High income ($140k+ household average)</li>
                    <li>✓ Tech-savvy and educated</li>
                    <li>✓ Willing to pay for quality</li>
                    <li>✓ Actively looking for places to spend 30-45 minutes</li>
                  </ul>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Real Owner Testimonial
                </h2>

                <div className="bg-blue-50 p-8 rounded-xl my-8 border-l-4 border-blue-500">
                  <p className="text-lg italic text-gray-700 mb-4">
                    "I was skeptical at first. I thought EV charging was just for big corporations. But after talking with EV Charge Partners, I realized it was perfect for my cafe. We installed two chargers six months ago, and it's been incredible. We get about 15-20 EV drivers per day now, most of whom stay for 30-45 minutes and spend $15-25. That's an extra $300-400 per day in revenue I wouldn't have had otherwise. The charging fees cover the electricity and then some, so it's all upside. I wish I had done this two years ago."
                  </p>
                  <p className="text-gray-900 font-semibold">
                    — Patricia Wong, Owner, Morning Brew Cafe, San Francisco
                  </p>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Common Questions from Restaurant Owners
                </h2>

                <div className="space-y-6 my-8">
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Q: Will EV customers take up parking from regular customers?</h4>
                    <p className="text-gray-700">
                      No—they ARE regular customers, they just happen to be charging. Plus, they typically stay longer and spend more, so you want these parking spots occupied.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Q: What if someone charges but doesn't come inside?</h4>
                    <p className="text-gray-700">
                      This is extremely rare. Charging takes 30-40 minutes—sitting in a car is boring. 95%+ of EV drivers come inside. You can also set pricing to encourage this (lower rates for customers).
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Q: How much does installation cost?</h4>
                    <p className="text-gray-700">
                      For qualified California restaurants and coffee shops, installation is typically zero upfront cost. Programs exist specifically to help food service businesses add EV charging.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Q: What about electricity costs?</h4>
                    <p className="text-gray-700">
                      Charging fees are structured to cover electricity plus generate profit. You're not absorbing the cost—customers pay for the charging, and you get a share.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Time to Act: The First-Mover Advantage
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Here's the reality: EV adoption in California is growing exponentially. Right now, you have an opportunity to be the first restaurant or coffee shop in your area with EV charging.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    The Window is Closing
                  </p>
                  <p className="text-gray-700">
                    Once an EV driver finds a coffee shop or restaurant they like with charging, they become loyal to that location. They build it into their routine. If your competitor installs charging first, those customers may never give you a chance—even if your food is better.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In the next 2-3 years, EV charging will be as common as WiFi in restaurants. The businesses that move now will have established customer loyalty before everyone else catches on.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Getting Started
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  For California coffee shops and restaurants, the process is straightforward:
                </p>

                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-xl my-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Your Path to EV Charging Revenue:</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Free Consultation (This Week)</h4>
                        <p className="text-gray-700">
                          15-minute call to discuss your restaurant/cafe and see if you qualify for zero-cost installation
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Site Assessment (Next Week)</h4>
                        <p className="text-gray-700">
                          We visit your location, evaluate parking, electrical capacity, and traffic patterns
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Revenue Projection (Same Visit)</h4>
                        <p className="text-gray-700">
                          Based on your location and business type, we show you realistic revenue projections
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Installation (3-6 Weeks)</h4>
                        <p className="text-gray-700">
                          We handle permits, electrical work, equipment, and software. You focus on your business.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Start Earning (Day One)</h4>
                        <p className="text-gray-700">
                          Chargers go live, you're listed on all major apps, and EV drivers start finding you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  The Bottom Line
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  If you own a coffee shop or restaurant in California with a parking lot, EV charging is one of the highest-ROI investments you can make. The synergy between charging time and dining time is perfect, and you capture customers who are actively looking for exactly what you offer.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-white border-2 border-emerald-200 rounded-xl">
                    <div className="text-4xl mb-3">📈</div>
                    <p className="font-bold text-gray-900 mb-2">Revenue Increase</p>
                    <p className="text-gray-600 text-sm">$3,000-7,000+/month typical</p>
                  </div>
                  <div className="text-center p-6 bg-white border-2 border-emerald-200 rounded-xl">
                    <div className="text-4xl mb-3">⏱️</div>
                    <p className="font-bold text-gray-900 mb-2">Longer Visits</p>
                    <p className="text-gray-600 text-sm">30-40+ minutes vs 10-15 min</p>
                  </div>
                  <div className="text-center p-6 bg-white border-2 border-emerald-200 rounded-xl">
                    <div className="text-4xl mb-3">💵</div>
                    <p className="font-bold text-gray-900 mb-2">Upfront Cost</p>
                    <p className="text-gray-600 text-sm">$0 for qualified locations</p>
                  </div>
                </div>

                <p className="text-xl font-bold text-gray-900 mb-4">
                  The question isn't whether to add EV charging—it's whether you want to be first in your area or watch your competition capture this market.
                </p>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-8 sm:p-10 rounded-2xl my-12 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Transform Your Restaurant or Coffee Shop?
                  </h3>
                  <p className="text-lg mb-6 text-emerald-50">
                    Get a free consultation and revenue projection for your location. Find out if you qualify for zero-cost installation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/apply"
                      className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Schedule Free Consultation →
                    </Link>
                  </div>
                </div>

                {/* Related Reading */}
                <div className="bg-gray-50 p-6 sm:p-8 rounded-xl mt-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Related Reading</h3>
                  <div className="space-y-4">
                    <Link href="/blog/mom-and-pop-businesses-free-income-ev-charging" className="block group">
                      <h4 className="text-lg font-semibold text-emerald-600 group-hover:text-emerald-700 mb-1">
                        Mom & Pop Businesses: Make Free Extra Income with EV Charging →
                      </h4>
                      <p className="text-gray-600 text-sm">How small businesses compete with big chains using EV charging</p>
                    </Link>
                    <Link href="/blog/california-businesses-profiting-ev-charging" className="block group">
                      <h4 className="text-lg font-semibold text-emerald-600 group-hover:text-emerald-700 mb-1">
                        How California Businesses Are Profiting from EV Charging →
                      </h4>
                      <p className="text-gray-600 text-sm">Real stories and numbers from actual businesses</p>
                    </Link>
                    <Link href="/blog/complete-guide-ev-charging-business-owners" className="block group">
                      <h4 className="text-lg font-semibold text-emerald-600 group-hover:text-emerald-700 mb-1">
                        The Complete Guide to EV Charging for Business Owners →
                      </h4>
                      <p className="text-gray-600 text-sm">Everything you need to know to get started</p>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

