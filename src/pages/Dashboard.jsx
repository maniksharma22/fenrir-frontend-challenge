import { useEffect, useState } from "react"
import { scans } from "../data/scans"
import { IconRefresh, IconHome2 } from "@tabler/icons-react"

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
    <div className="px-4 md:px-10 w-full">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-6">
        <div className="flex flex-wrap items-center gap-2 text-[14px] md:text-[15px] ml-12 md:ml-0">
          <span className="font-semibold text-[#111827] dark:text-white">Scan</span>
          <IconHome2 size={16} className="text-[#9CA3AF]" />
          <span className="text-[#9CA3AF]">/</span>
          <span className="text-[#6B7280] dark:text-gray-400">Private Assets</span>
          <span className="text-[#9CA3AF]">/</span>
          <span className="text-[#0CC8A8] font-medium">New Scan</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 md:px-6 py-2 rounded-xl border border-[#D1D5DB] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] text-[#1F2937] dark:text-white font-medium hover:bg-[#F9FAFB] dark:hover:bg-[#222] transition text-sm md:text-base">
            Export Report
          </button>

          <button className="px-4 md:px-6 py-2 rounded-xl border border-[#FCA5A5] bg-[#FEE2E2] text-[#DC2626] font-medium hover:bg-[#FECACA] transition text-sm md:text-base">
            Stop Scan
          </button>
        </div>
      </div>

      <div className="mt-6 h-px bg-[#E5E7EB] dark:bg-[#2A2A2A]" />

      {/* MAIN */}
      <div className="mt-4 bg-[#F3F4F6] dark:bg-[#141414] border border-[#E5E7EB] dark:border-[#2A2A2A] rounded-2xl overflow-hidden">

        {/* ORG INFO */}
        <div className="px-4 md:px-8 py-4 border-b border-[#E5E7EB] dark:border-[#2A2A2A] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] md:text-[14px]">

          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[#6B7280] dark:text-gray-400">

            <div>Org: <span className="text-[#111827] dark:text-white font-medium">Project X</span></div>
            <div className="hidden md:block w-px h-5 bg-[#E5E7EB] dark:bg-[#2A2A2A]" />

            <div>Owner: <span className="text-[#111827] dark:text-white font-medium">Nammagiri</span></div>
            <div className="hidden md:block w-px h-5 bg-[#E5E7EB] dark:bg-[#2A2A2A]" />

            <div>Total Scans: <span className="text-[#111827] dark:text-white font-medium">100</span></div>
            <div className="hidden md:block w-px h-5 bg-[#E5E7EB] dark:bg-[#2A2A2A]" />

            <div>Scheduled: <span className="text-[#111827] dark:text-white font-medium">1000</span></div>
            <div className="hidden md:block w-px h-5 bg-[#E5E7EB] dark:bg-[#2A2A2A]" />

            <div>Rescans: <span className="text-[#111827] dark:text-white font-medium">100</span></div>
            <div className="hidden md:block w-px h-5 bg-[#E5E7EB] dark:bg-[#2A2A2A]" />

            <div>Failed Scans: <span className="text-[#111827] dark:text-white font-medium">100</span></div>

          </div>

          <div className="flex items-center gap-2">
            <IconRefresh size={18} className="text-[#0CC8A8]" />
            <span className="text-[#6B7280] dark:text-gray-400">10 mins ago</span>
          </div>
        </div>

        {/* STATS */}
        <div className="px-4 md:px-8 py-6 border-b border-[#E5E7EB] dark:border-[#2A2A2A]">
          <StatsBar />
        </div>

        {/* SEARCH */}
        <div className="px-4 md:px-8 py-5">
          <DashboardToolbar search={search} setSearch={setSearch} />
        </div>

        {/* TABLE */}
        <div className="px-2 md:px-4 pt-2 pb-6 overflow-x-auto">
          {loading ? (
            <div className="text-center text-gray-500 dark:text-gray-400">
              Loading scans...
            </div>
          ) : (
            <ScanTable scans={filteredScans} />
          )}
        </div>

      </div>

    </div>
  )
}