import { useTheme } from "../custom/ThemeProvider";
import type { JobSalarySearchResponse, SalaryForm } from "../type";
import type { QueryObserverResult } from "@tanstack/react-query";
import searchIcon from "./../assets/search.svg"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Type for SalarySearchForm Props
interface SalarySearchFormProps {
    salarySearchInput : SalaryForm,
    setSalarySearchInput : React.Dispatch<React.SetStateAction<SalaryForm>>,
    refetch : () => Promise<QueryObserverResult<JobSalarySearchResponse, Error>>
}

export default function SalarySearchForm({salarySearchInput, setSalarySearchInput, refetch} : SalarySearchFormProps)
{

    const [isDark] = useTheme()

    const elementRef = useRef<HTMLFormElement | null>(null)

    // Function for handling changes
    function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)
    {
        // Destructuring
        const { name, value } = e.target 

        setSalarySearchInput({
            ...salarySearchInput,
            [name] : value
        })
    }

    const experiences = ["ALL", "LESS_THAN_ONE", "ONE_TO_THREE", "FOUR_TO_SIX", "SEVEN_TO_NINE", "TEN_TO_FOURTEEN", "ABOVE_FIFTEEN"]

    useGSAP(() => {
        if (!elementRef.current)
        {
            return 
        }

        // Creating timelnine
        const timeline = gsap.timeline()

        timeline.from(".form-wrapper", {
            opacity : 0,
            y : -20,
            stagger : 0.2,
            ease : "sine"
        })

        timeline.from(".search-btn", {
            opacity : 0,
            duration : 0.5,
            ease : "sine"
        })

        return(() => {
            timeline.kill()
        })
    }, { scope : elementRef, dependencies : []})
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            refetch()
        }} className="w-[90%] mx-auto " ref={elementRef}>
            <div className="lg:flex gap-5 justify-between flex-wrap">
                <div className="form-wrapper">
                    <label htmlFor="#">Job Title</label>
                    <input onChange={(e) => handleChange(e)} type="text" name="job" id="job" value={salarySearchInput.job} placeholder="Eg: Front End Developer" />
                </div>

                <div className="form-wrapper">
                    <label htmlFor="#">Location</label>
                    <input onChange={(e) => handleChange(e)}  type="text" name="location" id="location" value={salarySearchInput.location} />
                </div>

                <div className="form-wrapper">
                    <label htmlFor="#">Experience</label>
                    <select className={isDark? "bg-bg-dark" : "bg-bg-light"} onChange={(e) => handleChange(e)}  name="experience" id="experience" value={salarySearchInput.experience}>
                        <option value="" disabled>Select Experience</option>
                        {
                            experiences.map(exp => {
                                return(
                                    <option key={exp} value={exp}>{exp}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

            <button className="search-btn">
                Search 
                <img src={searchIcon} alt="Search" />
            </button>
        </form>
    )
}