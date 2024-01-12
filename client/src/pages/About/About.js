import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <Fade left>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/image/profile.jpg" alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                <b>Name:</b> Harish Patil
                <br />
                <b>Age</b> : 25 years old
                <br />
                <b>Email</b>: hp777489@gmail.com
                <br />
                <b>Phone Number</b>:+91 - 8296834740
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
