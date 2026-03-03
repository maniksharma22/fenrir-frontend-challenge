export default function StatsCard({ title, count, change, color }) {
  return (
    <div className="bg-white dark:bg-darkSurface p-5 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {title}
      </p>

      <div className="flex items-center justify-between">
        <h3 className={`text-2xl font-bold ${color}`}>
          {count}
        </h3>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {change}
        </span>
      </div>
    </div>
  )
}