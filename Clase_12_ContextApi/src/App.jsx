import { useState } from "react";
import "./App.css";
import { themes } from "./context";
import themeContext from "./context";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
    const [theme, setTheme] = useState(themes.light);

    const handleChangeTheme = () => {
        if (theme === themes.dark) setTheme(themes.light);
        if (theme === themes.light) setTheme(themes.dark);
    };

    return (
        <themeContext.Provider value={{ theme, handleChangeTheme }}>
            <Layout>
                <Navbar />
                <Body />
            </Layout>
        </themeContext.Provider>
    );
}

export default App;
