import StepTracker from "./StepTracker"

export default function ProgressSection() {
  const progress = 35 

  const radius = 36
  const stroke = 6
  const normalizedRadius = radius - stroke / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset =
    circumference - (progress / 100) * circumference

  return (
    <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      {/* Circular Progress */}
      <div className="flex items-center gap-6">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#2A2A2A"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#0CC8A8"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-500"
          />
        </svg>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            In Progress
          </p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {progress}%
          </p>
        </div>
      </div>

      <StepTracker currentStep={1} />

    </div>
  )
}