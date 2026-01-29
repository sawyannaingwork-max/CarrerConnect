import { useTheme } from "../custom/ThemeProvider";
import Content from "../home/Content";

export default function Home()
{
    const [isDark, _] = useTheme()

    return (
        <main className={`min-h-screen ${isDark? "bg-bg-dark text-text-dark" : "bg-bg-light text-text-light"}`}>
            <Content />
        </main>
    )
}