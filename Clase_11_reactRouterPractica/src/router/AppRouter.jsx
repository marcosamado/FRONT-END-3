import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Beer from "../pages/Beer";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="beer/:id" element={<Beer />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;
