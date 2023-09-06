import { createContext, useState } from "react";

export const themeContext = createContext();

const ContextProvider = ({ children }) => {
    // const [theme, setTheme] = useState();
    const [number, setNumber] = useState(1);

    const handleClick = () => {
        setNumber(number + 1);
    };
    // const themes = {
    //     light: {
    //         font: "black",
    //         background: "white",
    //     },
    //     dark: {
    //         font: "white",
    //         background: "black",
    //     },
    // };

    // const handleChangeTheme = () => {
    //     if (theme === themes.dark) setTheme(themes.light);
    //     if (theme === themes.light) setTheme(themes.dark);
    // };
    // theme, setTheme, handleChangeTheme, themes,
    return (
        <themeContext.Provider value={{ number, setNumber, handleClick }}>
            {children}
        </themeContext.Provider>
    );
};

export default ContextProvider;
