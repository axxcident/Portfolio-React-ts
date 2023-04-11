import React from "react";
import PortfolioPage from "../components/PortfolioPage";

interface AboutProps {
  namn: string;
}

const About = ({ namn }: AboutProps) => {
  return (
    <>
      <PortfolioPage namn={namn} />
    </>
  );
};

export default About;
