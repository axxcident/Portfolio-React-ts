import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PortfolioTodoProps {
  bgTheme: boolean;
}

const PortfolioWrap = styled.div<PortfolioTodoProps>`
  width: 75%;
  height: 90vh;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1150px) {
    width: 70% !important;
    margin-left: 280px !important;

    .works {
      flex-direction: column !important;
    }

    .container {
      width: 80% !important;
    }

    .works .container h3 {
      margin-top: -10px !important;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 65% !important;
    .works > * {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 700px) {
    margin-left: 20px !important;
    width: 95% !important;
  }

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

const PortfolioTodo: React.FC<PortfolioTodoProps> = ({ bgTheme }) => {
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
            <Link to={"/portfolio"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-back"
              >
                arrow_back_ios
              </span>
            </Link>
            <div className="container">
              <h3>Taskify</h3>
              <p>
                {" "}
                A handy Todo app that will remember your tasks through you local
                browser storage. Created with react, typescript, interpolation
                and props. More to write.{" "}
              </p>
              <div className="work-links">
                <a
                  style={myStyles}
                  href="https://github.com/axxcident/react-todo-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
                <a
                  style={myStyles}
                  href="https://axxcident.github.io/react-todo-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to App
                </a>
              </div>
              <img src="/images/ReactTsTodo.jpg" alt="Todo App" />
            </div>
            <Link to={"/portfoliotesla"}>
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
            <Link to={"/portfolio"}>
              <span
                style={myStyles}
                className="material-symbols-outlined arrow-back"
              >
                arrow_back_ios
              </span>
            </Link>
            <div className="container">
              <h3>Taskify</h3>
              <p>
                {" "}
                A handy Todo app that will remember your tasks through you local
                browser storage. Created with react, typescript, interpolation
                and props. More to write.{" "}
              </p>
              <div className="work-links">
                <a
                  style={myStyles}
                  href="https://github.com/axxcident/react-todo-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
                <a
                  style={myStyles}
                  href="https://axxcident.github.io/react-todo-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to App
                </a>
              </div>
              <img src="/images/ReactTsTodo.jpg" alt="Todo App" />
            </div>
            <Link to={"/portfoliotesla"} style={myStyles}>
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

export default PortfolioTodo;
