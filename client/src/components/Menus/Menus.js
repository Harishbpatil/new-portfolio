import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

import menuClickSound from "../../assets/sounds/togglesound.mp3"; // Adjust the path as needed

const Menus = ({ toggle }) => {
  const playMenuClickSound = () => {
    const audio = new Audio(menuClickSound);
    audio.play();
  };

  // Adjust the offset value as needed to expand the clickable area
  const offsetValue = -150;

  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="/image/mypic.png" alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcHome />
                    {toggle && "Home"}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcAbout />
                    {toggle && "About"}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcReadingEbook />
                    {toggle && "Education"}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcBiotech />
                    {toggle && "Tech Stack"}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcVideoProjector />
                    {toggle && "Projects"}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcPortraitMode />
                    {toggle && "Work Experience"}
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={100}
                    onClick={playMenuClickSound}
                  >
                    <FcBusinessContact />
                    {toggle && "Contact"}
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcReadingEbook />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcBiotech />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={offsetValue}
                  duration={100}
                  onClick={playMenuClickSound}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
