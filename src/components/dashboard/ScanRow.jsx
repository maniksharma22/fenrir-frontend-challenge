import { useNavigate } from "react-router-dom"
import StatusChip from "./StatusChip"
import SeverityBadge from "./SeverityBadge"

export default function ScanRow({ scan }) {
  const navigate = useNavigate()

  return (
    <tr
      onClick={() => navigate(`/scan/${scan.id}`)}
      className="cursor-pointer border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#242424] transition"
    >
      <td className="p-4 font-medium text-gray-900 dark:text-white">
        {scan.name}
      </td>

      <td className="p-4 text-gray-500 dark:text-gray-400">
        {scan.type}
      </td>

      <td className="p-4">
        <StatusChip status={scan.status} />
      </td>

      <td className="p-4">
        {scan.progress}%
      </td>

      <td className="p-4 flex gap-2">
        <SeverityBadge value={scan.vulnerabilities.critical} type="critical" />
        <SeverityBadge value={scan.vulnerabilities.high} type="high" />
        <SeverityBadge value={scan.vulnerabilities.medium} type="medium" />
        <SeverityBadge value={scan.vulnerabilities.low} type="low" />
      </td>

      <td className="p-4 text-gray-500 dark:text-gray-400">
        {scan.lastScan}
      </td>
    </tr>
  )
}