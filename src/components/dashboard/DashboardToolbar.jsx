import {
  IconSearch,
  IconAdjustmentsHorizontal,
  IconLayoutColumns,
  IconPlus,
  IconX
} from "@tabler/icons-react"

export default function DashboardToolbar({ search, setSearch }) {
  return (
    <div className="px-4 md:px-8 pt-4 pb-0">

      <div className="flex flex-col md:flex-row md:items-center gap-4">

        {/* Search */}
        <div className="relative flex-1 w-full">

          <IconSearch
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scans by name or type..."
            className="w-full pl-11 pr-10 py-3 rounded-xl
                       border border-[#E5E7EB] dark:border-[#2A2A2A]
                       bg-[#F9FAFB] dark:bg-[#1A1A1A]
                       text-sm text-[#111827] dark:text-white
                       focus:outline-none
                       focus:ring-2 focus:ring-[#0CC8A8]/20"
          />

          {search && (
            <IconX
              size={16}
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         cursor-pointer text-[#9CA3AF] hover:text-gray-600"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 w-full md:w-auto">

          <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-xl 
                             border border-[#E5E7EB] dark:border-[#2A2A2A]
                             bg-white dark:bg-[#1A1A1A]
                             text-[#6B7280] dark:text-gray-300
                             text-sm hover:bg-[#F9FAFB] dark:hover:bg-[#222]">
            <IconAdjustmentsHorizontal size={16} stroke={1.6} />
            Filter
          </button>

          <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-xl 
                             border border-[#E5E7EB] dark:border-[#2A2A2A]
                             bg-white dark:bg-[#1A1A1A]
                             text-[#6B7280] dark:text-gray-300
                             text-sm hover:bg-[#F9FAFB] dark:hover:bg-[#222]">
            <IconLayoutColumns size={16} stroke={1.6} />
            Column
          </button>

          <button className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 rounded-xl 
                             bg-[#0CC8A8] text-white text-sm hover:bg-[#0BB79A]">
            <IconPlus size={16} />
            New Scan
          </button>

        </div>

      </div>
    </div>
  )
}