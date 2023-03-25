import React from 'react';
import Icons from './PortfolioIcons'

const Portfolio = () => {
    return (
        <div className='main'>
        <h1>Frank John Nelson</h1>
        <h2 className="tech-job sm-heading-sec">
        <span className="job">Web Development</span>
        <span className="dot"> &bull; </span>
        <span className="job">Software Development</span>
        <span className="dot"> &bull; </span>
        <span className="job">Application Support</span>
      </h2>
      <h2>MERN</h2>
      <h3 className="tech-stacks sm-heading-sec">
        <span className="stack">MongoDB</span>
        <span className="dot"> &bull; </span>
        <span className="stack">Express</span>
        <span className="dot"> &bull; </span>
        <span className="stack">REACT</span>
        <span className="dot"> &bull; </span>
        <span className="stack">Node</span>
      </h3>
      <Icons/>
        </div>
    )
}
export default Portfolio;