import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./page/Home/Mainpage";
import EventsHome from "./page/Events/EventsHome";
import ChickenEvent from "./page/Events/ChickenEvent";
import CoffeeEvent from "./page/Events/CoffeeEvent";
import "./App.css";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/events" element={<EventsHome />} />
            <Route path="/events/chicken" element={<ChickenEvent />} />
            <Route path="/events/coffee" element={<CoffeeEvent />} />
        </Routes>
    );
}
