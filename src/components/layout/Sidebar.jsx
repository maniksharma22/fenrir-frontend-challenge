import { NavLink } from "react-router-dom"
import {
  IconLayoutGridAdd,
  IconClipboardCheck,
  IconFileAnalytics,
  IconCalendarEvent,
  IconBell,
  IconSettings,
  IconInfoCircle,
  IconChevronRight
} from "@tabler/icons-react"

export default function Sidebar() {

  const linkBase =
    "flex items-center gap-4 px-6 py-3 rounded-full text-[15px] font-medium transition-all"

  const activeStyle =
    "bg-[#CDE7E4] dark:bg-[#143B37] text-[#0CC8A8]"

  const inactiveStyle =
    "text-[#64748B] dark:text-gray-400 hover:bg-[#F3F4F6] dark:hover:bg-[#1E1E1E]"

  return (
    <div className="h-full flex flex-col px-6 py-8 bg-[#F8FAFC] dark:bg-[#111111] text-[#111827] dark:text-white">

      <div>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-[20px] font-semibold text-[#0CC8A8]">
            aps
          </span>
        </div>

        <nav className="space-y-2">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <IconLayoutGridAdd size={20} stroke={1.6} />
            Dashboard
          </NavLink>

          <NavLink to="/dashboard" className={`${linkBase} ${inactiveStyle}`}>
            <IconClipboardCheck size={20} stroke={1.6} />
            Projects
          </NavLink>

          {/* FIXED SCANS LINK */}
          <NavLink
            to="/scan/1"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            <IconFileAnalytics size={20} stroke={1.6} />
            Scans
          </NavLink>

          <NavLink to="/dashboard" className={`${linkBase} ${inactiveStyle}`}>
            <IconCalendarEvent size={20} stroke={1.6} />
            Schedule
          </NavLink>

          <div className="pt-6 mt-6 border-t border-[#E5E7EB] dark:border-[#2A2A2A] space-y-2">

            <NavLink to="/dashboard" className={`${linkBase} ${inactiveStyle}`}>
              <IconBell size={20} stroke={1.6} />
              Notifications
            </NavLink>

            <NavLink to="/dashboard" className={`${linkBase} ${inactiveStyle}`}>
              <IconSettings size={20} stroke={1.6} />
              Settings
            </NavLink>

            <NavLink to="/dashboard" className={`${linkBase} ${inactiveStyle}`}>
              <IconInfoCircle size={20} stroke={1.6} />
              Support
            </NavLink>

          </div>
        </nav>
      </div>

      <div className="mt-auto pt-6 border-t border-[#E5E7EB] dark:border-[#2A2A2A]">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src="/avatar1.jpg"
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-[14px] text-[#9CA3AF]">
                admin@edu.com
              </p>
              <p className="text-[16px] font-semibold text-[#111827] dark:text-white">
                Security Lead
              </p>
            </div>
          </div>

          <IconChevronRight
            size={18}
            stroke={1.8}
            className="text-[#64748B] dark:text-gray-400"
          />
        </div>
      </div>
    </div>
  )
}