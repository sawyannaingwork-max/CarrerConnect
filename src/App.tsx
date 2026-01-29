import Header from "./components/Header"
import { Route, Routes } from "react-router"
import Home from "./components/Home"
import ThemeProvider from "./custom/ThemeProvider"

export default function App()
{
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}