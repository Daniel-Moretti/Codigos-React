import { createContext, useState } from "react";

//vou usar este cara no useContext
export const ThemeContext = createContext();

//vou usar no HTML
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    function changeTheme() {
        setTheme(theme !== 'dark' ? 'dark' : 'light')
    }

    return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}