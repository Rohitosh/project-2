import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="navbar">
      <h1>NutriTrack Pro 🥗</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <button onClick={toggleTheme}>
          {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
