import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const linkBase =
    "block px-4 py-2 rounded-lg text-sm font-medium transition"

  const activeStyle =
    "bg-primary/10 text-primary"

  const inactiveStyle =
    "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#242424]"

  return (
    <div className="h-full flex flex-col justify-between p-4">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          aps
        </h1>

        {/* Nav Links */}
        <nav className="space-y-2">
          
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${inactiveStyle}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${inactiveStyle}`
            }
          >
            Scans
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${inactiveStyle}`
            }
          >
            Schedule
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${inactiveStyle}`
            }
          >
            Notifications
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${inactiveStyle}`
            }
          >
            Settings
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${inactiveStyle}`
            }
          >
            Support
          </NavLink>

        </nav>
      </div>

      {/* Bottom User Section */}
      <div className="border-t border-border-light dark:border-border-dark pt-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          admin@edu.com
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Security Lead
        </p>
      </div>

    </div>
  )
}