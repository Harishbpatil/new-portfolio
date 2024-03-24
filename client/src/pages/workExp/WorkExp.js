import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
function WorkExp() {
  return (
    <>
      <div className="work" id="work experience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">WORK EXPERIENCE</h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  #138781" }}
              date="2021-2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer 
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                WebAffinity Technologies Pvt Ltd.
              </h4>
              <p>
                Developed a full-stack web application using JavaScript,
                Node.js, Express.js, Sequelize ORM, AWS RDS, Nginx, and Jenkins.
              </p>
              <p>
                Implemented user authentication and authorization features using
                JSON Web Tokens (JWT) for enhanced security
              </p>
              <p>
                Utilized AWS RDS for scalable database storage and Implemented
                Nginx for efficient load balancing and reverse proxying.
              </p>
              <p>
                Integrated Jenkins for continuous integration and deployment and
                Integrated with RazorPay external APIs for payment processing
                and data retrieval.
              </p>
              <p>
                Used Sequelize ORM for efficient database interaction and
                management.
              </p>
              <p>
                Utilized Axios for making HTTP requests to the backend server,
                Managed state and performed DOM manipulation using vanilla
                JavaScript and asynchronous programming techniques.
              </p>
              <p>
                Implemented pagination and dynamic content loading for improved
                user experience.
              </p>
              <p>
                used multer for uploading and sending files and images and use
                Data archiving technology-storing data that is no longer
                actively and set a cron job to perform automated archival of
                messages on daily basis
              </p>
              <p>
                Documented API endpoints and functionality for ease of
                maintenance and future development
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExp;
