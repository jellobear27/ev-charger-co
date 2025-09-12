'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'



const blogPosts = [
  {
    id: 1,
    title: "Range Anxiety: The Real Story Behind EV Adoption in California",
    excerpt: "Discover why range anxiety is becoming less of a concern and how California's charging infrastructure is evolving to support the EV revolution.",
    category: "EV Adoption",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/range.jpeg",
    slug: "range-anxiety-ev-adoption-california",
    featured: true
  },
  {
    id: 2,
    title: "How California Businesses Are Profiting from EV Charging Stations",
    excerpt: "Real stories from California business owners who've transformed their parking lots into revenue-generating EV charging destinations.",
    category: "Business Opportunity",
    date: "2024-01-22",
    readTime: "7 min read",
    image: "/opportunity.jpeg",
    slug: "california-businesses-profiting-ev-charging",
    featured: true
  },
  {
    id: 3,
    title: "The Complete Guide to EV Charging for Business Owners",
    excerpt: "Everything you need to know about installing EV chargers at your business, from costs to benefits to implementation strategies.",
    category: "Business Guide",
    date: "2024-01-29",
    readTime: "8 min read",
    image: "/evcar.jpeg",
    slug: "complete-guide-ev-charging-business-owners",
    featured: false
  },
  {
    id: 4,
    title: "Are You a Mom & Pop Business Looking to Make Free Extra Income?",
    excerpt: "Generate FREE foot traffic while earning passive income with EV charging. Perfect for churches, coffee shops, shopping malls and restaurants.",
    category: "Business Opportunity",
    date: "2024-02-05",
    readTime: "6 min read",
    image: "/mompop.jpeg",
    slug: "mom-and-pop-businesses-free-income-ev-charging",
    featured: true
  },
  {
    id: 5,
    title: "Coffee Shops & Restaurants: The EV Charging Goldmine",
    excerpt: "Why food service businesses are perfectly positioned to profit from EV charging. Discover the revenue strategies that work.",
    category: "Restaurant Strategy",
    date: "2024-02-08",
    readTime: "7 min read",
    image: "/coffee.jpeg",
    slug: "coffee-shops-restaurants-ev-charging-goldmine",
    featured: true
  }
]

const categories = [
  "All",
  "EV Adoption",
  "Business Opportunity", 
  "Business Guide",
  "Restaurant Strategy"
]

export default function Blog() {
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    setSubscribeStatus('idle')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: subscribeEmail }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubscribeStatus('success')
        setSubscribeEmail('')
      } else {
        setSubscribeStatus('error')
        console.error('Subscription error:', result.error)
      }
    } catch (error) {
      setSubscribeStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubscribing(false)
    }
  }

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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6 font-gelasio">
            EV Charging Insights & News
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Stay ahead of the electric vehicle revolution with expert insights, industry news, and practical tips for business owners
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
            <p className="text-white font-semibold">Latest: California EV Infrastructure Expansion 2024</p>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-gelasio">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-green-600 font-semibold hover:text-green-700">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* All Articles */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-gelasio">Latest Articles</h2>
          
          <div className="flex md:space-x-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-green-600 font-semibold hover:text-green-700">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-80">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href="#"
                      className="block text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe</h3>
                  <p className="text-gray-800 mb-4">Get the latest EV charging insights delivered to your inbox.</p>
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button 
                      type="submit"
                      disabled={isSubscribing}
                      className={`w-full px-4 py-2 rounded-lg transition-colors ${
                        isSubscribing 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700'
                      } text-white`}
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </form>
                  {subscribeStatus === 'success' && (
                    <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                      ✅ Successfully subscribed!
                    </div>
                  )}
                  {subscribeStatus === 'error' && (
                    <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
                      ❌ Subscription failed. Please try again.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the EV Revolution?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Transform your business into an EV charging destination and start earning passive income
          </p>
          <Link href="/apply">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
              Apply to Host a Station
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
