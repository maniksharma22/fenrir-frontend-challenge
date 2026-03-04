import { NavLink } from "react-router-dom"
import {
  IconLayoutGridAdd,
  IconClipboardCheck,
  IconFileAnalytics,
  IconCalendarEvent,
  IconBell,
  IconSettings,
  IconInfoCircle,
  IconChevronRight,
  IconX
} from "@tabler/icons-react"

export default function Sidebar({ closeSidebar }) {

  const linkBase =
    "flex items-center gap-4 px-6 py-3 rounded-full text-[15px] font-medium transition-all"

  const activeStyle =
    "bg-[#CDE7E4] dark:bg-[#143B37] text-[#0CC8A8]"

  const inactiveStyle =
    "text-[#64748B] dark:text-gray-400 hover:bg-[#F3F4F6] dark:hover:bg-[#1E1E1E]"

  return (
    <div className="h-screen flex flex-col px-6 py-8 bg-[#F8FAFC] dark:bg-[#111111] text-[#111827] dark:text-white overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-12">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-[20px] font-semibold text-[#0CC8A8]">
            aps
          </span>
        </div>

      </div>

      <nav className="space-y-2">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <IconLayoutGridAdd size={20} stroke={1.6} />
          Dashboard
        </NavLink>

        {/* Projects (inactive page) */}
        <div className={`${linkBase} ${inactiveStyle}`}>
          <IconClipboardCheck size={20} stroke={1.6} />
          Projects
        </div>

        {/* Scans */}
        <NavLink
          to="/scan/1"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <IconFileAnalytics size={20} stroke={1.6} />
          Scans
        </NavLink>

        {/* Schedule */}
        <div className={`${linkBase} ${inactiveStyle}`}>
          <IconCalendarEvent size={20} stroke={1.6} />
          Schedule
        </div>

        <div className="pt-6 mt-6 border-t border-[#E5E7EB] dark:border-[#2A2A2A] space-y-2">

          <div className={`${linkBase} ${inactiveStyle}`}>
            <IconBell size={20} stroke={1.6} />
            Notifications
          </div>

          <div className={`${linkBase} ${inactiveStyle}`}>
            <IconSettings size={20} stroke={1.6} />
            Settings
          </div>

          <div className={`${linkBase} ${inactiveStyle}`}>
            <IconInfoCircle size={20} stroke={1.6} />
            Support
          </div>

        </div>

      </nav>

      {/* PROFILE */}
      <div className="mt-auto pt-6 pb-4 border-t border-[#E5E7EB] dark:border-[#2A2A2A]">

        <div className="flex items-center justify-between gap-3">

          <div className="flex items-center gap-3 min-w-0">

            <img
              src="/avatar1.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />

            <div className="min-w-0">
              <p className="text-[13px] text-[#9CA3AF] truncate">
                admin@edu.com
              </p>

              <p className="text-[15px] font-semibold text-[#111827] dark:text-white truncate">
                Security Lead
              </p>
            </div>

          </div>

          <IconChevronRight
            size={18}
            stroke={1.8}
            className="text-[#64748B] dark:text-gray-400 shrink-0"
          />

        </div>

      </div>

    </div>
  )
}