"use client"
import { createContext, useState } from "react"

 const WorkoutContext = createContext()

const UserProvider = ({ children }) => {
    const [workout, setWorkout] = useState([])
    const [saveWorkout, setSaveWorkout] = useState([])
    
    return (
        <WorkoutContext.Provider value={{ workout, setWorkout, saveWorkout, setSaveWorkout }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export {UserProvider, WorkoutContext}