import { useTheme } from "../custom/ThemeProvider"
import handSvg from "./../assets/hands.svg"
import lightHandSvg from "./../assets/hands-light.svg"

export default function Content()
{
    const [isDark, _] = useTheme()

    return(
        <div>
            <h1>Find Every Job Listing Posted On Internet Here</h1>
            <h2>Let’s Find Your Dream Job</h2>
            <img src={isDark? handSvg : lightHandSvg} alt="Hands" />
        </div>
    )
}