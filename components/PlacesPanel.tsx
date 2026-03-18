'use client'

import { useMemo, useState } from 'react'
import type { Place } from '@/types'
import PlaceCard from '@/components/PlaceCard'
import { getMetafieldValue } from '@/lib/cosmic'

interface PlacesPanelProps {
  places: Place[]
}

export default function PlacesPanel({ places }: PlacesPanelProps) {
  const [categoryFilter, setCategoryFilter] = useState('')

  const filteredPlaces = useMemo(() => {
    if (!places || places.length === 0) return []
    return places.filter((place) => {
      const category = getMetafieldValue(place.metadata?.category)
      return categoryFilter ? category.toLowerCase() === categoryFilter : true
    })
  }, [places, categoryFilter])

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Places</h2>
          <p className="text-sm text-gray-500">
            Manage location details, categories, and visual assets.
          </p>
        </div>
        <select
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        >
          <option value="">All Categories</option>
          <option value="attraction">Attraction</option>
          <option value="restaurant">Restaurant</option>
          <option value="hospital">Hospital</option>
          <option value="transport">Transport</option>
        </select>
      </div>
      {filteredPlaces.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-500">
          No places match your filter.
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      )}
    </section>
  )
}