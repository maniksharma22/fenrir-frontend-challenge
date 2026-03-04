import StepTracker from "./StepTracker"

export default function ProgressSection({ progress = 100 }) {
  return (
    <div className="bg-white dark:bg-[#141414] 
                    rounded-2xl 
                    border border-[#E6EBF1] dark:border-[#2A2A2A] 
                    p-4 md:p-8 transition-colors">

      <div className="flex flex-col lg:flex-row lg:items-center">

        {/* LEFT */}
        <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0 lg:pr-12">

          <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full 
                          bg-[#0B1324] dark:bg-[#0E1A2B] 
                          flex flex-col items-center justify-center">
            <span className="text-[24px] md:text-[28px] font-semibold text-[#00C2A8]">
              {progress}%
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              In Progress
            </span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-[130px] w-[2px] 
                          bg-[#D6DEE8] dark:bg-[#2A2A2A] 
                          ml-12" />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col">

          <StepTracker currentStep={0} />

          {/* Divider */}
          <div className="mt-6 md:mt-8 h-[1.5px] 
                          bg-[#E1E6ED] dark:bg-[#2A2A2A]" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-6 text-sm items-start">

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
              <p className="font-semibold mt-1 text-[#111827] dark:text-white break-all">
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
              <p className="font-semibold mt-1 text-[#111827] dark:text-white break-all">
                Control.pdf
              </p>
            </div>

            <div className="lg:text-right">
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