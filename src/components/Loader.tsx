import { useTheme } from "../custom/ThemeProvider"
import { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(SplitText)
export default function Loader()
{
    const [isDark] = useTheme()
    const elementRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        if (!elementRef.current)
        {
            return
        }

        const split = new SplitText("h1", {
            type : "chars"
        })

        gsap.from(split.chars, {
            opacity : 0,
            y : 20,
            x : 20,
            stagger : 0.1,
            ease : "sine",
            repeat : -1
        })

        return(() => split.revert())
    }, {scope : elementRef, dependencies : []} )
    return(
        <div ref={elementRef} className={`min-h-screen flex justify-center items-center ${isDark ? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"}`}>
            <h1 className="font-crimson text-3xl">Carrer Connect</h1>
        </div>
    )
}