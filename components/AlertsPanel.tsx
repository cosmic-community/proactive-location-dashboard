'use client'

import { useMemo, useState } from 'react'
import type { Alert } from '@/types'
import AlertCard from '@/components/AlertCard'
import { getMetafieldValue } from '@/lib/cosmic'

interface AlertsPanelProps {
  alerts: Alert[]
}

export default function AlertsPanel({ alerts }: AlertsPanelProps) {
  const [query, setQuery] = useState('')
  const [severityFilter, setSeverityFilter] = useState('')

  const filteredAlerts = useMemo(() => {
    if (!alerts || alerts.length === 0) return []
    return alerts.filter((alert) => {
      const severity = getMetafieldValue(alert.metadata?.severity).toLowerCase()
      const matchesSeverity = severityFilter ? severity === severityFilter : true
      const matchesQuery = alert.title.toLowerCase().includes(query.toLowerCase())
      return matchesSeverity && matchesQuery
    })
  }, [alerts, query, severityFilter])

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Alerts</h2>
          <p className="text-sm text-gray-500">Monitor current advisories across the city.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search alerts"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={severityFilter}
            onChange={(event) => setSeverityFilter(event.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="">All Severities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      {filteredAlerts.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-500">
          No alerts match your filters.
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      )}
    </section>
  )
}