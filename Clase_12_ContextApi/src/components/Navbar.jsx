import themeContext from "../context";
import "../App.css";
import { useContext } from "react";

const Navbar = () => {
    const { theme, handleChangeTheme } = useContext(themeContext);

    return (
        <div>
            <p>Inicio</p>
            <button
                style={{ background: theme.background, color: theme.font }}
                onClick={handleChangeTheme}
            >
                THEMED BUTTON
            </button>
        </div>
    );
};

export default Navbar;
