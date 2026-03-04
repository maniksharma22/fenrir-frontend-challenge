import StepTracker from "./StepTracker"

export default function ProgressSection({ progress = 100 }) {
  return (
    <div className="bg-white dark:bg-[#141414] 
                    rounded-2xl 
                    border border-[#E6EBF1] dark:border-[#2A2A2A] 
                    p-8 transition-colors">

      <div className="flex items-center">

        {/* LEFT */}
        <div className="flex items-center pr-12">

          <div className="w-[120px] h-[120px] rounded-full 
                          bg-[#0B1324] dark:bg-[#0E1A2B] 
                          flex flex-col items-center justify-center">
            <span className="text-[28px] font-semibold text-[#00C2A8]">
              {progress}%
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              In Progress
            </span>
          </div>

          {/* Divider */}
          <div className="h-[130px] w-[2px] 
                          bg-[#D6DEE8] dark:bg-[#2A2A2A] 
                          ml-12" />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col">

          <StepTracker currentStep={0} />

          {/* Divider */}
          <div className="mt-8 h-[1.5px] 
                          bg-[#E1E6ED] dark:bg-[#2A2A2A]" />

          <div className="grid grid-cols-6 gap-8 mt-6 text-sm items-start">

            <div>
              <p className="text-[#9AA4B2] dark:text-gray-400">
                Scan Type
              </p>
              <p className="font-semibold mt-1 text-[#111827] dark:text-white">
                Grey Box
              </p>
            </div>

            <div>
              <p className="text-[#9AA4B2] dark:text-gray-400">
                Targets
              </p>
              <p className="font-semibold mt-1 text-[#111827] dark:text-white">
                google.com
              </p>
            </div>

            <div>
              <p className="text-[#9AA4B2] dark:text-gray-400">
                Started At
              </p>
              <p className="font-semibold mt-1 text-[#111827] dark:text-white">
                Nov 22, 09:00AM
              </p>
            </div>

            <div>
              <p className="text-[#9AA4B2] dark:text-gray-400">
                Credentials
              </p>
              <p className="font-semibold mt-1 text-[#111827] dark:text-white">
                2 Active
              </p>
            </div>

            <div>
              <p className="text-[#9AA4B2] dark:text-gray-400">
                Files
              </p>
              <p className="font-semibold mt-1 text-[#111827] dark:text-white">
                Control.pdf
              </p>
            </div>

            <div className="text-right">
              <p className="text-[#9AA4B2] dark:text-gray-400">
                Checklists
              </p>
              <p className="font-semibold text-[#00C2A8] mt-1">
                40/350
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}