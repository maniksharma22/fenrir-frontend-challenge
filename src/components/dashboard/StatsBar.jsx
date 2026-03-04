import {
  Ban,
  AlertTriangle
} from "lucide-react"

import StatsCard from "./StatsCard"

export default function StatsBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

      {/* Critical */}
      <StatsCard
        title="Critical Severity"
        count="86"
        change="+2% increase than yesterday"
        changeType="up"
        icon={
          <Ban size={14} strokeWidth={2.2} className="text-[#C2185B]" />
        }
        iconBg="bg-[#F8DDE8]"
      />

      {/* High */}
      <StatsCard
        title="High Severity"
        count="16"
        change="+0.9% increase than yesterday"
        changeType="up"
        icon={
          <AlertTriangle size={14} strokeWidth={2.2} className="text-[#C05600]" />
        }
        iconBg="bg-[#F6E3D4]"
      />

      {/* Medium */}
      <StatsCard
        title="Medium Severity"
        count="26"
        change="+0.9% decrease than yesterday"
        changeType="down"
        icon={
          <AlertTriangle size={14} strokeWidth={2.2} className="text-[#B08900]" />
        }
        iconBg="bg-[#F4EBC8]"
      />

      {/* Low */}
      <StatsCard
        title="Low Severity"
        count="16"
        change="+0.9% increase than yesterday"
        changeType="up"
        icon={
          <div className="relative text-[#2F5FE3]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.8" y2="16.8" />
              <line x1="11" y1="7.5" x2="11" y2="13" />
              <circle cx="11" cy="16" r="1.3" fill="currentColor" stroke="none" />
            </svg>
          </div>
        }
        iconBg="bg-[#D9E4F7]"
      />

    </div>
  )
}