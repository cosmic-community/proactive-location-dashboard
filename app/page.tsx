import DashboardHeader from '@/components/DashboardHeader'
import StatCard from '@/components/StatCard'
import AlertsPanel from '@/components/AlertsPanel'
import RecommendationsPanel from '@/components/RecommendationsPanel'
import PlacesPanel from '@/components/PlacesPanel'
import { getAlerts, getRecommendations, getPlaces } from '@/lib/cosmic'
import type { Alert, Recommendation, Place } from '@/types'

export default async function HomePage() {
  const [alerts, recommendations, places]: [Alert[], Recommendation[], Place[]] = await Promise.all([
    getAlerts(),
    getRecommendations(),
    getPlaces()
  ])

  const activeAlerts = alerts.filter((alert) => Boolean(alert))
  const topRecommendations = recommendations.filter((rec) => Boolean(rec))
  const listedPlaces = places.filter((place) => Boolean(place))

  return (
    <main className="min-h-screen">
      <DashboardHeader />
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Active Alerts" value={activeAlerts.length} subtitle="Current advisories" />
          <StatCard
            title="Recommendations"
            value={topRecommendations.length}
            subtitle="AI curated picks"
          />
          <StatCard title="Places" value={listedPlaces.length} subtitle="Managed locations" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 space-y-10">
        <AlertsPanel alerts={activeAlerts} />
        <RecommendationsPanel recommendations={topRecommendations} />
        <PlacesPanel places={listedPlaces} />
      </section>
    </main>
  )
}