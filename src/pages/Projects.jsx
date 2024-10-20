// Projects.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Importing Bootstrap components
import '../styles/Projects.css'; // Assuming you have a CSS file for Projects page styling

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. It involves creating a dynamic web application using MERN stack.',
      link: 'https://github.com/yourusername/project-one', // Replace with your project link
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It focuses on implementing user authentication and CRUD operations.',
      link: 'https://github.com/yourusername/project-two', // Replace with your project link
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of Project Three. It showcases a quiz application using React and state management.',
      link: 'https://github.com/yourusername/project-three', // Replace with your project link
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="project-card">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
