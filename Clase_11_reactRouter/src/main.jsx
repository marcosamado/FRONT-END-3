import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Faqs from "./Faqs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="Faqs" element={<Faqs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
