export default function SeverityBadge({ value, type }) {
  const styles = {
    critical: "bg-severity-critical/10 text-severity-critical",
    high: "bg-severity-high/10 text-severity-high",
    medium: "bg-severity-medium/10 text-severity-medium",
    low: "bg-severity-low/10 text-severity-low",
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${styles[type]}`}>
      {value}
    </span>
  )
}