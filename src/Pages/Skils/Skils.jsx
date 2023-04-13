import React from "react";
import html5 from "../../Utils/Images/html5.png";
import css3 from "../../Utils/Images/css3.png";
import reactjs from "../../Utils/Images/reactjs.png";
import js from "../../Utils/Images/js.png";
import sass from "../../Utils/Images/sass.png";
import responsive from "../../Utils/Images/responsive.png";
import lightroom from "../../Utils/Images/lightroom.png";
import solidworks from "../../Utils/Images/solidworks.png";
import autocad from "../../Utils/Images/autocad.png";
import delcam from "../../Utils/Images/delcam.png";
import "./Skils.scss";

const Skils = () => {
  return (
    <>
      <div className="Skils">
        <div className="Skils-Container">
          <div className="Skils-Container_Title">
            <div className="Skils-Container_Title--txt">Skills</div>
          </div>
          <div className="Skils-Container_Card">
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">HTML5</div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={html5}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">CSS3</div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={css3}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">JS</div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={js}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">
                REACT JS
              </div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={reactjs}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">SASS</div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={sass}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">
                RESPONSIVE
              </div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={responsive}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">
                LIGHTROOM
              </div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={lightroom}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">
                SOLID WORKS
              </div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={solidworks}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">AUTOCAD</div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={autocad}
              ></img>
            </div>
            <div className="Skils-Container_Card--LogoCard">
              <div className="Skils-Container_Card--LogoCard__txt">
                POWERMILL
              </div>
              <img
                className="Skils-Container_Card--LogoCard__img"
                src={delcam}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skils;
