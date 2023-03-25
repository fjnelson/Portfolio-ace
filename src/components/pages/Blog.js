import React from 'react';
import meetioImage from '../images/meetio.JPG';
import dosequisImage from '../images/dosequis.jpg';
import portfolioImage from '../images/portfolio-website.JPG';

export default function Blog() {
  const projects = [
    {
      title: 'Portfolio',
      description: 'This website! My portfolio keeps growing as I gain more experience from live projects.',
      imageUrl: portfolioImage,
      projectUrl: 'https://github.com/fjnelson/Portfolio-ace',
      hostedURL: 'https://fjnelson.github.io/Portfolio-ace/'
    },
    {
      title: 'Dosequis-API',
      description: 'Dosequis-API uses Ticketmaster API and pulls weather data for the event from Open-Mateo API.',
      imageUrl: dosequisImage,
      projectUrl: 'https://github.com/fjnelson/01-project-dosequis-api',
      hostedURL: 'https://fjnelson.github.io/01-project-dosequis-api/'
    },
    {
      title: 'Meet-IO',
      description: 'Meet-IO is an application that allows users to chat and schedule events with friends.',
      imageUrl: meetioImage,
      projectUrl: 'https://github.com/fjnelson/Meet-IO',
      hostedURL: 'https://meetio.herokuapp.com/'
    },
  ];

  return (
    <div>
      <h1 className="about-header">Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.imageUrl} alt={project.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <a href={project.projectUrl} className="card-link">View on Github</a>
              <a href={project.hostedURL} className="card-link">Hosted Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
