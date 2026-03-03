import StatsCard from "./StatsCard"

export default function StatsBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <StatsCard
        title="Critical Severity"
        count="86"
        change="+2% increase than yesterday"
        color="text-severity-critical"
      />

      <StatsCard
        title="High Severity"
        count="16"
        change="+0.9% increase than yesterday"
        color="text-severity-high"
      />

      <StatsCard
        title="Medium Severity"
        count="26"
        change="+0.9% decrease than yesterday"
        color="text-severity-medium"
      />

      <StatsCard
        title="Low Severity"
        count="16"
        change="+0.9% increase than yesterday"
        color="text-severity-low"
      />

    </div>
  )
}