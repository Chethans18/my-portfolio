import React from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ toggleSidebar, toggleDarkMode, isDarkMode }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <h1 className="header-title">CHETHAN</h1>
      <div className="d-flex align-items-center">
        <button className="btn me-2" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
