import Hero from "@/components/Hero"
import WorkoutGrid from "@/components/WorkoutGrid"
import {getWorkouts} from "@/lib/api"

const page = async() => {
  const workouts = await getWorkouts()
  console.log(`workouts : ${workouts}`);
  
  return (
    <>
    <Hero/>
    <WorkoutGrid workouts={workouts}/>
    </>
  )
}

export default page
