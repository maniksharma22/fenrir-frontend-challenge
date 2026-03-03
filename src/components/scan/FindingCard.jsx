export default function FindingCard({
  severity,
  title,
  endpoint,
  description,
  time,
}) {
  const severityStyles = {
    Critical: "bg-severity-critical/10 text-severity-critical",
    High: "bg-severity-high/10 text-severity-high",
    Medium: "bg-severity-medium/10 text-severity-medium",
  }

  return (
    <div className="border border-border-light dark:border-border-dark p-4 rounded-xl space-y-3 hover:shadow-md transition">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded ${severityStyles[severity]}`}
        >
          {severity}
        </span>

        <span className="text-xs text-gray-500 dark:text-gray-400">
          {time}
        </span>
      </div>

      {/* Title */}
      <p className="font-semibold text-gray-900 dark:text-white">
        {title}
      </p>

      {/* Endpoint */}
      <p className="text-sm text-primary font-mono">
        {endpoint}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>

    </div>
  )
}