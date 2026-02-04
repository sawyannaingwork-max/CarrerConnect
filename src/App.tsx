import Header from "./components/Header"
import { Route, Routes } from "react-router"
import ThemeProvider from "./custom/ThemeProvider"
import CountryProvider from "./custom/CountryProvider"
import SavedListProvider from "./custom/SavedListProvider"
import { useState } from "react"
import type { JobSearchType, SalaryForm} from "./type"

import { Suspense, lazy } from "react"
import Loader from "./components/Loader"

const Home = lazy(() => import("./components/Home"))
const Saved = lazy(() => import("./components/Saved"))
const SalarySearch = lazy(() => import("./components/SalarySearch"))
const JobDetail = lazy(() => import("./components/JobDetail"))
export default function App()
{
  // State for form input value
    const [inputs, setInputs] = useState<JobSearchType>({
        query : "",
        country : "us",
        date : "all",
        requirements : ""
    })

  // State for salary search input
  const [salarySearchInput, setSalarySearchInput] = useState<SalaryForm>({
    job : "",
    location : "",
    experience : "ALL"
  })
  
  return (
    <ThemeProvider>
      <Header />
      <CountryProvider>
        <SavedListProvider>
          <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home inputs={inputs} setInputs={setInputs} />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/salary" element={<SalarySearch salarySearchInput={salarySearchInput} setSalarySearchInput={setSalarySearchInput} />} />
          </Routes>
        </Suspense>
        </SavedListProvider>
      </CountryProvider>
    </ThemeProvider>
  )
}