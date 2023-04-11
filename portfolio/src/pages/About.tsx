import React from "react";
import AboutSection from "../components/AboutSection";

interface AboutProps {
  namn: string;
}

const About = ({ namn }: AboutProps) => {
  return (
    <>
      <AboutSection namn={namn} />
    </>
  );
};

export default About;
