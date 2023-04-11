import React from "react";

interface AboutProps {
  namn: string;
}

const AboutSection = ({ namn }: AboutProps) => {
  return (
    <>
      <section className="portfolio-page">
        <div className="about-text">
          <h1>
            Hello, my name is <span>{namn}</span>
          </h1>
          {/* <h2>I'm a Web developer</h2> lägg till dynamiskt skrivande text */}
          <p>
            I'm an aspiring Frontend engineer. Soon to be certified from
            IT-Högskolan, Stockholm. I'm new to the field and I'd love to hear
            about your website project you've been thinking about. I'm also
            proficient with photoshop and design in general. Explore my
            portfolio to see what projects I have been working on.
          </p>
        </div>
        <img
          className="profil-img"
          src="/images/profil.jpg"
          alt="profil picture"
        />
      </section>
    </>
  );
};

export default AboutSection;
