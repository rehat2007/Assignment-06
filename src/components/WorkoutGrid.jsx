import WorkoutCard from './WorkoutCard'

const WorkoutGrid = ({ workouts }) => {
    return (
        <>
            <h2 className="mx-auto mt-6 max-w-300 px-4 text-xl font-extrabold uppercase tracking-tight text-white sm:mt-8 sm:text-2xl">THE LIBRARY</h2>
            <p className="mx-auto mt-1 max-w-300 px-4 text-[10px] font-medium text-zinc-500 sm:text-xs">Twelve lifts covering every major muscle group.</p>
            <div className="mx-auto pb-30 mt-4 grid w-full max-w-300 grid-cols-1 gap-4 rounded-xl p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 sm:pb-30 lg:grid-cols-3 lg:gap-7 lg:pb-30">
                {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
            </div>
        </>

    )
}

export default WorkoutGrid