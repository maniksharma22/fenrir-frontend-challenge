export default function LeftPanel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-white flex flex-col justify-center px-12 lg:px-20 py-16">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold mb-6">
        aps
      </h1>

      {/* Tagline */}
      <h2 className="text-3xl font-semibold mb-8 leading-tight max-w-md">
        Expert level Cybersecurity in hours not weeks.
      </h2>

      {/* Features */}
      <div className="space-y-4 text-gray-300 max-w-md">
        <p>• Effortlessly spider and map targets to uncover hidden security flaws</p>
        <p>• Deliver high-quality, validated findings in hours, not weeks.</p>
        <p>• Generate professional, enterprise-grade security reports automatically.</p>
      </div>

      {/* Trust Section */}
      <div className="mt-10 text-sm text-gray-400">
        <p>Trustpilot</p>
        <p>Rated 4.5/5.0 (100k+ reviews)</p>
      </div>

    </div>
  )
}