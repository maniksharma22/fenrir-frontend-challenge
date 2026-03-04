import ScanRow from "./ScanRow"

export default function ScanTable({ scans }) {
  return (
    <div className="bg-white dark:bg-[#141414] 
                    rounded-2xl 
                    border border-[#E5E7EB] dark:border-[#2A2A2A] 
                    overflow-x-auto">

      <table className="min-w-[720px] w-full text-left">

        <thead className="bg-[#F9FAFB] dark:bg-[#1A1A1A] 
                          border-b border-[#E5E7EB] dark:border-[#2A2A2A]">
          <tr className="text-xs md:text-sm text-[#6B7280] dark:text-gray-400 whitespace-nowrap">
            <th className="px-4 md:px-8 py-3 md:py-4 font-medium">Scan Name</th>
            <th className="px-4 md:px-8 py-3 md:py-4 font-medium">Type</th>
            <th className="px-4 md:px-8 py-3 md:py-4 font-medium">Status</th>
            <th className="px-4 md:px-8 py-3 md:py-4 font-medium">Progress</th>
            <th className="px-4 md:px-8 py-3 md:py-4 font-medium">Vulnerability</th>
            <th className="px-4 md:px-8 py-3 md:py-4 font-medium">Last Scan</th>
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-[#141414] text-[#111827] dark:text-white">
          {scans.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="px-4 md:px-8 py-8 text-center text-[#6B7280] dark:text-gray-400"
              >
                No scans found.
              </td>
            </tr>
          ) : (
            scans.map((scan) => (
              <ScanRow key={scan.id} scan={scan} />
            ))
          )}
        </tbody>

      </table>
    </div>
  )
}