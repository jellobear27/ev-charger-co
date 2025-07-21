interface BenefitCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay: number
}

export default function BenefitCard({ title, description, icon, color, delay }: BenefitCardProps) {
  return (
    <div
      className={`bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl border-2 border-transparent hover:border-${color}-200`}
      style={{ minHeight: '180px' }}
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}>
        <div className="w-8 h-8 sm:w-10 sm:h-10 text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{description}</p>
    </div>
  )
} 