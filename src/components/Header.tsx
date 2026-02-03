import { useTheme } from "../custom/ThemeProvider"
import menuSvg from "./../assets/menu.svg"
import menuLightSvg from "./../assets/menu-light.svg"
import darkSvg from "./../assets/dark.svg"
import lightSvg from "./../assets/light.svg"
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"

gsap.registerPlugin(SplitText)

export default function Header()
{
    const [isDark, handleClick] = useTheme()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const headerRef = useRef<HTMLHeadElement | null>(null)

    useGSAP(() => {
        if (!headerRef.current)
        {
            return
        }

        const timeline = gsap.timeline()

        const split = new SplitText("#product-name", {
            type : "chars"
        })

        timeline.from(headerRef.current, {
            opacity : 0,
            y : -20,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from(split.chars, {
            opacity : 0,
            rotate : -45,
            stagger : {
                each : 0.1,
                from : "edges",
                grid : [3, 4],
                axis : "x"
            }
        })

        timeline.from(".nav-link", {
            opacity : 0,
            stagger : 0.1,
            ease : "sine"
        })

        timeline.from("#toggle", {
            opacity : 0,
            rotate : 360,
            duration : 0.6,
            ease : "bounce"
        })

    }, { scope : headerRef, dependencies : []})
    return (
        <header ref={headerRef} className={`${isDark? "bg-bg-dark" : "bg-bg-light"} py-3 z-10 px-5 sticky top-0 flex justify-between items-center`}>
            <div className="flex gap-2 items-center">
                <img onClick={() => setIsOpen(!isOpen)} className="w-8 md:hidden cursor-pointer" src={isDark? menuSvg : menuLightSvg} alt="Menu" />
                <h1 id="product-name" className={`${isDark? "text-text-dark" : "text-text-light"} text-3xl font-crimson`}>CarrerConnect</h1>
            </div>
            <nav className={`${isOpen? "h-30 px-5 py-5" : "h-0"} md:h-auto duration-300 ease-linear overflow-hidden md:relative md:left-auto md:top-auto md:w-auto md:bg-none absolute top-full left-0 w-full bg-inherit`}>
                <ul className="md:flex gap-5 text-center">
                    <li>
                        <a onClick={() => setIsOpen(false)} className={`${isDark? "text-primary-dark" : "text-accent"} nav-link`} href="#">Home</a>
                    </li>
                    <li>
                        <a onClick={() => setIsOpen(false)} className={`${isDark? "text-primary-dark" : "text-accent"} nav-link`} href="#">Job Salary</a>
                    </li>
                    <li>
                        <a onClick={() => setIsOpen(false)} className={`${isDark? "text-primary-dark" : "text-accent"} nav-link`} href="#">Company Salary</a>
                    </li>
                    <li>
                        <a  onClick={() => setIsOpen(false)} className={`${isDark? "text-primary-dark" : "text-accent"} nav-link`} href="#">Saved</a>
                    </li>

                </ul>
            </nav>
            <div onClick={handleClick}>
                <img id="toggle" className="cursor-pointer w-7" src={isDark? lightSvg : darkSvg} alt="Change Theme" />
            </div>
        </header>
    )
}