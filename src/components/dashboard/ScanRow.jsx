import { useNavigate } from "react-router-dom"
import StatusChip from "./StatusChip"

export default function ScanRow({ scan }) {
  const navigate = useNavigate()

  return (
    <tr
      onClick={() => navigate(`/scan/${scan.id}`)}
      className="border-b border-[#E5E7EB] dark:border-[#2A2A2A] 
                 hover:bg-[#F9FAFB] dark:hover:bg-[#1B1B1B] 
                 transition cursor-pointer"
    >
      {/* Name */}
      <td className="px-8 py-6 font-medium text-[#111827] dark:text-white">
        {scan.name}
      </td>

      {/* Type */}
      <td className="px-8 py-6 text-[#6B7280] dark:text-[#9CA3AF]">
        {scan.type}
      </td>

      {/* Status */}
      <td className="px-8 py-6">
        <StatusChip status={scan.status} />
      </td>

      {/* Progress */}
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="w-32 h-2.5 bg-[#E5E7EB] dark:bg-[#2A2A2A] rounded-full">
            <div
              className={`h-2.5 rounded-full ${
                scan.status === "Failed"
                  ? "bg-red-500"
                  : "bg-[#1F9D94]"
              }`}
              style={{ width: `${scan.progress}%` }}
            />
          </div>

          <span className="text-sm font-medium text-[#374151] dark:text-[#D1D5DB]">
            {scan.progress}%
          </span>
        </div>
      </td>

      {/* Vulnerabilities */}
      <td className="px-8 py-6 text-center">
        <div className="flex gap-3 justify-center">
          {scan.vulnerabilities.critical > 0 && (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-md">
              {scan.vulnerabilities.critical}
            </span>
          )}

          {scan.vulnerabilities.high > 0 && (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-500 rounded-md">
              {scan.vulnerabilities.high}
            </span>
          )}

          {scan.vulnerabilities.medium > 0 && (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-md">
              {scan.vulnerabilities.medium}
            </span>
          )}

          {scan.vulnerabilities.low > 0 && (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-md">
              {scan.vulnerabilities.low}
            </span>
          )}
        </div>
      </td>

      {/* Last Scan */}
      <td className="px-8 py-6 text-[#6B7280] dark:text-[#9CA3AF]">
        {scan.lastScan}
      </td>
    </tr>
  )
}