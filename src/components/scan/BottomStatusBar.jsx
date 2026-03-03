export default function BottomStatusBar() {
    return (
        <div className="bg-white dark:bg-darkSurface p-4 rounded-xl shadow-sm border border-border-light dark:border-border-dark">

            <div className="flex flex-wrap gap-6 text-sm items-center justify-between">

                {/* Left Stats */}
                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
                    <span>Sub-agents: <span className="font-semibold text-gray-900 dark:text-white">0</span></span>
                    <span>Parallel Executions: <span className="font-semibold text-gray-900 dark:text-white">2</span></span>
                    <span>Operations: <span className="font-semibold text-gray-900 dark:text-white">1</span></span>
                </div>

                {/* Severity Counters */}
                <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-severity-critical font-medium">Critical: 0</span>
                    <span className="text-severity-high font-medium">High: 0</span>
                    <span className="text-severity-medium font-medium">Medium: 0</span>
                    <span className="text-severity-low font-medium">Low: 0</span>
                </div>

            </div>

        </div>
    )
}