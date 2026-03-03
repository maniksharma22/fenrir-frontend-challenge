import { useEffect, useState } from "react"
import { scans } from "../data/scans"

import StatsBar from "../components/dashboard/StatsBar"
import DashboardToolbar from "../components/dashboard/DashboardToolbar"
import ScanTable from "../components/dashboard/ScanTable"

export default function Dashboard() {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  const filteredScans = scans.filter((scan) =>
    scan.name.toLowerCase().includes(search.toLowerCase()) ||
    scan.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">
      
      <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Org: Project X | Owner: Nammagiri | Total Scans: 100 | Scheduled: 1000 | Rescans: 100 | Failed Scans: 100
        </p>
      </div>

      <StatsBar />

      <DashboardToolbar search={search} setSearch={setSearch} />

      {loading ? (
        <div className="bg-white dark:bg-darkSurface p-10 rounded-xl shadow-sm text-center text-gray-500 dark:text-gray-400">
          Loading scans...
        </div>
      ) : (
        <ScanTable scans={filteredScans} />
      )}

    </div>
  )
}