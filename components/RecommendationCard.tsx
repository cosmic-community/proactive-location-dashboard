import type { Recommendation } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface RecommendationCardProps {
  recommendation: Recommendation
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const priority = getMetafieldValue(recommendation.metadata?.priority)
  const placeTitle = recommendation.metadata?.place?.title || 'Unknown place'
  const reason = recommendation.metadata?.reason || 'No reason provided.'
  const score = recommendation.metadata?.ai_score

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Recommendation</p>
          <h3 className="text-lg font-semibold text-gray-900">{recommendation.title}</h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
          {priority || 'Normal'}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-3">{reason}</p>
      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-4">
        <span className="bg-gray-100 px-2 py-1 rounded-full">{placeTitle}</span>
        {score !== undefined && <span>AI Score {score.toFixed(1)}</span>}
        {recommendation.metadata?.suggested_for && (
          <span>{recommendation.metadata.suggested_for}</span>
        )}
      </div>
    </div>
  )
}