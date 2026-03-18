import type { Alert } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AlertCardProps {
  alert: Alert
}

export default function AlertCard({ alert }: AlertCardProps) {
  const alertType = getMetafieldValue(alert.metadata?.alert_type)
  const severity = getMetafieldValue(alert.metadata?.severity)
  const message = alert.metadata?.message || 'No message provided.'
  const relatedPlace = alert.metadata?.related_place?.title
  const expiresOn = alert.metadata?.expires_on

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Alert</p>
          <h3 className="text-lg font-semibold text-gray-900">{alert.title}</h3>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600">
          {severity || 'Unrated'}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-3">{message}</p>
      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-4">
        <span className="bg-gray-100 px-2 py-1 rounded-full">{alertType || 'General'}</span>
        {relatedPlace && <span>{relatedPlace}</span>}
        {expiresOn && <span>Expires {expiresOn}</span>}
      </div>
    </div>
  )
}