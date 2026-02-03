import type { JobSalarySearchResponse } from "../type"
// Type for SalaryResult Props
interface SalaryResultProps {
    data : JobSalarySearchResponse | undefined,
    isFetching : boolean,
    isError : boolean
}

export default function SalaryResult({data, isFetching, isError} : SalaryResultProps)
{
    if (!isFetching && !isError && !data)
    {
        return 
    }

    if (isFetching)
    {
        return <p>Loading....</p>
    }

    if (isError)
    {
        return <p>Something went wrong try again later.</p>
    }

    if (!data)
    {
        return <p>No result match for your search.</p>
    }

    const result = data.data[0]

    return(
        <table>
            <tbody>
                <tr>
                    <td>Job title</td>
                    <td>{result.job_title}</td>
                </tr>
                <tr>
                    <td>Currency</td>
                    <td>{result.salary_currency}</td>
                </tr>

                <tr>
                    <td>Period</td>
                    <td>per {result.salary_period}</td>
                </tr>

                <tr>
                    <td>Mininum Salary</td>
                    <td>{result.min_salary}</td>
                </tr>

                <tr>
                    <td>Maximum Salary</td>
                    <td>{result.max_salary}</td>
                </tr>

                <tr>
                    <td>Median Salary</td>
                    <td>{result.median_salary}</td>
                </tr>

                <tr>
                    <td>Minimum Additional Pay</td>
                    <td>{result.min_additional_pay}</td>
                </tr>

                <tr>
                    <td>Maximum Additional Pay</td>
                    <td>{result.max_additional_pay}</td>
                </tr>

                <tr>
                    <td>Publisher</td>
                    <td>{result.publisher_name}</td>
                </tr>

                <tr>
                    <td>Publisher Link</td>
                    <td><a href={result.publisher_link}>{result.publisher_name}</a></td>
                </tr>
            </tbody>
        </table>
    )
    
}