import { useNavigate } from "react-router-dom"

export default function AuthCard() {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="bg-white dark:bg-darkSurface p-10 rounded-2xl shadow-xl w-full">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Sign up
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer">
            Log in
          </span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name Row */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name*"
            required
            className="w-1/2 px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-darkBg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="text"
            placeholder="Last name*"
            required
            className="w-1/2 px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-darkBg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address*"
          required
          className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-darkBg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password (8+ characters)*"
          required
          className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-darkBg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Checkbox */}
        <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
          <input type="checkbox" required className="mt-1" />
          <p>
            I agree to Terms & Conditions and acknowledge the Privacy Policy
          </p>
        </div>

        {/* Submit */}
        <button
  type="button"
  onClick={() => (window.location.pathname = "/dashboard")}
  className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition"
>
  Create account
</button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-border-light dark:bg-border-dark"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-border-light dark:bg-border-dark"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4">

          <button
            type="button"
            className="flex-1 py-3 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#242424] transition"
          >
            Apple
          </button>

          <button
            type="button"
            className="flex-1 py-3 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#242424] transition"
          >
            Google
          </button>

          <button
            type="button"
            className="flex-1 py-3 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-[#242424] transition"
          >
            Meta
          </button>

        </div>

      </form>
    </div>
  )
}