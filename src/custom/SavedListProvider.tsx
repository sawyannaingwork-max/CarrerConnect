import { createContext, useContext, useEffect, useState } from "react";
import type { SavedJob } from "../type";

// Type for savedJobContext
type SavedJobContextType = [SavedJob[], (job : SavedJob) => void, (id : string) => void]

// Creating context
const savedJobContext = createContext<null | SavedJobContextType>(null)

export default function SavedListProvider({children} : {children : React.ReactNode})
{
    // Getting saved list from local storage and define as state
    const [savedList, setSavedList] = useState<SavedJob[]>(() => {
        
        // Getting saved jobs from local storage
        let savedJobs = localStorage.getItem("saved Jobs");

        return savedJobs? JSON.parse(savedJobs) : []
    })

    // Function for handling save
    function handleSave(job : SavedJob)
    {
        // Update savedList
        setSavedList([...savedList, job])
    }

    // Function for handling unsave
    function handleUnsave(id : string)
    {
        setSavedList(savedList.filter(job => job.job_id !== id))
    }

    // Saving it to local storage
    useEffect(() => {
        localStorage.setItem("saved Jobs", JSON.stringify(savedList))
    }, [savedList])

    return(
        <savedJobContext.Provider value={[savedList, handleSave, handleUnsave]}>
            {children}
        </savedJobContext.Provider>
    )
}

// Function for accessing savedJob context
export function useSavedJob()
{
    const context = useContext(savedJobContext)

    if (!context)
    {
        throw new Error("useSavedJob hook must be used inside SavedListProvider only")
    }

    return context
}