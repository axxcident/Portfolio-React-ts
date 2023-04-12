import React, { useState } from "react";
// General Styling
import "./App.css";
import styled from "styled-components";
// Transition between pages & pages
import TransitionRoutesY from "./TransitionRoutesY";
import TransitionRoutesX from "./TransitionRoutesX";
import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PortfolioTesla from "./pages/PortfolioTesla";
import PortfolioTodo from "./pages/PortfolioTodo";

const App: React.FC = () => {
  const [bgTheme, setBgTheme] = useState(false);

  return (
    // App
    <Appen bgTheme={bgTheme} className="App">
      {/* Navbar */}
      <NavBar bgTheme={bgTheme} className="navbar">
        <div className="loggan">
          <h2>A&O</h2>
        </div>
        <ul className="länkar">
          <li>
            <span className="material-symbols-outlined">person</span>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">cases</span>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">build</span>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">forum</span>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </NavBar>
      {/* Routes | <TransitionRoutesY> */}
      <TransitionRoutesY>
        <Route
          path="/"
          element={
            <About tema={bgTheme} setTema={setBgTheme} namn="Axel Olivecrona" />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </TransitionRoutesY>
      {/* <Routes>
        <Route
          path="/"
          element={
            <About tema={bgTheme} setTema={setBgTheme} namn="Axel Olivecrona" />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/portfoliotesla"
          element={<PortfolioTesla bgTheme={bgTheme} />}
        />
        <Route
          path="/portfoliotodo"
          element={<PortfolioTodo bgTheme={bgTheme} />}
        />
      </Routes> */}
      <TransitionRoutesX>
        <Route
          path="/portfoliotesla"
          element={<PortfolioTesla bgTheme={bgTheme} />}
        />
        <Route
          path="/portfoliotodo"
          element={<PortfolioTodo bgTheme={bgTheme} />}
        />
      </TransitionRoutesX>
    </Appen>
  );
};

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
  li:hover span {
    color: #ec1839;
  }
`;
