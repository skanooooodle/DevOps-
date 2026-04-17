import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // 1. State to track if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // 2. Function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>QuirkyFruity</Link>
      </div>

      {/* 3. The Menu: 'open' class is added dynamically when isOpen is true */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/About" onClick={closeMenu}>About</Link>
        </li>
      </ul>

      {/* 4. The Hamburger Icon: Toggles the state on click */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;