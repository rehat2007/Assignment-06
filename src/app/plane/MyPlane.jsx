import React from 'react'

const MyPlane = () => {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0f] text-white px-4 py-8 sm:px-8 md:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          MY PLAN
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
 
        {/* Stats row */}
        <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-[#17171a] p-6 sm:p-8">
          <div>
            <p className="text-xs text-gray-400">Exercises</p>
            <p className="mt-2 text-2xl sm:text-3xl font-bold text-lime-400">2</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Minutes</p>
            <p className="mt-2 text-2xl sm:text-3xl font-bold">23</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Calories</p>
            <p className="mt-2 text-2xl sm:text-3xl font-bold">190</p>
          </div>
        </div>
 
        {/* Tabs + Sort */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
              Today's Plan
            </button>
            <button className="rounded-full bg-[#17171a] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#1f1f22]">
              Saved
            </button>
          </div>
 
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="hidden sm:inline">Sort By</span>
            <button className="flex items-center gap-1 rounded-lg bg-[#17171a] px-3 py-2 text-white">
              Duration
              
            </button>
          </div>
        </div>
 
        {/* Exercise list */}
        <div className="mt-4 flex flex-col gap-3">
          {/* Exercise card 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-[#17171a] p-4">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop"
              alt="Russian Twist"
              className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
            />
 
            <div className="flex-1 min-w-0">
              <p className="font-semibold uppercase tracking-wide truncate">
                Russian Twist
              </p>
              <p className="text-sm text-gray-400 truncate">Medicine Ball</p>
              <div className="mt-1 flex items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  
                  8 min
                </span>
                <span className="flex items-center gap-1">
                  
                  70 kcal
                </span>
                <span className="flex items-center gap-1">
                   
                  4.1
                </span>
              </div>
            </div>
 
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button className="rounded-full border border-gray-600 px-4 py-2 text-sm text-white hover:bg-white/10">
                View Details
              </button>
              <button className="flex items-center gap-1 rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black hover:bg-lime-300">
                
                Mark as Done
              </button>
              <button
                aria-label="Remove exercise"
                className="p-2 text-gray-500 hover:text-white"
              >
                
              </button>
            </div>
          </div>
 
          {/* Exercise card 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-[#17171a] p-4">
            <img
              src="https://images.unsplash.com/photo-1598971639058-999901759a6b?w=200&h=200&fit=crop"
              alt="Pull-Up"
              className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
            />
 
            <div className="flex-1 min-w-0">
              <p className="font-semibold uppercase tracking-wide truncate">
                Pull-Up
              </p>
              <p className="text-sm text-gray-400 truncate">Pull-up Bar</p>
              <div className="mt-1 flex items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  
                  15 min
                </span>
                <span className="flex items-center gap-1">
                  
                  120 kcal
                </span>
                <span className="flex items-center gap-1">
                  
                  4.7
                </span>
              </div>
            </div>
 
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button className="rounded-full border border-gray-600 px-4 py-2 text-sm text-white hover:bg-white/10">
                View Details
              </button>
              <button className="flex items-center gap-1 rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black hover:bg-lime-300">
                
                Mark as Done
              </button>
              <button
                aria-label="Remove exercise"
                className="p-2 text-gray-500 hover:text-white"
              >
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPlane