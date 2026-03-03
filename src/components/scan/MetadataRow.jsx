export default function MetadataRow({ scan }) {
  return (
    <div className="bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
      
      <div>
        <p className="text-gray-500 dark:text-gray-400">Scan Type</p>
        <p className="font-medium text-gray-900 dark:text-white">
          {scan.type}
        </p>
      </div>

      <div>
        <p className="text-gray-500 dark:text-gray-400">Targets</p>
        <p className="font-medium text-gray-900 dark:text-white">
          example.com
        </p>
      </div>

      <div>
        <p className="text-gray-500 dark:text-gray-400">Started At</p>
        <p className="font-medium text-gray-900 dark:text-white">
          Nov 22, 09:00AM
        </p>
      </div>

      <div>
        <p className="text-gray-500 dark:text-gray-400">Credentials</p>
        <p className="font-medium text-gray-900 dark:text-white">
          2 Active
        </p>
      </div>

      <div>
        <p className="text-gray-500 dark:text-gray-400">Files</p>
        <p className="font-medium text-gray-900 dark:text-white">
          Control.pdf
        </p>
      </div>

      <div>
        <p className="text-gray-500 dark:text-gray-400">Checklists</p>
        <p className="font-medium text-gray-900 dark:text-white">
          40 / 350
        </p>
      </div>

    </div>
  )
}