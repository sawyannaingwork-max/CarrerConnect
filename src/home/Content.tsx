import { useTheme } from "../custom/ThemeProvider"
import { useRef } from "react"
import handSvg from "./../assets/hands.svg"
import lightHandSvg from "./../assets/hands-light.svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"


gsap.registerPlugin(SplitText)

export default function Content()
{
    const [isDark, _] = useTheme()
    const elementRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if(!elementRef.current)
        {
            return
        }

        const timeline = gsap.timeline({
            delay : 1
        })

        const split = new SplitText("#intro-heading", {
            type : "words"
        })

        timeline.from(split.words, {
            opacity : 0,
            x : -20,
            stagger : 0.1
        })

        timeline.from("#animate-text", {
            opacity : 0,
            y : 20
        })

        timeline.from("#animate-img", {
            opacity : 0,
            y : 30
        })

        timeline.to("#animate-text", {
            textShadow : "0px 2px 5px aqua"
        })

        return(() => {
            timeline.kill()
            split.revert()
        })

    }, { scope : elementRef, dependencies : []})

    return(
        <div ref={elementRef} className="pt-9 w-[90%] mx-auto max-w-200">
            <h1 id="intro-heading" className="font-albert text-2xl text-center">Find Every Job Listing Posted On Internet Here</h1>
            <h2 id="animate-text" className="text-shadow-2xs font-albert text-xl text-center font-light pt-4">Let’s Find Your Dream Job</h2>
            <img id="animate-img" className="mx-auto mt-2" src={isDark? handSvg : lightHandSvg} alt="Hands" />
        </div> 
    )
}