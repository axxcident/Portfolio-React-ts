import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PortfolioDogeFBProps {
  bgTheme: boolean;
}

const PortfolioWrap = styled.div<PortfolioDogeFBProps>`
  width: 75%;
  height: 90vh;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 900;

  .arrow-back {
    width: 80px;
    font-size: 5rem;
  }

  .arrow-forward {
    width: 80px;
    font-size: 5rem;
  }

  span {
    cursor: pointer;
  }

  h3 {
    margin-top: 80px;
    margin-bottom: 15px;
    padding: 10px;
  }

  img {
    width: 99%;
    height: auto;
    padding: 10px;
    border-radius: 20px;
  }

  .works {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .works p {
    width: 80%;
    padding: 10px;
  }

  .work-links {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    width: 95%;
  }

  .works a > span {
    text-decoration: none;
  }
  .works a:hover span {
    color: #ec1839 !important;
  }
  .work-links a {
    text-decoration: none;
    /* color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")}; */
  }
  .work-links a:hover {
    color: #ec1839 !important;
    text-decoration: underline;
  }
`;

const PortfolioDogeFB: React.FC<PortfolioDogeFBProps> = ({ bgTheme }) => {
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
        <PortfolioWrap bgTheme>
          <div className="works">
            <Link to={"/portfoliodogenews"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-back"
              >
                arrow_back_ios
              </span>
            </Link>
            <div className="container">
              <h3>Doge FB</h3>
              <p>
                {" "}
                Your new favorite social media site where all users are
                definitively real people. Built with vanilla Javascript, HTML
                and CSS.{" "}
              </p>
              <div className="work-links">
                <a
                  style={myStyles}
                  href="https://github.com/axxcident/DogsGo2Heaven"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
                <a
                  style={myStyles}
                  href="https://axxcident.github.io/DogsGo2Heaven/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to App
                </a>
              </div>
              <img src="/images/DogeFBwide.jpg" alt="Retail Store" />
            </div>
            <Link to={"/portfolioweather"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-forward"
              >
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </PortfolioWrap>
      ) : (
        <PortfolioWrap bgTheme>
          <div className="works">
            <Link to={"/portfoliodogenews"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-back"
              >
                arrow_back_ios
              </span>
            </Link>
            <div className="container">
              <h3>Doge FB</h3>
              <p>
                {" "}
                Your new favorite social media site where all users are
                definitively real people. Built with vanilla Javascript, HTML
                and CSS.{" "}
              </p>
              <div className="work-links">
                <a
                  style={myStyles}
                  href="https://github.com/axxcident/DogsGo2Heaven"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
                <a
                  style={myStyles}
                  href="https://axxcident.github.io/DogsGo2Heaven/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to App
                </a>
              </div>
              <img src="/images/DogeFBwide.jpg" alt="Retail Store" />
            </div>
            <Link to={"/portfolioweather"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-forward"
              >
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </PortfolioWrap>
      )}
    </>
  );
};

export default PortfolioDogeFB;