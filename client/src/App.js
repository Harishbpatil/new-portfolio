import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import { motion } from "framer-motion"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Howl from the howler library
import { Howl } from "howler";

function App() {
  const [theme] = useTheme();

  useEffect(() => {
    // Create a new Howl instance with the path to your audio file
    const welcomeSound = new Howl({
      src: [`${process.env.PUBLIC_URL}/sounds/welcomevoice.mp3`],
      autoplay: true,
      volume: 0.5,
    });

    // Clean up the audio when the component unmounts
    return () => {
      welcomeSound.stop();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With Harish Patil❤️ &copy;2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export const MyComponent = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)

export default App;
