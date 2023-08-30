import React from "react";
import Layout from "./Layout";

const Contacto = () => {
    return (
        <Layout>
            <div className="grid">
                <h2>¿Queres saber mas de nosotros?</h2>
                <h2>¿Sos revendedo y queres conocer precios mayoristas?</h2>
                <p>
                    No dudes en contactarnos
                    <code>Email: punkapi@beers.com</code>
                    <code>Telefono: 11324568</code>
                </p>
            </div>
        </Layout>
    );
};

export default Contacto;
