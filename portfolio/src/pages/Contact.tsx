import React from "react";
import FormikSection from "../components/FormikSection";

interface ContactProps {
  bgTheme: boolean;
}

const Contact: React.FC<ContactProps> = ({ bgTheme }) => {
  return (
    <>
      <div className="contact-page">
        <h2>Contact Me</h2>
        <FormikSection bgTheme={bgTheme} />
      </div>
    </>
  );
};

export default Contact;
