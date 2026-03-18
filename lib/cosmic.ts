import { createBucketClient } from '@cosmicjs/sdk'
import type { Alert, Recommendation, Place, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getAlerts(): Promise<Alert[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'alerts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return (response as CosmicResponse<Alert>).objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch alerts')
  }
}

export async function getRecommendations(): Promise<Recommendation[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'recommendations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return (response as CosmicResponse<Recommendation>).objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch recommendations')
  }
}

export async function getPlaces(): Promise<Place[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'places' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return (response as CosmicResponse<Place>).objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch places')
  }
}