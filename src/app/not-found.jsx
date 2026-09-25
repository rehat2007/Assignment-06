"use client"
import Link from "next/link"

function notfound() {
  return (
    <div className="h-175 flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold leading-none text-[#B7FF00]">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
          Page not found
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Divider accent */}
        <div className="mt-6 mb-6 h-1 w-20 mx-auto rounded-full bg-[#B7FF00]" />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button  className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-[#B7FF00] hover:text-[#B7FF00] transition">
            <Link href="/">
              Go back to home
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default notfound