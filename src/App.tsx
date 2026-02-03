import Header from "./components/Header"
import { Route, Routes } from "react-router"
import Home from "./components/Home"
import ThemeProvider from "./custom/ThemeProvider"
import CountryProvider from "./custom/CountryProvider"
import SavedListProvider from "./custom/SavedListProvider"
import JobDetail from "./components/JobDetail"
import Saved from "./components/Saved"
import { useState } from "react"
import type { JobSearchType } from "./type"

export default function App()
{
  // State for form input value
    const [inputs, setInputs] = useState<JobSearchType>({
        query : "",
        country : "us",
        date : "all",
        requirements : ""
    })
  return (
    <ThemeProvider>
      <Header />
      <CountryProvider>
        <SavedListProvider>
          <Routes>
            <Route path="/" element={<Home inputs={inputs} setInputs={setInputs} />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/saved" element={<Saved />} />
        </Routes>
        </SavedListProvider>
      </CountryProvider>
    </ThemeProvider>
  )
}