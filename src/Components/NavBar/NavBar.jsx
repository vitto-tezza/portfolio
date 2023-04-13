import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../Utils/Images/user-img.png";
import burger from "../../Utils/Images/menu-burger.png";
import "./NavBar.scss";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="NavBar">
        <div className="NavBar-Container">
          <div className="NavBar-Container_img">
            <img className="NavBar-Container_img--user" src={user}></img>
          </div>
          <img className="btn" onClick={toggleMenu} src={burger}></img>
          <div
            className={`NavBar-Container_links ${menu ? "menuIsActive" : ""}`}
          >
            <Link
              className="NavBar-Container_links--txt"
              to={"/"}
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              className="NavBar-Container_links--txt"
              to={"Skils"}
              onClick={toggleMenu}
            >
              SKILLS
            </Link>
            <Link
              className="NavBar-Container_links--txt"
              to={"AboutMe"}
              onClick={toggleMenu}
            >
              ABOUT ME
            </Link>
            <Link
              className="NavBar-Container_links--txt"
              to={"Projects"}
              onClick={toggleMenu}
            >
              PROJECTS
            </Link>
            <Link
              className="NavBar-Container_links--txt"
              to={"Contact"}
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
