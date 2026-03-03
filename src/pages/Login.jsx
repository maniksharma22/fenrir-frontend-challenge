import LeftPanel from "../components/auth/LeftPanel"
import RightPanel from "../components/auth/RightPanel"

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* Left Side */}
      <div className="lg:w-1/2">
        <LeftPanel />
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex items-center justify-center bg-surface-light dark:bg-darkBg px-6 py-10">
        <RightPanel />
      </div>

    </div>
  )
}