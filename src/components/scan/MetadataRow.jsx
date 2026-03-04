export default function MetadataRow({ scan }) {
  const items = [
    { label: "Scan Type", value: scan.type },
    { label: "Targets", value: "example.com" },
    { label: "Started At", value: "Nov 22, 09:00AM" },
    { label: "Credentials", value: "2 Active" },
    { label: "Files", value: "Control.pdf" },
    { label: "Checklists", value: "40 / 350" },
  ]

  return (
    <div className="border-t border-gray-200 pt-6 
                    grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
                    gap-4 md:gap-6 text-sm">

      {items.map((item, index) => (
        <div key={index} className="flex flex-col min-w-0">

          <span className="text-gray-400">
            {item.label}
          </span>

          <span className="text-gray-900 dark:text-white font-medium truncate">
            {item.value}
          </span>

        </div>
      ))}

    </div>
  )
}