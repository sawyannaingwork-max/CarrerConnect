import type { JobSearchResponse } from "../type";
import Job from "./Job";
import JobSkeleton from "./JobSkeleton";

// Type of JobListProps
interface JobListProps {
    data : JobSearchResponse | undefined,
    isFetching : boolean,
    isError : boolean
}

export default function JobList({data , isFetching, isError} : JobListProps)
{
    // Not Searched yet state
    if (!isFetching && !isError && !data)
    {
        return
    }

    if (isFetching)
    {
        return (
            <div className="mt-9 w-[90%] mx-auto">
                <h2 className="font-albert text-3xl mb-5">Results</h2>
                <div className="pb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <JobSkeleton />
                    <JobSkeleton />
                    <JobSkeleton />
                    <JobSkeleton />
                    <JobSkeleton />
                </div>
            </div>
        )
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const jobs = data?.data 

    if (jobs.length === 0)
    {
        return <p>There is no jobs that match your search</p>
    }

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="font-albert text-3xl mb-5">Results</h2>
            <div className="pb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    jobs.map(job => {
                        return(
                            <Job key={job.job_id} 
                                {...job}
                            />
                        )
                    })
                }
            </div>
        </div>
    )

}