import useJSearch from "../custom/useJSearch"
import type { SalaryForm, JobSalarySearchResponse } from "../type"
import SalarySearchForm from "../salary/SalarySearchForm"
import { useTheme } from "../custom/ThemeProvider"
import SalaryResult from "../salary/SalaryResult"

// Type of SalarySearch Props
interface SalarySearchProps {
    salarySearchInput : SalaryForm,
    setSalarySearchInput : React.Dispatch<React.SetStateAction<SalaryForm>>
}

export default function SalarySearch({salarySearchInput, setSalarySearchInput} : SalarySearchProps)
{
    // Fetching data
    const { data, isFetching, isError, refetch } = useJSearch<JobSalarySearchResponse>(["salary Search", salarySearchInput.job, salarySearchInput.location, salarySearchInput.experience], `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${salarySearchInput.job}&location=${salarySearchInput.location}&location_type=ANY&years_of_experience=${salarySearchInput.experience}`)

    const [isDark] = useTheme()

    return(
        <div className={`pt-9 min-h-screen ${isDark? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"}`}>
            <SalarySearchForm 
                salarySearchInput = {salarySearchInput}
                setSalarySearchInput = {setSalarySearchInput}
                refetch = {refetch}
            />

            <SalaryResult 
                data = {data}
                isFetching = {isFetching}
                isError = {isError}
            />
        </div>
    )
}