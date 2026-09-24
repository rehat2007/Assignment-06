import Image from 'next/image'

const WorkoutCard = ({ workout }) => {
  return (
    <div
      className="
        group w-full mx-auto max-w-98.5 overflow-hidden rounded-2xl
        border border-[#2B3038] bg-[#15181E] text-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#B7FF00]/50
        hover:shadow-[0_0_25px_rgba(183,255,0,0.25),0_0_60px_rgba(183,255,0,0.08)]
      "
    >
      {/* Image */}
      <div className="relative h-87.5 overflow-hidden">
        <Image
          src={workout.image}
          alt="Barbell Bench Press"
          width={400}
          height={400}
          className=" h-full w-full object-cover object-top
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-6">
        {/* Categories */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#B7FF00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className="
            text-[20px] font-extrabold uppercase
            leading-tight tracking-wide
            text-[#F5F5F5]
          "
        >
          {workout.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm text-[#8D929C]">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-[#2B3038]" />

        {/* Stats */}
        <div
          className="
            flex flex-wrap items-center
            gap-x-5 gap-y-3
            text-[13px] text-[#9A9FA8]
          "
        >
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.8 2.5c.3 3.2-1.2 5-2.8 6.7-1.4 1.5-2.7 3-2.7 5.4 0 3.8 2.8 6.9 6.7 6.9s6.7-3.1 6.7-6.9c0-2.8-1.5-5.2-3.7-7.1.1 2.1-.6 3.5-1.7 4.4.1-3.6-1.1-6.8-2.5-9.4Z" />
            </svg>

            <span>{workout.caloriesBurned} Cal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>

            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutCard

