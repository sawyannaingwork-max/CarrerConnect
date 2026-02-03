import type { JobSearchResponse, JobSearchType } from "../type";
import { useCountryContext } from "../custom/CountryProvider";
import searchSvg from "./../assets/search.svg"
import { useTheme } from "../custom/ThemeProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import type { QueryObserverResult } from "@tanstack/react-query";

export default function Form({inputs, handleChange, refetch} : {inputs : JobSearchType, handleChange : (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, refetch :() => Promise<QueryObserverResult<JobSearchResponse, Error>>
})
{   
    const [isDark, _] = useTheme()
    const countries = useCountryContext()
    const formRef = useRef<null | HTMLFormElement>(null)

    const dates = ["all", "today", "3days", "week", "month"]
    const requirements = ["under_3_years_experience", "more_than_3_years_experience", "no_experience", "no_degree"]

    // For handling submit
    function handleSubmit(e : React.SubmitEvent<HTMLFormElement>)
    {
        e.preventDefault()

        // Fetching the data
        refetch()
    }   

    useGSAP(() => {
        if (!formRef.current)
        {
            return 
        }

        const timeline = gsap.timeline({
            delay : 3
        })

        timeline.from(".form-wrapper", {
            opacity : 0,
            y : -20,
            ease : "sine",
            stagger : {
                each : 0.5,
            }
        })

        timeline.from(".search-btn", {
            opacity : 0,
            duration : 0.6,
            ease : "sine"
        })

        return(() => {
            timeline.kill()
        })
    }, { scope : formRef, dependencies : []})
    return(
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className="mt-9 w-[90%] mx-auto">
            <div className="lg:flex gap-5 justify-between flex-wrap">
                <div className="form-wrapper">
                    <label htmlFor="query">Query</label>
                    <input onChange={(event) => handleChange(event)} type="text" name="query" id="query" placeholder="Eg. Software Developers in Bangkok" value={inputs.query} />
                </div>

                
                <div className="form-wrapper">
                    <label htmlFor="requirement">Requirements <span>(Optional)</span></label>
                    <select className={isDark? "bg-bg-dark" : "bg-bg-light"} onChange={(event) => handleChange(event)} name="requirements" id="requirements" value={inputs.requirements}>
                        <option value="" disabled>Choose Reqirements</option>
                        {
                            requirements.map((text) => {
                                return <option key={text} value={text}>{text}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="country">Country</label>
                    <select className={isDark? "bg-bg-dark" : "bg-bg-light"} onChange={(event) => handleChange(event)} name="country" id="country" value={inputs.country}>
                        <option value="us">United States</option>
                        {
                            countries.map((country) => {
                                return <option key={country.iso2} value={country.iso2}>{country.country}</option>
                            })
                        }
                    </select>
                </div>


                <div className="form-wrapper">
                    <label htmlFor="date">Date <span>(Optional)</span></label>
                    <select className={isDark? "bg-bg-dark" : "bg-bg-light"} onChange={(event) => handleChange(event)} name="date" id="date" value={inputs.date}>
                        <option value="" disabled>Select Posted Date</option>
                        {
                            dates.map((text) => {
                                return(
                                    <option key={text} value={text}>{text}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <button className="search-btn">Search <img src={searchSvg} alt="Search" /></button>
        </form>
    )
}