import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'show' : ''}`}>
      <button className="btn-close" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      {/* Custom logo with first three letters red */}
      <div className="sidebar-logo">
        <span className="logo-part-red">Che</span><span className="logo-part-white">than</span>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link" onClick={toggleSidebar}>
          <FaHome /> Home
        </Link>
        <Link to="/about" className="nav-link" onClick={toggleSidebar}>
          <FaUser /> About
        </Link>
        <Link to="/projects" className="nav-link" onClick={toggleSidebar}>
          <FaBriefcase /> Projects
        </Link>
        <Link to="/contact" className="nav-link" onClick={toggleSidebar}>
          <FaEnvelope /> Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
