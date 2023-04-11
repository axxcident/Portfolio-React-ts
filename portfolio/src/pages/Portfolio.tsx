import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-page">
        <Wrap>
          <h2 className="titel">Portfolio</h2>
          <div className="works">
            <p>olika arbeten här</p>
            <img src="/images/EslaCars.jpg" alt="Ackman" />
          </div>
          <div className="works">
            <p>olika arbeten här Part 2</p>
            <img src="/images/Pixelated_Ackman.png" alt="Ackman" />
          </div>
          <div className="works">
            <p>olika arbeten här Part 3</p>
            <img src="/images/Pixelated_Ackman.png" alt="Ackman" />
          </div>
          <div className="works">
            <p>olika arbeten här Part 3</p>
            <img src="/images/Pixelated_Ackman.png" alt="Ackman" />
          </div>
        </Wrap>
      </section>
    </>
  );
};

export default Portfolio;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  width: 75vw;
  max-height: 70vh;

  .titel {
    width: 50vw;
    position: absolute;
    top: 25px;
    left: calc(250px + 2vmin);
    /* width: auto; */
  }
  .works {
    display: flex;
    flex: 0 0 40%;
    max-width: 40%;
    margin: 30px;
    /* min-width: 40%; */
  }
  .works img {
    background-size: cover;
    height: auto;
    width: 60%;
  }
  @media (max-width: 1000px) {
    .works {
      /* flex-basis: 50%;
      max-width: 50%; */
      flex-basis: 100%;
      max-width: 100%;
    }
  }
  /* @media (max-width: 768px) {
    .works {
      flex-basis: 100%;
      max-width: 100%;
    }
  } */
`;
