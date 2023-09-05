import { useContext } from "react";
import themeContext from "../context";
import "../App.css";

const Layout = ({ children }) => {
    const { theme } = useContext(themeContext);

    return (
        <div style={{ background: theme.background, color: theme.font }}>
            {children}
        </div>
    );
};

export default Layout;
