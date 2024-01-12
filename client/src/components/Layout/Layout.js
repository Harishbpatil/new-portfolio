import React, { useState, useRef } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const audioRef = useRef(null);

  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
    // Play sound
    audioRef.current.play();
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
        <audio ref={audioRef}>
          <source src="../../sounds/toggle.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};

export default Layout;
