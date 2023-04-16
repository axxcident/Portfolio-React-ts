import React, { useState } from "react";
// General Styling
import "./App.css";
import styled from "styled-components";
// Icons
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill, BsSun } from "react-icons/bs";
// Transition between pages & pages
import TransitionRoutesY from "./TransitionRoutesY";
import TransitionRoutesX from "./TransitionRoutesX";
import { Link, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PortfolioTesla from "./pages/PortfolioTesla";
import PortfolioTodo from "./pages/PortfolioTodo";
import PortfolioTjuvgods from "./pages/PortfolioTjuvgods";
import PortfolioDogeNews from "./pages/PortfolioDogeNews";
import PortfolioDogeFB from "./pages/PortfolioDogeFB";
import PortfolioWeather from "./pages/PortfolioWeather";
// import { PortFolioProps } from "./models/PortfolioProps";

const App: React.FC = () => {
  const [bgTheme, setBgTheme] = useState<boolean>(false);

  return (
    // App
    <Appen bgTheme={bgTheme} className="App">
      {/* Navbars */}
      <MobileNav bgTheme={bgTheme} className="mobile-navbar">
        <ul className="mobile-länkar">
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
        <div className="theme">
          <button
            className="nav-btn"
            onClick={() => {
              setBgTheme(!bgTheme);
              console.log("klickad", bgTheme);
            }}
          >
            {bgTheme ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </div>
      </MobileNav>
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
        <div className="theme">
          <button
            className="nav-btn"
            onClick={() => {
              setBgTheme(!bgTheme);
              console.log("klickad", bgTheme);
            }}
          >
            {bgTheme ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </div>
      </NavBar>
      {/* Routes | <TransitionRoutes Y X> */}
      <TransitionRoutesY>
        <Route
          path="/"
          element={
            <About
              tema={bgTheme}
              setTema={setBgTheme}
              namn=" Axel Olivecrona"
            />
          }
        />
        <Route path="/portfolio" element={<Portfolio bgTheme={bgTheme} />} />
        <Route path="/services" element={<Services bgTheme={bgTheme} />} />
        <Route path="/contact" element={<Contact bgTheme={bgTheme} />} />
      </TransitionRoutesY>
      <TransitionRoutesX>
        <Route
          path="/portfoliotesla"
          element={<PortfolioTesla bgTheme={bgTheme} />}
        />
        <Route
          path="/portfoliotodo"
          element={<PortfolioTodo bgTheme={bgTheme} />}
        />
        <Route
          path="/portfoliotjuvgods"
          element={<PortfolioTjuvgods bgTheme={bgTheme} />}
        />
        <Route
          path="/portfoliodogenews"
          element={<PortfolioDogeNews bgTheme={bgTheme} />}
        />
        <Route
          path="/portfoliodogefb"
          element={<PortfolioDogeFB bgTheme={bgTheme} />}
        />
        <Route
          path="/portfolioweather"
          element={<PortfolioWeather bgTheme={bgTheme} />}
        />
      </TransitionRoutesX>
    </Appen>
  );
};

export default App;

const Appen = styled.div<{ bgTheme: boolean }>`
  /* background-color: #151515; main-content white #f2f2fc */
  background-color: ${({ bgTheme }) => (bgTheme ? "#151515" : "#f2f2fc")};
  color: ${({ bgTheme }) => (bgTheme ? "#f2f2fc" : "#151515")};
`;

const NavBar = styled.nav<{ bgTheme: boolean }>`
  background-color: ${({ bgTheme }) => (bgTheme ? "#222222" : "#fdf9ff")};
  border-right: 2px solid ${({ bgTheme }) => (bgTheme ? "#393939" : "#e8dfec")};
  /* color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")}; */
  ul li a {
    /* Bg aside white */
    font-weight: 600;
    color: ${({ bgTheme }) => (bgTheme ? "#f2f2fc" : "#151515")};
  }
  li:hover a {
    color: #ec1839;
  }
  li:hover span {
    color: #ec1839;
  }
  .nav-btn {
    background-color: ${({ bgTheme }) => (bgTheme ? "#ec1839" : "#fdf9ff")};
    border: 2px solid ${({ bgTheme }) => (bgTheme ? "#393939" : "#e8dfec")};
    color: ${({ bgTheme }) => (bgTheme ? "#fdf9ff" : "#393939")};
    box-shadow: ${({ bgTheme }) =>
      bgTheme
        ? "3px 3px 10px 2px rgba(236, 24, 57, 0.902)"
        : "3px 3px 10px 2px rgba(34, 34, 34, 0.902)"};
  }
`;

const MobileNav = styled.nav<{ bgTheme: boolean }>`
  background-color: ${({ bgTheme }) => (bgTheme ? "#222222" : "#fdf9ff")};
  border-bottom: 2px solid ${({ bgTheme }) => (bgTheme ? "#393939" : "#e8dfec")};
  /* color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")}; */
  ul li a {
    /* Bg aside white */
    font-weight: 600;
    color: ${({ bgTheme }) => (bgTheme ? "#f2f2fc" : "#151515")};
  }
  li:hover a {
    color: #ec1839;
  }
  li:hover span {
    color: #ec1839;
  }
  .nav-btn {
    background-color: ${({ bgTheme }) => (bgTheme ? "#ec1839" : "#fdf9ff")};
    border: 2px solid ${({ bgTheme }) => (bgTheme ? "#393939" : "#e8dfec")};
    color: ${({ bgTheme }) => (bgTheme ? "#fdf9ff" : "#393939")};
    box-shadow: ${({ bgTheme }) =>
      bgTheme
        ? "3px 3px 10px 2px rgba(236, 24, 57, 0.902)"
        : "3px 3px 10px 2px rgba(34, 34, 34, 0.902)"};
  }
`;
