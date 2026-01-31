import { useQuery } from "@tanstack/react-query";
import type { JobSearchResponse } from "../type";

export default function useJSearch(key : any[], url : string)
{
    console.log("Run")
    const { data, isFetching, refetch, isError } = useQuery<JobSearchResponse>({
        queryKey : key,
        queryFn : async function()
        {
            console.log("Getting Executed")
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'd96dfb8b68msh5e2e21f8f0bcbe7p15ac7bjsn7edbe709929b',
                    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
                }
            })

            if (!response.ok)
            {
                throw new Error("Fetching Fail")
            }

            const result = await response.json()

            return result
        },
        enabled : false,
        staleTime : 60 * 1000 * 60 * 24,
        retry : false,
        refetchOnWindowFocus : false,
        refetchOnReconnect : false,
        placeholderData : (prev) => prev
    })

    return { data, isFetching, refetch, isError}
}