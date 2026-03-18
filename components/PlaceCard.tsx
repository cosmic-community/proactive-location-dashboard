import type { Place } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PlaceCardProps {
  place: Place
}

export default function PlaceCard({ place }: PlaceCardProps) {
  const category = getMetafieldValue(place.metadata?.category)
  const description = place.metadata?.short_description || 'No description provided.'
  const address = place.metadata?.address
  const heroImage = place.metadata?.hero_image?.imgix_url

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {heroImage && (
        <img
          src={`${heroImage}?w=1200&h=600&fit=crop&auto=format,compress`}
          alt={place.title}
          width={600}
          height={300}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-gray-500">Place</p>
        <h3 className="text-lg font-semibold text-gray-900">{place.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-4">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{category || 'General'}</span>
          {address && <span>{address}</span>}
        </div>
      </div>
    </div>
  )
}