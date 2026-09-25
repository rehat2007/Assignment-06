import Image from "next/image"

const page = async ({ params }) => {
    const { id } = await params;
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const workout = await response.json()

    return (
        <main className="min-h-screen bg-linear-to-b from-[#0F1115] via-[#101319] to-[#0B0D11] px-4 py-8 text-white sm:px-6 lg:px-10 lg:py-12">

            <div className="mx-auto max-w-6xl">

                {/* Top Section: Image + Info aligned vertically */}
                <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.9fr)_minmax(400px,1.1fr)] lg:items-start xl:gap-12">

                    {/* Workout Image */}
                    <div className="w-full lg:sticky lg:top-8">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#242933] bg-[#15181E] shadow-2xl shadow-black/40 ring-1 ring-white/5 transition-all duration-500 hover:shadow-[#C6FF00]/10">
                            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <Image
                                src={workout.image}
                                alt="Barbell Bench Press"
                                width={600}
                                height={750}
                                className="
                                    h-auto
                                    max-h-162.5
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-110
                                "
                            />
                        </div>
                    </div>

                    {/* Workout Information */}
                    <div className="flex flex-col">

                        {/* Title */}
                        <div>
                            <h1
                                className="
                                    text-3xl
                                    font-extrabold
                                    uppercase
                                    leading-tight
                                    tracking-tight
                                    text-white
                                    drop-shadow-sm
                                    sm:text-4xl
                                    lg:text-[36px]
                                "
                            >
                                {workout.name}
                            </h1>

                            <p
                                className="
                                    mt-3
                                    max-w-2xl
                                    text-sm
                                    leading-6
                                    text-[#9DA2AC]
                                "
                            >
                                {workout.description}
                            </p>
                        </div>

                        {/* Muscle Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((group) => (
                                <span
                                    key={group}
                                    className="
                                        cursor-default
                                        rounded-full
                                        bg-[#B7FF00]
                                        px-3.5
                                        py-1.5
                                        text-[10px]
                                        font-extrabold
                                        uppercase
                                        tracking-wide
                                        text-black
                                        shadow-md
                                        shadow-[#B7FF00]/10
                                        transition-all
                                        duration-200
                                        hover:-translate-y-0.5
                                        hover:bg-[#C6FF00]
                                        hover:shadow-lg
                                        hover:shadow-[#C6FF00]/30
                                    "
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Workout Stats */}
                        <div
                            className="
                                mt-7
                                grid
                                grid-cols-1
                                gap-3
                                sm:grid-cols-2
                            "
                        >

                            {/* Equipment */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Equipment
                                </span>

                                <span className="text-sm font-medium text-[#E4E6E9]">
                                    {workout.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Difficulty
                                </span>

                                <span className="text-sm font-medium text-[#E4E6E9]">
                                    {workout.difficulty}
                                </span>
                            </div>

                            {/* Sets */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Sets
                                </span>

                                <span className="text-sm font-medium text-[#E4E6E9]">
                                    {workout.sets}
                                </span>
                            </div>

                            {/* Reps */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Reps
                                </span>

                                <span className="text-sm font-medium text-[#E4E6E9]">
                                    {workout.reps}
                                </span>
                            </div>

                            {/* Duration */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Duration
                                </span>

                                <span className="text-sm font-medium text-[#E4E6E9]">
                                    {workout.duration} min
                                </span>
                            </div>

                            {/* Calories */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Calories
                                </span>

                                <span className="text-sm font-medium text-[#E4E6E9]">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div
                                className="
                                    flex
                                    min-h-16
                                    flex-col
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#C6FF00]/30
                                    bg-linear-to-br
                                    from-[#1B1F14]
                                    to-[#15181E]
                                    px-4
                                    py-3
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/60
                                    hover:shadow-lg
                                    sm:col-span-2
                                "
                            >
                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-widest
                                        text-[#858A93]
                                    "
                                >
                                    Rating
                                </span>

                                <span className="text-sm font-semibold text-[#C6FF00]">
                                    {workout.rating}
                                </span>
                            </div>

                            {/* Add to plan button (placed with stat cards) */}
                            <button
                                className="
                                    inline-flex
                                    min-h-16
                                    items-center
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    bg-[#C6FF00]
                                    px-4
                                    py-3
                                    text-[11px]
                                    font-extrabold
                                    uppercase
                                    tracking-wide
                                    text-black
                                    shadow-md
                                    shadow-[#C6FF00]/20
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:bg-[#D4FF33]
                                    hover:shadow-lg
                                    hover:shadow-[#C6FF00]/30
                                    active:scale-[0.97]
                                "
                            >
                                ▣ &nbsp; Add to todays plan
                            </button>

                            {/* Save for later button (placed with stat cards) */}
                            <button
                                className="
                                    inline-flex
                                    min-h-16
                                    items-center
                                    justify-center
                                    gap-1
                                    rounded-xl
                                    border
                                    border-[#343943]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-wide
                                    text-[#D6D8DC]
                                    shadow-md
                                    shadow-black/10
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]
                                    hover:bg-[#191C22]
                                    hover:text-[#C6FF00]
                                    active:scale-[0.97]
                                "
                            >
                                ♧ &nbsp; Save for later
                            </button>

                        </div>

                    </div>
                </div>

                {/* Instructions Section: full width at the bottom */}
                <div className="mt-10 lg:mt-14">

                    <h2
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-extrabold
                            uppercase
                            tracking-widest
                            text-white
                        "
                    >
                        <span className="h-4 w-1 rounded-full bg-[#C6FF00]" />
                        Instructions
                    </h2>

                    <ol
                        className="
                            mt-4
                            grid
                            grid-cols-1
                            gap-3
                            rounded-2xl
                            p-5
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {workout.instructions.map((instruction, index) => (
                            <li
                                key={instruction}
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    border
                                    border-[#242933]
                                    bg-[#15181E]
                                    px-4
                                    py-3
                                    text-[13px]
                                    leading-6
                                    text-[#B4B8C0]
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:border-[#C6FF00]/40
                                    hover:bg-[#191C22]
                                    hover:text-white
                                "
                            >
                                <span
                                    className="
                                        flex
                                        h-5
                                        w-5
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#C6FF00]
                                        text-[10px]
                                        font-extrabold
                                        text-black
                                    "
                                >
                                    {index + 1}
                                </span>
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ol>

                </div>

            </div>
        </main>
    )
}

export default page