import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Fade left>
      <div className="background-animation">
        <motion.div
          className="about-container"
          style={{ perspective: "1000px" }}
          onMouseMove={(event) => {
            mouseX.set(event.clientX - window.innerWidth / 2);
            mouseY.set(event.clientY - window.innerHeight / 2);
          }}
        >
          <motion.div
            className="about"
            id="about"
            style={{
              x: useTransform(mouseX, (x) => x / 30),
              y: useTransform(mouseY, (y) => y / 30),
              rotateY: useTransform(
                mouseX,
                [-window.innerWidth / 2, window.innerWidth / 2],
                [-180, 180]
              ),
              transition: { duration: 0.5 },
            }}
            whileHover={{ scale: 1.1 }} // Scale animation on hover
          >
            <div className="row">
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <motion.img
                  src="/image/profile.jpg"
                  alt="profile_pic"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  About Me
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <b>Name:</b> Harish Patil
                  <br />
                  <b>Age</b> : 25 years old
                  <br />
                  <b>Email</b>: hp777489@gmail.com
                  <br />
                  <b>Phone Number</b>: +91 - 8296834740
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Fade>
  );
};

export default About;
