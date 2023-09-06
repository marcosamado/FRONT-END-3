import { useContext } from "react";
import { themeContext } from "./context/ThemeContext";

function App() {
    const { number, handleClick } = useContext(themeContext);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleClick}>Sumar</button>
        </>
    );
}

export default App;
