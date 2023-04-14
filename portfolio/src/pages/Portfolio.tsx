import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PortfolioProps {
  bgTheme: boolean;
}

const Wrap = styled.div<{ bgTheme: boolean }>`
  /* display: flex; */
  /* flex-direction: column; */
  margin-top: 2rem;
  width: 83vw;
  max-height: 90vh;
  z-index: 900;

  /* Skapa Annorlunda css för Wrap när viewport är mindre än 1430px*/

  .titel {
    width: 50vw;
    position: absolute;
    top: 35px;
    left: calc(250px + 2vmin);
  }

  .titel p {
    margin: 20px 0;
  }

  .titel h2 {
    position: relative;
  }

  .titel h2::before {
    content: "";
    width: 50px;
    height: 5px;
    background-color: rgba(236, 24, 57, 1);
    position: absolute;
    top: 100%;
    left: 0;
  }
  .titel h2::after {
    content: "";
    width: 25px;
    height: 5px;
    background-color: rgba(236, 24, 57, 1);
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
  }

  .works-album {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    /* flex: 0 0 40%;
    max-width: 40%; */
    margin: 100px 15px 15px 15px;
  }

  .works-album a {
    flex: 0 0 29%;
    max-width: 29%;
    margin: 10px 20px 20px;
    text-decoration: none;
    border-radius: 15px;
    background-color: var(--bg-black-100);
    padding: 10px 5px 0;
  }

  .works-album a:hover {
    box-shadow: 0px 0px 20px 0px rgba(34, 34, 34, 0.9);
    transform: translate(-2px, -2px);
  }

  /* .works-album a:hover p {
    color: #ec1839 !important;
  } */

  .works-album a p {
    font-weight: 500;
  }

  .works-album a img {
    background-size: cover;
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Portfolio: React.FC<PortfolioProps> = ({ bgTheme }) => {
  let myStyles;

  if (bgTheme) {
    console.log("bgTheme true");
    myStyles = {
      color: "white",
    };
  }
  if (!bgTheme) {
    console.log("bgTheme false");
    myStyles = {
      color: "#151515",
    };
  }
  return (
    <>
      {bgTheme ? (
        <section className="portfolio-page">
          <Wrap bgTheme>
            <div className="titel">
              <h2>Portfolio</h2>
              <p>Click to learn more about each project</p>
            </div>
            <div className="works-album">
              <Link to={"/portfoliotodo"}>
                <p style={myStyles}>Todo App</p>
                <img src="/images/ReactTsTodo.jpg" alt="Todo app" />
              </Link>
              <Link to={"/portfoliotesla"}>
                <p style={myStyles}>"Tesla" site</p>
                <img src="/images/EslaCars.jpg" alt="Tesla Cars" />
              </Link>
              <Link to={"/portfoliotjuvgods"}>
                <p style={myStyles}>Retail Store</p>
                <img src="/images/Tjuvgods.jpg" alt="Store" />
              </Link>
              <Link to={"/portfoliodogenews"}>
                <p style={myStyles}>News Site</p>
                <img src="/images/DogeNews.jpg" alt="News site" />
              </Link>
              <Link to={"/portfoliodogefb"}>
                <p style={myStyles}>Social media site</p>
                <img src="/images/DogeFB.jpg" alt="Social media" />
              </Link>
              <Link to={"/portfolioweather"}>
                <p style={myStyles}>Weather App</p>
                <img src="/images/WeatherApp.jpg" alt="Weather App" />
              </Link>
            </div>
          </Wrap>
        </section>
      ) : (
        <section className="portfolio-page">
          <Wrap bgTheme>
            <div className="titel">
              <h2>Portfolio</h2>
              <p>Click to learn more about each project</p>
            </div>
            <div className="works-album">
              <Link to={"/portfoliotodo"}>
                <p style={myStyles}>Todo App</p>
                <img src="/images/ReactTsTodo.jpg" alt="Todo app" />
              </Link>
              <Link to={"/portfoliotesla"}>
                <p style={myStyles}>"Tesla" site</p>
                <img src="/images/EslaCars.jpg" alt="Tesla Cars" />
              </Link>
              <Link to={"/portfoliotjuvgods"}>
                <p style={myStyles}>Retail Store</p>
                <img src="/images/Tjuvgods.jpg" alt="Store" />
              </Link>
              <Link to={"/portfoliodogenews"}>
                <p style={myStyles}>News Site</p>
                <img src="/images/DogeNews.jpg" alt="News site" />
              </Link>
              <Link to={"/portfoliodogefb"}>
                <p style={myStyles}>Social media site</p>
                <img src="/images/DogeFB.jpg" alt="Social media" />
              </Link>
              <Link to={"/portfolioweather"}>
                <p style={myStyles}>Weather App</p>
                <img src="/images/WeatherApp.jpg" alt="Weather App" />
              </Link>
            </div>
          </Wrap>
        </section>
      )}
    </>
  );
};

export default Portfolio;
