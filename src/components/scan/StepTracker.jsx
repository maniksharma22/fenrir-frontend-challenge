export default function StepTracker({ currentStep = 0 }) {
  const steps = [
    { label: "Spidering", type: "spider" },
    { label: "Mapping", type: "mapping" },
    { label: "Testing", type: "testing" },
    { label: "Validating", type: "validating" },
    { label: "Reporting", type: "reporting" },
  ]

  const renderIcon = (type, active) => {
    const color = active ? "#FFFFFF" : "#94A3B8"

    switch (type) {
      case "spider":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="2.2" fill={color} />
            <path
              d="M12 3a9 9 0 1 1-6.5 2.7"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )

      case "mapping":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="6" r="2" stroke={color} strokeWidth="2" />
            <circle cx="18" cy="6" r="2" stroke={color} strokeWidth="2" />
            <circle cx="12" cy="18" r="2" stroke={color} strokeWidth="2" />
            <path d="M8 6h8M6 8l6 8M18 8l-6 8" stroke={color} strokeWidth="2" />
          </svg>
        )

      case "testing":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 3h6M10 3v6l-5 9h14l-5-9V3"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )

      case "validating":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" stroke={color} strokeWidth="2" />
            <path d="M7 12l3 3 7-7" stroke={color} strokeWidth="2" />
          </svg>
        )

      case "reporting":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="3" width="12" height="18" stroke={color} strokeWidth="2" />
            <path d="M8 7h8M8 11h8M8 15h6" stroke={color} strokeWidth="2" />
          </svg>
        )

      default:
        return null
    }
  }

  return (
    <div className="relative flex items-center justify-between w-full">

      {/* Responsive progress line */}
      <div className="absolute top-[32px] left-0 right-0 h-[2px] bg-[#C9D2DD] z-0" />

      {steps.map((step, index) => {
        const isActive = index === currentStep

        return (
          <div key={index} className="relative z-10 flex flex-col items-center">

            <div
              className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full flex items-center justify-center
              ${
                isActive
                  ? "bg-[#1FA8A5] shadow-[0_0_0_16px_rgba(31,168,165,0.08)] md:shadow-[0_0_0_20px_rgba(31,168,165,0.08)]"
                  : "bg-white border-2 border-[#DCE3EA]"
              }`}
            >
              {renderIcon(step.type, isActive)}
            </div>

            <span
              className={`mt-3 md:mt-4 text-[13px] md:text-[15px] ${
                isActive
                  ? "text-[#8F96A3] font-medium"
                  : "text-[#B9C1CA]"
              }`}
            >
              {step.label}
            </span>

          </div>
        )
      })}
    </div>
  )
}