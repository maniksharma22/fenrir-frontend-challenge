export default function FindingLog() {
  return (
    <div className="h-full flex flex-col 
                    bg-gray-50 dark:bg-[#141414] 
                    overflow-hidden transition-colors">

      {/* Header */}
      <div className="px-6 py-4 
                      border-b border-gray-200 dark:border-[#2A2A2A]">
        <h3 className="text-gray-900 dark:text-white font-semibold text-sm">
          Finding Log
        </h3>
      </div>

      {/* Content */}
     <div className="px-6 pt-4 pb-6 space-y-4 overflow-y-auto">
        {/* Card 1 */}
        <div className="bg-white dark:bg-[#1A1A1A] 
                        rounded-xl 
                        border border-gray-200 dark:border-[#2A2A2A] 
                        p-5 transition-colors">
          <div className="flex justify-between items-center mb-3">
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Critical
            </span>
            <span className="text-xs text-gray-400">
              10:45:23
            </span>
          </div>

          <p className="font-semibold text-gray-900 dark:text-white mb-1">
            SQL Injection in Authentication Endpoint
          </p>

          <p className="text-[#00C2A8] font-mono text-sm mb-2">
            /api/users/profile
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-[#1A1A1A] 
                        rounded-xl 
                        border border-gray-200 dark:border-[#2A2A2A] 
                        p-5 transition-colors">
          <div className="flex justify-between items-center mb-3">
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              High
            </span>
            <span className="text-xs text-gray-400">
              10:45:23
            </span>
          </div>

          <p className="font-semibold text-gray-900 dark:text-white mb-1">
            Unauthorized Access to User Metadata
          </p>

          <p className="text-[#00C2A8] font-mono text-sm mb-2">
            /api/auth/login
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-[#1A1A1A] 
                        rounded-xl 
                        border border-gray-200 dark:border-[#2A2A2A] 
                        p-5 transition-colors">
          <div className="flex justify-between items-center mb-3">
            <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Medium
            </span>
            <span className="text-xs text-gray-400">
              10:45:23
            </span>
          </div>

          <p className="font-semibold text-gray-900 dark:text-white mb-1">
            Broken Authentication Rate Limiting
          </p>

          <p className="text-[#00C2A8] font-mono text-sm mb-2">
            /api/search
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            No effective rate limiting detected on login attempts. Automated brute-force attempts possible.
          </p>
        </div>

      </div>
    </div>
  )
}