interface StatCardProps {
  title: string
  value: number
  subtitle: string
}

export default function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-3xl font-semibold text-gray-900 mt-2">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  )
}