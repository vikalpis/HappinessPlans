"use client"

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-black to-blue-900  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 transition-transform duration-200 hover:scale-110">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white leading-relaxed">{description}</p>
    </div>
  )
}
