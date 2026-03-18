export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type?: string
  created_at?: string
  modified_at?: string
}

export interface SelectOption {
  key?: string
  value?: string
}

export type AlertTypeKey = 'traffic' | 'weather' | 'safety'
export type SeverityKey = 'low' | 'medium' | 'high'
export type PlaceCategoryKey = 'attraction' | 'restaurant' | 'hospital' | 'transport'
export type RecommendationPriorityKey = 'high' | 'medium' | 'low'

export interface Place extends CosmicObject {
  type?: 'places'
  metadata?: {
    name?: string
    category?: SelectOption
    short_description?: string
    address?: string
    latitude?: number
    longitude?: number
    hero_image?: {
      url: string
      imgix_url: string
    }
    insights?: string
  }
}

export interface Alert extends CosmicObject {
  type?: 'alerts'
  metadata?: {
    title?: string
    alert_type?: SelectOption
    severity?: SelectOption
    message?: string
    related_place?: Place
    expires_on?: string
  }
}

export interface Recommendation extends CosmicObject {
  type?: 'recommendations'
  metadata?: {
    title?: string
    place?: Place
    reason?: string
    priority?: SelectOption
    ai_score?: number
    suggested_for?: string
  }
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}