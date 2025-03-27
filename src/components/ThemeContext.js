import { useState, useContext, createContext } from "react";

const ThemeContext = createContext(); // creiamo il contesto

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {

        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    };

    return (

        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme () {
    return useContext(ThemeContext);
}


