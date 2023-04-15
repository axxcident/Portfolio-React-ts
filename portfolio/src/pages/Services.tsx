import React from "react";
import ServiceSection from "../components/ServiceSection";

interface ServiceProps {
  bgTheme: boolean;
}
const Services: React.FC<ServiceProps> = ({ bgTheme }) => {
  return (
    <>
      <ServiceSection bgTheme={bgTheme}></ServiceSection>
    </>
  );
};

export default Services;
