import { useParams } from "react-router-dom"
import { scans } from "../data/scans"

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
      <div className="text-red-500">
        Scan not found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">

      <ProgressSection progress={scan.progress} />

      <MetadataRow scan={scan} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ConsolePanel />
        </div>
        <div>
          <FindingLog />
        </div>
      </div>

      <BottomStatusBar />

    </div>
  )
}