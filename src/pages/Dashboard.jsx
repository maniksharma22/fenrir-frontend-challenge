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
    <div className="px-10 w-full">

      {/* ===== PAGE HEADER ===== */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-3 text-[15px]">
          <span className="font-semibold text-[#111827]">Scan</span>
          <IconHome2 size={16} className="text-[#9CA3AF]" />
          <span className="text-[#9CA3AF] mx-2">/</span>
          <span className="text-[#6B7280]"> Private Assets</span>
          <span className="text-[#9CA3AF] mx-2">/</span>
          <span className="text-[#0CC8A8] font-medium"> New Scan</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-xl border border-[#D1D5DB] bg-white text-[#1F2937] font-medium hover:bg-[#F9FAFB] transition">
            Export Report
          </button>

          <button className="px-6 py-2.5 rounded-xl border border-[#FCA5A5] bg-[#FEE2E2] text-[#DC2626] font-medium hover:bg-[#FECACA] transition">
            Stop Scan
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 h-px bg-[#E5E7EB]" />

      {/* ===== MAIN UNIFIED CONTAINER (LIKE ORIGINAL) ===== */}
      <div className="mt-4 bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl overflow-hidden">

        {/* ORG INFO */}
        <div className="px-8 py-4 border-b border-[#E5E7EB] flex items-center justify-between text-[14px]">
          <div className="flex items-center gap-8 text-[#6B7280]">
            <div>Org: <span className="text-[#111827] font-medium">Project X</span></div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <div>Owner: <span className="text-[#111827] font-medium">Nammagiri</span></div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <div>Total Scans: <span className="text-[#111827] font-medium">100</span></div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <div>Scheduled: <span className="text-[#111827] font-medium">1000</span></div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <div>Rescans: <span className="text-[#111827] font-medium">100</span></div>
            <div className="w-px h-5 bg-[#E5E7EB]" />
            <div>Failed Scans: <span className="text-[#111827] font-medium">100</span></div>
          </div>

          <div className="flex items-center gap-2">
            <IconRefresh size={18} className="text-[#0CC8A8]" />
            <span className="text-[#6B7280]">10 mins ago</span>
          </div>
        </div>

        {/* SEVERITY SECTION */}
        <div className="px-8 py-6 border-b border-[#E5E7EB]">
          <StatsBar />
        </div>

        {/* SEARCH + ACTIONS */}
       <div className="px-8 py-5 top-[20px]">
          <DashboardToolbar search={search} setSearch={setSearch} />
        </div>

        {/* TABLE */}
        <div className="px-4 pt-2 pb-6">
          {loading ? (
            <div className="text-center text-gray-500">
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