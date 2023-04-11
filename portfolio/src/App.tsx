import React, { useState } from "react";
// General Styling
import "./App.css";
import styled from "styled-components";
// Transition between pages & pages
import TransitionRoutes from "./TransitionRoutes";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const [bgTheme, setBgTheme] = useState(false);

  return (
    <Appen bgTheme={bgTheme} className="App">
      <NavBar bgTheme={bgTheme} className="navbar">
        <div className="loggan">
          <h2>A&O</h2>
        </div>
        <ul className="länkar">
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </NavBar>
      {/* Allt i header borde vara i en pages/Home.tsx och det i sin tur innehålla components/PortfolioPage.tsx  */}
      <TransitionRoutes>
        <Route
          path="/"
          element={
            <About tema={bgTheme} setTema={setBgTheme} namn="Axel Olivecrona" />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </TransitionRoutes>
    </Appen>
  );
}

export default App;

const Appen = styled.div<{ bgTheme: boolean }>`
  /* background-color: #151515; */
  background-color: ${({ bgTheme }) => (bgTheme ? "#151515" : "white")};
  color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")};
`;

const NavBar = styled.nav<{ bgTheme: boolean }>`
  background-color: ${({ bgTheme }) => (bgTheme ? "#222222" : "white")};
  /* color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")}; */
  ul li a {
    font-weight: 600;
    color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")};
  }
  li:hover a {
    color: #ec1839;
  }
`;
