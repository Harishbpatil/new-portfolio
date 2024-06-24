import React from "react";
import YouTube from "react-youtube";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const ProjectCard = ({ title, videoId, techStack, githubLink }) => {
  const opts = {
    width: "100%",
    height: "200",
    autoplay: 1,
  };

  return (
    <div className="col-md-4">
      <Fade>
        <div className="card project-card">
          <div className="card-video">
            <YouTube videoId={videoId} opts={opts} />
          </div>
          <div className="card-content">
            <h6 className="heading">{title}</h6>
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
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
      </Fade>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Full Stack Expense Tracker",
      videoId: "MSkz62DvRwI",
      techStack: ["Express", "Nodejs", "JavaScript", "AWS", "SQL"],
      githubLink: "https://github.com/Harishbpatil/full-stack-expense-tracker",
    },
    {
      title: "Real Time Group Chat App",
      videoId: "SZlhBLNi490",
      techStack: ["Express", "Nodejs", "JavaScript", "Socket.io", "AWS", "SQL"],
      githubLink: "https://github.com/Harishbpatil/group-chat-app-real-time",
    },
    {
      title: "Portfolio",
      videoId: "UyNiSj-Tzp8",
      techStack: ["Node", "Express", "React"],
      githubLink: "https://github.com/Harishbpatil/portfolio",
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
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
