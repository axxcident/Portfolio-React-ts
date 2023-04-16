import React from "react";
import styled from "styled-components";

interface AboutProps {
  namn: string;
  tema: boolean;
  setTema: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutSection: React.FC<AboutProps> = ({
  namn,
  tema,
  setTema,
}: AboutProps) => {
  let myStyles;
  let myShadow;

  if (tema) {
    myStyles = {
      color: "#ec1839",
      // color: "white",
    };
    myShadow = {
      boxShadow: "5px 2px 15px 2px rgba(236, 24, 57, 0.9)",
    };
  }
  if (!tema) {
    myStyles = {
      color: "#393939",
    };
    myShadow = {
      boxShadow: "5px 5px 20px 2px rgba(34, 34, 34, 0.9)",
    };
  }

  return (
    <>
      {tema ? (
        <Section className="about-page">
          <div className="about-text">
            <h1>
              Hello, my name is
              <span style={myStyles} className="namnet">
                {namn}
              </span>
            </h1>
            <img
              style={myShadow}
              className="mobile-profil-img"
              src="/images/profil.jpg"
              alt="profil"
            />
            {/* <h2>I'm a Web developer</h2> lägg till dynamiskt skrivande text, API som lägger ny random text? */}
            <p>
              I'm an aspiring Frontend engineer. Soon to be certified from
              IT-Högskolan, Stockholm. I'm new to the field and I'd love to hear
              about your website project you've been thinking about. I'm also
              proficient with photoshop and design in general. Explore my
              portfolio to see what projects I have been working on lately.
            </p>
            <button
              className="about-btn"
              style={myShadow}
              onClick={() => {
                setTema(!tema);
                console.log("klickad", tema);
              }}
            >
              Explore
            </button>
          </div>
          <img
            style={myShadow}
            className="profil-img"
            src="/images/profil.jpg"
            alt="profil"
          />
        </Section>
      ) : (
        <Section className="about-page">
          <div className="about-text">
            <h1>
              Hello, my name is
              <span style={myStyles} className="namnet">
                {namn}
              </span>
            </h1>
            <img
              style={myShadow}
              className="mobile-profil-img"
              src="/images/profil.jpg"
              alt="profil"
            />
            <p>
              I'm an aspiring Frontend engineer. Soon to be certified from
              IT-Högskolan, Stockholm. I'm new to the field and I'd love to hear
              about your website project you've been thinking about. I'm also
              proficient with photoshop and design in general. Explore my
              portfolio to see what projects I have been working on lately.
            </p>
            <button
              className="about-btn"
              onClick={() => {
                setTema(!tema);
                console.log("klickad", tema);
              }}
            >
              Explore
            </button>
          </div>
          <img
            style={myShadow}
            className="profil-img"
            src="/images/profil.jpg"
            alt="profil"
          />
        </Section>
      )}
    </>
  );
};

export default AboutSection;

const Section = styled.section`
  /* background-color: #1d7bce; */
`;
