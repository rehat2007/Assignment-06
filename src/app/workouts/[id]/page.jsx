import Workoutdetail from "@/components/Workoutdetail";

const page = async ({ params }) => {
    const { id } = await params;
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const workout = await response.json()
    return (
       <Workoutdetail workout={workout}/>
    )
}

export default page