import { useSavedJob } from "../custom/SavedListProvider";
import { useTheme } from "../custom/ThemeProvider";
import type { Job } from "../type";

export default function Job(props : Job)
{
    const [isDark] = useTheme()
    const [savedList, handleSave, handleUnsave] = useSavedJob()

    // Checking this job is already saved
    const isSaved : boolean = savedList.some((job) => job.job_id === props.job_id)

    return(
        <div className={`p-3 rounded-md shadow-md shadow-gray-400 {isDark? "bg-bg-dark" : "bg-bg-light"}`}>
            <div className="flex justify-between items-center">
                <h2 className="font-albert text-xl">{props.job_title}</h2>
                <p className={`text-text-dark py-1 px-2 text-center ${isDark? "bg-secondary-dark" : "bg-accent"}`}>
                    {props.job_employment_type}
                </p>
            </div>
            <h3 className="pt-2 pb-3 font-albert opacity-70">{props.employer_name}</h3>
            {
                props.job_min_salary && props.job_max_salary && props.job_salary_period && 
                <p className={`pb-1 font-istok ${isDark? "text-primary-dark" : "text-accent"}`}>{props.job_min_salary} - {props.job_max_salary} PER {props.job_salary_period}</p>
            }
            <p className="pb-1 font-istok">Published On <span className={isDark? "text-primary-dark" : "text-accent"}>{props.job_publisher}</span></p>
            {
                props.job_posted_at && 
                <p className="pb-1 font-istok">Posted <span className={isDark? "text-primary-dark" : "text-accent"}>{props.job_posted_at}</span></p>
            }
            
            {
                isSaved? 

                <button onClick={() => handleUnsave(props.job_id)} className="bg-red-400 px-2 py-1 rounded-md font-itim shadow-sm shadow-gray-400 cursor-pointer hover:shadow-md text-text-dark">Remove</button> : 

                <button onClick={() => {
                    handleSave({
                        job_id : props.job_id,
                        job_title : props.job_title,
                        job_max_salary : props.job_max_salary,
                        job_min_salary : props.job_min_salary,
                        job_posted_at : props.job_posted_at,
                        job_publisher : props.job_publisher,
                        job_salary : props.job_salary,
                        job_salary_period : props.job_salary_period,
                        employer_name : props.employer_name,
                        job_employment_type : props.job_employment_type
                    })
                }} className="bg-primary-dark px-2 py-1 rounded-md font-itim shadow-sm shadow-gray-400 cursor-pointer hover:shadow-md text-bg-dark">Save</button>
            }
            
        </div>
    )
}