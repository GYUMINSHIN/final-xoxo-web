import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./screen/Home/Mainpage";
import EventsHome from "./screen/Events/EventsHome";
import ChickenEvent from "./screen/Events/ChickenEvent";
import "./App.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/events" element={<EventsHome />} />
            <Route path="/events/chicken" element={<ChickenEvent />} />
        </Routes>
    );
}
