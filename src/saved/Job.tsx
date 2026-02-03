import { useNavigate } from "react-router";
import type { SavedJob } from "../type";
import { useTheme } from "../custom/ThemeProvider";
import { useSavedJob } from "../custom/SavedListProvider";

export default function Job(props : SavedJob)
{
    const navigate = useNavigate()
    const [isDark] = useTheme()
    const [, , handleUnsave] = useSavedJob()
    return(
        <div onClick={() => navigate(`/job/${props.job_id}`)} className={`cursor-pointer hover:scale-[1.04] duration-150 p-3 rounded-md shadow-md text-inherit shadow-gray-400 ${isDark? "bg-bg-dark" : "bg-bg-light"}`}>
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
            <button onClick={(e) => {
                e.stopPropagation()
                handleUnsave(props.job_id)
            }} className="bg-red-400 px-2 py-1 rounded-md font-itim shadow-sm shadow-gray-400 cursor-pointer hover:shadow-md text-text-dark">Remove</button>     
        </div>
    )
}