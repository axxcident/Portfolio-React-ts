import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// interface PortfolioProps {
//   tema?: boolean;
// }
// const Wrap = styled.div<PortfolioProps>`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  width: 80vw;
  max-height: 80vh;

  .titel {
    width: 50vw;
    position: absolute;
    top: 25px;
    left: calc(250px + 2vmin);
  }
  .works {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    margin: 30px;
  }

  .works h3 {
    margin-bottom: 2rem;
  }
  .works img {
    background-size: cover;
    height: auto;
    width: 100%;
  }
  /* @media (max-width: 1000px) {
.works {
flex-basis: 50%;
max-width: 50%;
flex-basis: 100%;
max-width: 100%;
}
} */
  /* @media (max-width: 768px) {
.works {
flex-basis: 100%;
max-width: 100%;
}
} */
`;

const Portfolio: React.FC = () => {
  return (
    <>
      <section className="portfolio-page">
        <Wrap>
          <h2 className="titel">Portfolio</h2>
          <Link to={"/portfoliotesla"}>portfoliotesla</Link>
          <Link to={"/portfoliotodo"}>portfoliotodo</Link>
          {/* <div className="works">
            <h3>Esla Cars</h3>
            <p>
              {" "}
              A dummy Tesla homepage. Replicated with react, typescript, router,
              redux, styled components, interpolation and props{" "}
            </p>
            <div className="work-links">
              <a href="https://github.com/axxcident/EslaCars">
                Link to Github Repository
              </a>
              <a href="#">Link to Github Site</a>
            </div>
            <img src="/images/EslaCars.jpg" alt="Ackman" />
          </div> */}
        </Wrap>
      </section>
    </>
  );
};

export default Portfolio;
