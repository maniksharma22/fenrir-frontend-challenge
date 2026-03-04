export default function FindingCard({
  severity,
  title,
  endpoint,
  description,
  time,
}) {
  const severityStyles = {
    Critical: "bg-red-100 text-red-600",
    High: "bg-orange-100 text-orange-600",
    Medium: "bg-yellow-100 text-yellow-600",
  }

  return (
    <div className="border border-gray-200 rounded-lg p-3 space-y-2">

      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span
          className={`px-2 py-[2px] text-[11px] font-medium rounded ${severityStyles[severity]}`}
        >
          {severity}
        </span>

        <span className="text-[11px] text-gray-400">
          {time}
        </span>
      </div>

      {/* Title */}
      <p className="text-sm font-semibold text-gray-900">
        {title}
      </p>

      {/* Endpoint */}
      <p className="text-xs text-[#00C2A8] font-mono">
        {endpoint}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">
        {description}
      </p>

    </div>
  )
}