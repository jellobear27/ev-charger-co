import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Complete Guide to EV Charging for Business Owners | EV Charge Partner',
  description: 'Everything you need to know about installing EV chargers at your business, from costs to benefits to implementation strategies. Expert guide for California business owners.',
  keywords: 'EV charging business guide, business EV charging installation, EV charging costs, EV charging benefits, California business EV charging',
  openGraph: {
    title: 'The Complete Guide to EV Charging for Business Owners',
    description: 'Everything you need to know about installing EV chargers at your business, from costs to benefits to implementation strategies.',
    type: 'article',
    publishedTime: '2024-01-29T00:00:00.000Z',
    authors: ['EV Charge Partner'],
    images: ['/ev-charging-guide.jpg'],
  },
}

export default function CompleteGuideArticle() {
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
                Business Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Complete Guide to EV Charging for Business Owners
            </h1>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Everything you need to know about installing EV chargers at your business, from costs to benefits to implementation strategies.
            </p>
            <div className="flex items-center justify-center space-x-4 text-green-100">
              <span>January 29, 2024</span>
              <span>•</span>
              <span>8 min read</span>
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
              src="/evcar.jpeg"
              alt="Business owner reviewing EV charging station plans and specifications"
              width={600}
              height={800}
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            As California accelerates toward its goal of 5 million zero-emission vehicles by 2030, business owners are increasingly recognizing the opportunity to install EV charging stations. This comprehensive guide will walk you through everything you need to know to make an informed decision.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Install EV Charging Stations?</h2>
          
          <p className="mb-6 text-gray-700">
            Before diving into the technical details, it's important to understand the compelling reasons why businesses are installing EV chargers.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Key Benefits:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Generate additional revenue from charging fees</li>
              <li>• Increase customer dwell time and spending</li>
              <li>• Attract environmentally conscious customers</li>
              <li>• Enhance your brand's sustainability credentials</li>
              <li>• Future-proof your business for the EV revolution</li>
              <li>• Qualify for government incentives and tax credits</li>
            </ul>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Costs and ROI</h2>
          
          <p className="mb-6 text-gray-700">
            One of the biggest misconceptions about EV charging stations is that they're expensive to install. With the right partner, you can install chargers with zero upfront costs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation Costs Breakdown</h3>
          <p className="mb-6 text-gray-700">
            When working with EV Charge Partners, your costs are:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li><strong>Equipment:</strong> $0 - We provide all charging equipment</li>
            <li><strong>Installation:</strong> $0 - We handle all installation costs</li>
            <li><strong>Permitting:</strong> $0 - We manage all permitting and approvals</li>
            <li><strong>Utility upgrades:</strong> $0 - We cover any necessary electrical upgrades</li>
            <li><strong>Maintenance:</strong> $0 - We provide ongoing maintenance and support</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Potential</h3>
          <p className="mb-6 text-gray-700">
            Your revenue depends on usage, but typical returns include:
          </p>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Charging fees: $0.30-0.50 per kWh</li>
            <li>Increased customer spending: 25-40% more</li>
            <li>Higher customer retention rates</li>
            <li>Competitive advantage over businesses without chargers</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Installation Process</h2>
          
          <p className="mb-6 text-gray-700">
            Understanding the installation process helps set proper expectations and ensures a smooth experience.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Installation Timeline:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Week 1-2: Site assessment and planning</li>
              <li>• Week 3-6: Engineering and permitting (varies by utility)</li>
              <li>• Week 7-8: Installation and testing</li>
              <li>• Week 9: Go live and revenue generation begins</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Handle</h3>
          <p className="mb-6 text-gray-700">
            EV Charge Partners manages the entire process:
          </p>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Site assessment and feasibility study</li>
            <li>Engineering and design</li>
            <li>Permitting and regulatory compliance</li>
            <li>Utility coordination and approvals</li>
            <li>Equipment procurement and installation</li>
            <li>Testing and commissioning</li>
            <li>Ongoing maintenance and support</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Charging Solution</h2>
          
          <p className="mb-6 text-gray-700">
            Different businesses have different needs. We'll help you choose the optimal charging solution for your specific situation.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Charging Station Types</h3>
          <p className="mb-6 text-gray-700">
            We offer several charging options:
          </p>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li><strong>Level 2 Chargers:</strong> 7-22 kW, perfect for destination charging</li>
            <li><strong>DC Fast Chargers:</strong> 50-350 kW, ideal for high-traffic locations</li>
            <li><strong>Smart Chargers:</strong> Networked solutions with advanced features</li>
            <li><strong>Custom Solutions:</strong> Tailored to your specific needs</li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximizing Your Investment</h2>
          
          <p className="mb-6 text-gray-700">
            Once your chargers are installed, there are several strategies to maximize your return on investment.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Your EV Charging</h3>
          <p className="mb-6 text-gray-700">
            Promote your charging stations to attract EV drivers:
          </p>
          
          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>List your location on EV charging apps</li>
            <li>Add EV charging to your website and social media</li>
            <li>Display signage indicating charging availability</li>
            <li>Offer special promotions for EV drivers</li>
            <li>Partner with local EV clubs and organizations</li>
          </ul>

          {/* Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
          
          <p className="mb-8 text-gray-700">
            Installing EV charging stations is one of the smartest business decisions you can make in today's rapidly evolving market. With zero upfront costs and significant revenue potential, there's no better time to get started.
          </p>

          <div className="bg-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Join hundreds of California businesses already earning passive income from EV charging stations. Our team will guide you through every step of the process.
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
            <Link href="/blog/range-anxiety-ev-adoption-california" className="block group">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Range Anxiety: The Real Story Behind EV Adoption in California
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover why range anxiety is becoming less of a concern and how California's charging infrastructure is evolving.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 