import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'EV Charging Blog - Latest News, Tips & Industry Insights | EV Charge Partner',
  description: 'Stay updated with the latest EV charging news, tips for business owners, and insights on the electric vehicle revolution. Expert content on EV adoption, charging infrastructure, and green business opportunities.',
  keywords: 'EV charging blog, electric vehicle news, EV charging tips, business EV charging, California EV charging, green business, EV infrastructure',
}

const blogPosts = [
  {
    id: 1,
    title: "Range Anxiety: The Real Story Behind EV Adoption in California",
    excerpt: "Discover why range anxiety is becoming less of a concern and how California's charging infrastructure is evolving to support the EV revolution.",
    category: "EV Adoption",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/evcharge.jpeg",
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
    image: "/evcharge.jpeg",
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
    image: "/evcharge.jpeg",
    slug: "complete-guide-ev-charging-business-owners",
    featured: false
  },
  {
    id: 4,
    title: "California's EV Infrastructure: What's Coming in 2024",
    excerpt: "An inside look at California's ambitious plans to expand EV charging infrastructure and what it means for business owners.",
    category: "Infrastructure",
    date: "2024-02-05",
    readTime: "6 min read",
    image: "/evcharge.jpeg",
    slug: "california-ev-infrastructure-2024",
    featured: false
  },
  {
    id: 5,
    title: "Going Green: How EV Charging Boosts Your Business's Environmental Credentials",
    excerpt: "Learn how hosting EV chargers can enhance your brand's sustainability profile and attract eco-conscious customers.",
    category: "Sustainability",
    date: "2024-02-12",
    readTime: "4 min read",
    image: "/evcharge.jpeg",
    slug: "ev-charging-boosts-business-environmental-credentials",
    featured: false
  },
  {
    id: 6,
    title: "The Economics of EV Charging: Understanding Revenue Potential",
    excerpt: "Break down the numbers: how much can you really earn from hosting EV chargers? Real data and projections.",
    category: "Revenue",
    date: "2024-02-19",
    readTime: "6 min read",
    image: "/evcharge.jpeg",
    slug: "economics-ev-charging-revenue-potential",
    featured: false
  }
]

const categories = [
  "All",
  "EV Adoption",
  "Business Opportunity", 
  "Infrastructure",
  "Sustainability",
  "Revenue",
  "Business Guide"
]

export default function Blog() {
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
          <h1 className="text-5xl font-bold text-white mb-6">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
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

      {/* All Posts */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-32">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
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
                  <p className="text-gray-600 mb-4">Get the latest EV charging insights delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
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