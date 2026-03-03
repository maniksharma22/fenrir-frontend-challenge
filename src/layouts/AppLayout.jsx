import { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import { useTheme } from "../context/ThemeContext"

export default function AppLayout({ children }) {
  const { toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-darkBg">

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 h-full w-64 bg-white dark:bg-darkSurface border-r border-border-light dark:border-border-dark transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <Sidebar />
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 border-b border-border-light dark:border-border-dark">
          
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden px-3 py-2 border rounded"
          >
            ☰
          </button>

          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded bg-primary text-white text-sm"
          >
            Toggle Theme
          </button>

        </div>

        <main className="p-6 flex-1">
          {children}
        </main>

      </div>

    </div>
  )
}