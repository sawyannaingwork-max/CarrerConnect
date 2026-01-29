import { useEffect, useState } from "react";

type UseThemeReturn = [boolean, () => void];

export default function useTheme(): UseThemeReturn {
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

  return [isDark, toggleTheme];
}
