import React from "react";
import AboutSection from "../components/AboutSection";

interface AboutProps {
  namn: string;
  tema: boolean;
  setTema: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<AboutProps> = ({ namn, tema, setTema }: AboutProps) => {
  return (
    <>
      <AboutSection namn={namn} tema={tema} setTema={setTema} />
    </>
  );
};

export default About;
