'use client'

export default function ScrollingBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 text-white py-4 overflow-hidden whitespace-nowrap relative rounded-t-3xl">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse rounded-t-3xl"></div>
      
      <div className="animate-scroll flex items-center relative z-10">
        {/* First set of messages */}
        <span className="text-lg mx-8 flex items-center">
          👥 <span className="text-cyan-300 font-black mx-2">ATTRACT NEW CUSTOMERS</span> 
          <span className="mx-2 font-normal text-white/90">Deliver the best charging experience to all your loyal & new customers</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          💼 <span className="text-cyan-300 font-black mx-2">DRIVE BUSINESS OPPORTUNITIES</span> 
          <span className="mx-2 font-normal text-white/90">Become a go-to spot for companies and travelers seeking locations near charging hubs</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          🌱 <span className="text-cyan-300 font-black mx-2">SUPPORT SUSTAINABLE MOBILITY</span> 
          <span className="mx-2 font-normal text-white/90">Contribute to a cleaner future by enabling access to essential EV infrastructure</span>
        </span>
        {/* Second set for seamless loop */}
        <span className="text-lg mx-8 flex items-center">
          👥 <span className="text-cyan-300 font-black mx-2">ATTRACT NEW CUSTOMERS</span> 
          <span className="mx-2 font-normal text-white/90">Deliver the best charging experience to all your loyal & new customers</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          💼 <span className="text-cyan-300 font-black mx-2">DRIVE BUSINESS OPPORTUNITIES</span> 
          <span className="mx-2 font-normal text-white/90">Become a go-to spot for companies and travelers seeking locations near charging hubs</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          🌱 <span className="text-cyan-300 font-black mx-2">SUPPORT SUSTAINABLE MOBILITY</span> 
          <span className="mx-2 font-normal text-white/90">Contribute to a cleaner future by enabling access to essential EV infrastructure</span>
        </span>
        {/* Third set for extra smoothness */}
        <span className="text-lg mx-8 flex items-center">
          👥 <span className="text-cyan-300 font-black mx-2">ATTRACT NEW CUSTOMERS</span> 
          <span className="mx-2 font-normal text-white/90">Deliver the best charging experience to all your loyal & new customers</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          💼 <span className="text-cyan-300 font-black mx-2">DRIVE BUSINESS OPPORTUNITIES</span> 
          <span className="mx-2 font-normal text-white/90">Become a go-to spot for companies and travelers seeking locations near charging hubs</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          🌱 <span className="text-cyan-300 font-black mx-2">SUPPORT SUSTAINABLE MOBILITY</span> 
          <span className="mx-2 font-normal text-white/90">Contribute to a cleaner future by enabling access to essential EV infrastructure</span>
        </span>
        {/* Fourth set for perfect seamless loop */}
        <span className="text-lg mx-8 flex items-center">
          👥 <span className="text-cyan-300 font-black mx-2">ATTRACT NEW CUSTOMERS</span> 
          <span className="mx-2 font-normal text-white/90">Deliver the best charging experience to all your loyal & new customers</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          💼 <span className="text-cyan-300 font-black mx-2">DRIVE BUSINESS OPPORTUNITIES</span> 
          <span className="mx-2 font-normal text-white/90">Become a go-to spot for companies and travelers seeking locations near charging hubs</span>
        </span>
        <span className="text-lg mx-8 flex items-center">
          🌱 <span className="text-cyan-300 font-black mx-2">SUPPORT SUSTAINABLE MOBILITY</span> 
          <span className="mx-2 font-normal text-white/90">Contribute to a cleaner future by enabling access to essential EV infrastructure</span>
        </span>
      </div>
    </div>
  )
} 