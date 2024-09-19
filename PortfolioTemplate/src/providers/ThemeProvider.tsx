import { createContext, useState } from "react";

export const ThemeContext = createContext<{
    darkMode: boolean;
    toggleTheme: () => void;
  }>({
    darkMode: true,
    toggleTheme: () => {},
  });

const ThemeProvider = ({children} : {children: React.ReactNode}) => {
    const [darkMode, setDatkMode] = useState<boolean>(true);

    const toggleTheme = () => {
        setDatkMode(!darkMode);
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;