import { useState } from "react";
import { useTheme } from "../custom/ThemeProvider";
import Content from "../home/Content";
import Form from "../home/Form";
import type { JobSearchType } from "./../type"
import useJSearch from "../custom/useJSearch";
import JobList from "../home/JobList";

export default function Home()
{
    const [isDark, _] = useTheme()

    // State for form input value
    const [inputs, setInputs] = useState<JobSearchType>({
        query : "",
        country : "us",
        date : "all",
        requirements : ""
    })

    let url : string

    if (inputs.requirements)
    {
        url = `https://jsearch.p.rapidapi.com/search?query=${inputs.query}&page=1&num_pages=1&country=${inputs.country}&date_posted=${inputs.date}&requirements=${inputs.requirements}`
    }

    else 
    {
        url = `https://jsearch.p.rapidapi.com/search?query=${inputs.query}&page=1&num_pages=1&country=${inputs.country}&date_posted=${inputs.date}`
    }

    const { data, isFetching, isError, refetch } = useJSearch(["Job Search", inputs.query, inputs.country, inputs.date, inputs.requirements], url)

    //Function for handling changes in form
    function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)
    {
        // Destructuring 
        const { name, value } = e.target;

        // Updating the inputs
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    return (
        <main className={`min-h-screen overflow-hidden ${isDark? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"}`}>
            <Content />
            <Form 
                inputs = {inputs}
                handleChange = {handleChange}
                refetch = {refetch}
            />
            <JobList 
                data = {data}
                isFetching={isFetching}
                isError={isError}
            />
        </main>
    )
}