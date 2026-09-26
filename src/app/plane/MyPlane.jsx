"use client"
import Image from "next/image"
import { useContext, useState } from "react"
import { WorkoutContext } from '@/context/FitLogContext'
import Exercisecard from "@/components/Exercisecard"
import { toast } from "react-toastify"
import EmptyState from "@/components/EmptyState"

export default function MyPlan() {
  const { workout, setWorkout, saveWorkout, setSaveWorkout } = useContext(WorkoutContext)

  const totalDurationForTodaysPlan = workout.reduce((total, workout) => { return total + workout.duration }, 0)
  const totalCaloriesForTodaysPlan = workout.reduce((total, workout) => { return total + workout.caloriesBurned }, 0)

  const totalDuratuinForSavePlane = saveWorkout.reduce((total, workouts) => { return total + workouts.duration }, 0)
  const totalCaloriesForsavePlan = saveWorkout.reduce((total, workouts) => { return total + workouts.caloriesBurned }, 0)

  const [workoutData, setWorkoutData] = useState("todatsPlane")
  const [sortBy, setSortBy] = useState(" ")

  const data = workoutData === "todatsPlane" ? workout : saveWorkout

  const newWorkout = (id) => {
    workoutData === "todatsPlane"
      ? setWorkout((prevWorkouts) => prevWorkouts.filter((workout) => workout.id !== id))
      : setSaveWorkout((prevWorkouts) => prevWorkouts.filter((workout) => workout.id !== id))
    toast.success("Workout removed successfully")
  }
  
  const sortedWorkouts = [...data].sort((a,b) =>{
    if (sortBy === "duration") return a.duration - b.duration
    if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned
    if (sortBy === "rating") return b.rating - a.rating
  })


  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white sm:px-6 lg:px-9">
      <div className="mx-auto max-w-300">

        {/* ================= HEADER ================= */}
        <section>
          <h1 className="text-[24px] font-extrabold tracking-[-0.5px]">
            MY PLAN
          </h1>

          <p className="mt-1 text-[12px] text-[#858994]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* ================= STATS ================= */}
        <section className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#252a34] bg-[#12151b] sm:grid-cols-3">

          {/* Exercises */}
          <div className="border-b border-[#252a34] px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="text-[10px] text-[#858994]">
              Exercises
            </p>

            <p className="mt-1 text-[31px] font-bold leading-none text-[#baff00]">
              {workoutData === "todatsPlane" ? workout.length : saveWorkout.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#252a34] px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="text-[10px] text-[#858994]">
              Minutes
            </p>

            <p className="mt-1 text-[31px] font-bold leading-none">
              {workoutData === "todatsPlane" ? totalDurationForTodaysPlan : totalDuratuinForSavePlane}
            </p>
          </div>

          {/* Calories */}
          <div className="px-5 py-6">
            <p className="text-[10px] text-[#858994]">
              Calories
            </p>

            <p className="mt-1 text-[31px] font-bold leading-none">
              {workoutData === "todatsPlane" ? totalCaloriesForTodaysPlan : totalCaloriesForsavePlan}
            </p>
          </div>

        </section>

        {/* ================= FILTER BAR ================= */}
        <section className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="flex w-fit rounded-lg border border-[#262c36] bg-[#151820] p-1">

            <button
              onClick={() => setWorkoutData("todatsPlane")}
              className={workoutData === "todatsPlane"
                ? "flex items-center gap-2 rounded-md border border-[#292f39] bg-[#14171d] px-3 py-2 text-[10px] text-white"
                : "rounded-md px-4  py-2  text-[11px]  text-[#7d818b] transition hover:text-white"

              }
            >
              Todays Plan
            </button>

            <button
              onClick={() => setWorkoutData("savedPlane")}
              className={workoutData === "savedPlane"
                ? "flex items-center gap-2 rounded-md border border-[#292f39] bg-[#14171d] px-3 py-2 text-[10px] text-white"
                : "rounded-md px-4  py-2  text-[11px]  text-[#7d818b] transition hover:text-white"

              }
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <select
              className=" w-25 rounded-md border border-[#2B3038] bg-[#15181E] px-3 py-3.5 text-[10px] text-zinc-300  outline-none  cursor-pointer  focus:border-[#3A404A]"
              onChange={(e) => setSortBy(e.target.value)}
              >
               <option value="">Sort by</option>
              <option value={"duration"} >Duration</option>
              <option value={"calories"} >Calories</option>
              <option value={"rating"} >Rating</option>
            </select>
          </div>

        </section>

        {/* ================= EXERCISE LIST ================= */}
        <section className="mt-5 space-y-3">

          {(data.length < 1) ? <EmptyState /> : sortedWorkouts.map((item) => <Exercisecard key={item.id} exercise={item} newWorkouts={newWorkout} />)}

        </section>

      </div>
    </main>
  );
}


