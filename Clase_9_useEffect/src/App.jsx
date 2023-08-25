import { useState } from "react";
import Componente from "./Componente";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>holis</h1>
            <Componente></Componente>
        </>
    );
}

export default App;
