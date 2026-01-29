import { createContext, useContext, useEffect, useState } from "react";

type ThemeType = [boolean, () => void];

// Creating Theme
const themeContext = createContext<null | ThemeType>(null)
export default function ThemeProvider({children} : {children : React.ReactNode}) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("career-connect-dark-theme");
    return stored ? JSON.parse(stored) : true;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem(
      "career-connect-dark-theme",
      JSON.stringify(isDark)
    );
  }, [isDark]);

  return(
    <themeContext.Provider value={[isDark, toggleTheme]}>
      {children}
    </themeContext.Provider>
  )
}

// Accessing theme
export function useTheme()
{
    const theme = useContext(themeContext)

    if (!theme)
    {
        throw new Error("useTheme must be used inside ThemeProvider")
    }

    return theme
}