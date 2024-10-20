import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Set dark mode as the default mode
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Toggling the sidebar open and close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#000'; // Update body background color
  };

  // Handling scroll to show or hide 'Scroll to Top' button
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
      } else {
        scrollToTopButton.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        {/* Header component */}
        <Header toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        
        {/* Sidebar component */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
