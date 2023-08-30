import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Home = () => {
    const [beers, setBeers] = useState([]);

    const getBeers = async () => {
        const res = await fetch("https://api.punkapi.com/v2/beers");
        const data = await res.json();
        setBeers(data);
    };

    useEffect(() => {
        getBeers();
    }, []);
    return (
        <Layout>
            <h1>Home</h1>
            <div className="container flex flex-wrap">
                {beers.map((beer) => (
                    <div className="w-auto h-auto border m-28">
                        <Link to={`beer/${beer.id}`}>
                            <h2 className="mb-5">{beer.name}</h2>
                            <div className="w-8 h-5">
                                <img src={beer.image_url} alt="beer picture" />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;
