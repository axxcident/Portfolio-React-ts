import React from "react";
import { FaVuejs, FaReact, FaJava, FaFigma } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiAdobephotoshop,
  SiPhotopea,
} from "react-icons/si";

interface ServiceProps {
  bgTheme: boolean;
}

const ServiceSection: React.FC<ServiceProps> = ({ bgTheme }) => {
  return (
    <>
      <div className="services-page">
        <div className="service-header">
          <h2>Services</h2>
        </div>
        <div className="service-header-sub">
          <h3>Building user interface</h3>
        </div>
        <div className="service1">
          <div className="service-item1">
            <div className="service1-icons">
              <FaVuejs className="service1-icon" />
              <h4>Vue.js</h4>
            </div>
            <p>
              Built several user interfaces within the open-sourced javascript
              framework Vue.js. Proficient and capable to code with Composition
              and Options API.{" "}
            </p>
          </div>
          <div className="service-item1">
            <div className="service1-icons">
              <FaReact className="service1-icon" />
              <h4>React</h4>
              <SiJavascript className="service1-icon" />
              <SiTypescript className="service1-icon" />
            </div>
            <p>
              Built several user interfaces within the javascript library React.
              With regular javascript and with typescript. This portfolio is
              built with React and typescript!{" "}
            </p>
          </div>
          <div className="service-item1">
            <div className="service1right-icons">
              <AiFillHtml5 className="service1-icon" />
              <IoLogoCss3 className="service1-icon" />
              <SiJavascript className="service1-icon" />
              <h4>HTML CSS Javascript</h4>
            </div>
            <p>
              First things to master when becoming a frontend developer. My
              first portfolio page was built with these three languages. "link".{" "}
            </p>
          </div>
        </div>
        <div className="service-header-sub">
          <h3>Building general purpose applications</h3>
        </div>
        <div className="service2">
          <div className="service2-item">
            <div className="service2-icons">
              <div className="service2-box">
                <SiPython className="service2-icon" />
                <p>Python</p>
              </div>
              <div className="service2-box">
                <SiJavascript className="service2-icon" />
                <p>Javascript</p>
              </div>
              <div className="service2-box">
                <SiTypescript className="service2-icon" />
                <p>Typescript</p>
              </div>
              <div className="service2-box">
                <FaJava className="service2-icon" />
                <p>Java</p>
              </div>
            </div>
            {/* <h4>Python, Java, Javascript & Typescript</h4> */}
            <p className="service2-text">
              Mostly on my spare time, I've learnt how to build smaller
              applications that can complete logical tasks, query and handle
              statistical data through SQLite, tell you the weather and play
              games on (Wordle){" "}
            </p>
          </div>
        </div>
        <div className="service-header-sub">
          <h3>Designing interfaces & Photoshop services</h3>
        </div>
        <div className="service3">
          <div className="service3-item">
            <div className="service3-icons">
              <div className="service3-box">
                <FaFigma className="service3-icon" />
                <p>Figma</p>
              </div>
              <div className="service3-box">
                <SiAdobephotoshop className="service3-icon" />
                <p>Photoshop</p>
              </div>
              <div className="service3-box">
                <SiPhotopea className="service3-icon" />
                <p>Photopea</p>
              </div>
            </div>
            {/* <h4>Figma, Photoshop & Photopea</h4> */}
            <p className="service3-text">
              Designed frontend applications in several small case projects with
              Figma. Proficient with Photoshop and Photopea. Used to offer image
              editing on Fiverr (link){" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
