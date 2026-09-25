import Image from "next/image";
import Link from 'next/link'

const Exercisecard = ({exercise , newWorkouts}) => {

    const deletworkout = ()=>{
        newWorkouts(exercise.id)
    }

  return (
     <div
      className="
        rounded-xl
        border
        border-[#252a34]
        bg-[#13161c]
        p-3
        transition
        duration-200
        hover:border-[#343b47]
      "
    >

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

        {/* ================= IMAGE ================= */}
        <div className="relative h-27.5 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-28">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        {/* ================= INFO ================= */}
        <div className="min-w-0 flex-1">

          <h2 className="text-[13px] font-bold tracking-tight text-white">
            {exercise.name}
          </h2>

          <p className="mt-0.5 text-[10px] text-[#858994]">
            {exercise.type}
          </p>

          {/* Exercise meta */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">

            {/* Time */}
            <span className="flex items-center gap-1 text-[10px] text-[#b9bdc5]">
              <span className="text-[#baff00]">◷</span>
              {exercise.duration}
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1 text-[10px] text-[#b9bdc5]">
              <span className="text-[#baff00]">♨</span>
              {exercise.calories}
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1 text-[10px] text-[#b9bdc5]">
              <span className="text-[#baff00]">☆</span>
              {exercise.rating}
            </span>

          </div>

        </div>

        {/* ================= ACTIONS ================= */}
        <div className="flex items-center gap-2 sm:ml-auto">

          {/* View details */}
          <button
            className="
              flex-1
              rounded-full
              border
              border-[#37404d]
              px-4
              py-2
              text-[10px]
              text-[#d4d7dc]
              transition
              hover:border-[#5b6573]
              hover:bg-[#1b1f27]
              sm:flex-none
            "
          >
            <Link href={`/workouts/${exercise.id}`}>View Details</Link>
          </button>

          {/* Mark done */}
          <button
            className="
              flex-1
              rounded-full
              bg-[#baff00]
              px-4
              py-2
              text-[10px]
              font-semibold
              text-black
              transition
              hover:bg-[#c8ff35]
              sm:flex-none
            "
          >
            <span className="mr-1">✓</span>
            Mark as Done
          </button>

          {/* Remove */}
          <button
          onClick={deletworkout}
            className="
              hidden
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              text-[18px]
              text-[#69707c]
              transition
              hover:text-white
              sm:flex
            "
            aria-label="Remove exercise"
          >
            ×
          </button>

        </div>

      </div>
    </div>
  )
}

export default Exercisecard