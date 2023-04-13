import React from "react";
import "./Projects.scss";

const Projects = () => {
  return (
    <>
      <div className="Projects">
        <div className="Projects-Container">
          <div className="Projects-Container_Title">
            <div className="Projects-Container_Title--txt">Projects</div>
          </div>
          <div className="Projects-Container_Pages">
            <a
              className="Projects-Container_Pages--Link"
              href="http://www.vernalstudio.com/"
              Target="_blank"
            >
              -Vernal
            </a>
            <a
              className="Projects-Container_Pages--Link"
              href="http://daleplast.com.ar/"
              Target="_blank"
            >
              -Daleplast
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
