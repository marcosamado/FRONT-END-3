import React from "react";
import { Link } from "react-router-dom";

const Nabvar = () => {
    return (
        <>
            <Link to="./Home">Home</Link>
            <Link to="./About">About</Link>
            <Link to="./Faqs">Faqs</Link>
        </>
    );
};

export default Nabvar;
