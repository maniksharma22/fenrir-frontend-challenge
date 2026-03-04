import { useState } from "react"

export default function ConsolePanel() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#141414] transition-colors">

      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 
                      border-b border-gray-200 dark:border-[#2A2A2A]">
        <div className="flex items-center gap-3 flex-wrap">

          <span className="w-2 h-2 bg-[#00C2A8] rounded-full"></span>

          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Live Scan Console
          </span>

          <span className="flex items-center gap-2 text-xs 
                           bg-gray-200 dark:bg-[#1E1E1E] 
                           text-gray-600 dark:text-gray-400 
                           px-3 py-1 rounded-full">
            <svg
              className="w-3 h-3 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Running...
          </span>

        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 md:gap-8 px-4 md:px-6 
                      border-b border-gray-200 dark:border-[#2A2A2A] 
                      text-sm overflow-x-auto">

        <button
          onClick={() => setActiveTab("activity")}
          className={`py-4 whitespace-nowrap ${
            activeTab === "activity"
              ? "text-[#00C2A8] border-b-2 border-[#00C2A8]"
              : "text-gray-400"
          }`}
        >
          Activity Log
        </button>

        <button
          onClick={() => setActiveTab("verification")}
          className={`py-4 whitespace-nowrap ${
            activeTab === "verification"
              ? "text-[#00C2A8] border-b-2 border-[#00C2A8]"
              : "text-gray-400"
          }`}
        >
          Verification Loops
        </button>

      </div>

      {/* Console Body */}
      <div className="flex-1 bg-[#F9FAFB] dark:bg-[#0F0F0F] 
                      px-4 md:px-6 py-4 overflow-y-auto 
                      font-mono text-[13px] md:text-[14px] 
                      text-gray-800 dark:text-gray-300
                      font-medium leading-7 space-y-3 break-words">

        {activeTab === "activity" && (
          <>
            <p>
              <span className="text-gray-400">[09:00:00]</span>{" "}
              I'll begin a systematic penetration test on{" "}
              <span className="text-[#00C2A8]">
                helpdesk.democorp.com
              </span>. Let me start with reconnaissance and enumeration.
            </p>

            <p>
              <span className="text-gray-400">[09:01:00]</span>{" "}
              Good! target is online. Now let me perform port scanning to identify running services.
            </p>

            <p>
              <span className="text-gray-400">[09:02:00]</span>{" "}
              Excellent reconnaissance results:
              <span className="relative ml-6 block text-gray-400 pl-4">
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-400"></span>
                - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
              </span>
              Let me probe the web server on target first to understand its structure.
            </p>

            <p>
              <span className="text-gray-400">[09:03:00]</span>{" "}
              Great! I found a login page for a Help Desk Platform. I can see a useful comment:
              <span className="text-[#00C2A8]">
                {" "} "TODO: Delete the testing account (test:test)"
              </span>. Let me test this credential.
            </p>

            <p>
              <span className="text-gray-400">[09:04:00]</span>{" "}
              The POST method is not allowed on /password/test.
            </p>

            <p>
              <span className="text-gray-400">[09:05:00]</span>{" "}
              Exploring other endpoints with test:test credentials.
            </p>

            <p>
              <span className="text-gray-400">[09:06:00]</span>{" "}
              Dashboard accessed using
              <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded ml-2">
                X-UserId: 10032
              </span>
              . Possible
              <span className="text-red-500 font-semibold ml-1">
                IDOR vulnerability
              </span>.
            </p>
          </>
        )}

        {activeTab === "verification" && (
          <>
            <p>[09:07:00] Verifying discovered vulnerabilities...</p>
            <p>[09:08:00] Re-testing authentication endpoint...</p>
            <p>[09:09:00] Confirmed reproducibility of exploit.</p>
          </>
        )}

      </div>

    </div>
  )
}