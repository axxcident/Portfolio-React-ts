import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PortfolioTeslaProps {
  bgTheme: boolean;
}

// <{ tema: boolean }>
// <PortfolioTodoProps>
// :React.FC<PortfolioTeslaProps>
// <{ bgTheme: PortfolioTeslaProps }>
const PortfolioWrapper = styled.div<PortfolioTeslaProps>`
  width: 75%;
  height: 90vh;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 200;

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
    /* color: ${(PortfolioTeslaProps) =>
      PortfolioTeslaProps.bgTheme ? "white" : "#151515"}; */
  }
  .works a:hover span {
    color: #ec1839 !important;
  }

  /* TextLänkar */
  #SiteLink {
    text-decoration: line-through;
  }
  #GithubLink {
    text-decoration: none;
  }

  /* .work-links a {
    text-decoration: none;
    color: ${({ bgTheme }) => (bgTheme ? "white" : "#151515")};
  } */
  .work-links a:hover {
    color: #ec1839 !important;
    text-decoration: underline;
  }
`;

const PortfolioTesla: React.FC<PortfolioTeslaProps> = ({ bgTheme }) => {
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
        <PortfolioWrapper bgTheme>
          <div className="works">
            <Link to={"/portfoliotodo"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-back"
              >
                arrow_back_ios
              </span>
            </Link>
            <div className="container">
              <h3>Esla Cars</h3>
              <p>
                {" "}
                A dummy Tesla homepage. Replicated with react, typescript,
                router, redux, styled components, interpolation and props.{" "}
              </p>
              <div className="work-links">
                <a
                  id="GithubLink"
                  style={myStyles}
                  href="https://github.com/axxcident/EslaCars"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
                <a
                  id="SiteLink"
                  style={myStyles}
                  href="https://github.com/axxcident/EslaCars"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to App
                </a>
              </div>
              <img src="/images/EslaCars.jpg" alt="Esla Cars" />
            </div>
            <Link to={"/portfoliotjuvgods"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-forward"
              >
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </PortfolioWrapper>
      ) : (
        <PortfolioWrapper bgTheme>
          <div className="works">
            <Link to={"/portfoliotodo"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-back"
              >
                arrow_back_ios
              </span>
            </Link>
            <div className="container">
              <h3>Esla Cars</h3>
              <p>
                {" "}
                A dummy Tesla homepage. Replicated with react, typescript,
                router, redux, styled components, interpolation and props.{" "}
              </p>
              <div className="work-links">
                <a
                  id="GithubLink"
                  style={myStyles}
                  href="https://github.com/axxcident/EslaCars"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
                <a
                  id="SiteLink"
                  style={myStyles}
                  href="https://github.com/axxcident/EslaCars"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to App
                </a>
              </div>
              <img src="/images/EslaCars.jpg" alt="Esla Cars" />
            </div>
            <Link to={"/portfoliotjuvgods"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-forward"
              >
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </PortfolioWrapper>
      )}
    </>
  );
};

export default PortfolioTesla;
