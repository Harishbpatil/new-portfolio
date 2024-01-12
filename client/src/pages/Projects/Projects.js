import React from "react";
import YouTube from "react-youtube";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const ProjectCard = ({ title, videoId, techStack, githubLink }) => {
  const opts = {
    width: "100%", // You can adjust the width as needed
    height: "200", // You can adjust the height as needed
  };

  return (
    <div className="col-md-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Full Stack</span>
          <YouTube videoId={videoId} opts={opts} />
        </div>
        <div className="card-image-overly m-auto mt-3">
          {techStack.map((tech, index) => (
            <span key={index} className="card-detail-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h6 className="text-uppercase">{title}</h6>
          </div>
          <a
            className="ad-btn"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      videoId: "80iFvS8dZtM",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Harishbpatil/3hoursjsproject",
    },
    {
      title: "Portfolio",
      videoId: "UyNiSj-Tzp8",
      techStack: ["Node", "Express", "React", "MongoDB"],
      githubLink: "https://github.com",
    },
    {
      title: "Youtube Clone",
      videoId: "TlF5wBZrqTQ",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Harishbpatil/youtube-clone",
    },
  ];

  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">Here are My Recent Projects</p>
      {/* card design */}
      <div className="row" id="ads">
        <Fade>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
