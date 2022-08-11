import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./screen/Home/Mainpage";
import "./App.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
        </Routes>
    );
}
