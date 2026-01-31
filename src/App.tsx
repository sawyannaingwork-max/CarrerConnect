import Header from "./components/Header"
import { Route, Routes } from "react-router"
import Home from "./components/Home"
import ThemeProvider from "./custom/ThemeProvider"
import CountryProvider from "./custom/CountryProvider"
import SavedListProvider from "./custom/SavedListProvider"


export default function App()
{
  return (
    <ThemeProvider>
      <Header />
      <CountryProvider>
        <SavedListProvider>
          <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </SavedListProvider>
      </CountryProvider>
    </ThemeProvider>
  )
}