import FindingCard from "./FindingCard"

export default function FindingLog() {
  return (
    <div className="bg-white dark:bg-darkSurface rounded-xl shadow-sm p-4 space-y-4 h-full">
      
      <h3 className="font-semibold text-gray-900 dark:text-white">
        Finding Log
      </h3>

      <FindingCard
        severity="Critical"
        time="10:45:23"
        title="SQL Injection in Authentication Endpoint"
        endpoint="/api/users/profile"
        description="Time-based blind SQL injection confirmed on user-controlled input during authentication flow."
      />

      <FindingCard
        severity="High"
        time="10:45:23"
        title="Unauthorized Access to User Metadata"
        endpoint="/api/auth/login"
        description="Authenticated low-privilege user accessed metadata of other users."
      />

      <FindingCard
        severity="Medium"
        time="10:45:23"
        title="Broken Authentication Rate Limiting"
        endpoint="/api/search"
        description="No effective rate limiting detected on login attempts."
      />

    </div>
  )
}