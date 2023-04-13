import React from "react";
import user from "../../Utils/Images/user-img.png";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="Home-Container">
          <div className="Home-Container_img">
            <img className="Home-Container_img--MyImg" src={user}></img>
          </div>
          <div className="Home-Container_Description">
            <div className="Home-Container_Description--Name">
              Vittorio Tezza
            </div>
            <div className="Home-Container_Description--FE">
              Frontend developer
            </div>
            <div className="Home-Container_Description--Location">
              Argentina-Buenos Aires
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
