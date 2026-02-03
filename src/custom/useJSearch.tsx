import { useQuery } from "@tanstack/react-query";

export default function useJSearch<T>(key : any[], url : string)
{
    const { data, isFetching, refetch, isError } = useQuery<T>({
        queryKey : key,
        queryFn : async function()
        {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'd96dfb8b68msh5e2e21f8f0bcbe7p15ac7bjsn7edbe709929b',
                    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
                }
            })

            if (!response.ok)
            {
                console.log(response)
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