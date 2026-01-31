import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import type { CountryResponse, Country } from "../type";

// Creating context
const countryContext = createContext<Country[] | undefined>(undefined)

export default function CountryProvider({children} : {children : React.ReactNode})
{
    // Fetching Data
    const { data, isFetching, isError } = useQuery<CountryResponse>({
        queryKey : ["Country"],
        queryFn : async function()
        {
            try 
            {
                const response = await fetch("https://countriesnow.space/api/v0.1/countries")

                if (!response.ok)
                {
                    throw new Error("Fetching Fail")
                }

                const result = await response.json()

                return result
            }

            catch(error)
            {
                throw new Error("Something went wrong.")
            }
        },
        staleTime : Infinity,
        refetchOnWindowFocus : false
    })

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later</p>
    }



    return(
        <countryContext.Provider value={data.data}>
            {children}
        </countryContext.Provider>
    )
}

// Function for accessing country
export function useCountryContext()
{
    const context = useContext(countryContext)

    if (!context)
    {
        throw new Error("Country should only be used inside Country Provider")
    }

    return context
}