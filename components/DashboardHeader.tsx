export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Proactive Location Operations
          </p>
          <h1 className="text-3xl font-bold text-gray-900">City Status Dashboard</h1>
          <p className="text-gray-600 max-w-2xl">
            Monitor alerts, AI recommendations, and place insights from your Cosmic content in one
            unified view.
          </p>
        </div>
      </div>
    </header>
  )
}