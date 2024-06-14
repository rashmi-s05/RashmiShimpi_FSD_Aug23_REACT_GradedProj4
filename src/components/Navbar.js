// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="navbar">
      <h1>Movie Manager</h1>
      <div className="nav-links">
        <Link to="/">Movies in theaters</Link>
        <Link to="/coming-soon">Coming soon</Link>
        <Link to="/top-rated-india">Top-rated Indian movies</Link>
        <Link to="/top-rated-movies">Top-rated movies</Link>
        <Link to="/favourite">Favorites</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
