import type { Recommendation } from '@/types'
import RecommendationCard from '@/components/RecommendationCard'

interface RecommendationsPanelProps {
  recommendations: Recommendation[]
}

export default function RecommendationsPanel({ recommendations }: RecommendationsPanelProps) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Recommendations</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-500">
          No recommendations available.
        </div>
      </section>
    )
  }

  const sorted = [...recommendations].sort((a, b) => {
    const scoreA = a.metadata?.ai_score || 0
    const scoreB = b.metadata?.ai_score || 0
    return scoreB - scoreA
  })

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Recommendations</h2>
        <p className="text-sm text-gray-500">
          AI-curated picks ranked by score and priority.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {sorted.map((recommendation) => (
          <RecommendationCard key={recommendation.id} recommendation={recommendation} />
        ))}
      </div>
    </section>
  )
}