import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import hireMeClickSound from "../../assets/sounds/hire.mp3";
import resumeClickSound from "../../assets/sounds/resume.mp3";

import "./home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const [hireMeClicked, setHireMeClicked] = React.useState(false);
  const [resumeClicked, setResumeClicked] = React.useState(false);

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const handleHireMeClick = () => {
    setHireMeClicked(true);
    const audio = new Audio(hireMeClickSound);
    audio.play();
  };

  const handleResumeClick = () => {
    setResumeClicked(true);
    const audio = new Audio(resumeClickSound);
    audio.play();
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container-home-content">
          <Fade right>
            <h2>Hi👋 i'am a </h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer!😍💻",
                    "MERN stack Developer!💻",
                    "React Developer!💻",
                    "Android Developer!📱",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className={`btn btn-hire ${hireMeClicked ? "clicked" : ""}`}
                href="https:api.whatsapp.com/send?phone=8296834740"
                rel="noreferrer"
                target="_blank"
                onClick={handleHireMeClick}
              >
                Hire Me
              </a>
              <a
                className={`btn btn-cv ${resumeClicked ? "clicked" : ""}`}
                href={Resume}
                download="Harish Patil.pdf"
                onClick={handleResumeClick}
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
