import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './Icons.css';

const Icons = ({ size }) => {
  return (
    <div className="icons-container">
      <div className="icons">
        <a href="https://www.linkedin.com/in/frankjohnnelson/" className="icon-link">
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" alt="LinkedIn" />
        </a>
        <a href="https://github.com/fjnelson" className="icon-link">
          <FontAwesomeIcon icon={faGithub} size="3x" alt="GitHub"/>
        </a>
        <a href="https://stackoverflow.com/users/20086174/snuffle1upagus" className="icon-link">
          <FontAwesomeIcon icon={faStackOverflow} size="3x" alt="Stack Overflow"/>
        </a>
      </div>
    </div>
  )
}

export default Icons;