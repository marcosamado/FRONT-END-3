import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
    const [pokemones, setPokemon] = useState([]);

    // const fetchData = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then((reponse) => reponse.json())
    //         .then((data) => {
    //             // console.log(data.results);
    //             setPokemon(data.results);
    //         });
    // };

    const fetchData = async () => {
        // const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();

        setPokemon(data.results);
    };

    useEffect(() => {
        // fetchData();
        fetchData();
    }, []);
    return (
        <>
            {pokemones.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
        </>
    );
}

export default App;
