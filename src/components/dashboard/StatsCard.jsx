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
        <div className="flex items-center gap-4 md:gap-6 flex-wrap">

          <p className="text-[16px] md:text-[18px] font-medium text-[#8A8A8A]">
            {title}
          </p>

          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
            {icon}
          </div>

        </div>
      </div>

      {/* Number + Change */}
      <div className="flex flex-wrap items-baseline gap-2">

        <h3 className="text-[28px] md:text-[34px] font-semibold text-[#2B2B2B] leading-none">
          {count}
        </h3>

        <div
          className={`flex items-center gap-1 text-[12px] md:text-[13px] font-medium leading-none ${
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