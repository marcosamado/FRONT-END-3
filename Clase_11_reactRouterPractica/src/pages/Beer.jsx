import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

const Beer = () => {
    const [beer, setBeer] = useState([]);
    const { id } = useParams();

    const getBeers = async () => {
        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const data = await res.json();
        setBeer(data[0]);
    };

    useEffect(() => {
        getBeers();
    }, []);

    const { name, description, image_url } = beer;

    return (
        <Layout>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <div className="w-44 h-44">
                    <img src={image_url} alt="imagen de una lata de cerveza" />
                </div>
            </div>
        </Layout>
    );
};

export default Beer;
