import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <div className="AboutMe">
        <div className="AboutMe-Container">
          <div className="AboutMe-Container_Title">About Me</div>
          <div className="AboutMe-Container_txt">
            Hello! My name is Vittorio Tezza and I am a frontend programmer. I
            am passionate about designing and developing attractive and
            functional websites that provide an exceptional user experience.
            With a focus on attention to detail and code quality, I strive to
            create fast, accessible, and responsive websites.
            <br />
            I worked on several projects developing web pages. My background in
            HTML, CSS, and JavaScript allows me to create layouts while
            maintaining site functionality. I am also trained in the use of
            frameworks and libraries such as React and bootstrap which allows me
            to create interactive and complex user interfaces.
            <br />
            One of my greatest values is working as a team and collaborating
            with other developers and designers to make sure that all projects
            meet the goals and requirements of the client. I am always looking
            for new ways to improve my skills and learn new technologies to keep
            up with the ever-evolving world of web programming.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
