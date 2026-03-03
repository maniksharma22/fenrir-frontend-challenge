export default function StatusChip({ status }) {
  const base =
    "px-3 py-1 rounded-full text-xs font-medium inline-block"

  const styles = {
    Completed:
      "bg-severity-low/10 text-severity-low",
    Scheduled:
      "bg-gray-400/10 text-gray-500 dark:text-gray-400",
    Failed:
      "bg-severity-critical/10 text-severity-critical",
  }

  return (
    <span className={`${base} ${styles[status]}`}>
      {status}
    </span>
  )
}