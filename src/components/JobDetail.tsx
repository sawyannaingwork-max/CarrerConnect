import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import type { JobDetailResponse } from "../type"
import { useTheme } from "../custom/ThemeProvider"

export default function JobDetail()
{
    // Getting the id 
    const { id } = useParams()

    const [isDark] = useTheme()

    // Fetching Data
    const { data, isFetching, isError } = useQuery<JobDetailResponse>({
        queryKey : ["Job Detail", id],
        queryFn : async function()
        {
            const response = await fetch(`https://jsearch.p.rapidapi.com/job-details?job_id=${id}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'd96dfb8b68msh5e2e21f8f0bcbe7p15ac7bjsn7edbe709929b',
                    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
                }
            })

            const result = await response.json()

            return result
        },
        staleTime : Infinity
    })

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const info = data.data[0]
    console.log(info.job_description)
    return (
        <div className={`py-9 w ${isDark? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"}`}>
            <div className="w-[90%] mx-auto">
                <span className="px-2 py-1 font-itim rounded-sm text-bg-dark shadow-sm  shadow-gray-400 text-center bg-primary-dark ">{info.job_employment_type}</span>
                <div className="flex gap-2 mt-4 justify-start items-center">
                    {
                        info.employer_logo && 
                        <img className="w-15" src={info.employer_logo} alt={info.employer_name} />
                    }
                    <div>
                        <h2 className="font-albert text-xl">{info.employer_name}</h2>
                        {
                            info.employer_website && 
                            <a href={info.employer_website}>{info.employer_website}</a>
                        }
                        <p className="opacity-75">{info.job_location}</p>
                        <p>{info.job_is_remote && "Remote"}</p>
                        <p>{info.job_posted_at && `Posted at : ${info.job_posted_at}`}</p>
                    </div>
                </div>
                <h1 className="mt-9 text-2xl font-albert">{info.job_title}</h1>
                <section className="mt-5">
                    <h2 className="mb-3 text-xl text-inherit">Description</h2>
                    <p className="whitespace-pre-line opacity-70">{info.job_description.replaceAll(/•/g, "\n•")}</p>
                </section>

                {
                    info.job_benefits && 
                    <section className="mt-9">
                        <h2 className="mb-3 text-xl text-inherit">Benefits</h2>
                        {
                            info.job_benefits.map((benefit, index) => {
                                return <p key={index} className="py-2 opacity-79">{benefit}</p>
                            })
                        }
                    </section>
                }

                {
                    info.job_highlights.Qualifications && 
                    <section className="mt-9">
                        <h2 className="mb-3 text-xl text-inherit">Qualification</h2>
                        <p className="whitespace-pre-line opacity-70">{info.job_highlights.Qualifications}</p>
                    </section>
                }

                {
                    info.job_highlights.Responsibilities && 
                    <section className="mt-9">
                        <h2 className="mb-3 text-xl text-inherit">Responsibilities</h2>
                        <p className="whitespace-pre-line opacity-70">{info.job_highlights.Responsibilities}</p>
                    </section>
                }

                {
                    info.job_highlights.Benefits && 
                    <section className="mt-9">
                        <h2 className="mb-3 text-xl text-inherit">Benefits</h2>
                        <p className="whitespace-pre-line opacity-70">{info.job_highlights.Benefits}</p>
                    </section>
                }

                {
                    info.job_salary && 
                    <p>Salary : {info.job_salary}</p>
                }

                {
                    info.job_min_salary && info.job_max_salary && info.job_salary_period && 
                    <p>{info.job_min_salary} - {info.job_max_salary} PER {info.job_salary_period}</p>
                }

                <section className="mt-9">
                    <h2 className="text-xl mb-3 text-inherit">Apply Here</h2>
                    <div className="flex flex-wrap gap-2">
                        {
                            info.apply_options.map((apply, index) => {
                                return(
                                    <a className="btn" key={index} href={apply.apply_link}>{apply.publisher}</a>
                                )
                            })
                        }
                    </div>
                </section>
                
                {
                    info.employer_reviews && 
                    <section className="mt-9">
                        <h2 className="text-2xl mb-3 text-inherit">Reviews</h2>
                        <div className="flex flex-wrap justify-between gap-5">
                            {
                            info.employer_reviews.map((review, index) => {
                                    return(
                                        <div key={index}>
                                            <h3 className="text-xl font-albert">{review.employer_name} <span className="font-crimson text-primary-dark">{review.score}/{review.max_score}</span></h3>
                                            <p>Reviewd by <span className="text-primary-dark">{review.review_count}</span></p>
                                            <p>Published By <span className="text-primary-dark">{review.publisher}</span></p>
                                            <a className="text-primary-dark hover:underline cursor-pointer" href={review.reviews_link}>Watch Review Here</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                }
            </div>
        </div>
    ) 
}