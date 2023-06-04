import React from "react";
import meetioImage from "../images/meetio.JPG";
import dosequisImage from "../images/dosequis.jpg";
import portfolioImage from "../images/portfolio-website.JPG";
import helloStrangerImage from "../images/hellostranger-04.jpg";
import ABA from "../images/ABA.jpg";
import CSR from "../images/CSR.JPG";
import dreamEscapes from "../images/dream-escapes.JPG";
import { Button } from "reactstrap";
import "./pages.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Blog() {
  const projects = [
    {
      title: "CSR-Jobs.com - Minor updates",
      description:
        "Update to Organization's existing website including adding SSL certification, updating forms, updating diversity in images, updating content, adding accessibility, fixing links, and mobile responsiveness.",
      imageUrl: CSR,
      stack: "uhost css javascript SSL_certificate ",
      storyURL: "/CSR-update",
      hostedURL: "https://csr-jobs.com/",
    },
    {
      title: "ABA-Apps",
      description:
        "All-in-one commissioned application for a behavior clinic.  Apps included are a timer, countdown, task manu, feature function class, emotions, and zones of regulation.",
      imageUrl: ABA,
      stack: "react css bootstrap fontAwesome react-p5 ",
      projectUrl: "https://github.com/fjnelson/aba-apps",
      hostedURL: "https://aba-apps.netlify.app/",
    },
    {
      title: "Dream Escapes, Inc - Sample Website",
      description:
        "Introducing 'Dream Escapes, Inc - Sample Website' - Embark on your next breathtaking journey!",
      imageUrl: dreamEscapes,
      stack: "react react-router css react-bootstrap fontAwesome",
      projectUrl: "https://github.com/fjnelson/React-o-Licious",
      hostedURL: "https://dreamescapes.netlify.app/",
    },
    {
      title: "Portfolio",
      description:
        "This website! My portfolio keeps growing as I gain more experience from live projects.",
      imageUrl: portfolioImage,
      stack: "react react-router css react-bootstrap fontAwesome",
      projectUrl: "https://github.com/fjnelson/Portfolio-ace",
      hostedURL: "https://fjnelson.github.io/Portfolio-ace/",
    },
    {
      title: "Dosequis-API",
      description:
        "JavaScript-based application that uses Ticketmaster API and Open-Mateo API to find events and display weather data in an easy-to-use-modal.",
      imageUrl: dosequisImage,
      stack: "javascript jquery dayJS bulma",
      projectUrl: "https://github.com/fjnelson/01-project-dosequis-api",
      hostedURL: "https://fjnelson.github.io/01-project-dosequis-api/",
    },
    {
      title: "Meet-IO",
      description:
        "Real-time chat and event scheduling application with encrypted credentials and CRUD operations using MySQL and Handlebars.js.",
      imageUrl: meetioImage,
      stack: "handlebars express jquery socketIO MySQL sequelize bcrypt bulma",
      projectUrl: "https://github.com/fjnelson/Meet-IO",
      hostedURL: "https://meetio.herokuapp.com/",
    },
    {
      title: "Hello Stranger",
      description:
        "MERN human story-telling application with database mutations for retrieving, adding, updating, and deleting data while using authentication and SemanticUI for user experience",
      imageUrl: helloStrangerImage,
      stack:
        "React, Express, Node, MongoDB, Stripe, Bcrypt, SemanticUI, GraphQL, JWT",
      projectUrl: "https://github.com/fjnelson/ludicrous-speed",
      hostedURL: "https://hello--stranger.herokuapp.com/",
    },
  ];

  return (
    <div>
      <h1 className="about-header">Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <div className="stack-description">
                {project.stack.split(" ").map((stack, index) => (
                  <span key={index} className="stack">
                    {stack}
                  </span>
                ))}
              </div>
              <div className="links">
                {index === 0 ? (
                  <>
                    <Button
                      className="btn-dark"
                      href={project.hostedURL}
                      target="_blank"
                    >
                      <i className="fas fa-eye"></i> Hosted Project
                    </Button>
                    <Button className="btn-dark" href={project.storyURL}>
                      <i className="fas fa-book"></i> View My Story
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="btn-dark"
                      href={project.hostedURL}
                      target="_blank"
                    >
                      <i className="fas fa-eye"></i> Hosted Project
                    </Button>
                    <Button className="btn-dark" href={project.projectUrl}>
                      <i className="fab fa-github"></i> View on Github
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
