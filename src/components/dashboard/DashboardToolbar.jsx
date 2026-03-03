export default function DashboardToolbar({ search, setSearch }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white dark:bg-darkSurface p-4 rounded-xl shadow-sm">
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search scans by name or type..."
        className="w-full md:w-80 px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-darkBg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <div className="flex items-center gap-3">
        
        <button className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#242424] transition">
          Filter
        </button>

        <button className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#242424] transition">
          Column
        </button>

        <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition">
          New Scan
        </button>

      </div>

    </div>
  )
}