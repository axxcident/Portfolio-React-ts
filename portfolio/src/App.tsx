import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="loggan">
          <h2>A&O</h2>
        </div>
        <ul className="länkar">
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/"}>Services</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Allt i header borde vara i en pages/Home.tsx och det i sin tur innehålla components/PortfolioPage.tsx  */}
      <Routes>
        <Route path="/" element={<About namn="Axel Olivecrona" />} />
      </Routes>
    </div>
  );
}

export default App;
