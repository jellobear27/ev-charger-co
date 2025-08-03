import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Range Anxiety: The Real Story Behind EV Adoption in California | EV Charge Partner',
  description: 'Discover why range anxiety is becoming less of a concern in California and how the state\'s expanding charging infrastructure is driving EV adoption. Learn about the latest developments and what this means for business owners.',
  keywords: 'range anxiety, EV adoption California, electric vehicle charging, California EV infrastructure, EV charging stations, electric car adoption, California green energy',
  openGraph: {
    title: 'Range Anxiety: The Real Story Behind EV Adoption in California',
    description: 'Discover why range anxiety is becoming less of a concern in California and how the state\'s expanding charging infrastructure is driving EV adoption.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
    authors: ['EV Charge Partner'],
    images: ['/range.jpeg'],
  },
}

export default function RangeAnxietyArticle() {
  return (
    <div className="min-h-screen bg-white">
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
                EV Adoption
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Range Anxiety: The Real Story Behind EV Adoption in California
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Discover why range anxiety is becoming less of a concern and how California's charging infrastructure is evolving to support the EV revolution.
            </p>
            <div className="flex items-center justify-center space-x-4 text-green-100">
              <span>January 15, 2024</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>By EV Charge Partner Team</span>
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
              src="/range.jpeg"
              alt="Range anxiety concept showing EV charging and California landscape"
              width={600}
              height={800}
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Range anxiety—the fear of running out of battery power before reaching a charging station—has long been considered one of the biggest barriers to electric vehicle adoption. However, in California, this concern is rapidly becoming a thing of the past thanks to the state's aggressive expansion of EV charging infrastructure.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Evolution of Range Anxiety in California</h2>
          
          <p className="mb-6 text-gray-700">
            Just a few years ago, range anxiety was a legitimate concern for potential EV buyers in California. With limited charging infrastructure and EVs offering ranges of 100-200 miles, drivers worried about being stranded without power. However, the landscape has dramatically changed.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Key Statistics:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• California now has over 80,000 public charging ports</li>
              <li>• EV range has increased to 250-350+ miles on average</li>
              <li>• 95% of California residents live within 10 miles of a public charger</li>
              <li>• Charging stations are being added at a rate of 1,000+ per month</li>
            </ul>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">California's Charging Infrastructure Revolution</h2>
          
          <p className="mb-6 text-gray-700">
            California's commitment to becoming a zero-emission state by 2035 has driven unprecedented investment in EV charging infrastructure. The state has implemented several key initiatives:
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">1. The California Electric Vehicle Infrastructure Project (CALeVIP)</h3>
          <p className="mb-6 text-gray-700">
            This $2.9 billion program is installing thousands of charging stations across the state, with a focus on underserved communities and multi-unit dwellings. The project aims to install 250,000 chargers by 2025.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Workplace and Destination Charging</h3>
          <p className="mb-6 text-gray-700">
            California businesses are increasingly installing EV chargers to attract customers and employees. This creates a network of convenient charging options where people naturally spend time—at work, shopping, dining, and entertainment venues.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Fast Charging Corridors</h3>
          <p className="mb-6 text-gray-700">
            The state has established fast-charging corridors along major highways, ensuring that long-distance travel is practical for EV owners. These corridors feature DC fast chargers that can add 200+ miles of range in just 30 minutes.
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Affects Business Owners</h2>
          
          <p className="mb-6 text-gray-700">
            The reduction in range anxiety is creating new opportunities for California business owners. As EV adoption increases, customers are actively seeking businesses that offer charging services.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Business Benefits:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Increased customer dwell time and spending</li>
              <li>• Competitive advantage over businesses without chargers</li>
              <li>• Enhanced brand image as environmentally conscious</li>
              <li>• Additional revenue stream from charging fees</li>
              <li>• Attraction of high-income EV owners</li>
            </ul>
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of EV Adoption in California</h2>
          
          <p className="mb-6 text-gray-700">
            With range anxiety becoming less of a concern, EV adoption in California is accelerating rapidly. The state is on track to meet its goal of 5 million zero-emission vehicles by 2030, and business owners who act now will be well-positioned to benefit from this transition.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h3>
          <p className="mb-6 text-gray-700">
            The next phase of California's EV revolution will focus on:
          </p>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Ultra-fast charging networks (350kW+)</li>
            <li>Smart charging systems that optimize grid usage</li>
            <li>Integration with renewable energy sources</li>
            <li>Expanded charging options for multi-unit dwellings</li>
            <li>Enhanced mobile apps for finding and reserving chargers</li>
          </ul>

          {/* Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          
          <p className="mb-8 text-gray-700">
            Range anxiety is no longer the barrier it once was in California. With the state's comprehensive charging infrastructure and improving EV technology, the focus has shifted from "Can I make it?" to "Where should I charge?" This shift represents a massive opportunity for business owners to position themselves as leaders in the clean energy economy.
          </p>

          <div className="bg-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join the EV Revolution?</h3>
            <p className="text-gray-700 mb-6">
              Transform your business into an EV charging destination and start earning passive income while supporting California's clean energy future.
            </p>
            <Link href="/apply">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Apply to Host a Charging Station
              </button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/california-businesses-profiting-ev-charging" className="block group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  How California Businesses Are Profiting from EV Charging Stations
                </h4>
                <p className="text-gray-600 text-sm">
                  Real stories from business owners who've transformed their parking lots into revenue-generating destinations.
                </p>
              </div>
            </Link>
            <Link href="/blog/complete-guide-ev-charging-business-owners" className="block group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  The Complete Guide to EV Charging for Business Owners
                </h4>
                <p className="text-gray-600 text-sm">
                  Everything you need to know about installing EV chargers at your business.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 