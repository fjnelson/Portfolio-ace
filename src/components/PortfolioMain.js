import React from 'react';
import Icons from './PortfolioIcons';
import './body.css';

const Portfolio = () => {
  return (
    <div className='main'>
      <div className='left-section'>
        <h1 className='realName'>Frank John Nelson</h1>
        <h2 className='tech-job sm-heading-sec'>
          <span className='job'>Web Development</span>
          <span className='dot'> &bull; </span>
          <span className='job'>Software Development</span>
          <span className='dot'> &bull; </span>
          <span className='job'>Application Support</span>
        </h2>
        <h2 className='stackName'>MERN Development</h2>
        <h3 className='tech-stacks sm-heading-sec'>
          <span className='t-stack'>MongoDB</span>
          <span className='dot'> &bull; </span>
          <span className='t-stack'>Express</span>
          <span className='dot'> &bull; </span>
          <span className='t-stack'>REACT</span>
          <span className='dot'> &bull; </span>
          <span className='t-stack'>Node</span>
        </h3>
        <h3 className='tech-stacks sm-heading-sec' style={{marginLeft: '20px'}}>
          <span className='t-stack'>Emphasis in Customer Success</span>
        </h3>
        <Icons />
      </div>
    </div>
  );
};

export default Portfolio;