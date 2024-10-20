import React from 'react';
import '../styles/About.css';
import { Card, ProgressBar } from 'react-bootstrap';

const About = ({ isDarkMode }) => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm Chethan, a passionate student pursuing a degree in Information Science and Engineering. I have a strong interest in web development and enjoy creating dynamic applications using the MERN stack. Additionally, I have experience in Java programming, which allows me to tackle a variety of software development challenges.
      </p>

      {/* Horizontal line with dynamic color */}
      <hr className="custom-hr" style={{ backgroundColor: isDarkMode ? '#fff' : '#000' }} />

      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <span>MongoDB</span>
          <ProgressBar now={75} label={`${75}%`} />
        </div>
        <div className="skill">
          <span>React</span>
          <ProgressBar now={70} label={`${70}%`} />
        </div>
        <div className="skill">
          <span>SQL</span>
          <ProgressBar now={80} label={`${80}%`} />
        </div>
        <div className="skill">
          <span>Node.js</span>
          <ProgressBar now={65} label={`${65}%`} />
        </div>
        <div className="skill">
          <span>Express</span>
          <ProgressBar now={60} label={`${60}%`} />
        </div>
        <div className="skill">
          <span>Java</span>
          <ProgressBar now={85} label={`${85}%`} />
        </div>
        <div className="skill">
          <span>Python</span>
          <ProgressBar now={90} label={`${90}%`} />
        </div>
      </div>
    </div>
  );
};

export default About;
