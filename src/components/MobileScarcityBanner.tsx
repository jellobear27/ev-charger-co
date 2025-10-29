'use client'

export default function MobileScarcityBanner() {
  return (
    <div className="md:hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white p-3 text-center">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span className="text-emerald-300">✨</span>
        <span className="font-semibold">Free Installation Available</span>
        <span className="text-emerald-300">•</span>
        <span>$0 Setup Cost</span>
        <span className="text-emerald-300">•</span>
        <span className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>Accepting Applications</span>
        </span>
      </div>
    </div>
  )
} 