import ScanRow from "./ScanRow"

export default function ScanTable({ scans }) {
  return (
    <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full text-left">
        <thead className="border-b border-border-light dark:border-border-dark">
          <tr className="text-sm text-gray-500 dark:text-gray-400">
            <th className="p-4">Scan Name</th>
            <th className="p-4">Type</th>
            <th className="p-4">Status</th>
            <th className="p-4">Progress</th>
            <th className="p-4">Vulnerability</th>
            <th className="p-4">Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {scans.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-6 text-center text-gray-500 dark:text-gray-400">
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