import { useSavedJob } from "../custom/SavedListProvider"
import { useTheme } from "../custom/ThemeProvider"
import Job from "../saved/Job"
export default function Saved()
{
    // Getting the saved List
    const [savedList] = useSavedJob()
    const [isDark] = useTheme()
    
    if (savedList.length === 0)
    {
        return <p className={`font-albert text-2xl pt-9 min-h-screen text-center ${isDark? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"}`}>Nothing Here Yet!</p>
    }
    return(
        <div className={`${isDark? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"} min-h-screen pt-9`}>
            <div className="pb-5 w-[90%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                savedList.map(job => {
                    return (
                        <Job 
                            {...job}
                        />
                    )
                })
            }
        </div>
        </div>
    )
}