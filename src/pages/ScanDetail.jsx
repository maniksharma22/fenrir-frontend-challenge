import { useParams } from "react-router-dom"
import { scans } from "../data/scans"
import { IconHome } from "@tabler/icons-react"
import { IconHome2 } from "@tabler/icons-react"

import ProgressSection from "../components/scan/ProgressSection"
import MetadataRow from "../components/scan/MetadataRow"
import ConsolePanel from "../components/scan/ConsolePanel"
import FindingLog from "../components/scan/FindingLog"
import BottomStatusBar from "../components/scan/BottomStatusBar"

export default function ScanDetail() {
  const { scanId } = useParams()

  const scan = scans.find(
    (item) => item.id === Number(scanId)
  )

  if (!scan) {
    return (
      <div className="p-6 text-red-500">
        Scan not found
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#0F0F0F] min-h-screen flex flex-col gap-6">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-[15px]">
          <span className="font-semibold text-[#111827] dark:text-white">
            Scan
          </span>

          <IconHome2 size={16} className="text-[#9CA3AF]" />

          <span className="text-[#9CA3AF] mx-2">/</span>

          <span className="text-[#6B7280] dark:text-gray-400">
            Private Assets
          </span>

          <span className="text-[#9CA3AF] mx-2">/</span>

          <span className="text-[#0CC8A8] font-medium">
            New Scan
          </span>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border border-gray-300 dark:border-[#2A2A2A] rounded-lg">
            Export Report
          </button>

          <button className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg">
            Stop Scan
          </button>
        </div>

      </div>

      {/* TOP UNIFIED CARD */}
      <div className="bg-[#F8FAFC] dark:bg-[#141414] rounded-2xl p-6 flex flex-col gap-6 border border-gray-200 dark:border-[#2A2A2A]">

        <ProgressSection progress={scan.progress} />

        <MetadataRow scan={scan} />

      </div>

      {/* CONSOLE + FINDING SECTION */}
      <div className="bg-white dark:bg-[#141414] rounded-2xl border border-gray-200 dark:border-[#2A2A2A] overflow-hidden flex h-[520px]">

        {/* LEFT SIDE */}
        <div className="w-2/3 border-r border-gray-200 dark:border-[#2A2A2A]">
          <ConsolePanel />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/3 bg-gray-50 dark:bg-[#1A1A1A]">
          <FindingLog />
        </div>

      </div>

      <BottomStatusBar />

    </div>
  )
}