export default function StepTracker({ currentStep }) {
  const steps = [
    "Spidering",
    "Mapping",
    "Testing",
    "Validating",
    "Reporting",
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {steps.map((step, index) => {
        const isActive = index === currentStep
        const isCompleted = index < currentStep

        return (
          <div
            key={index}
            className={`text-sm px-3 py-1 rounded-full transition ${
              isActive
                ? "bg-primary text-white"
                : isCompleted
                ? "bg-primary/10 text-primary"
                : "bg-gray-200 dark:bg-[#242424] text-gray-600 dark:text-gray-400"
            }`}
          >
            {step}
          </div>
        )
      })}
    </div>
  )
}