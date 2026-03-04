import { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import { useTheme } from "../context/ThemeContext"
import { IconMoon, IconSun } from "@tabler/icons-react"

export default function AppLayout({ children }) {
  const { toggleTheme, theme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-[#F5F5F5] dark:bg-[#0F0F0F]">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 z-50 h-screen w-64
        bg-white dark:bg-[#1A1A1A]
        border-r border-[#E5E7EB] dark:border-[#2A2A2A]
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden absolute top-4 left-4 z-50 px-3 py-2 rounded-lg border border-[#D1D5DB] bg-white"
        >
          ☰
        </button>

        {/* Minimal Theme Toggle (Top Right Corner) */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-8 right-8 z-50 
             w-12 h-12 rounded-full 
             bg-[#0CC8A8] text-white 
             flex items-center justify-center 
             shadow-lg hover:scale-105 transition"
        >
          {theme === "dark" ? (
            <IconSun size={20} />
          ) : (
            <IconMoon size={20} />
          )}
        </button>

        {/* Page Body */}
        <main className="p-8 flex-1">
          {children}
        </main>

      </div>
    </div>
  )
}