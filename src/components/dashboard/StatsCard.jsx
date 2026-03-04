import { ArrowUp, ArrowDown } from "lucide-react"

export default function StatsCard({
  title,
  count,
  change,
  icon,
  iconBg,
  changeType
}) {
  return (
    <div className="py-3">

      {/* Title + Icon */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-6">
          <p className="text-[18px] font-medium text-[#8A8A8A]">
            {title}
          </p>

          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
            {icon}
          </div>
        </div>
      </div>

      {/* Number + Change */}
      <div className="flex items-baseline gap-2">
        <h3 className="text-[34px] font-semibold text-[#2B2B2B] leading-none">
          {count}
        </h3>

        <div
          className={`flex items-center gap-1 text-[13px] font-medium leading-none ${
            changeType === "up"
              ? "text-[#E11D48]"
              : "text-[#15803D]"
          }`}
        >
          {changeType === "up" ? (
            <ArrowUp size={13} strokeWidth={2.2} className="mt-[1px]" />
          ) : (
            <ArrowDown size={13} strokeWidth={2.2} className="mt-[1px]" />
          )}
          {change}
        </div>
      </div>

    </div>
  )
}