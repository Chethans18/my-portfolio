// Home.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
import '../styles/Home.css';
import backgroundImage from '../assets/IMG_20220720_220347_056.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="social-media">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="home-content">
        <h1>I'm Chethan </h1>
        <h2>I code cool websites</h2>
        <p>
        <p>
           I'm a passionate student pursuing a degree in Information
            Science and Engineering. As a MERN stack developer, 
            I enjoy creating dynamic and responsive web applications.
            With a strong foundation in JavaScript, React, Node.js, and MongoDB, I am eager to solve real-world problems through technology. Let's build something amazing together!
        </p>

        </p>
        <div className="buttons">
          <button className="btn">My Portfolio</button>
          <button className="btn">Contact Me</button>
        </div>
      </div>
      <div className="home-image">
      <img src={backgroundImage} alt="Background" />
      </div>
    </div>
  );
};

export default Home;
